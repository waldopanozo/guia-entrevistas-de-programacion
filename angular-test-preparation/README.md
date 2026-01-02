# Angular Test Preparation

Aplicación Angular para práctica de entrevistas y exámenes.

## Características

- ✅ Selección de tipo de examen (VanHack, Examen de Conocimientos, Examen de Inglés, Entrevista)
- ✅ Práctica de SpeechAce con 11 preguntas comunes
- ✅ Cronómetro con tiempos específicos (4 minutos por pregunta)
- ✅ Indicadores visuales de segmentos temporales (Introducción, Desarrollo, Conclusión)
- ✅ Visualización de respuestas de ejemplo personalizadas
- ✅ Control de pausa/reanudación del cronómetro

## Instalación

### 1. Configurar Node.js (si tienes problemas con fnm)

Si tienes problemas con `fnm use 22` debido a permisos en WSL, usa el script de configuración:

```bash
cd angular-test-preparation
source setup-env.sh
```

O configura manualmente:
```bash
export PATH="$HOME/.local/share/fnm:$HOME/.local/share/fnm/node-versions/v22.16.0/installation/bin:$PATH"
```

Ver más detalles en [INSTRUCCIONES.md](./INSTRUCCIONES.md)

### 2. Instalar dependencias

```bash
npm install
```

## Desarrollo

```bash
npm start
```

La aplicación estará disponible en `http://localhost:4200`

## Uso

1. **Selecciona el tipo de examen**: Elige "SpeechAce - Examen de Inglés" para practicar
2. **Selecciona una pregunta**: Haz clic en una de las 11 preguntas disponibles
3. **Inicia el cronómetro**: Presiona "Iniciar" para comenzar la práctica de 4 minutos
4. **Sigue los segmentos temporales**:
   - **Minuto 1**: Introducción y contexto
   - **Minutos 2-3**: Desarrollo con ejemplos específicos
   - **Minuto 4**: Conclusión y reflexión final
5. **Revisa la respuesta de ejemplo**: Disponible debajo del cronómetro

## Build

```bash
npm run build
```

## Estructura del Proyecto

```
angular-test-preparation/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── exam-selector/     # Selector de tipo de examen
│   │   │   └── speech-ace/         # Componente principal con cronómetro
│   │   ├── services/
│   │   │   └── questions.service.ts  # Servicio con preguntas y respuestas
│   │   └── app.component.*         # Componente principal
│   ├── styles.css                  # Estilos globales
│   └── index.html
├── package.json
└── angular.json
```

## Tecnologías

- Angular 17
- TypeScript
- CSS3 (sin dependencias externas de UI)
