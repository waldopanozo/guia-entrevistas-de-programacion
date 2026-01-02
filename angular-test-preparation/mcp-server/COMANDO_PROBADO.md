# ✅ Comando MCP Probado y Funcionando

## Comando que Funciona

Este comando fue probado exitosamente desde PowerShell de Windows:

```powershell
wsl bash -c "cd /mnt/d/Personal/waldo.panozo/guia-entrevistas-de-programacion/angular-test-preparation && bash mcp-server/run-mcp.sh"
```

## Respuesta Esperada

```
Angular Test Prep MCP server running on stdio
```

## Configuración en Cursor

Usa esta configuración exacta en **Settings → Tools & MCP → Add Custom MCP**:

```
Name: angular-test-prep
Command: wsl
Args (una línea por argumento):
  bash
  -c
  cd /mnt/d/Personal/waldo.panozo/guia-entrevistas-de-programacion/angular-test-preparation && bash mcp-server/run-mcp.sh
Working Directory: (dejar vacío)
```

## Pasos Siguientes

1. ✅ Comando probado manualmente - **FUNCIONA**
2. ⏳ Configurar en Cursor usando la configuración de arriba
3. ⏳ Reiniciar Cursor completamente
4. ⏳ Verificar en Settings → Tools & MCP que aparece "angular-test-prep"
5. ⏳ Probar en el chat: "¿Qué exámenes están disponibles en mi aplicación?"

## Notas

- El servidor MCP funciona correctamente cuando se ejecuta manualmente
- La configuración en Cursor debe usar exactamente el mismo comando
- Asegúrate de reiniciar Cursor después de configurar
- Si hay problemas, revisa la consola de Cursor: View → Output → MCP
