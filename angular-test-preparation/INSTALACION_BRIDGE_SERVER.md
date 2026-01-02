# 🚀 Instalación y Uso del Bridge Server

## 📋 Resumen

El Bridge Server permite comunicación bidireccional entre tu aplicación Angular y Cursor via MCP. Esto te permite:

- ✅ Enviar instrucciones desde Angular
- ✅ Recibir respuestas en tiempo real
- ✅ Mostrar respuestas directamente en la UI de Angular

## 🔧 Instalación

### 1. Instalar Dependencias del Bridge Server

```bash
cd angular-test-preparation/bridge-server
npm install
```

### 2. Iniciar el Bridge Server

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

### 3. Verificar que Funciona

Abre otra terminal y prueba:

```bash
curl http://localhost:3001/api/health
```

Deberías ver:
```json
{"status":"ok","timestamp":"2025-01-02T..."}
```

## 🎯 Uso en la Aplicación Angular

### 1. Iniciar la Aplicación Angular

En otra terminal:

```bash
cd angular-test-preparation
npm start
```

### 2. Usar el Panel de Cursor

1. Abre la aplicación en el navegador: `http://localhost:4200`
2. Selecciona el examen **"Woven"**
3. Selecciona un escenario
4. Haz clic en el botón **"🤖 Cursor"** para abrir el panel
5. Escribe una instrucción, por ejemplo:
   - "Muéstrame la estrategia detallada para este escenario"
   - "Explícame la estrategia paso a paso"
   - "¿Cuáles son los conceptos clave?"

6. Haz clic en **"📤 Enviar"**
7. Las respuestas aparecerán en tiempo real en el panel

## 🔌 Funcionalidades

### Botones Rápidos

El panel incluye botones rápidos:
- **💡 Estrategia del Escenario**: Pregunta sobre la estrategia del escenario actual
- **📋 Estrategia Completa**: Pregunta sobre la estrategia completa

### Estado de Conexión

El panel muestra el estado de conexión:
- **🟢 Conectado**: WebSocket está conectado
- **🔴 Desconectado**: WebSocket no está conectado (haz clic en "Reconectar")

### Tipos de Respuestas

Las respuestas se muestran con diferentes estilos según su tipo:
- **✅ Connected/Complete**: Verde (éxito)
- **⏳ Processing**: Azul (procesando)
- **📝 Stream Chunk**: Naranja (actualización en tiempo real)
- **💡 Result**: Morado (resultado)
- **❌ Error**: Rojo (error)

## 🐛 Solución de Problemas

### El servidor no inicia

**Error: Puerto ya en uso**

Cambia los puertos en `bridge-server/index.js`:

```javascript
const PORT = 3001;  // Cambiar a otro puerto
const WS_PORT = 3002;  // Cambiar a otro puerto
```

Y actualiza en `cursor-bridge.service.ts`:

```typescript
private readonly API_URL = 'http://localhost:3001/api';  // Cambiar puerto
private readonly WS_URL = 'ws://localhost:3002';  // Cambiar puerto
```

### WebSocket no se conecta

1. Verifica que el Bridge Server esté corriendo
2. Verifica que el puerto 3002 no esté bloqueado por firewall
3. Revisa la consola del navegador para errores
4. Haz clic en "Reconectar" en el panel

### No se reciben respuestas

1. Verifica que el Bridge Server esté corriendo
2. Revisa la consola del Bridge Server para ver si recibe mensajes
3. Verifica que los archivos JSON existan en `src/assets/`
4. Revisa la consola del navegador para errores

### CORS Errors

Si ves errores de CORS, verifica que `cors` esté instalado en el Bridge Server:

```bash
cd bridge-server
npm install cors
```

## 📚 Archivos Importantes

- **`bridge-server/index.js`**: Servidor principal
- **`bridge-server/package.json`**: Dependencias
- **`src/app/services/cursor-bridge.service.ts`**: Servicio Angular
- **`src/app/components/woven-assessment/`**: Componente con integración

## 🔄 Flujo de Comunicación

```
Angular App (Browser)
    ↓ (WebSocket)
Bridge Server (Node.js)
    ↓ (Lee archivos JSON)
Archivos JSON (src/assets/)
    ↓ (Procesa)
Bridge Server
    ↓ (WebSocket)
Angular App (Muestra en UI)
```

## 🎨 Personalización

### Cambiar el Puerto

1. Edita `bridge-server/index.js`
2. Edita `src/app/services/cursor-bridge.service.ts`
3. Reinicia ambos servidores

### Agregar Más Funcionalidades

Puedes extender el Bridge Server para:
- Integración real con Cursor MCP
- Procesamiento más complejo de instrucciones
- Almacenamiento de historial
- Autenticación

## 📝 Notas

- El Bridge Server actualmente simula el procesamiento
- Para integración real con Cursor MCP, necesitarías modificar `processInstruction()` en `bridge-server/index.js`
- Las respuestas se muestran en tiempo real gracias a WebSockets
- El servicio Angular maneja reconexión automática si se pierde la conexión

## 🚀 Próximos Pasos

1. ✅ Bridge Server funcionando
2. ✅ Servicio Angular creado
3. ✅ Integración en componente Woven
4. ⏳ Integración real con Cursor MCP (opcional)
5. ⏳ Agregar más componentes con integración (opcional)
