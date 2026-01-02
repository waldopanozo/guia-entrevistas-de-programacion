# Configuración del Servidor MCP en Cursor

## Pasos para Configurar

### 1. Instalar el Servidor MCP

```bash
cd mcp-server
npm install
```

### 2. Ubicar el Archivo de Configuración de Cursor

El archivo de configuración de MCP en Cursor puede estar en diferentes ubicaciones según tu sistema:

**Linux/WSL:**
```
~/.config/Cursor/User/globalStorage/rooveterinaryinc.roo-cline/settings/cline_mcp_settings.json
```

**macOS:**
```
~/Library/Application Support/Cursor/User/globalStorage/rooveterinaryinc.roo-cline/settings/cline_mcp_settings.json
```

**Windows:**
```
%APPDATA%\Cursor\User\globalStorage\rooveterinaryinc.roo-cline\settings\cline_mcp_settings.json
```

**Alternativa:** Busca en Cursor: `Settings → Features → MCP` o `Settings → Extensions → MCP`

### 3. Agregar la Configuración

Abre el archivo de configuración y agrega:

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

**Nota:** Ajusta las rutas según tu sistema. En WSL, usa rutas de Linux (`/mnt/d/...`).

### 4. Verificar Node.js

Asegúrate de que `node` esté en tu PATH. Si no, usa la ruta completa:

```json
{
  "mcpServers": {
    "angular-test-prep": {
      "command": "/usr/bin/node",
      "args": [
        "/mnt/d/Personal/waldo.panozo/guia-entrevistas-de-programacion/angular-test-preparation/mcp-server/index.js"
      ]
    }
  }
}
```

### 5. Reiniciar Cursor

Cierra y vuelve a abrir Cursor completamente para que cargue el servidor MCP.

### 6. Verificar que Funciona

En el chat de Cursor, prueba:

- "¿Qué recursos MCP están disponibles?"
- "Lista los exámenes disponibles"
- "Muéstrame el examen Woven"

## Solución de Problemas

### Error: "Command not found"
- Verifica que Node.js esté instalado: `node --version`
- Usa la ruta completa a `node` en la configuración
- En WSL, asegúrate de usar `node` de Linux, no de Windows

### Error: "Cannot read file"
- Verifica que las rutas en `index.js` sean correctas
- Asegúrate de que los archivos JSON existan en `src/assets/`
- Verifica permisos de lectura en los archivos

### El servidor no aparece
- Reinicia Cursor completamente
- Verifica la sintaxis JSON del archivo de configuración
- Revisa la consola de Cursor para errores (View → Output → MCP)

### Probar el servidor manualmente

```bash
cd mcp-server
node index.js
```

Si ves "Angular Test Prep MCP server running on stdio", el servidor funciona correctamente.

## Ejemplos de Uso

Una vez configurado, puedes preguntar al agente:

- "¿Qué exámenes están disponibles en mi aplicación?"
- "Muéstrame las preguntas del examen SpeechAce"
- "¿Cuáles son los escenarios de Woven?"
- "Busca preguntas sobre CI/CD"
- "Dame la estrategia del escenario de debugging"
- "¿Cuántas preguntas tiene el examen 360?"

El agente podrá acceder a todos los recursos JSON de tu aplicación.
