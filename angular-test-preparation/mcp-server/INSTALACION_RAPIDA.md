# Instalación Rápida del Servidor MCP

## Pasos Rápidos

### 1. Instalar Dependencias

```bash
cd angular-test-preparation/mcp-server
npm install
```

### 2. Verificar Instalación

El archivo `.cursor/mcp.json` ya está creado en la raíz del proyecto. Cursor debería detectarlo automáticamente.

### 3. Reiniciar Cursor

Cierra y vuelve a abrir Cursor para que cargue la configuración.

### 4. Verificar en Cursor

1. Ve a **Settings → Tools & MCP**
2. Deberías ver "angular-test-prep" en la lista de servidores MCP instalados
3. Si no aparece, haz clic en "Add Custom MCP" y verifica la configuración

### 5. Probar

En el chat de Cursor, prueba:

- "¿Qué exámenes están disponibles en mi aplicación?"
- "Lista los recursos MCP disponibles"
- "Muéstrame el examen Woven"

## Solución de Problemas

### El servidor no aparece

1. Verifica que `mcp-server/node_modules` exista (ejecuta `npm install`)
2. Verifica que el archivo `.cursor/mcp.json` exista en la raíz del proyecto
3. Reinicia Cursor completamente
4. Verifica que Node.js esté en el PATH: `which node`

### Error al ejecutar

1. Prueba el servidor manualmente:
   ```bash
   cd mcp-server
   node index.js
   ```
   Deberías ver: "Angular Test Prep MCP server running on stdio"

2. Verifica las rutas en `.cursor/mcp.json` - deben ser relativas a la raíz del proyecto

### El agente no puede acceder a recursos

1. Verifica que los archivos JSON existan en `src/assets/`
2. Revisa la consola de Cursor para errores
3. Prueba preguntando explícitamente: "Usa la herramienta list_exams"

## Configuración Manual (si es necesario)

Si Cursor no detecta automáticamente `.cursor/mcp.json`, puedes agregarlo manualmente:

1. Ve a **Settings → Tools & MCP**
2. Haz clic en **"Add Custom MCP"**
3. Completa:
   - **Name:** `angular-test-prep`
   - **Command:** `node`
   - **Args:** `./mcp-server/index.js` (ruta relativa desde la raíz del proyecto)
   - **Working Directory:** `.` (raíz del proyecto)

O usa rutas absolutas:
- **Args:** `/mnt/d/Personal/waldo.panozo/guia-entrevistas-de-programacion/angular-test-preparation/mcp-server/index.js`
- **Working Directory:** `/mnt/d/Personal/waldo.panozo/guia-entrevistas-de-programacion/angular-test-preparation`
