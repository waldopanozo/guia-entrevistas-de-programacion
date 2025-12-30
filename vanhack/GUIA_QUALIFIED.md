# Guía Práctica para Usar Qualified - Plataforma Woven

## ¿Qué es Qualified?

Qualified es la plataforma online que Woven usa para entregar los escenarios de evaluación. Es un editor de código en el navegador que te permite escribir código, ejecutar tests y ver resultados en tiempo real.

---

## Antes de Empezar

### Preparación Técnica

**Requisitos del Navegador:**
- [ ] Usar un navegador moderno (Chrome, Firefox, Edge, Safari)
- [ ] Tener JavaScript habilitado
- [ ] Verificar que tienes buena conexión a internet
- [ ] Cerrar extensiones que puedan interferir (ad blockers, etc.)

**Configuración Recomendada:**
- [ ] Usar pantalla completa o ventana grande
- [ ] Tener múltiples monitores si es posible (uno para código, otro para instrucciones)
- [ ] Ajustar tamaño de fuente del editor si es necesario

---

## Navegación en Qualified

### Elementos de la Interfaz

**Barra Lateral Izquierda:**
- Puntos numerados = Challenges/Escenarios
- Puedes hacer clic para navegar entre ellos
- Indica cuántos challenges hay en total

**Área Principal:**
- **Instrucciones** (arriba o a la izquierda)
- **Editor de código** (centro)
- **Tests/Resultados** (abajo o a la derecha)

**Barra Superior:**
- Menú de navegación
- Información del usuario
- Botones de acción (Run, Submit, etc.)

### Navegación Entre Challenges

- Usa los puntos en la barra lateral para cambiar de challenge
- **IMPORTANTE:** Debes intentar cada challenge antes de poder enviar
- Puedes volver a challenges anteriores para revisar o modificar

---

## Editor de Código

### Características del Editor

**Funcionalidades Básicas:**
- Autocompletado (puede variar según lenguaje)
- Resaltado de sintaxis
- Numeración de líneas
- Indentación automática
- Búsqueda y reemplazo (Ctrl+F / Cmd+F)

**Atajos de Teclado Útiles:**
- `Ctrl/Cmd + /` - Comentar/descomentar líneas
- `Ctrl/Cmd + D` - Seleccionar siguiente ocurrencia
- `Ctrl/Cmd + Shift + K` - Eliminar línea
- `Alt + ↑/↓` - Mover línea arriba/abajo
- `Ctrl/Cmd + Shift + L` - Seleccionar todas las ocurrencias

### Tips para el Editor

1. **Usa nombres descriptivos** - El código debe ser claro
2. **Comenta cuando sea necesario** - Especialmente para explicar decisiones
3. **Formatea el código** - Mantén indentación consistente
4. **Revisa antes de ejecutar** - Lee tu código una vez antes de correr tests

---

## Ejecutar y Probar Código

### Botones de Acción

**Run / Execute:**
- Ejecuta tu código contra los tests
- Muestra resultados inmediatamente
- Puedes ejecutar múltiples veces
- **No cuenta contra el tiempo límite** (pero usa tiempo de tu sesión)

**Submit:**
- Envía tu solución final
- Solo disponible cuando has intentado todos los challenges
- **Asegúrate de estar satisfecho antes de enviar**

### Interpretación de Resultados

**Tests Pasando (✓):**
- Tu código cumple con ese requisito
- Continúa trabajando en los demás tests

**Tests Fallando (✗):**
- Revisa el mensaje de error
- Lee qué se esperaba vs qué obtuviste
- Ajusta tu código y vuelve a ejecutar

**Errores de Compilación/Sintaxis:**
- Revisa la línea indicada
- Verifica sintaxis del lenguaje
- Asegúrate de cerrar paréntesis, llaves, etc.

---

## Estrategias para Usar Qualified Efectivamente

### 1. Leer Completamente Antes de Codificar

**NO hagas:**
- ❌ Empezar a codificar inmediatamente
- ❌ Asumir lo que pide el challenge
- ❌ Ignorar ejemplos o notas

**SÍ haz:**
- ✅ Lee TODO el challenge primero
- ✅ Entiende los requisitos completamente
- ✅ Revisa los ejemplos proporcionados
- ✅ Identifica casos edge mencionados

### 2. Planear Antes de Implementar

**Para Challenges de Código:**
1. Lee el problema completamente
2. Identifica inputs y outputs esperados
3. Piensa en casos edge
4. Planifica la estructura (pseudocódigo mental o comentarios)
5. Implementa paso a paso
6. Prueba con los tests proporcionados

