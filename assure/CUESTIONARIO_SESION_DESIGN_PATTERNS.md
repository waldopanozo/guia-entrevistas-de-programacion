# Cuestionario de Sesión - Design Patterns, Testing, Git, Docker y Más

## Formato: Preguntas con Respuestas y Explicaciones Detalladas

---

## 1. Design Patterns

### 1.1. ¿Qué patrón usarías cuando quieres extender la funcionalidad de una clase base sin usar subclases ni herencia?

**Respuesta correcta: Decorator Pattern**

**Explicación:**
- El patrón Decorator permite extender funcionalidad dinámicamente sin herencia
- Usa composición en lugar de herencia
- Permite añadir características sin modificar la clase base
- Evita la explosión de subclases
- Ejemplo: Streams en Java, middleware en Express.js

**Comparación con otros patrones:**
- **Composite**: Organiza objetos en estructuras de árbol (parte-todo)
- **Builder**: Construye objetos complejos paso a paso
- **Strategy**: Define algoritmos intercambiables
- **Decorator**: Extiende funcionalidad sin herencia ✅

---

### 1.2. ¿Qué patrón de diseño se usa cuando el objetivo es desacoplar una abstracción de su implementación?

**Respuesta correcta: Bridge Pattern**

**Explicación:**
- Bridge Pattern desacopla la abstracción de su implementación
- Permite que ambas varíen independientemente
- Evita la explosión de clases cuando hay múltiples variaciones
- Ejemplo: Diferentes formas de dibujar (Windows, Linux) y diferentes formas (círculo, rectángulo)

**Comparación con otros patrones:**
- **Strategy**: Algoritmos intercambiables (no desacopla abstracción de implementación)
- **Adapter**: Adapta interfaces incompatibles
- **Proxy**: Control de acceso/sustituto
- **Bridge**: Desacopla abstracción de implementación ✅

---

### 1.3. ¿Cuál es el intento del patrón Singleton?

**Respuesta correcta: Asegurar que una clase tiene una instancia única y proveer un mecanismo de acceso global a tal instancia**

**Explicación:**
- Singleton garantiza una sola instancia de una clase
- Proporciona acceso global a esa instancia
- Usa constructor privado y método estático getInstance()
- Útil para: logging, configuración, conexiones de BD

**Problemas potenciales:**
- Dificulta testing (dependencias ocultas)
- Puede violar Single Responsibility Principle
- Puede causar acoplamiento fuerte
- Problemas en entornos multi-threaded

**Alternativas:** Dependency Injection, Factory

---

### 1.4. ¿Qué es el patrón Factory Method y cuándo usarlo?

**Respuesta correcta: Subclases deciden qué clase instanciar**

**Explicación:**
- Factory Method es un patrón creacional
- Las subclases deciden qué clase instanciar
- Encapsula la creación de objetos
- Desacopla la creación del uso

**Variantes de Factory:**
- **Simple Factory**: Método que crea objetos según parámetro
- **Factory Method**: Subclases deciden qué clase instanciar ✅
- **Abstract Factory**: Familia de objetos relacionados

**Cuándo usarlo:**
- No conoces el tipo exacto hasta runtime
- Quieres desacoplar creación de uso
- Lógica compleja de creación
- Centralizar la creación de objetos

---

### 1.5. ¿Qué es el patrón Chain of Responsibility y cuándo usarlo?

**Respuesta correcta: Pasa request por cadena de handlers hasta que uno lo procese**

**Explicación:**
- Chain of Responsibility es un patrón de comportamiento
- Pasa un request por una cadena de handlers hasta que uno lo procese
- Desacopla el sender del receiver
- Permite especificar handlers dinámicamente

**Cuándo usarlo:**
- Múltiples objetos pueden manejar el request
- Quieres desacoplar sender y receiver
- Quieres especificar handlers dinámicamente
- No sabes a priori qué handler procesará el request

**Ejemplos reales:**
- Middleware en Express.js
- Manejo de excepciones
- Validación de permisos en cascada

---

