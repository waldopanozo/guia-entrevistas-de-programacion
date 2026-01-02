# Angular Test Preparation - Aplicación de Práctica de Exámenes

Aplicación Angular completa para practicar diferentes tipos de exámenes técnicos y de entrevistas.

## 🎯 Características Principales

- ✅ **Múltiples tipos de exámenes** soportados (SpeechAce, Woven, 360, Assure, VanHack)
- ✅ **Cronómetros personalizables** con segmentos de tiempo configurables
- ✅ **Auto-scroll y marcado de párrafos** para práctica de speaking
- ✅ **Indicadores de tiempo por párrafo** (adelantado/atrasado/en tiempo)
- ✅ **Integración con Cursor** mediante servidor MCP
- ✅ **Bridge Server** para comunicación bidireccional Angular ↔ Cursor
- ✅ **Panel de Cursor en tiempo real** en componentes (ej: Woven)
- ✅ **Sistema modular** fácil de extender
- ✅ **Hot-reload configurado** para WSL

## 📋 Tipos de Exámenes

### 1. SpeechAce - Examen de Inglés 🎤 ✅
- Práctica de speaking con tiempos específicos (4 minutos por pregunta)
- Cronómetro con segmentos: Introducción (1 min), Desarrollo (2 min), Conclusión (1 min)
- Auto-scroll automático al párrafo actual
- Indicadores de tiempo por párrafo con colores
- 11 preguntas comunes de entrevistas

### 2. Woven - Evaluación Técnica VanHack 🔧 ✅
- 3 escenarios técnicos con tiempos individuales:
  - **Debugging** (35 min) - Análisis y documentación
  - **Autorización** (45 min) - Implementación de código
  - **Deployment** (20 min) - Documentación de despliegue
- Estrategias detalladas por fase
- Code of Conduct y tips
- Cronómetros individuales por escenario
- **🤖 Panel de Cursor integrado** para consultas en tiempo real

### 3. Examen 360 - Senior 📝 ⏳
- 100 preguntas de selección múltiple
- Múltiples respuestas correctas posibles
- Explicaciones y justificaciones
- *Componente en desarrollo*

### 4. Assure - Senior Software Engineer 💻 ⏳
- Preguntas técnicas con respuestas y justificaciones
- Enfoque en conocimientos técnicos avanzados
- *Componente en desarrollo*

### 5. VanHack - Entrevistas 🌎 ⏳
- Preguntas comunes de entrevistas
- Ejemplos de respuestas
- Tips y consejos
- *Componente en desarrollo*

## 🚀 Instalación

### 1. Configurar Node.js (si tienes problemas con fnm)

Si tienes problemas con `fnm use 22` debido a permisos en WSL:

```bash
cd angular-test-preparation
source setup-env.sh
```

O configura manualmente:
```bash
export PATH="$HOME/.local/share/fnm:$HOME/.local/share/fnm/node-versions/v22.16.0/installation/bin:$PATH"
```

Ver más detalles en:
- [INSTRUCCIONES.md](./INSTRUCCIONES.md)
- [SOLUCION_FNM.md](./SOLUCION_FNM.md)

### 2. Instalar dependencias

```bash
npm install
```

### 3. Instalar servidor MCP (opcional, para integración con Cursor)

```bash
cd mcp-server
npm install
```

Ver [README_MCP.md](./README_MCP.md) para más detalles.

## 💻 Desarrollo

```bash
npm start
```

La aplicación estará disponible en `http://localhost:4200`

**Nota:** Hot-reload está configurado para WSL. Si no funciona, ver [WSL_HOT_RELOAD.md](./WSL_HOT_RELOAD.md)

## 📖 Uso

### SpeechAce - Examen de Inglés

1. **Selecciona el examen**: Elige "SpeechAce - Examen de Inglés"
2. **Selecciona una pregunta**: Haz clic en una de las 11 preguntas disponibles
3. **Inicia el cronómetro**: Presiona "▶ Iniciar" para comenzar la práctica de 4 minutos
4. **Sigue los segmentos temporales**:
   - **Minuto 1**: Introducción y contexto
   - **Minutos 2-3**: Desarrollo con ejemplos específicos
   - **Minuto 4**: Conclusión y reflexión final
