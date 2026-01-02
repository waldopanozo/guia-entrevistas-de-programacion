# ✅ Pasos Finales para Activar MCP en Cursor

## Estado Actual

✅ Archivo `.cursor/mcp.json` creado  
✅ Dependencias instaladas (`node_modules` existe)  
✅ Servidor MCP listo

## Pasos para Activar

### 1. Reiniciar Cursor

**IMPORTANTE:** Cierra completamente Cursor y vuelve a abrirlo. Esto es necesario para que Cursor detecte el archivo `.cursor/mcp.json`.

### 2. Verificar en Cursor

1. Abre **Settings → Tools & MCP** (como en tu captura de pantalla)
2. Busca en la sección **"Installed MCP Servers"**
3. Deberías ver **"angular-test-prep"** en la lista

### 3. Si No Aparece Automáticamente

Si después de reiniciar no aparece, agrégalo manualmente:

1. Haz clic en **"Add Custom MCP"**
2. Completa:
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

### 4. Probar que Funciona

En el chat de Cursor, prueba estos comandos:

```
¿Qué exámenes están disponibles en mi aplicación?
```

```
Lista los recursos MCP disponibles
```

```
Muéstrame el examen Woven
```

```
Busca preguntas sobre CI/CD
```

## Verificación Rápida

Ejecuta esto para verificar que todo está listo:

```bash
cd angular-test-preparation
# Verificar archivo de configuración
cat .cursor/mcp.json

# Verificar que el servidor existe
ls -la mcp-server/index.js

# Verificar dependencias
ls -la mcp-server/node_modules
```

## Solución de Problemas

### El servidor no aparece en Cursor

1. **Verifica la ruta del archivo:**
   ```bash
   cat .cursor/mcp.json
   ```
   Debe mostrar la configuración con rutas relativas.

2. **Verifica que Node.js funcione:**
   ```bash
   node --version
   ```
   Si no funciona, usa la ruta completa en la configuración manual.

3. **Reinicia Cursor completamente** (no solo recargar ventana)

### Error al ejecutar el servidor

Prueba manualmente:
```bash
cd mcp-server
node index.js
```

Deberías ver: `Angular Test Prep MCP server running on stdio`

Presiona `Ctrl+C` para salir.

### El agente no puede acceder a recursos

1. Verifica que los archivos JSON existan:
   ```bash
   ls src/assets/*.json
   ```

2. Revisa la consola de Cursor:
   - View → Output → MCP
   - Busca errores relacionados con "angular-test-prep"

## ¡Listo!

Una vez que veas "angular-test-prep" en la lista de servidores MCP en Cursor, el agente podrá:

- ✅ Leer todos tus archivos JSON de exámenes
- ✅ Buscar preguntas en todos los exámenes
- ✅ Acceder a configuraciones de exámenes
- ✅ Responder preguntas sobre tu aplicación

¡Prueba preguntándole algo sobre tus exámenes! 🎉