### 1.6. ¿Qué es el patrón Memento y cuándo usarlo?

**Respuesta correcta: Captura y restaura estado interno de objeto sin violar encapsulación**

**Explicación:**
- Memento es un patrón de comportamiento
- Captura y restaura el estado interno de un objeto sin violar encapsulación
- Permite guardar y restaurar estados anteriores
- Útil para undo/redo

**Componentes:**
- **Originator**: Objeto cuyo estado se guarda
- **Memento**: Almacena el estado del Originator
- **Caretaker**: Guarda y restaura Mementos

**Cuándo usarlo:**
- Necesitas undo/redo
- Quieres guardar snapshots de estado
- No quieres exponer detalles internos
- Necesitas historial de cambios

**Ejemplos reales:**
- Editor de texto con historial de cambios
- Juegos con guardado de estado
- Sistemas de versionado

---

## 2. Anti-patterns

### 2.1. ¿Es Spaghetti Code un anti-patrón?

**Respuesta correcta: SÍ**

**Explicación:**
- Spaghetti Code es un anti-patrón reconocido
- Código desorganizado y difícil de seguir
- Flujo de control confuso
- Sin estructura clara

**Cómo identificarlo:**
- Flujo de control confuso
- Goto statements o equivalentes
- Código sin estructura clara
- Funciones/métodos muy largos
- Lógica anidada excesiva

**Cómo resolverlo:**
- Refactorizar en funciones/métodos pequeños
- Aplicar principios SOLID
- Mejorar nombres de variables y métodos
- Extraer lógica compleja
- Aplicar design patterns apropiados

---

### 2.2. ¿Qué es el anti-patrón Poltergeist?

**Respuesta correcta: Clase temporal que solo existe para invocar métodos en otra clase y luego desaparece**

**Explicación:**
- Poltergeist es un anti-patrón de programación orientada a objetos
- También conocido como "Ghost Class" o "Disposable Object"
- Clase que solo existe para hacer una llamada y luego desaparece
- Sin estado propio, solo delega

**Cómo identificarlo:**
- Clase con un solo método que llama a otro objeto
- Objeto que se crea, hace una llamada y se descarta inmediatamente
- Clase que no tiene responsabilidad real propia
- Objeto que solo actúa como "mensajero" temporal

**Problemas que causa:**
- Overhead innecesario (creación/destrucción de objetos)
- Código confuso (objetos que aparecen y desaparecen)
- Dificulta testing (objetos temporales difíciles de mockear)
- Viola principios SOLID

**Cómo resolverlo:**
- Eliminar la clase intermedia: llamar directamente al objeto real
- Usar Dependency Injection: inyectar la dependencia en lugar de crearla
- Mover la lógica: integrar la funcionalidad en la clase que la necesita
- Usar métodos estáticos: si no necesita estado, usar métodos estáticos

---

### 2.3. ¿Los principios SOLID y las mejores prácticas previenen incurrir en anti-patrones?

**Respuesta correcta: TRUE (con matices importantes)**

**Explicación:**
- Los principios SOLID y las mejores prácticas ayudan a prevenir anti-patrones
- No son una garantía absoluta, pero reducen significativamente la probabilidad

**Cómo SOLID previene anti-patrones:**
- **SRP**: Previene God Object, Spaghetti Code
- **OCP**: Previene código rígido difícil de extender
- **LSP**: Previene violaciones de contratos
- **ISP**: Previene interfaces monolíticas
- **DIP**: Previene acoplamiento fuerte, dependencias ocultas

**Matices importantes:**
- SOLID ayuda, pero no garantiza al 100%
- Requiere aplicación correcta y contexto apropiado
- Otros factores: presión de tiempo, falta de code reviews, etc.

---

## 3. Principios SOLID y Conceptos OOP

### 3.1. ¿La cohesión se refiere a qué tan relacionados o dependientes son dos o más clases/módulos entre sí?

**Respuesta correcta: FALSO**

**Explicación:**
- **Cohesión**: Qué tan relacionadas están las responsabilidades dentro de una clase/módulo
- **Acoplamiento (Coupling)**: Qué tan dependientes son las clases/módulos entre sí

