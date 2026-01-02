# Solución: MCP no aparece en Cursor con WSL

## Problema

Cuando usas WSL para desarrollo, Cursor (que corre en Windows) puede tener problemas para:
1. Detectar el archivo `.cursor/mcp.json` en rutas de WSL
2. Ejecutar el servidor MCP que está en WSL
3. Acceder a los archivos del proyecto

## Soluciones

### Opción 1: Configuración Manual en Cursor (Recomendada para WSL)

Como Cursor corre en Windows, necesitamos configurar el servidor MCP manualmente usando rutas de Windows o ejecutando comandos WSL.

#### Paso 1: Abrir Settings en Cursor

1. Abre **Settings → Tools & MCP**
2. Haz clic en **"Add Custom MCP"**

#### Paso 2: Configuración con WSL

**Opción A: Usar `wsl` como comando (✅ Probada y Funcionando)**

```
Name: angular-test-prep
Command: wsl
Args: 
  bash
  -c
  cd /mnt/d/Personal/waldo.panozo/guia-entrevistas-de-programacion/angular-test-preparation && bash mcp-server/run-mcp.sh
Working Directory: (dejar vacío)
```

**Este comando fue probado exitosamente desde PowerShell de Windows:**
```powershell
wsl bash -c "cd /mnt/d/Personal/waldo.panozo/guia-entrevistas-de-programacion/angular-test-preparation && bash mcp-server/run-mcp.sh"
```

Respuesta esperada: `Angular Test Prep MCP server running on stdio`

**Opción B: Usar ruta completa de Node.js en WSL**

Primero, encuentra la ruta de Node.js:
```bash
which node
# Ejemplo: /home/wpanozo/.local/share/fnm/node-versions/v22.21.1/installation/bin/node
```

Luego en Cursor:
```
Name: angular-test-prep
Command: wsl
Args:
  -c
  /home/wpanozo/.local/share/fnm/node-versions/v22.21.1/installation/bin/node /mnt/d/Personal/waldo.panozo/guia-entrevistas-de-programacion/angular-test-preparation/mcp-server/index.js
Working Directory: (dejar vacío)
```

**Opción C: Usar script wrapper con WSL**

```
Name: angular-test-prep
Command: wsl
Args:
  -c
  cd /mnt/d/Personal/waldo.panozo/guia-entrevistas-de-programacion/angular-test-preparation && bash mcp-server/run-mcp.sh
Working Directory: (dejar vacío)
```

### Opción 2: Crear Script Batch para Windows

Si prefieres usar un script .bat que Cursor pueda ejecutar directamente:

#### Crear `mcp-server/run-mcp-windows.bat`

```batch
@echo off
wsl bash -c "cd /mnt/d/Personal/waldo.panozo/guia-entrevistas-de-programacion/angular-test-preparation && bash mcp-server/run-mcp.sh"
```

Luego en Cursor:
```
Name: angular-test-prep
Command: mcp-server/run-mcp-windows.bat
Args: (dejar vacío)
Working Directory: D:\Personal\waldo.panozo\guia-entrevistas-de-programacion\angular-test-preparation
```

**Nota:** Ajusta la ruta de Windows según tu configuración. En WSL, `/mnt/d/` corresponde a `D:\` en Windows.

### Opción 3: Usar Rutas de Windows (Si el proyecto está accesible)

Si tu proyecto está en una ruta accesible desde Windows (como `D:\Personal\...`):

1. **Instalar Node.js en Windows** (o usar el de WSL vía wsl)
2. **Configurar en Cursor:**

```
Name: angular-test-prep
Command: wsl
Args:
  -c
  cd /mnt/d/Personal/waldo.panozo/guia-entrevistas-de-programacion/angular-test-preparation && node mcp-server/index.js
Working Directory: (dejar vacío)
```

## Verificar que Funciona

### 1. Probar el comando manualmente

**✅ Este comando ya fue probado y funciona correctamente:**

En PowerShell o CMD de Windows:
```powershell
wsl bash -c "cd /mnt/d/Personal/waldo.panozo/guia-entrevistas-de-programacion/angular-test-preparation && bash mcp-server/run-mcp.sh"
```

Deberías ver: `Angular Test Prep MCP server running on stdio`

Presiona `Ctrl+C` para salir.

**Si este comando funciona (y ya sabemos que funciona), la configuración en Cursor también funcionará.**

### 2. Verificar en Cursor

1. Reinicia Cursor completamente
2. Ve a **Settings → Tools & MCP**
3. Deberías ver "angular-test-prep" en la lista
4. Si hay errores, revisa la consola de Cursor (View → Output → MCP)

### 3. Probar en el Chat

```
¿Qué exámenes están disponibles en mi aplicación?
```

## Solución de Problemas Específicos de WSL

### Error: "wsl: command not found"

- Asegúrate de tener WSL instalado en Windows
- Verifica que `wsl` esté en el PATH de Windows
- Prueba usar `wsl.exe` en lugar de `wsl`

### Error: "Cannot find node"

- El script `run-mcp.sh` debería manejar esto automáticamente
- Verifica que fnm esté configurado en WSL
- Prueba ejecutar manualmente: `wsl bash -c "which node"`

### Error: "Permission denied"

- Verifica permisos del script: `chmod +x mcp-server/run-mcp.sh`
- Ejecuta desde WSL: `ls -la mcp-server/run-mcp.sh`

### El servidor aparece pero no funciona

1. Revisa la consola de Cursor (View → Output → MCP)
2. Verifica que los archivos JSON existan:
   ```bash
   wsl bash -c "ls /mnt/d/Personal/waldo.panozo/guia-entrevistas-de-programacion/angular-test-preparation/src/assets/*.json"
   ```

## Configuración Recomendada para WSL (✅ Probada)

**La más simple y confiable (probada exitosamente):**

```
Name: angular-test-prep
Command: wsl
Args:
  bash
  -c
  cd /mnt/d/Personal/waldo.panozo/guia-entrevistas-de-programacion/angular-test-preparation && bash mcp-server/run-mcp.sh
```

Esta configuración:
- ✅ **Probada y funcionando** desde PowerShell de Windows
- ✅ Usa WSL para ejecutar el servidor
- ✅ Usa el script wrapper que maneja Node.js automáticamente
- ✅ Funciona independientemente de la configuración de PATH
- ✅ Es fácil de mantener
- ✅ Respuesta confirmada: `Angular Test Prep MCP server running on stdio`

## Alternativa: Usar Cursor desde WSL

Si tienes Cursor instalado en WSL (no recomendado pero posible):

1. El archivo `.cursor/mcp.json` debería funcionar automáticamente
2. Usa rutas de Linux directamente
3. No necesitas el wrapper `wsl`

Pero la mayoría de usuarios usan Cursor en Windows, así que la Opción 1 es la recomendada.