5. **Observa los indicadores**:
   - 🟢 Verde: Vas adelantado
   - 🟡 Amarillo: Vas en tiempo
   - 🔴 Rojo: Vas atrasado
6. **Revisa la respuesta de ejemplo**: Disponible debajo del cronómetro con auto-scroll

### Woven - Evaluación Técnica

1. **Selecciona el examen**: Elige "Woven - Evaluación Técnica"
2. **Revisa la información general**: Code of Conduct, preparación y tips
3. **Selecciona un escenario**: Haz clic en uno de los 3 escenarios
4. **Revisa la estrategia**: Cada escenario tiene fases con tiempos específicos
5. **Usa el cronómetro**: Inicia el cronómetro individual del escenario
6. **Sigue la estrategia**: Cada fase tiene tareas específicas

## 🔌 Integración con Cursor (MCP)

La aplicación está integrada con **Cursor** mediante un servidor **MCP (Model Context Protocol)**.

### ✅ Estado Actual

El servidor MCP está **configurado y funcionando**. Deberías ver "angular-test-prep" en **Settings → Tools & MCP** con "11 resources enabled".

### 🚀 Cómo Usar el MCP

**Abre el chat de Cursor** (`Ctrl+L`) y haz preguntas como:

- `¿Qué exámenes están disponibles en mi aplicación?`
- `Muéstrame las preguntas del examen SpeechAce`
- `¿Cuáles son los escenarios de Woven?`
- `Busca preguntas sobre "GraphQL" en todos los exámenes`
- `Ayúdame a crear un componente para el examen 360 basándote en su JSON`

El agente automáticamente usará los recursos MCP para responder.

**📖 Guía Completa:** [COMO_USAR_MCP.md](./COMO_USAR_MCP.md) - **¡Lee esto para aprender a usar el MCP!**

### 🌉 Bridge Server (Comunicación Bidireccional)

Además del MCP, la aplicación incluye un **Bridge Server** que permite comunicación bidireccional entre Angular y Cursor:

- ✅ **WebSocket** para comunicación en tiempo real
- ✅ **API REST** para consultas síncronas
- ✅ **Panel integrado** en componentes (ej: Woven)
- ✅ **Respuestas en tiempo real** directamente en la UI

**Para usar el Bridge Server:**

1. Instala dependencias: `cd bridge-server && npm install`
2. Inicia el servidor: `npm start`
3. Abre un escenario en Woven y haz clic en "🤖 Cursor"
4. Escribe instrucciones y recibe respuestas en tiempo real

**📖 Guía Completa:** [INSTALACION_BRIDGE_SERVER.md](./INSTALACION_BRIDGE_SERVER.md)

### Recursos Disponibles para el Agente

- Lista de exámenes disponibles
- Preguntas de todos los exámenes
- Configuraciones completas de exámenes
- Búsqueda de preguntas por texto

**Documentación completa:**
- **[COMO_USAR_MCP.md](./COMO_USAR_MCP.md)** ⭐ - **Guía de uso del MCP con ejemplos**
- [README_MCP.md](./README_MCP.md) - Guía de integración MCP
- [CONFIGURAR_MCP.md](./CONFIGURAR_MCP.md) - Configuración paso a paso
- [INTEGRACION_CURSOR.md](./INTEGRACION_CURSOR.md) - Documentación completa

## 🏗️ Build

```bash
npm run build
```

## 📁 Estructura del Proyecto

