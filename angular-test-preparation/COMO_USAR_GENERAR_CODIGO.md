# 💻 Cómo Generar Código para Escenarios de Woven

## 🎯 Funcionalidad Nueva

Ahora puedes enviar la información completa del ejercicio y el sistema generará código de ejemplo paso a paso e incrementalmente.

## 🚀 Cómo Usar

### Paso 1: Abrir la Aplicación

1. Abre `http://localhost:4200` en tu navegador
2. Selecciona el examen **"Woven"**
3. Selecciona un escenario (por ejemplo, "Escenario 2: Check Which Pages Users Are Authorized to Access")

### Paso 2: Abrir el Panel de Cursor

1. Haz clic en el botón **"🤖 Cursor"** en la parte superior
2. Espera a que se conecte (deberías ver "🟢 Conectado")

### Paso 3: Generar Código

Tienes **3 opciones**:

#### Opción 1: Botón Automático (Recomendado) ⭐

Haz clic en el botón **"💻 Generar Código para este Escenario"**

Este botón automáticamente:
- Toma toda la información del escenario (título, descripción, objetivos, estrategia, puntos clave)
- La envía al servidor
- El servidor genera código específico para ese escenario
- El código se muestra **por partes e incrementalmente**

#### Opción 2: Pregunta Manual

Escribe en el campo de texto:
```
Dame el código del escenario 2
```

O:
```
Genera el código para el escenario de autorización
```

#### Opción 3: Enviar Información Completa

Copia y pega la información del escenario manualmente, o escribe:
```
Genera el código de ejemplo para este ejercicio:

**Título:** Check Which Pages Users Are Authorized to Access
**Tipo:** coding
**Descripción:** [descripción completa]
**Objetivos:** [objetivos]
...
```

## 📦 Qué Recibirás

El código se mostrará **incrementalmente** en partes:

### Para Escenario 2 (Autorización/Coding):
1. **Parte 1**: Estructura de datos y tipos (interfaces TypeScript)
2. **Parte 2**: Función de verificación de autorización
3. **Parte 3**: Funciones para múltiples páginas
4. **Parte 4**: Tests completos

### Para Escenario 1 (Debugging/Analysis):
1. **Parte 1**: Template de documentación de debugging
2. **Parte 2**: Script de análisis de logs

### Para Escenario 3 (Deployment/Documentation):
1. **Parte 1**: Script de build
2. **Parte 2**: Configuración CI/CD (GitHub Actions)
3. **Parte 3**: Configuración de Cloud (Terraform)

## 🎨 Visualización

Cada parte incluye:
- **📦 Encabezado**: Número de parte y título
- **💻 Código**: Código completo de esa parte
- **💡 Explicación**: Qué hace esa parte del código

El código aparece **línea por línea** en tiempo real, simulando que se está escribiendo.

## ✅ Requisitos

1. **Bridge Server corriendo**: `cd bridge-server && npm start`
2. **Angular app corriendo**: `npm start` (en la raíz del proyecto)
3. **Conexión WebSocket**: El panel debe mostrar "🟢 Conectado"

## 🔧 Solución de Problemas

### El botón no funciona

- Verifica que el Bridge Server esté corriendo
- Verifica que veas "🟢 Conectado" en el panel
- Revisa la consola del navegador (F12) para errores

### No se genera código

- Asegúrate de haber seleccionado un escenario primero
- Verifica que el mensaje incluya palabras clave como "código", "code", "implementar"
- Revisa los logs del Bridge Server

### El código no aparece por partes

- Verifica que el WebSocket esté conectado
- Revisa que el servidor esté procesando correctamente
- Intenta recargar la página

## 💡 Tips

- **Usa el botón automático**: Es la forma más fácil y completa
- **Espera a que termine**: El código se genera incrementalmente, dale tiempo
- **Revisa cada parte**: Cada parte tiene explicaciones útiles
- **Copia el código**: Puedes copiar cada parte según la necesites

## 🎯 Ejemplo Completo

1. Abre `http://localhost:4200`
2. Selecciona "Woven"
3. Selecciona "Escenario 2: Check Which Pages Users Are Authorized to Access"
4. Haz clic en "🤖 Cursor"
5. Haz clic en "💻 Generar Código para este Escenario"
6. Observa cómo el código aparece parte por parte
7. Lee las explicaciones de cada parte
8. Copia el código que necesites

¡Listo! 🎉