**Diferencias clave:**

| Concepto | Definición | Enfoque |
|----------|------------|---------|
| **Cohesión** | Qué tan relacionadas están las responsabilidades dentro de una clase | Dentro de una clase/módulo |
| **Acoplamiento** | Qué tan dependientes son las clases/módulos entre sí | Entre clases/módulos |

**Ejemplo:**
```java
// ALTA COHESIÓN: Todos los métodos están relacionados
class User {
    void validate() { ... }
    void save() { ... }
    void update() { ... }
}

// BAJA COHESIÓN: Métodos no relacionados
class GodClass {
    void calculateTax() { ... }
    void sendEmail() { ... }
    void processPayment() { ... }
}
```

---

## 4. Git

### 4.1. ¿`git status` muestra los cambios entre commits?

**Respuesta correcta: FALSO**

**Explicación:**
- `git status` NO muestra los cambios entre commits
- Muestra el estado actual del repositorio

**Qué muestra `git status`:**
- Archivos modificados en el working directory (no staged)
- Archivos en staging area (staged para commit)
- Archivos sin seguimiento (untracked)
- Estado de la branch actual (ahead/behind del remoto)
- Archivos con conflictos de merge (si los hay)

**Qué NO muestra:**
- Diferencias entre commits específicos
- Contenido de los cambios (solo lista archivos)
- Comparaciones entre commits
- Historial de cambios

**Comandos para ver cambios entre commits:**
- `git diff` - Diferencias en working directory vs staging/HEAD
- `git diff commit1 commit2` - Diferencias entre dos commits específicos
- `git log -p` - Historial con diferencias

---

### 4.2. En Git Flow, ¿con qué ramas debe mergearse un hotfix branch?

**Respuesta correcta: main y develop**

**Explicación:**
- Un hotfix branch se crea desde `main` (no desde `develop`)
- Debe mergearse tanto a `main` como a `develop`

**Flujo del hotfix branch:**
```
main (producción)
  ↓ (crear hotfix)
hotfix/1.2.1
  ↓ (merge a)
main (producción) ✅
develop (desarrollo) ✅
```

**Pasos del proceso:**
1. Crear hotfix desde `main`: `git checkout main && git checkout -b hotfix/1.2.1`
2. Hacer la corrección en el hotfix branch
3. Merge a `main` (producción): `git checkout main && git merge hotfix/1.2.1 && git tag v1.2.1`
4. Merge a `develop` (desarrollo): `git checkout develop && git merge hotfix/1.2.1`
5. Eliminar el hotfix branch: `git branch -d hotfix/1.2.1`

**Por qué mergear a ambas ramas:**
- **Merge a `main`**: La corrección debe estar en producción
- **Merge a `develop`**: Mantener desarrollo sincronizado con la corrección

---

## 5. Testing

### 5.1. ¿Statement Coverage mide el porcentaje de statements (líneas) de código que se ejecutan cuando un test corre?

**Respuesta correcta: TRUE**

**Explicación:**
- Statement Coverage mide el porcentaje de statements (declaraciones/líneas) de código que se ejecutan durante los tests
- Indica qué líneas del código fueron ejecutadas

**Definición según los documentos:**
> "Statement Coverage: Porcentaje de líneas ejecutadas"

**Tipos de Code Coverage:**
1. **Statement Coverage**: Porcentaje de líneas ejecutadas
2. **Branch Coverage**: Porcentaje de ramas (if/else) probadas
3. **Path Coverage**: Porcentaje de caminos de ejecución probados
4. **Function Coverage**: Porcentaje de funciones llamadas

**Importante:**
- Coverage alto no garantiza calidad
- Meta común: 80% coverage
- Calidad > cantidad

---

### 5.2. ¿Method/Function Coverage mide el código contando el número de métodos llamados cuando un test corre?

**Respuesta correcta: TRUE**

**Explicación:**
- Method/Function Coverage mide el porcentaje de métodos/funciones que fueron llamados durante los tests
- Cuenta cuántas funciones/métodos fueron invocados

