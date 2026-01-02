# 🔧 Configuración Completa de MCP - Opciones

Tienes **2 opciones** para configurar el servidor MCP:

## ✅ Opción 1: Usando Script Wrapper (Recomendada)

Este script asegura que Node.js esté disponible incluso si fnm no está en el PATH.

**Actualiza `.cursor/mcp.json` con:**

```json
{
  "mcpServers": {
    "angular-test-prep": {
      "command": "bash",
      "args": [
        "./mcp-server/run-mcp.sh"
      ],
      "cwd": "."
    }
  }
}
```

**O usa rutas absolutas:**

```json
{
  "mcpServers": {
    "angular-test-prep": {
      "command": "bash",
      "args": [
        "/mnt/d/Personal/waldo.panozo/guia-entrevistas-de-programacion/angular-test-preparation/mcp-server/run-mcp.sh"
      ],
      "cwd": "/mnt/d/Personal/waldo.panozo/guia-entrevistas-de-programacion/angular-test-preparation"
    }
  }
}
```

## ✅ Opción 2: Usando Ruta Completa de Node.js

Si prefieres usar Node.js directamente:

```json
{
  "mcpServers": {
    "angular-test-prep": {
      "command": "/home/wpanozo/.local/share/fnm/node-versions/v22.21.1/installation/bin/node",
      "args": [
        "./mcp-server/index.js"
      ],
      "cwd": "."
    }
  }
}
```

**O con rutas absolutas:**

```json
{
  "mcpServers": {
    "angular-test-prep": {
      "command": "/home/wpanozo/.local/share/fnm/node-versions/v22.21.1/installation/bin/node",
      "args": [
        "/mnt/d/Personal/waldo.panozo/guia-entrevistas-de-programacion/angular-test-preparation/mcp-server/index.js"
      ],
      "cwd": "/mnt/d/Personal/waldo.panozo/guia-entrevistas-de-programacion/angular-test-preparation"
    }
  }
}
```

## 🚀 Pasos para Activar

### 1. Elige una opción y actualiza `.cursor/mcp.json`

Puedes copiar el contenido de `.cursor/mcp-alternative.json` si prefieres usar el script wrapper.

### 2. Reinicia Cursor

Cierra completamente Cursor y vuelve a abrirlo.

### 3. Verifica en Settings

Ve a **Settings → Tools & MCP** y verifica que "angular-test-prep" aparezca en la lista.

### 4. Prueba en el Chat

```
¿Qué exámenes están disponibles en mi aplicación?
```

## 🔍 Verificar que Funciona

### Probar el script wrapper manualmente:

```bash
cd angular-test-preparation/mcp-server
./run-mcp.sh
```

Deberías ver: `Angular Test Prep MCP server running on stdio`

Presiona `Ctrl+C` para salir.

### Probar Node.js directamente:

```bash
/home/wpanozo/.local/share/fnm/node-versions/v22.21.1/installation/bin/node --version
```

Debería mostrar: `v22.21.1`

## 📝 Nota

El archivo `.cursor/mcp-alternative.json` contiene la configuración con el script wrapper. Puedes copiarlo a `.cursor/mcp.json` si prefieres esa opción.
