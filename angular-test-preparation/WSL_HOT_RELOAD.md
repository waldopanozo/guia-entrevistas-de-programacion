# Solución para Hot Reload en WSL

## Problema

Angular no detecta automáticamente los cambios de archivos en WSL porque el sistema de archivos no notifica cambios correctamente.

## ✅ Solución Implementada

Se ha configurado **polling** en Angular para que verifique cambios cada segundo (1000ms).

### Configuración Aplicada:

1. **angular.json**: Se agregó `"poll": 1000` en la configuración de `serve`
2. **package.json**: El script `npm start` ahora usa `--poll=1000`

## 🔄 Cómo Usar

### Opción 1: Reiniciar el servidor (Recomendado)

Si el servidor ya está corriendo:

1. Detén el servidor (Ctrl+C)
2. Reinicia con:
```bash
npm start
```

### Opción 2: Forzar recarga manual

Si el servidor está corriendo y no detecta cambios:

1. Guarda el archivo (Ctrl+S)
2. Espera 1-2 segundos
3. Recarga la página en el navegador (F5 o Ctrl+R)

### Opción 3: Usar el script con watch

```bash
npm run start:watch
```

## 🔍 Verificar que Funciona

1. Abre un archivo `.ts` o `.html` en el proyecto
2. Haz un cambio pequeño (agrega un espacio o comentario)
3. Guarda el archivo
4. Deberías ver en la terminal:
   ```
   ✔ Compiled successfully.
   ```
5. El navegador debería recargarse automáticamente

## ⚙️ Configuración Avanzada

Si quieres cambiar la frecuencia de polling, edita `angular.json`:

```json
"poll": 2000  // Verifica cada 2 segundos (más lento, menos CPU)
"poll": 500   // Verifica cada 0.5 segundos (más rápido, más CPU)
```

## 🐛 Si Aún No Funciona

1. **Verifica que el servidor esté corriendo:**
   ```bash
   ps aux | grep "ng serve"
   ```

2. **Mata el proceso si está colgado:**
   ```bash
   pkill -f "ng serve"
   ```

3. **Limpia el caché y reinicia:**
   ```bash
   rm -rf .angular
   npm start
   ```

4. **Verifica que estás en el directorio correcto:**
   ```bash
   pwd
   # Debe mostrar: .../angular-test-preparation
   ```

## 📝 Nota

El polling consume un poco más de CPU, pero es necesario en WSL para que el hot reload funcione correctamente. En sistemas Linux nativos o macOS, esto no es necesario.