**Definición según los documentos:**
> "Function Coverage: Porcentaje de funciones llamadas"

**Ejemplo:**
```java
public class Calculator {
    public int add(int a, int b) {        // Método 1
        return a + b;
    }
    
    public int subtract(int a, int b) {  // Método 2
        return a - b;
    }
    
    public int multiply(int a, int b) {  // Método 3
        return a * b;
    }
}

// Test que solo llama a add()
@Test
public void testAdd() {
    Calculator calc = new Calculator();
    int result = calc.add(5, 3);
    assertEquals(8, result);
}
// Function Coverage: 1/3 = 33.3%
// (Solo se llamó add(), no subtract() ni multiply())
```

---

### 5.3. ¿Branch Coverage mide si un test suite ejecuta las ramas desde puntos de decisión en el código?

**Respuesta correcta: TRUE**

**Explicación:**
- Branch Coverage mide si un test suite ejecuta las ramas desde puntos de decisión en el código
- Verifica que se cubran las ramas de if/else, switch, etc.
- Mide el porcentaje de ramas probadas

**Definición según los documentos:**
> "Branch Coverage: Porcentaje de ramas (if/else) probadas"

**Ejemplo:**
```java
public String checkValue(int value) {
    if (value > 0) {           // Punto de decisión 1
        return "positive";     // Rama 1 (true)
    } else {
        return "negative";     // Rama 2 (false)
    }
}

// Test 1: Solo cubre la rama true
@Test
public void testPositive() {
    String result = checkValue(5);
    assertEquals("positive", result);
}
// Branch Coverage: 1/2 = 50%
// (Solo ejecutó la rama true, no la rama false)

// Test 2: Cubre ambas ramas
@Test
public void testNegative() {
    String result = checkValue(-5);
    assertEquals("negative", result);
}
// Branch Coverage: 2/2 = 100%
// (Ejecutó ambas ramas: true y false)
```

**Puntos de decisión comunes:**
- if/else
- switch/case
- while/for (condiciones)
- operadores ternarios (?:)
- condiciones en loops

---

### 5.4. ¿Un test stub es una buena solución cuando el objeto o procedimiento real del que depende la unidad bajo prueba no está disponible?

**Respuesta correcta: TRUE**

**Explicación:**
- Un Stub es una buena solución cuando la dependencia real no está disponible
- Es uno de los casos de uso principales de los Test Doubles

**Definición de Stub:**
- Tipo de Test Double
- Proporciona respuestas predefinidas
- No verifica comportamiento (solo proporciona datos)

**Cuándo usar Stub:**
1. **Dependencia no disponible**: API externa no accesible, BD no configurada, servicio externo no disponible
2. **Dependencia lenta**: Base de datos lenta, llamadas de red, operaciones costosas
3. **Aislamiento**: Aislar la unidad bajo prueba, evitar efectos secundarios, tests más rápidos y predecibles

**Ejemplo:**
```java
// ❌ PROBLEMA: Dependencia real no disponible
public class PaymentService {
    private ExternalPaymentAPI api;  // API externa no disponible en tests
    
    public boolean processPayment(double amount) {
        return api.charge(amount);  // ❌ Falla en tests
    }
}

// ✅ SOLUCIÓN: Usar Stub
public interface PaymentAPI {
    boolean charge(double amount);
}

public class PaymentService {
    private PaymentAPI api;  // Dependencia inyectada
    
    public PaymentService(PaymentAPI api) {
        this.api = api;
    }
    
    public boolean processPayment(double amount) {
        return api.charge(amount);
    }
}

// Stub para tests
public class PaymentAPIStub implements PaymentAPI {
    @Override
    public boolean charge(double amount) {
        // Respuesta predefinida - no verifica comportamiento
        return amount > 0;  // Simula respuesta exitosa
    }
}
```

**Stub vs Mock:**
- **Stub**: Proporciona datos/respuestas predefinidas
- **Mock**: Verifica comportamiento e interacciones

