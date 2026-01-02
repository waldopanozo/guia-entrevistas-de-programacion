# Servidor MCP para Angular Test Preparation

Este servidor MCP permite que Cursor acceda a los recursos de tu aplicación Angular.

## Instalación

```bash
cd mcp-server
npm install
```

## Configuración en Cursor

1. Abre la configuración de Cursor
2. Busca "MCP Servers" o "Model Context Protocol"
3. Agrega el siguiente servidor:

```json
{
  "mcpServers": {
    "angular-test-prep": {
      "command": "node",
      "args": ["/ruta/completa/a/mcp-server/index.js"],
      "cwd": "/ruta/completa/a/angular-test-preparation"
    }
  }
}
```

**Ejemplo para tu caso:**
```json
{
  "mcpServers": {
    "angular-test-prep": {
      "command": "node",
      "args": ["/mnt/d/Personal/waldo.panozo/guia-entrevistas-de-programacion/angular-test-preparation/mcp-server/index.js"],
      "cwd": "/mnt/d/Personal/waldo.panozo/guia-entrevistas-de-programacion/angular-test-preparation"
    }
  }
}
```

## Recursos Disponibles

El servidor expone los siguientes recursos:

- `angular-test-prep://exam-config.json` - Lista de exámenes
- `angular-test-prep://questions.json` - Preguntas de SpeechAce
- `angular-test-prep://examen-360.json` - Examen 360
- `angular-test-prep://assure-senior.json` - Assure Senior
- `angular-test-prep://vanhack.json` - VanHack
- `angular-test-prep://woven.json` - Woven
- `angular-test-prep://exam/{examId}` - Examen específico

## Herramientas Disponibles

- `list_exams` - Lista todos los exámenes disponibles
- `get_exam {examId}` - Obtiene un examen específico
- `search_questions {query}` - Busca preguntas por texto

## Uso en Cursor

Una vez configurado, puedes pedirle al agente:

- "Muéstrame las preguntas del examen SpeechAce"
- "¿Qué escenarios tiene Woven?"
- "Busca preguntas sobre CI/CD"
- "Dame la configuración del examen 360"

El agente podrá acceder a estos recursos directamente.
