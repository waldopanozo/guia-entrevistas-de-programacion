# ⚙️ Configuración MCP en Cursor con WSL - Guía Rápida

## 🎯 Problema

Cursor corre en **Windows**, pero tu proyecto está en **WSL**. Cursor no puede detectar automáticamente el archivo `.cursor/mcp.json` en rutas de WSL.

## ✅ Solución: Configuración Manual

### Paso 1: Abrir Configuración de Cursor

1. Abre **Settings** (Ctrl+,)
2. Busca **"Tools & MCP"** o ve directamente a esa sección
3. En **"Installed MCP Servers"**, haz clic en **"Add Custom MCP"**

### Paso 2: Configurar el Servidor

Usa esta configuración exacta (probada y funcionando):

```
Name: angular-test-prep
Command: wsl
Args (una línea por argumento):
  bash
  -c
  cd /mnt/d/Personal/waldo.panozo/guia-entrevistas-de-programacion/angular-test-preparation && bash mcp-server/run-mcp.sh
Working Directory: (dejar vacío)
```

**O si el formulario acepta args en una sola línea (separados por comas):**

```
Args: bash, -c, cd /mnt/d/Personal/waldo.panozo/guia-entrevistas-de-programacion/angular-test-preparation && bash mcp-server/run-mcp.sh
```

**Nota:** Este comando fue probado exitosamente desde PowerShell de Windows y funciona correctamente.

### Paso 3: Verificar

1. **Guarda la configuración**
2. **Reinicia Cursor completamente**
3. Ve a **Settings → Tools & MCP**
4. Deberías ver **"angular-test-prep"** en la lista

### Paso 4: Probar

En el chat de Cursor:
```
¿Qué exámenes están disponibles en mi aplicación?
```

## 🔍 Verificar que Funciona Antes de Configurar

**✅ Este comando ya fue probado y funciona correctamente:**

Prueba el comando manualmente en PowerShell de Windows:

```powershell
wsl bash -c "cd /mnt/d/Personal/waldo.panozo/guia-entrevistas-de-programacion/angular-test-preparation && bash mcp-server/run-mcp.sh"
```

Deberías ver: `Angular Test Prep MCP server running on stdio`

Presiona `Ctrl+C` para salir.

**Si este comando funciona (y ya sabemos que funciona), la configuración en Cursor también funcionará.**

## 🐛 Solución de Problemas

### Error: "wsl: command not found"

- Verifica que WSL esté instalado: `wsl --list` en PowerShell
- Prueba usar `wsl.exe` en lugar de `wsl` en la configuración

### Error: "Cannot find node"

El script `run-mcp.sh` debería manejar esto. Si no funciona:

1. Verifica que fnm esté configurado en WSL:
   ```bash
   wsl bash -c "fnm-use 22 && node --version"
   ```

2. Si no funciona, usa la ruta completa de Node.js:
   ```
   Command: wsl
   Args:
     -c
     /home/wpanozo/.local/share/fnm/node-versions/v22.21.1/installation/bin/node /mnt/d/Personal/waldo.panozo/guia-entrevistas-de-programacion/angular-test-preparation/mcp-server/index.js
   ```

### El servidor aparece pero muestra errores

1. Revisa la consola de Cursor: **View → Output → MCP**
2. Verifica que los archivos JSON existan:
   ```bash
   wsl bash -c "ls /mnt/d/Personal/waldo.panozo/guia-entrevistas-de-programacion/angular-test-preparation/src/assets/*.json"
   ```

### No aparece en la lista después de reiniciar

1. Verifica la sintaxis JSON de la configuración
2. Revisa que no haya errores en la consola de Cursor
3. Intenta eliminar y volver a agregar el servidor
4. Verifica que WSL esté funcionando: `wsl --status`

## 📝 Notas Importantes

- **Cursor corre en Windows**, por eso necesitamos usar `wsl` como comando
- El script `run-mcp.sh` maneja automáticamente la configuración de Node.js
- Las rutas son de **Linux/WSL** (`/mnt/d/...`), no de Windows
- **Reinicia Cursor completamente** después de configurar

## 🎯 Configuración Final Recomendada (Probada ✅)

```
Name: angular-test-prep
Command: wsl
Args:
  bash
  -c
  cd /mnt/d/Personal/waldo.panozo/guia-entrevistas-de-programacion/angular-test-preparation && bash mcp-server/run-mcp.sh
```

**Esta configuración fue probada exitosamente desde PowerShell de Windows y funciona correctamente.**

El servidor responde con: `Angular Test Prep MCP server running on stdio`

## 📚 Documentación Adicional

- [SOLUCION_WSL_CURSOR.md](./SOLUCION_WSL_CURSOR.md) - Solución detallada con múltiples opciones
- [README_MCP.md](./README_MCP.md) - Documentación general de MCP
- [CONFIGURAR_MCP.md](./CONFIGURAR_MCP.md) - Configuración general