---

## 6. ES6/TypeScript

### 6.1. ¿Cuándo se usan rest parameters en ES6/TypeScript?

**Respuesta correcta: Cuando el número de parámetros no es conocido**

**Explicación:**
- Rest parameters se usan cuando no conoces de antemano cuántos argumentos recibirá la función
- Permiten pasar un número variable de argumentos a una función
- Se definen con `...` antes del nombre del parámetro
- Los argumentos se recopilan en un array

**Sintaxis:**
```javascript
// ES6/JavaScript
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}

// TypeScript
function sum(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b, 0);
}
```

**Cuándo usar Rest Parameters:**
- ✅ Número de parámetros desconocido
- ❌ Tipo de parámetros desconocido (no es el propósito principal)
- ❌ Función asíncrona (no relacionado)
- ❌ Función recursiva (no relacionado)
- ❌ Paso por referencia (no relacionado)

**Ejemplo práctico:**
```javascript
// ✅ USO CORRECTO: Número de parámetros desconocido
function calculateAverage(...numbers) {
    const sum = numbers.reduce((a, b) => a + b, 0);
    return sum / numbers.length;
}

calculateAverage(1, 2, 3);        // 3 argumentos
calculateAverage(1, 2, 3, 4, 5);  // 5 argumentos
calculateAverage(10);             // 1 argumento
```

**Rest Parameters vs Arguments:**
- **Rest Parameters**: Array real, métodos de array disponibles, funciona en arrow functions, tipado fuerte en TypeScript
- **Arguments**: Objeto array-like, necesita conversión, no funciona en arrow functions, sin tipado

---

## 7. CSS Methodologies

### 7.1. ¿Cuál de las siguientes es una metodología CSS existente?

**Opciones:** BEM, ficss, icss, kess, SASS, sasssç

**Respuesta correcta: BEM**

**Explicación:**
- **BEM** es una metodología CSS existente
- **SASS/SCSS** son preprocesadores CSS, NO metodologías
- **ficss, icss, kess** no son metodologías conocidas

**Metodologías CSS (organización de código):**
- **BEM** (Block Element Modifier) ✅
- **OOCSS** (Object-Oriented CSS)
- **SMACSS** (Scalable and Modular Architecture for CSS)

**Preprocesadores CSS (herramientas):**
- **SASS/SCSS** (NO son metodologías)
- **Less**
- **Stylus**

**BEM - Estructura:**
```css
/* Block */
.card { }

/* Element */
.card__header { }
.card__body { }
.card__footer { }

/* Modifier */
.card--highlighted { }
.card__header--large { }
```

**Definición según los documentos:**
> "BEM (Block Element Modifier) es metodología CSS para organizar estilos. Estructura: Block (componente independiente como `button`), Element (parte del bloque como `button__icon`), Modifier (variante como `button--primary`). Ejemplo: `.card__header--highlighted`."

---

## 8. Scrum

### 8.1. ¿Qué combina tanto el proceso (planning, design, construction) como el producto (builds u otras estructuras)?

**Respuesta correcta: Sprint Backlog**

**Explicación:**
- El Sprint Backlog combina tanto el proceso como el producto
- Es el artefacto que incluye el plan de acción (proceso) y los ítems seleccionados (producto)

**Componentes del Sprint Backlog:**
1. **Sprint Goal**: Objetivo único para el Sprint
2. **Ítems del Product Backlog seleccionados**: Para el Sprint
3. **Plan de acción**: Cómo los Developers pretenden trabajar juntos para lograr el Sprint Goal

**Cómo combina proceso y producto:**

**Proceso (planning, design, construction):**
- Plan de acción: cómo se hará el trabajo
- Planning: definición del Sprint Goal
- Design: selección y diseño de ítems
- Construction: plan para construir el incremento

**Producto (artefacto):**
- Sprint Goal: objetivo del Sprint
- Ítems seleccionados: trabajo a realizar
- Resultado tangible: plan visible y transparente

