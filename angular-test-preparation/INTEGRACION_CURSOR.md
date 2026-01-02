# Integración de Aplicación Angular con Cursor

## Opciones de Integración

Hay varias formas de integrar tu aplicación Angular con Cursor para que el agente pueda acceder a los datos:

### Opción 1: Servidor MCP (Model Context Protocol) ⭐ Recomendada

Crear un servidor MCP que exponga los recursos JSON de tu aplicación como recursos que Cursor puede leer.

**Ventajas:**
- ✅ Integración nativa con Cursor
- ✅ El agente puede leer recursos directamente
- ✅ No requiere cambios en la aplicación Angular
- ✅ Herramientas personalizadas disponibles

**Implementación:**
- Servidor Node.js que expone los archivos JSON
- Cursor se conecta al servidor MCP
- El agente puede leer preguntas, exámenes, etc.

### Opción 2: API REST en Angular

Agregar endpoints API en tu aplicación Angular que Cursor pueda consumir.

**Ventajas:**
- ✅ Acceso directo a los datos desde la app
- ✅ Puede incluir lógica de negocio
- ✅ Fácil de implementar

**Desventajas:**
- ❌ Requiere que la app esté corriendo
- ❌ Necesita configuración CORS
- ❌ Más complejo de configurar en Cursor

### Opción 3: Archivos de Configuración

Cursor puede leer archivos directamente del proyecto.

**Ventajas:**
- ✅ Más simple
- ✅ No requiere servidor adicional

**Desventajas:**
- ❌ Solo lectura de archivos estáticos
- ❌ No puede ejecutar lógica
- ❌ Menos flexible

## Implementación: Servidor MCP

He creado un servidor MCP en `mcp-server/` que expone tus recursos JSON.

### Instalación

```bash
cd mcp-server
npm install
```

### Configuración en Cursor

1. Abre la configuración de Cursor (Settings → Features → MCP)
2. Agrega el servidor MCP:

**Ubicación del archivo de configuración:**
- Linux/WSL: `~/.config/Cursor/User/globalStorage/rooveterinaryinc.roo-cline/settings/cline_mcp_settings.json`
- O busca en Settings → MCP Servers

**Configuración:**
```json
{
  "mcpServers": {
    "angular-test-prep": {
      "command": "node",
      "args": [
        "/mnt/d/Personal/waldo.panozo/guia-entrevistas-de-programacion/angular-test-preparation/mcp-server/index.js"
      ],
      "cwd": "/mnt/d/Personal/waldo.panozo/guia-entrevistas-de-programacion/angular-test-preparation"
    }
  }
}
```

### Recursos Disponibles

Una vez configurado, el agente puede acceder a:

- **Archivos JSON:**
  - `exam-config.json` - Lista de exámenes
  - `questions.json` - Preguntas SpeechAce
  - `examen-360.json` - Examen 360
  - `assure-senior.json` - Assure Senior
  - `vanhack.json` - VanHack
  - `woven.json` - Woven

- **Exámenes específicos:**
  - `exam/speechace` - Examen SpeechAce completo
  - `exam/woven` - Examen Woven completo
  - `exam/examen-360` - Examen 360 completo
  - etc.

### Herramientas Disponibles

El agente puede usar estas herramientas:

1. **`list_exams`** - Lista todos los exámenes disponibles
2. **`get_exam {examId}`** - Obtiene un examen específico
3. **`search_questions {query}`** - Busca preguntas por texto

### Ejemplos de Uso

Una vez configurado, puedes pedirle al agente:

- "Muéstrame las preguntas del examen SpeechAce"
- "¿Qué escenarios tiene Woven?"
- "Busca preguntas sobre CI/CD en todos los exámenes"
- "Dame la configuración del examen 360"
- "¿Cuántas preguntas tiene el examen Assure?"
- "Muéstrame la estrategia del escenario de debugging de Woven"

### Verificar que Funciona

1. Reinicia Cursor después de configurar el servidor MCP
2. En el chat, pregunta: "¿Qué recursos MCP están disponibles?"
3. O prueba: "Lista los exámenes disponibles en la aplicación"

### Solución de Problemas

**Error: "Command not found"**
- Verifica que Node.js esté en el PATH
- Usa la ruta completa a `node` en la configuración

**Error: "Cannot read file"**
- Verifica que las rutas en `index.js` sean correctas
- Asegúrate de que los archivos JSON existan en `src/assets/`

**El agente no encuentra recursos:**
- Reinicia Cursor completamente
- Verifica que el servidor MCP esté en la lista de servidores activos
- Revisa la consola de Cursor para errores

## Alternativa: API REST Simple

Si prefieres una API REST, puedo crear endpoints en Angular:

```typescript
// En app.module.ts agregar HttpClient
// Crear servicio con endpoints:
// GET /api/exams - Lista exámenes
// GET /api/exam/:id - Obtiene examen
// GET /api/search?q=query - Busca preguntas
```

¿Prefieres el servidor MCP o la API REST?