**Para Challenges de Escritura (como Deployment):**
1. Lee el prompt completamente
2. Identifica qué áreas debes cubrir
3. Haz tus suposiciones claras
4. Estructura tu respuesta
5. Escribe sección por sección
6. Revisa completitud y claridad

### 3. Usar Tests para Guiar el Desarrollo

**Enfoque TDD (Test-Driven Development):**
- Mira qué tests existen
- Implementa para pasar el primer test
- Ejecuta y verifica
- Implementa para el siguiente test
- Refactoriza cuando sea necesario

**No te quedes atascado:**
- Si un test no pasa, lee el mensaje de error cuidadosamente
- Usa `print` o `console.log` para debuggear (si está permitido)
- Considera casos edge que no estén en los tests

### 4. Gestionar el Tiempo

**Durante el Challenge:**
- No ejecutes tests constantemente (cada cambio pequeño)
- Ejecuta cuando tengas una funcionalidad completa
- Deja tiempo al final para revisar y refactorizar

**Entre Challenges:**
- Puedes tomar descansos
- Revisa tu trabajo antes de pasar al siguiente
- Asegúrate de haber intentado cada challenge

---

## Tips Específicos por Tipo de Challenge

### Para Challenges de Código

**Estructura del Código:**
```php
// 1. Comentarios explicando el enfoque (si es complejo)
/**
 * Verifica si un usuario tiene acceso a una página
 * 
 * @param User $user El usuario a verificar
 * @param string $pageId El ID de la página
 * @return bool True si tiene acceso
 */
function isAuthorized(User $user, string $pageId): bool {
    // 2. Validaciones y casos edge primero
    if (empty($pageId) || !$user) {
        return false;
    }
    
    // 3. Lógica principal
    // ...
    
    // 4. Retorno claro
    return $result;
}
```

**Buenas Prácticas:**
- Nombres descriptivos de variables y funciones
- Funciones pequeñas y enfocadas
- Manejo de casos edge
- Comentarios cuando explican "por qué", no "qué"

### Para Challenges de Escritura/Planificación

**Estructura de Respuesta:**
```
1. ASUNCIONES
   - Lista clara de suposiciones

2. ENFOQUE GENERAL
   - Resumen del plan

3. PASOS DETALLADOS
   - Cada paso con suficiente detalle
   - Herramientas específicas mencionadas
   - Configuraciones relevantes

4. CONSIDERACIONES ADICIONALES
   - Seguridad, escalabilidad, costos, etc.
```

**Tips:**
- Sé específico con nombres de servicios/herramientas
- Incluye configuraciones relevantes
- Menciona alternativas si es apropiado
- Mantén un balance entre breadth y depth

---

## Debugging en Qualified

### Estrategias de Debugging

**1. Usar Output para Debuggear:**
```php
// PHP
error_log("Debug: user = " . print_r($user, true));
var_dump($variable);

// Otros lenguajes
print($variable);
console.log(variable);
```

**2. Revisar Mensajes de Error:**
- Lee el mensaje completo
- Identifica la línea del error
- Verifica qué se esperaba vs qué obtuviste
- Revisa casos edge

**3. Probar con Casos Simples:**
- Empieza con el caso más simple
- Agrega complejidad gradualmente
- Verifica cada paso

### Limitaciones del Entorno

- **No tienes acceso a:** Debugger completo, IDE avanzado, múltiples archivos
- **Sí tienes:** Editor básico, ejecución de tests, output básico
- **Trabaja con:** Lo que tienes disponible, no te frustres por limitaciones

---

## Errores Comunes y Cómo Evitarlos

### 1. No Leer Completamente el Challenge

**Síntoma:** Implementas algo que no se pidió  
**Solución:** Lee TODO antes de empezar a codificar

### 2. Ignorar Casos Edge

**Síntoma:** Tests pasan pero fallan casos edge  
**Solución:** Piensa en casos límite desde el inicio

### 3. Código Hardcodeado

**Síntoma:** Valores mágicos en el código  
**Solución:** Usa constantes o parámetros

### 4. Nombres Poco Claros

**Síntoma:** Variables como `$x`, `$temp`, `$data`  
**Solución:** Nombres descriptivos que expliquen el propósito

### 5. No Comentar Decisiones Importantes

**Síntoma:** Código que funciona pero no se entiende por qué  
**Solución:** Comenta decisiones de diseño y tradeoffs

### 6. Enviar Sin Revisar

**Síntoma:** Errores obvios que podrías haber encontrado  
**Solución:** Siempre revisa antes de enviar

