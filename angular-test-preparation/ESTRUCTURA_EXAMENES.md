# Estructura de Exámenes - Sistema Modular

## 📋 Resumen

Se ha implementado un sistema modular que permite agregar múltiples tipos de exámenes técnicos a la aplicación. El sistema está diseñado para ser flexible y fácil de extender.

## 🏗️ Arquitectura

### Archivos de Configuración

1. **`exam-config.json`** - Lista maestra de exámenes disponibles
   - Define todos los exámenes disponibles
   - Especifica el tipo, archivo de configuración, icono, etc.

2. **Archivos JSON por examen** - Configuración específica de cada examen
   - `questions.json` - SpeechAce (examen de inglés)
   - `examen-360.json` - Examen 360 (opción múltiple)
   - `assure-senior.json` - Assure Senior (técnico con justificaciones)
   - `vanhack.json` - VanHack (entrevistas)

## 📁 Estructura de Archivos

```
src/assets/
├── exam-config.json          # Lista de exámenes disponibles
├── questions.json            # SpeechAce - Examen de inglés
├── examen-360.json           # Examen 360 - Opción múltiple
├── assure-senior.json        # Assure - Técnico
├── vanhack.json              # VanHack - Entrevistas
└── woven.json                # Woven - Evaluación técnica (3 escenarios)
```

## 🔧 Tipos de Exámenes Soportados

### 1. **Speaking** (`speechace`)
- Examen de inglés con tiempos específicos
- Cronómetro con segmentos (Intro, Desarrollo, Conclusión)
- Auto-scroll y marcado de párrafos
- Indicadores de tiempo por párrafo

### 2. **Multiple Choice** (`examen-360`, `assure-senior`)
- Preguntas de selección múltiple
- Múltiples respuestas correctas posibles
- Explicaciones y justificaciones
- **Estado**: Estructura creada, componente pendiente

### 3. **Interview** (`vanhack`)
- Preguntas de entrevista
- Ejemplos de respuestas
- Tips y consejos
- **Estado**: Estructura creada, componente pendiente

### 4. **Technical Assessment** (`woven`)
- Evaluación técnica de VanHack/Woven
- 3 escenarios: Debugging (35min), Autorización (45min), Deployment (20min)
- 48 horas totales para completar todos
- Estrategias, tips y code of conduct
- **Estado**: Estructura creada, componente pendiente

## 📝 Formato de Archivos JSON

### exam-config.json
```json
{
  "exams": [
    {
      "id": "speechace",
      "name": "SpeechAce - Examen de Inglés",
      "description": "Práctica de speaking con tiempos específicos",
      "type": "speaking",
      "configFile": "questions.json",
      "icon": "🎤"
    }
  ]
}
```

### questions.json (Speaking)
```json
{
  "examType": "speechace",
  "name": "SpeechAce",
  "description": "Examen de inglés",
  "timeConfig": {
    "totalTime": 240,
    "segments": [...]
  },
  "questions": [
    {
      "id": 1,
      "title": "Pregunta",
      "answer": "Respuesta completa..."
    }
  ]
}
```

### examen-360.json (Multiple Choice)
```json
{
  "examType": "examen-360",
  "name": "Examen 360",
  "description": "100 preguntas de selección múltiple",
  "timeConfig": null,
  "instructions": "Instrucciones del examen",
  "questions": [
    {
      "id": 1,
      "category": "CI/CD",
      "question": "¿Cuáles son estrategias de despliegue?",
      "options": [
        { "id": "A", "text": "Opción A" }
      ],
      "correctAnswers": ["A", "B"],
      "explanation": "Explicación..."
    }
  ]
}
```

### vanhack.json (Interview)
```json
{
  "examType": "vanhack",
  "name": "VanHack",
  "description": "Preguntas de entrevista",
  "timeConfig": null,
  "instructions": "Practica tus respuestas",
  "questions": [
    {
      "id": 1,
      "title": "Háblame de ti",
      "category": "Apertura",
      "answer": "Respuesta ejemplo...",
      "tips": ["Tip 1", "Tip 2"]
    }
  ]
}
```

### woven.json (Technical Assessment)
```json
{
  "examType": "woven",
  "name": "Woven - Evaluación Técnica VanHack",
  "description": "3 escenarios técnicos",
  "timeConfig": {
    "totalTime": 2880,
    "segments": [
      {
        "name": "debugging",
        "label": "Escenario 1: Debugging",
        "duration": 35,
        "startTime": 2845
      }
    ]
  },
  "instructions": "48 horas para completar...",
  "scenarios": [
    {
      "id": 1,
      "title": "Debugging a Problem...",
      "timeLimit": 35,
      "type": "analysis",
      "strategy": [...],
      "keyPoints": [...]
    }
  ],
  "codeOfConduct": {...},
  "preparation": {...},
  "tips": [...]
}
```

## 🚀 Cómo Agregar un Nuevo Examen

1. **Crear archivo JSON** en `src/assets/`
   - Seguir el formato según el tipo de examen
   - Usar el formato correcto según el tipo (speaking, multiple-choice, interview)

2. **Agregar a `exam-config.json`**
   ```json
   {
     "id": "nuevo-examen",
     "name": "Nombre del Examen",
     "description": "Descripción",
     "type": "speaking|multiple-choice|interview",
     "configFile": "nuevo-examen.json",
     "icon": "🎯"
   }
   ```

3. **Crear componente** (si es necesario)
   - Para tipos nuevos, crear un componente específico
   - O adaptar componentes existentes

## ✅ Estado Actual

- ✅ Sistema modular implementado
- ✅ Selector de exámenes dinámico
- ✅ SpeechAce completamente funcional
- ✅ Estructura para múltiples tipos de exámenes
- ✅ Woven integrado con 3 escenarios completos
- ⏳ Componentes para opción múltiple (pendiente)
- ⏳ Componentes para entrevistas (pendiente)
- ⏳ Componente para evaluación técnica Woven (pendiente)

## 📚 Próximos Pasos

1. Crear componente para exámenes de opción múltiple
2. Crear componente para entrevistas
3. Crear componente para evaluación técnica Woven (mostrar escenarios, tiempos, estrategias)
4. Agregar más preguntas a los JSON existentes
5. Implementar sistema de puntuación para opción múltiple
6. Agregar modo de práctica vs. modo examen
7. Para Woven: crear vista que muestre cada escenario con su estrategia y tiempo

## 🔍 Archivos Clave

- `src/app/services/questions.service.ts` - Servicio principal
- `src/app/components/exam-selector/` - Selector de exámenes
- `src/app/components/speech-ace/` - Componente SpeechAce
- `src/assets/exam-config.json` - Configuración de exámenes
