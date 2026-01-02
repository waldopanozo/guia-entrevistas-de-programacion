#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListResourcesRequestSchema,
  ReadResourceRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ruta base de los assets
const ASSETS_PATH = path.join(__dirname, '../src/assets');

class AngularTestPrepMCPServer {
  constructor() {
    this.server = new Server(
      {
        name: 'angular-test-prep-mcp',
        version: '1.0.0',
      },
      {
        capabilities: {
          resources: {},
          tools: {},
        },
      }
    );

    this.setupHandlers();
    this.setupErrorHandling();
  }

  setupHandlers() {
    // Listar recursos disponibles
    this.server.setRequestHandler(ListResourcesRequestSchema, async () => {
      const resources = [];

      // Listar todos los archivos JSON en assets
      const files = [
        'exam-config.json',
        'questions.json',
        'examen-360.json',
        'assure-senior.json',
        'vanhack.json',
        'woven.json',
      ];

      files.forEach((file) => {
        const filePath = path.join(ASSETS_PATH, file);
        if (fs.existsSync(filePath)) {
          resources.push({
            uri: `angular-test-prep://${file}`,
            name: file.replace('.json', ''),
            description: `Configuración de ${file.replace('.json', '')}`,
            mimeType: 'application/json',
          });
        }
      });

      // Agregar recursos de exámenes individuales
      try {
        const examConfig = JSON.parse(
          fs.readFileSync(path.join(ASSETS_PATH, 'exam-config.json'), 'utf-8')
        );
        
        examConfig.exams?.forEach((exam) => {
          resources.push({
            uri: `angular-test-prep://exam/${exam.id}`,
            name: exam.name,
            description: exam.description,
            mimeType: 'application/json',
          });
        });
      } catch (error) {
        console.error('Error reading exam-config.json:', error);
      }

      return { resources };
    });

    // Leer un recurso
    this.server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
      const { uri } = request.params;

      if (uri.startsWith('angular-test-prep://')) {
        const resourcePath = uri.replace('angular-test-prep://', '');

        if (resourcePath.startsWith('exam/')) {
          // Cargar examen específico
          const examId = resourcePath.replace('exam/', '');
          const examConfig = JSON.parse(
            fs.readFileSync(path.join(ASSETS_PATH, 'exam-config.json'), 'utf-8')
          );
          const exam = examConfig.exams?.find((e) => e.id === examId);
          
          if (exam) {
            const examData = JSON.parse(
              fs.readFileSync(path.join(ASSETS_PATH, exam.configFile), 'utf-8')
            );
            return {
              contents: [
                {
                  uri,
                  mimeType: 'application/json',
                  text: JSON.stringify(examData, null, 2),
                },
              ],
            };
          }
        } else {
          // Cargar archivo JSON directo
          const filePath = path.join(ASSETS_PATH, resourcePath);
          if (fs.existsSync(filePath)) {
            const content = fs.readFileSync(filePath, 'utf-8');
            return {
              contents: [
                {
                  uri,
                  mimeType: 'application/json',
                  text: content,
                },
              ],
            };
          }
        }
      }

      throw new Error(`Resource not found: ${uri}`);
    });

    // Listar herramientas disponibles
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      return {
        tools: [
          {
            name: 'list_exams',
            description: 'Lista todos los exámenes disponibles en la aplicación',
          },
          {
            name: 'get_exam',
            description: 'Obtiene la configuración completa de un examen específico',
            inputSchema: {
              type: 'object',
              properties: {
                examId: {
                  type: 'string',
                  description: 'ID del examen (ej: speechace, woven, examen-360)',
                },
              },
              required: ['examId'],
            },
          },
          {
            name: 'search_questions',
            description: 'Busca preguntas en todos los exámenes por texto',
            inputSchema: {
              type: 'object',
              properties: {
                query: {
                  type: 'string',
                  description: 'Texto a buscar en las preguntas',
                },
              },
              required: ['query'],
            },
          },
        ],
      };
    });

    // Herramientas disponibles
    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      switch (name) {
        case 'list_exams':
          return {
            content: [
              {
                type: 'text',
                text: await this.listExams(),
              },
            ],
          };

        case 'get_exam':
          if (!args?.examId) {
            throw new Error('examId is required');
          }
          return {
            content: [
              {
                type: 'text',
                text: await this.getExam(args.examId),
              },
            ],
          };

        case 'search_questions':
          if (!args?.query) {
            throw new Error('query is required');
          }
          return {
            content: [
              {
                type: 'text',
                text: await this.searchQuestions(args.query),
              },
            ],
          };

        default:
          throw new Error(`Unknown tool: ${name}`);
      }
    });
  }

  async listExams() {
    try {
      const examConfig = JSON.parse(
        fs.readFileSync(path.join(ASSETS_PATH, 'exam-config.json'), 'utf-8')
      );
      return JSON.stringify(examConfig.exams, null, 2);
    } catch (error) {
      return `Error: ${error.message}`;
    }
  }

  async getExam(examId) {
    try {
      const examConfig = JSON.parse(
        fs.readFileSync(path.join(ASSETS_PATH, 'exam-config.json'), 'utf-8')
      );
      const exam = examConfig.exams?.find((e) => e.id === examId);
      
      if (!exam) {
        return `Exam ${examId} not found`;
      }

      const examData = JSON.parse(
        fs.readFileSync(path.join(ASSETS_PATH, exam.configFile), 'utf-8')
      );
      return JSON.stringify(examData, null, 2);
    } catch (error) {
      return `Error: ${error.message}`;
    }
  }

  async searchQuestions(query) {
    const results = [];
    const files = ['questions.json', 'examen-360.json', 'assure-senior.json', 'vanhack.json'];
    
    for (const file of files) {
      const filePath = path.join(ASSETS_PATH, file);
      if (fs.existsSync(filePath)) {
        try {
          const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
          const questions = data.questions || [];
          
          questions.forEach((q) => {
            const searchText = JSON.stringify(q).toLowerCase();
            if (searchText.includes(query.toLowerCase())) {
              results.push({
                exam: file,
                question: q.title || q.question,
                id: q.id,
              });
            }
          });
        } catch (error) {
          console.error(`Error reading ${file}:`, error);
        }
      }
    }
    
    return JSON.stringify(results, null, 2);
  }

  setupErrorHandling() {
    this.server.onerror = (error) => {
      console.error('[MCP Error]', error);
    };

    process.on('SIGINT', async () => {
      await this.server.close();
      process.exit(0);
    });
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('Angular Test Prep MCP server running on stdio');
  }
}

const server = new AngularTestPrepMCPServer();
server.run().catch(console.error);
