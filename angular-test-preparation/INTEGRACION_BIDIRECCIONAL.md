# 🔄 Integración Bidireccional: Angular ↔ Cursor

## 🤔 Tu Pregunta

> "¿Podría usar Cursor desde la aplicación Angular para, por ejemplo, darle las instrucciones de un examen Woven y que vaya mostrando la respuesta en mi aplicación?"

## 📊 Situación Actual

### Lo que Tenemos Ahora (Unidireccional)

```
Cursor (Chat) → MCP Server → Archivos JSON
     ↓
  Agente lee datos
     ↓
  Responde en el chat
```

**Flujo:**
1. Tú escribes en el chat de Cursor
2. El agente usa MCP para leer datos
3. El agente responde en el chat

### Lo que Quieres (Bidireccional)

```
Aplicación Angular → Cursor → Procesa → Actualiza Angular
```

**Flujo deseado:**
1. Desde la app Angular, envías instrucciones
2. Cursor procesa y genera respuestas
3. La app Angular muestra las respuestas en tiempo real

## ⚠️ Limitación Actual

**Cursor NO tiene una API pública** que permita que aplicaciones web se comuniquen directamente con él. Cursor es una aplicación de escritorio, no un servicio web.

## ✅ Soluciones Posibles

### Opción 1: Servidor Intermedio (Recomendada)

Crear un servidor Node.js que actúe como puente entre Angular y Cursor:

```
Angular App → Servidor Intermedio → Cursor (via MCP) → Servidor → Angular
```

**Arquitectura:**
```
┌─────────────┐      HTTP/WebSocket      ┌──────────────┐      MCP      ┌─────────┐
│   Angular  │ ←──────────────────────────→ │   Servidor   │ ←──────────→ │ Cursor  │
│   (Browser) │                            │  Intermedio  │              │  (MCP)  │
└─────────────┘                            └──────────────┘              └─────────┘
```

**Implementación:**

1. **Servidor Intermedio** (Node.js + Express + WebSocket):
   - Recibe peticiones de Angular
   - Se comunica con Cursor via MCP
   - Envía respuestas a Angular en tiempo real

2. **Servicio en Angular**:
   - Se comunica con el servidor intermedio
   - Recibe actualizaciones en tiempo real
   - Actualiza la UI

**Ventajas:**
- ✅ Funciona en tiempo real
- ✅ Angular puede enviar instrucciones
- ✅ Angular recibe respuestas y actualiza UI
- ✅ Separación de responsabilidades

**Desventajas:**
- ❌ Requiere servidor adicional
- ❌ Más complejo de implementar
- ❌ Necesita WebSockets para tiempo real

### Opción 2: API REST + Polling

Servidor que expone API REST, Angular consulta periódicamente:

```
Angular App → API REST (polling cada X segundos) → Cursor (via MCP) → API → Angular
```

**Implementación:**

1. **Servidor API** (Node.js + Express):
   - Endpoints REST para consultas
   - Se comunica con Cursor via MCP
   - Almacena respuestas temporalmente

2. **Servicio en Angular**:
   - Hace polling cada X segundos
   - Obtiene respuestas de la API
   - Actualiza la UI

**Ventajas:**
- ✅ Más simple que WebSockets
- ✅ No requiere conexión persistente
- ✅ Funciona con HTTP estándar

**Desventajas:**
- ❌ No es tiempo real (hay delay)
- ❌ Consume más recursos (polling constante)
- ❌ Menos eficiente

### Opción 3: Archivo Compartido (Simple pero Limitado)

Angular escribe instrucciones en un archivo, Cursor las lee y escribe respuestas:

```
Angular → Escribe archivo → Cursor lee → Escribe respuesta → Angular lee
```

**Implementación:**

1. **Servicio en Angular**:
   - Escribe instrucciones en `instructions.json`
   - Lee respuestas de `responses.json`

2. **Script en Cursor**:
   - Monitorea `instructions.json`
   - Procesa con MCP
   - Escribe en `responses.json`

**Ventajas:**
- ✅ Muy simple
- ✅ No requiere servidor
- ✅ Fácil de implementar

**Desventajas:**
- ❌ No es tiempo real
- ❌ Puede tener problemas de concurrencia
- ❌ Limitado para casos simples

## 🎯 Recomendación: Opción 1 (Servidor Intermedio)

Para tu caso de uso (mostrar respuestas de Woven en tiempo real), la **Opción 1** es la mejor.

### Implementación Propuesta

#### 1. Servidor Intermedio (`bridge-server/`)

```javascript
// bridge-server/index.js
const express = require('express');
const { WebSocketServer } = require('ws');
const { spawn } = require('child_process');

const app = express();
const wss = new WebSocketServer({ port: 8080 });

// Endpoint para recibir instrucciones de Angular
app.post('/api/process', async (req, res) => {
  const { examId, instruction } = req.body;
  
  // Procesar con Cursor via MCP
  const result = await processWithCursor(examId, instruction);
  
  res.json({ result });
});

// WebSocket para actualizaciones en tiempo real
wss.on('connection', (ws) => {
  ws.on('message', async (message) => {
    const { examId, instruction } = JSON.parse(message);
    
    // Procesar y enviar actualizaciones
    await processAndStream(ws, examId, instruction);
  });
});

async function processWithCursor(examId, instruction) {
  // Llamar a Cursor via MCP
  // Retornar resultado
}
```

#### 2. Servicio en Angular

```typescript
// src/app/services/cursor-bridge.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, WebSocketSubject } from '@angular/common/http';
import { webSocket } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class CursorBridgeService {
  private ws$: WebSocketSubject<any>;

  constructor(private http: HttpClient) {
    this.ws$ = webSocket('ws://localhost:8080');
  }

  processExam(examId: string, instruction: string) {
    // Enviar instrucción
    this.ws$.next({ examId, instruction });
    
    // Recibir respuestas en tiempo real
    return this.ws$.asObservable();
  }
}
```

#### 3. Componente Angular

```typescript
// src/app/components/woven-assessment/woven-assessment.component.ts
export class WovenAssessmentComponent {
  responses: string[] = [];

  constructor(private cursorBridge: CursorBridgeService) {}

  async processScenario(scenarioId: number) {
    const instruction = `Procesa el escenario ${scenarioId} de Woven y muéstrame la estrategia paso a paso`;
    
    this.cursorBridge.processExam('woven', instruction).subscribe({
      next: (response) => {
        // Actualizar UI en tiempo real
        this.responses.push(response.text);
      },
      error: (err) => console.error(err)
    });
  }
}
```

## 🚀 ¿Quieres que Implemente Esto?

Puedo crear:

1. ✅ **Servidor intermedio** (`bridge-server/`)
   - WebSocket para tiempo real
   - API REST como alternativa
   - Integración con MCP

2. ✅ **Servicio Angular** (`cursor-bridge.service.ts`)
   - Comunicación con el servidor
   - Manejo de WebSockets
   - Actualización de UI

3. ✅ **Componente de ejemplo**
   - Integración en `woven-assessment`
   - Mostrar respuestas en tiempo real
   - UI actualizada dinámicamente

## 📝 Alternativa Más Simple (Para Empezar)

Si quieres algo más simple para probar, puedo crear:

1. **API REST básica** que Angular puede consultar
2. **Servicio Angular** que hace polling
3. **Integración en componente Woven**

Esto te permitirá:
- Enviar instrucciones desde Angular
- Obtener respuestas (con pequeño delay)
- Mostrar en la UI

¿Prefieres la solución completa (WebSocket) o la simple (API + Polling)?
