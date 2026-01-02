# 🚀 Cómo Usar el Servidor MCP con tu Aplicación Angular

## 📍 Dónde Hacer las Preguntas

### Opción 1: Chat Principal de Cursor (Recomendado)

1. **Abre el chat de Cursor:**
   - Presiona `Ctrl+L` (Windows/Linux) o `Cmd+L` (Mac)
   - O haz clic en el ícono de chat en la barra lateral izquierda
   - O usa el atajo `Ctrl+Shift+L` para abrir el chat en una nueva pestaña

2. **Escribe tu pregunta directamente** en el campo de texto

3. **El agente automáticamente usará el servidor MCP** cuando sea necesario

### Opción 2: Composer (Para tareas más complejas)

1. Presiona `Ctrl+I` (Windows/Linux) o `Cmd+I` (Mac)
2. Describe la tarea que quieres realizar
3. El agente usará los recursos MCP si necesita información de los exámenes

## 💬 Cómo Hacer las Preguntas

### Preguntas Simples (Conversacional)

Simplemente escribe como si estuvieras hablando con un colega:

```
¿Qué exámenes están disponibles en mi aplicación?
```

```
Muéstrame las preguntas del examen SpeechAce
```

```
¿Cuáles son los escenarios de Woven?
```

### Preguntas Específicas sobre tu Aplicación Angular

El agente puede ayudarte con tu aplicación Angular usando la información de los exámenes:

```
Basándome en los exámenes disponibles, ¿qué componentes de Angular debería crear?
```

```
¿Puedes ayudarme a crear un componente para el examen 360 basándote en su configuración JSON?
```

```
Necesito agregar una nueva pregunta al examen SpeechAce, ¿cómo debería actualizar el JSON?
```

## 🎯 Ejemplos de Uso con tu Aplicación Angular

### 1. Consultar Información de Exámenes

**Pregunta:**
```
¿Qué estructura tiene el examen Woven? Necesito crear un componente para él.
```

**El agente:**
- Accederá al archivo `woven.json` vía MCP
- Te mostrará la estructura completa
- Te ayudará a crear el componente Angular correspondiente

### 2. Agregar Nuevas Funcionalidades

**Pregunta:**
```
Quiero agregar un nuevo tipo de examen llamado "Tech Interview". 
¿Cómo debería estructurar el JSON y qué componente necesito crear?
```

**El agente:**
- Revisará la estructura de otros exámenes
- Te sugerirá la estructura JSON correcta
- Te ayudará a crear el componente Angular

### 3. Buscar Información Específica

**Pregunta:**
```
Busca todas las preguntas que mencionan "GraphQL" en todos los exámenes
```

**El agente:**
- Usará la herramienta `search_questions` del MCP
- Te mostrará todas las preguntas relacionadas con GraphQL
- Te ayudará a entender cómo están estructuradas

### 4. Desarrollo de Componentes

**Pregunta:**
```
Necesito crear un componente para el examen "Examen 360" que es de opción múltiple. 
¿Puedes ayudarme basándote en la configuración del JSON?
```

**El agente:**
- Leerá `examen-360.json` vía MCP
- Entenderá que es un examen de opción múltiple
- Te ayudará a crear el componente con la lógica correcta

### 5. Actualizar Configuraciones

**Pregunta:**
```
Quiero agregar una nueva pregunta al examen SpeechAce. 
¿Cómo debería actualizar el archivo JSON y qué cambios necesito en el componente?
```

**El agente:**
- Te mostrará la estructura actual de `questions.json`
- Te ayudará a agregar la nueva pregunta correctamente
- Te sugerirá cambios en el componente si son necesarios

## 🔧 Comandos Útiles en el Chat

### Ver Recursos Disponibles

```
Lista todos los recursos MCP disponibles
```

### Obtener Configuración de un Examen

```
Muéstrame la configuración completa del examen Woven
```

```
Dame la estructura del examen SpeechAce
```

### Buscar en Todos los Exámenes

```
Busca preguntas sobre "microservices"
```

```
Encuentra todas las referencias a "Docker" en los exámenes
```

## 📝 Flujo de Trabajo Recomendado

### Cuando Quieras Agregar un Nuevo Examen:

1. **Consulta la estructura existente:**
   ```
   Muéstrame cómo está estructurado el examen SpeechAce en el JSON
   ```

2. **Crea el archivo JSON:**
   ```
   Ayúdame a crear el archivo JSON para un nuevo examen llamado "Tech Test"
   ```

3. **Actualiza exam-config.json:**
   ```
   Necesito agregar el nuevo examen "Tech Test" al exam-config.json
   ```

4. **Crea el componente Angular:**
   ```
   Crea un componente Angular para el examen "Tech Test" basándote en su configuración
   ```

### Cuando Quieras Modificar un Examen Existente:

1. **Consulta la configuración actual:**
   ```
   Muéstrame la configuración actual del examen Woven
   ```

2. **Haz los cambios:**
   ```
   Quiero agregar un nuevo escenario al examen Woven. 
   ¿Cómo debería actualizar el JSON?
   ```

3. **Actualiza el componente si es necesario:**
   ```
   El componente Woven necesita mostrar el nuevo escenario. 
   ¿Qué cambios necesito hacer?
   ```

## 🎨 Ejemplos de Preguntas Avanzadas

### Desarrollo de Componentes

```
Basándome en la configuración del examen Woven, 
crea un componente Angular que muestre los escenarios con sus timers individuales
```

### Análisis de Datos

```
Analiza todos los exámenes y dime cuántas preguntas tiene cada uno
```

```
¿Qué temas técnicos cubren todos los exámenes?
```

### Optimización

```
Revisa la estructura de los JSONs de exámenes y sugiere mejoras
```

## 💡 Tips Importantes

1. **Sé Específico:** Menciona el nombre del examen o el tipo de funcionalidad que necesitas

2. **Usa el Contexto:** El agente puede ver tus archivos, así que puedes pedirle que revise componentes existentes

3. **Combina Preguntas:** Puedes pedirle que consulte los JSONs Y que modifique tu código Angular

4. **Pide Explicaciones:** Si no entiendes algo, pregunta:
   ```
   ¿Puedes explicarme cómo funciona el timeConfig en el examen SpeechAce?
   ```

## 🚨 Solución de Problemas

### El agente no encuentra los recursos

**Pregunta:**
```
¿Puedes listar los recursos MCP disponibles?
```

### El agente no entiende tu pregunta

**Reformula:**
```
En lugar de: "Dame info del examen"
Usa: "Muéstrame la configuración del examen SpeechAce desde el archivo JSON"
```

### Quieres verificar que el MCP funciona

**Pregunta:**
```
¿Qué exámenes están disponibles en mi aplicación Angular?
```

Si el agente puede responder usando los recursos MCP, todo está funcionando correctamente.

## 📚 Recursos Adicionales

- **Estructura de Exámenes:** Ver `ESTRUCTURA_EXAMENES.md`
- **Configuración MCP:** Ver `CONFIGURACION_WSL_CURSOR.md`
- **Servidor MCP:** Ver `mcp-server/README.md`

## 🎯 Prueba Ahora

Abre el chat de Cursor (`Ctrl+L`) y prueba:

```
¿Qué exámenes están disponibles en mi aplicación y cuántas preguntas tiene cada uno?
```

¡El agente debería poder responder usando los recursos MCP! 🚀