---

## Checklist Pre-Challenge

### Antes de Empezar Cada Challenge

- [ ] Leí el challenge completamente
- [ ] Entiendo los requisitos
- [ ] Identifiqué casos edge
- [ ] Planifiqué mi enfoque
- [ ] Tengo claro qué debo entregar

### Durante el Challenge

- [ ] Escribo código limpio y claro
- [ ] Manejo casos edge
- [ ] Ejecuto tests regularmente (pero no excesivamente)
- [ ] Comento decisiones importantes
- [ ] Reviso mi código antes de ejecutar

### Antes de Enviar

- [ ] Revisé todos los challenges
- [ ] Intenté cada challenge al menos una vez
- [ ] Revisé mi código/respuestas
- [ ] Verifiqué que no hay errores obvios
- [ ] Estoy satisfecho con mi trabajo

---

## Tips Adicionales

### Para el Ambiente de Práctica

**Usa este tiempo para:**
- Familiarizarte con la interfaz
- Probar diferentes lenguajes disponibles
- Entender cómo funcionan los tests
- Identificar cualquier problema técnico

**NO te preocupes por:**
- Resolver perfectamente los challenges de práctica
- Que los challenges sean similares a los reales (no lo serán)
- El lenguaje usado en práctica (puede ser diferente al real)

### Para la Evaluación Real

**Recuerda:**
- Tienes 48 horas totales
- Cada escenario tiene su límite individual
- Puedes tomar descansos
- Configura alarma a las 47 horas
- No uses AI (descalificación)
- Cita fuentes si usas código de otros

**Mantén la calma:**
- Si te quedas atascado, toma un descanso
- Revisa el problema desde otro ángulo
- No te desanimes si algo no sale perfecto
- Enfócate en mostrar tu proceso de pensamiento

---

## Recursos de Ayuda Durante la Evaluación

### Permitido ✅

- StackOverflow
- Documentación oficial (PHP, frameworks, etc.)
- Blogs técnicos
- Tu propia experiencia y conocimiento

**IMPORTANTE:** Si usas código de otros, **debes citar la fuente** con un enlace

### NO Permitido ❌

- ChatGPT u otros AI
- Pedir ayuda a otras personas
- Usar soluciones completas de otros
- Compartir los challenges o tus soluciones

---

## Preguntas Frecuentes

**P: ¿Puedo usar múltiples lenguajes en diferentes challenges?**  
R: Depende del challenge. Algunos permiten elegir, otros especifican un lenguaje.

**P: ¿Qué pasa si mi código no compila?**  
R: Revisa el mensaje de error, corrige la sintaxis y vuelve a intentar.

**P: ¿Puedo ejecutar tests múltiples veces?**  
R: Sí, pero no abuses. Ejecuta cuando tengas cambios significativos.

**P: ¿Qué pasa si me quedo sin tiempo?**  
R: Envía lo que tengas. Es mejor una solución parcial que nada.

**P: ¿Puedo volver a un challenge anterior?**  
R: Sí, puedes navegar entre challenges antes de enviar.

**P: ¿Hay autocompletado?**  
R: Depende del lenguaje y la configuración. No lo dependas completamente.

---

## Ejemplo de Flujo de Trabajo

### Challenge de Código

1. **Leer (2-3 min)**
   - Leer instrucciones completas
   - Revisar ejemplos
   - Identificar requisitos

2. **Planear (2-3 min)**
   - Pensar en estructura
   - Identificar casos edge
   - Planear funciones necesarias

3. **Implementar (mayoría del tiempo)**
   - Escribir código limpio
   - Manejar casos edge
   - Agregar comentarios cuando sea necesario

4. **Probar (regularmente)**
   - Ejecutar tests
   - Revisar resultados
   - Ajustar código

5. **Revisar (últimos minutos)**
   - Revisar código completo
   - Verificar casos edge
   - Asegurar claridad

### Challenge de Escritura

1. **Leer (1-2 min)**
   - Leer prompt completo
   - Identificar áreas a cubrir

2. **Planear (2-3 min)**
   - Estructurar respuesta
   - Listar suposiciones
   - Identificar herramientas/servicios

3. **Escribir (mayoría del tiempo)**
   - Escribir sección por sección
   - Ser específico y detallado
   - Mantener balance breadth/depth

4. **Revisar (últimos minutos)**
   - Verificar completitud
   - Asegurar claridad
   - Verificar que suposiciones están claras

---

**¡Buena suerte con Qualified!**

---

*Última actualización: 2025*