**Sprint Planning - Los tres temas:**
1. ¿Por qué es valioso este Sprint? → Sprint Goal (planning)
2. ¿Qué se puede hacer en este Sprint? → Selección de ítems (design)
3. ¿Cómo se hará el trabajo? → Plan de acción (construction)

**Resultado:** Sprint Backlog con Sprint Goal

---

## 9. Docker

### 9.1. ¿Existen los comandos `docker kill`, `docker exec`, y `docker compose`?

**Respuesta correcta: SÍ, todos existen**

**Explicación:**

**1. `docker kill`**
- Existe: Fuerza la detención de un contenedor
- Envía SIGKILL (sin limpieza)
- Usar cuando el contenedor no responde a `docker stop`

**2. `docker exec`**
- Existe: Ejecuta comandos en un contenedor en ejecución
- Útil para debugging y administración
- Ejemplo: `docker exec -it container_name bash`

**3. `docker compose`**
- Existe: Orquesta múltiples contenedores
- Dos formas: `docker-compose` (standalone) o `docker compose` (plugin moderno)
- Gestiona servicios relacionados mediante archivo `docker-compose.yml`

**Diferencia: `docker stop` vs `docker kill`**

| Comando | Qué hace | Señal |
|---------|----------|-------|
| `docker stop` | Detiene contenedor suavemente | SIGTERM (permite limpieza) |
| `docker kill` | Fuerza detención inmediata | SIGKILL (sin limpieza) |

**Comandos principales de Docker según los documentos:**
- `docker build` - Construir imágenes
- `docker run` - Ejecutar contenedores
- `docker ps` - Listar contenedores
- `docker stop` - Detener contenedores
- `docker exec` - Ejecutar comandos en contenedores en ejecución
- `docker logs` - Ver logs de contenedores
- `docker compose` - Orquestación de múltiples contenedores

**Docker Compose - Versiones:**
```bash
# Forma antigua (standalone)
docker-compose up
docker-compose down

# Forma moderna (plugin)
docker compose up
docker compose down
```

---

## Resumen de Conceptos Clave

### Design Patterns
- **Decorator**: Extiende funcionalidad sin herencia
- **Bridge**: Desacopla abstracción de implementación
- **Singleton**: Instancia única + acceso global
- **Factory Method**: Subclases deciden qué crear
- **Chain of Responsibility**: Pasa request por cadena
- **Memento**: Captura y restaura estado

### Anti-patterns
- **Spaghetti Code**: Código desorganizado
- **Poltergeist**: Objeto temporal innecesario
- **God Object**: Objeto que hace demasiado
- **Copy-Paste**: Duplicación excesiva

### Principios
- **Cohesión**: Responsabilidades dentro de una clase
- **Acoplamiento**: Dependencias entre clases
- **SOLID**: Previene anti-patrones (con matices)

### Git
- **git status**: Estado actual, NO cambios entre commits
- **Hotfix branches**: Merge a `main` y `develop`

### Testing
- **Statement Coverage**: Porcentaje de líneas ejecutadas
- **Branch Coverage**: Porcentaje de ramas probadas
- **Function Coverage**: Porcentaje de funciones llamadas
- **Stub**: Solución cuando dependencia no está disponible

### ES6/TypeScript
- **Rest Parameters**: Cuando número de parámetros es desconocido

### CSS
- **BEM**: Metodología CSS (Block Element Modifier)
- **SASS/SCSS**: Preprocesadores (NO metodologías)

### Scrum
- **Sprint Backlog**: Combina proceso y producto

### Docker
- **docker kill**: Fuerza detención
- **docker exec**: Ejecuta comandos en contenedor
- **docker compose**: Orquestación de múltiples contenedores

---

## Notas Finales

Este documento resume todas las preguntas, respuestas y explicaciones cubiertas en la sesión de estudio. Cada concepto incluye:
- Respuesta correcta
- Explicación detallada
- Ejemplos prácticos cuando es relevante
- Comparaciones con conceptos relacionados
- Referencias a los documentos de estudio

---

*Documento generado para preparación de examen Software Engineer II - AssureSoft*
