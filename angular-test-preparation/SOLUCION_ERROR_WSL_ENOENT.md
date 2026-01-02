# Solución: Error "spawn wsl ENOENT" en Cursor

## Problema

Cursor muestra el error:
```
[error] Client error for command A system error occurred (spawn wsl ENOENT)
```

Esto significa que Cursor (corriendo en Windows) no puede encontrar el comando `wsl`.

## Soluciones

### Solución 1: Usar `wsl.exe` (Ya aplicada)

He actualizado el archivo `~/.cursor/mcp.json` para usar `wsl.exe` en lugar de `wsl`:

```json
{
  "mcpServers": {
    "angular-test-prep": {
      "command": "wsl.exe",
      "args": [
        "bash",
        "-c",
        "cd /mnt/d/Personal/waldo.panozo/guia-entrevistas-de-programacion/angular-test-preparation && bash mcp-server/run-mcp.sh"
      ]
    }
  }
}
```

**Pasos:**
1. Guarda el archivo `~/.cursor/mcp.json`
2. Reinicia Cursor completamente
3. Verifica en Settings → Tools & MCP

### Solución 2: Usar ruta completa de Windows

Si `wsl.exe` tampoco funciona, usa la ruta completa:

```json
{
  "mcpServers": {
    "angular-test-prep": {
      "command": "C:\\Windows\\System32\\wsl.exe",
      "args": [
        "bash",
        "-c",
        "cd /mnt/d/Personal/waldo.panozo/guia-entrevistas-de-programacion/angular-test-preparation && bash mcp-server/run-mcp.sh"
      ]
    }
  }
}
```

### Solución 3: Usar script batch de Windows

Si las soluciones anteriores no funcionan, usa el script batch:

```json
{
  "mcpServers": {
    "angular-test-prep": {
      "command": "D:\\Personal\\waldo.panozo\\guia-entrevistas-de-programacion\\angular-test-preparation\\mcp-server\\run-mcp-windows.bat",
      "args": [],
      "cwd": "D:\\Personal\\waldo.panozo\\guia-entrevistas-de-programacion\\angular-test-preparation"
    }
  }
}
```

**Nota:** Ajusta la ruta `D:\\` según tu configuración. En WSL, `/mnt/d/` corresponde a `D:\\` en Windows.

### Solución 4: Verificar que WSL esté instalado

En PowerShell de Windows, ejecuta:

```powershell
wsl --list
```

Si no funciona, instala WSL:
```powershell
wsl --install
```

## Verificar la Configuración

Después de aplicar cualquier solución:

1. **Guarda el archivo** `~/.cursor/mcp.json`
2. **Reinicia Cursor completamente**
3. **Verifica en Settings → Tools & MCP** que aparece "angular-test-prep"
4. **Revisa los logs** en View → Output → MCP

## Logs Esperados

Si funciona correctamente, deberías ver:
```
[info] Starting new stdio process with command: wsl.exe bash -c ...
[info] Angular Test Prep MCP server running on stdio
```

En lugar de:
```
[error] Client error for command A system error occurred (spawn wsl ENOENT)
```

## Próximos Pasos

1. Prueba la **Solución 1** primero (ya aplicada)
2. Si no funciona, prueba la **Solución 2** (ruta completa)
3. Si aún no funciona, prueba la **Solución 3** (script batch)
4. Verifica que WSL esté instalado correctamente