```
angular-test-preparation/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── exam-selector/        # Selector de exámenes
│   │   │   ├── speech-ace/           # Componente SpeechAce
│   │   │   └── woven-assessment/     # Componente Woven
│   │   ├── services/
│   │   │   └── questions.service.ts  # Servicio de preguntas
│   │   └── app.component.*           # Componente principal
│   └── assets/
│       ├── exam-config.json          # Configuración de exámenes
│       ├── questions.json            # Preguntas SpeechAce
│       ├── woven.json                # Configuración Woven
│       ├── examen-360.json           # Examen 360
│       ├── assure-senior.json        # Assure Senior
│       └── vanhack.json               # VanHack
├── mcp-server/                       # Servidor MCP para Cursor
│   ├── index.js                      # Servidor MCP
│   ├── run-mcp.sh                    # Script wrapper
│   └── package.json                  # Dependencias MCP
├── .cursor/
│   └── mcp.json                      # Configuración MCP
├── package.json
└── angular.json
```

## 🛠️ Tecnologías

- **Angular 17** - Framework principal
- **TypeScript** - Lenguaje de programación
- **RxJS** - Programación reactiva
- **Model Context Protocol (MCP)** - Integración con Cursor
- **Node.js** - Servidor MCP

## 📝 Agregar Nuevos Exámenes

1. **Crear archivo JSON** en `src/assets/` con la estructura del examen
2. **Agregar entrada** en `src/assets/exam-config.json`
3. **(Opcional)** Crear componente específico si requiere funcionalidad especial

Ver [ESTRUCTURA_EXAMENES.md](./ESTRUCTURA_EXAMENES.md) para más detalles sobre la estructura de archivos JSON.

## 🐛 Solución de Problemas

### Hot-reload no funciona en WSL
- Ver [WSL_HOT_RELOAD.md](./WSL_HOT_RELOAD.md)
- Configurado con polling automático (`--poll=1000`)

### Problemas con fnm (Node.js)
- Ver [SOLUCION_FNM.md](./SOLUCION_FNM.md)
- Script `fnm-use` disponible en `~/.bashrc`

### Servidor MCP no aparece en Cursor
- Ver [CONFIGURAR_MCP.md](./CONFIGURAR_MCP.md)
- Verificar que `.cursor/mcp.json` exista
- Reiniciar Cursor completamente
- Verificar que `mcp-server/node_modules` exista

### Errores de compilación
- Limpiar caché: `rm -rf .angular node_modules/.cache`
- Reinstalar: `rm -rf node_modules && npm install`

## 📚 Documentación Adicional

- [ESTRUCTURA_EXAMENES.md](./ESTRUCTURA_EXAMENES.md) - Estructura de exámenes
- [INSTRUCCIONES.md](./INSTRUCCIONES.md) - Instrucciones de uso
- [README_MCP.md](./README_MCP.md) - Integración MCP
- [CONFIGURAR_MCP.md](./CONFIGURAR_MCP.md) - Configuración MCP
- [WSL_HOT_RELOAD.md](./WSL_HOT_RELOAD.md) - Solución hot-reload WSL
- [SOLUCION_FNM.md](./SOLUCION_FNM.md) - Solución problemas fnm

## 🎯 Próximas Mejoras

- [ ] Componente para exámenes de opción múltiple (360, Assure)
- [ ] Componente para entrevistas (VanHack)
- [ ] Sistema de puntuación
- [ ] Modo de práctica vs. modo examen
- [ ] Exportar resultados
- [ ] Estadísticas de práctica
- [ ] Modo oscuro/claro

## 📖 Guías de Preparación Relacionadas

Este repositorio incluye guías detalladas en la raíz:

- **SpeechAce Jobs Exam** - `../SPEECHACE_JOBS_EXAM.md`
- **Respuestas de Ejemplo** - `../SPEECHACE_RESPUESTAS_EJEMPLO.md`
- **Prácticas de Speaking** - `../SPEECHACE_PRACTICE_SPEECHES.md`
- **Woven Evaluation** - `../vanhack/REFERENCIA_RAPIDA_WOVEN.md`
- **Guías de Estudio Woven** - `../vanhack/GUIA_ESTUDIO_WOVEN_PHP.md`
- **Examen 360** - `../PREGUNTAS_EXAMEN_360.md`
- **Assure Senior** - `../assure/100_preguntas_Senior.md`

---

**¡Buena suerte en tus entrevistas! 🚀**
