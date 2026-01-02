# 🚀 Configuración Rápida de MCP en Cursor

## Opción 1: Configuración Automática (Recomendada)

He creado el archivo `.cursor/mcp.json` en la raíz del proyecto. Cursor debería detectarlo automáticamente.

**Ubicación:** `angular-test-preparation/.cursor/mcp.json`

**Contenido:**
```json
{
  "mcpServers": {
    "angular-test-prep": {
      "command": "node",
      "args": [
        "./mcp-server/index.js"
      ],
      "cwd": "."
    }
  }
}
```

## Opción 2: Configuración Manual en Cursor

Si Cursor no detecta automáticamente el archivo:

1. **Abre Settings → Tools & MCP** (como en tu captura de pantalla)
2. **Haz clic en "Add Custom MCP"**
3. **Completa el formulario:**

   - **Name:** `angular-test-prep`
   - **Command:** `node`
   - **Args:** 
     ```
     /mnt/d/Personal/waldo.panozo/guia-entrevistas-de-programacion/angular-test-preparation/mcp-server/index.js
     ```
   - **Working Directory:**
     ```
     /mnt/d/Personal/waldo.panozo/guia-entrevistas-de-programacion/angular-test-preparation
     ```

## Pasos Previos

### 1. Instalar Dependencias del Servidor MCP

```bash
cd angular-test-preparation/mcp-server
npm install
```

### 2. Verificar que Funciona

```bash
cd mcp-server
node index.js
```

Deberías ver: `Angular Test Prep MCP server running on stdio`

Presiona `Ctrl+C` para salir.

### 3. Reiniciar Cursor

Cierra y vuelve a abrir Cursor completamente.

## Verificar que Está Funcionando

1. Ve a **Settings → Tools & MCP**
2. Deberías ver "angular-test-prep" en la lista de "Installed MCP Servers"
3. En el chat, prueba: "¿Qué exámenes están disponibles?"

## Ejemplos de Uso

Una vez configurado, puedes preguntar al agente:

- ✅ "¿Qué exámenes están disponibles en mi aplicación?"
- ✅ "Muéstrame el examen Woven completo"
- ✅ "Busca preguntas sobre CI/CD en todos los exámenes"
- ✅ "¿Cuántas preguntas tiene el examen SpeechAce?"
- ✅ "Dame la estrategia del escenario de debugging de Woven"
- ✅ "Lista todos los recursos MCP disponibles"

## Solución de Problemas

### El servidor no aparece en Cursor

1. Verifica que `.cursor/mcp.json` existe en la raíz del proyecto
2. Verifica que `mcp-server/node_modules` existe (ejecuta `npm install`)
3. Reinicia Cursor completamente
4. Si aún no aparece, usa la Opción 2 (configuración manual)

### Error: "Command not found"

- Verifica que Node.js esté instalado: `node --version`
- Usa la ruta completa a `node` si es necesario
- En WSL, asegúrate de usar `node` de Linux, no de Windows

### El agente no puede acceder a recursos

1. Verifica que los archivos JSON existan en `src/assets/`
2. Revisa la consola de Cursor (View → Output → MCP)
3. Prueba preguntando explícitamente: "Usa la herramienta list_exams para listar los exámenes"

## Estructura de Archivos

```
angular-test-preparation/
├── .cursor/
│   └── mcp.json          ← Configuración MCP (ya creado)
├── mcp-server/
│   ├── index.js          ← Servidor MCP
│   ├── package.json      ← Dependencias
│   └── install.sh         ← Script de instalación
└── src/assets/
    ├── exam-config.json   ← Lista de exámenes
    ├── questions.json     ← SpeechAce
    ├── woven.json         ← Woven
    └── ...
```

¡Listo! Tu aplicación Angular ahora está integrada con Cursor. 🎉
