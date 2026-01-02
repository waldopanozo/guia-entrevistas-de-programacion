# 🌉 Bridge Server - Comunicación Angular ↔ Cursor

Servidor intermedio que permite comunicación bidireccional entre la aplicación Angular y Cursor via MCP.

## 🎯 Funcionalidades

- ✅ **API REST** para consultas síncronas
- ✅ **WebSocket** para comunicación en tiempo real
- ✅ **Integración con MCP** para acceder a datos de exámenes
- ✅ **Procesamiento de instrucciones** desde Angular
- ✅ **Streaming de respuestas** en tiempo real

## 📦 Instalación

```bash
cd bridge-server
npm install
```

## 🚀 Uso

### Iniciar el servidor

```bash
npm start
```

O en modo desarrollo (con auto-reload):

```bash
npm run dev
```

El servidor iniciará:
- **API REST**: `http://localhost:3001`
- **WebSocket**: `ws://localhost:3002`

## 📡 Endpoints API REST

### Health Check
```bash
GET /api/health
```

### Procesar Instrucción
```bash
POST /api/process
Content-Type: application/json

{
  "examId": "woven",
  "instruction": "Muéstrame la estrategia del escenario 1",
  "examType": "technical-assessment"
}
```

### Obtener Examen
```bash
GET /api/exam/:examId
```

### Listar Exámenes
```bash
GET /api/exams
```

## 🔌 WebSocket

### Conectar

```javascript
const ws = new WebSocket('ws://localhost:3002');
```

### Mensajes Enviados

#### Procesar Instrucción
```json
{
  "type": "process",
  "examId": "woven",
  "instruction": "Muéstrame la estrategia paso a paso",
  "stream": true
}
```

#### Obtener Examen
```json
{
  "type": "get_exam",
  "examId": "woven"
}
```

#### Listar Exámenes
```json
{
  "type": "list_exams"
}
```

### Mensajes Recibidos

#### Conexión Establecida
```json
{
  "type": "connected",
  "clientId": "client_123",
  "message": "Connected to Cursor Bridge Server"
}
```

#### Procesando
```json
{
  "type": "processing",
  "message": "Processing your instruction...",
  "examId": "woven"
}
```

#### Chunk de Stream
```json
{
  "type": "stream_chunk",
  "chunk": "Analyzing your request...",
  "progress": 25
}
```

#### Resultado
```json
{
  "type": "result",
  "result": {
    "instruction": "...",
    "suggestions": [...]
  },
  "examId": "woven"
}
```

#### Completado
```json
{
  "type": "complete",
  "message": "Processing complete"
}
```

## 🔧 Configuración

El servidor busca los archivos JSON en:
```
angular-test-preparation/src/assets/
```

Asegúrate de que existan:
- `exam-config.json`
- `woven.json`
- `questions.json`
- etc.

## 🐛 Solución de Problemas

### Puerto ya en uso

Si el puerto 3001 o 3002 está ocupado, cambia los valores en `index.js`:

```javascript
const PORT = 3001;  // Cambiar si es necesario
const WS_PORT = 3002;  // Cambiar si es necesario
```

### Archivos no encontrados

Verifica que la ruta `ASSETS_PATH` sea correcta:
```javascript
const ASSETS_PATH = join(PROJECT_ROOT, 'src', 'assets');
```

## 📚 Integración con Angular

Ver `src/app/services/cursor-bridge.service.ts` para el servicio Angular que se comunica con este servidor.
