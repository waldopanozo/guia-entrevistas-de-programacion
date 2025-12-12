# Cuestionario de Sesión - Senior Software Engineer 2025
## Preguntas y Respuestas de Preparación

**Fecha:** 2025  
**Nivel:** Senior Software Engineer  
**Formato:** Preguntas con respuestas y explicaciones detalladas

---

## 1. Kubernetes y Escalado

### ¿Kubernetes permite escalado horizontal?

**Respuesta: TRUE (Verdadero)**

**Explicación:**
Kubernetes permite escalado horizontal mediante:
- **Horizontal Pod Autoscaler (HPA)**: Escala automáticamente el número de pods según métricas (CPU, memoria, métricas personalizadas)
- **Deployment/ReplicaSet**: Escalado manual usando `kubectl scale`
- **Cluster Autoscaler**: Escala la infraestructura añadiendo o quitando nodos

El escalado horizontal es una característica fundamental de Kubernetes que permite que las aplicaciones se adapten automáticamente a la demanda.

---

## 2. Terraform y Orquestación

### ¿Terraform es un orquestador?

**Respuesta: FALSE (Falso)**

**Explicación:**
Terraform NO es un orquestador. Es una herramienta de **Infrastructure as Code (IaC)** que:
- Aprovisiona infraestructura (servidores, redes, bases de datos)
- Define recursos mediante código declarativo
- Gestiona el estado de la infraestructura

Los orquestadores (como Kubernetes, Docker Swarm) gestionan aplicaciones/contenedores en ejecución, coordinan despliegues y manejan escalado automático.

**Diferencia clave:**
- **Terraform**: Aprovisiona infraestructura (antes de desplegar aplicaciones)
- **Orquestador (Kubernetes)**: Gestiona aplicaciones en ejecución (después de aprovisionar)

---

## 3. Architecture By Implication en Nuevos Proyectos

### ¿El antipatrón "Architecture By Implication" es útil en un nuevo proyecto/dominio como un esfuerzo explícito para determinar si técnicas existentes son transferibles?

**Respuesta: FALSE (Falso)**

**Explicación:**
El antipatrón "Architecture By Implication" NO es útil en un nuevo proyecto/dominio, especialmente cuando se intenta determinar si técnicas existentes son transferibles.

**¿Qué es Architecture By Implication?**
- Arquitectura que existe pero no está documentada
- Decisiones arquitectónicas implícitas solo en código
- Falta de documentación de diseño

**Por qué NO es útil:**
- Dificulta evaluar transferibilidad de técnicas
- Aumenta riesgo de decisiones inconsistentes
- Impide aprendizaje y adaptación

**Lo que SÍ es útil:**
- Arquitectura explícita y documentada (diagramas C4, ADRs)
- Evaluación sistemática de técnicas existentes
- Comunicación clara del equipo

---

## 4. Antipatrones Más Comunes

### ¿Cuáles son los antipatrones más comunes?

**Respuesta: Lista completa de antipatrones**

**Antipatrones de Código (Nivel Básico/Intermedio):**

1. **God Object (Objeto Dios)**
   - Clase que hace demasiado, tiene demasiadas responsabilidades
   - Solución: Aplicar SRP, dividir en clases más pequeñas

2. **Spaghetti Code (Código Espagueti)**
   - Código desorganizado y difícil de seguir
   - Solución: Refactorizar en funciones pequeñas, aplicar SOLID

3. **Poltergeist (Fantasma)**
   - Clase temporal que solo existe para invocar métodos en otra clase
   - Solución: Eliminar clase intermedia, usar Dependency Injection

4. **Copy-Paste Programming**
   - Duplicación excesiva de código
   - Solución: Extraer código común, aplicar DRY

**Antipatrones de Arquitectura (Nivel Senior):**

5. **Architecture By Implication**
   - Arquitectura que existe pero no está documentada
   - Solución: Documentar arquitectura, crear ADRs

6. **Cover Your Assets (CYA)**
   - Documentación excesiva sin valor real
   - Solución: Documentar solo lo necesario y útil

7. **The Grand Old Duke of York**
   - Cambiar arquitectura innecesariamente sin razón
   - Solución: Evaluar necesidad real, medir impacto

8. **Stovepipe Enterprise / Stovepipe System**
   - Sistemas empresariales aislados que no se comunican
   - Solución: API Gateway, Event-driven architecture

---

## 5. Término "Depicts"

### ¿Qué significa "depicts"?

**Respuesta: Representa, muestra o ilustra visualmente**

**Explicación:**
"Depicts" significa **representar, mostrar o ilustrar visualmente**. En desarrollo de software y arquitectura, se usa para describir qué muestra un diagrama, documento o representación visual.

**Uso en contexto técnico:**
- "Este diagrama depicts la arquitectura del sistema"
- "El diagrama C4 depicts los componentes y sus relaciones"
- "El execution plan depicts cómo se ejecutará la query"

**Sinónimos:** Shows, Represents, Illustrates, Describes

---

## 6. Optimizador de RDBMS

### ¿Qué genera el optimizador de RDBMS y con qué trabaja?

**Respuesta: Execution Plan (Plan de Ejecución)**

**Explicación:**
El optimizador de RDBMS genera un **Execution Plan** que muestra cómo ejecutará una consulta SQL. Trabaja con:

1. **Índices**: Índices disponibles en las tablas
2. **Estadísticas de tablas**: Número de filas, distribución de datos
3. **Estructura de datos**: Esquema de tablas, relaciones
4. **Métricas de rendimiento**: Costo estimado de operaciones

**Qué muestra el Execution Plan:**
- Operaciones (table scan, index scan, join, sort)
- Índices usados
- Orden de operaciones
- Costo estimado
- Filas procesadas

**Cómo verlo:**
```sql
EXPLAIN ANALYZE
SELECT * FROM orders
WHERE customer_id = 123;
```

---

## 7. EXPLAIN con Diferentes Comandos SQL

### ¿Se puede usar EXPLAIN con SELECT, DELETE, DROP, INSERT, REPLACE y UPDATE?

**Respuesta: Parcialmente**

**Comandos que SÍ funcionan con EXPLAIN:**
- ✅ **SELECT**: Caso más común
- ✅ **INSERT**: Cuidado con EXPLAIN ANALYZE (ejecuta realmente)
- ✅ **UPDATE**: Cuidado con EXPLAIN ANALYZE (ejecuta realmente)
- ✅ **DELETE**: Cuidado con EXPLAIN ANALYZE (ejecuta realmente)

**Comandos que NO funcionan con EXPLAIN:**
- ❌ **DROP**: Es DDL, no genera execution plan
- ❌ **REPLACE**: No es estándar SQL (en MySQL usar variantes)

**Advertencia importante:**
Cuando usas `EXPLAIN ANALYZE` con comandos que modifican datos (INSERT, UPDATE, DELETE):
- ⚠️ La consulta se ejecuta realmente
- ⚠️ Los datos se modifican en la base de datos
- ⚠️ Usar con precaución en producción

---

## 8. Características de Big Data

### ¿Cuáles son las características que pueden describir Big Data?

**Respuesta: Las 5 V de Big Data**

1. **Volumen (Volume)**
   - Cantidad masiva de datos que supera capacidad de procesamiento tradicional
   - Ejemplos: terabytes, petabytes, exabytes

2. **Velocidad (Velocity)**
   - Rapidez con la que se generan y procesan los datos
   - Datos en tiempo real o casi en tiempo real

3. **Variedad (Variety)**
   - Diversidad de tipos y formatos de datos
   - Estructurados, semi-estructurados, no estructurados

4. **Veracidad (Veracity)**
   - Calidad y confiabilidad de los datos
   - Pueden contener inexactitudes o inconsistencias

5. **Valor (Value)**
   - Capacidad de extraer información útil y significativa
   - Transformar datos en conocimiento para decisiones

**Tecnologías relacionadas:**
- Hadoop (HDFS, MapReduce)
- Spark (procesamiento en memoria)
- Kafka (streaming)
- Cassandra/HBase (bases de datos distribuidas)

---

## 9. Data Mining

### ¿Qué campo analiza sistemáticamente y extrae información de conjuntos de datos demasiado grandes o complejos para aplicaciones tradicionales?

**Respuesta: Data Mining (Minería de Datos)**

**Explicación:**
Data Mining es la extracción sistemática de patrones y conocimiento de grandes conjuntos de datos que exceden la capacidad de procesamiento tradicional.

**Técnicas principales:**
1. **Clustering**: Agrupar datos similares (K-means)
2. **Classification**: Clasificar en categorías (Decision Trees, SVM)
3. **Association Rules**: Encontrar relaciones (Market Basket Analysis)
4. **Regression**: Predecir valores numéricos
5. **Anomaly Detection**: Detectar outliers o comportamientos anómalos

**Aplicaciones:**
- Marketing (segmentación, recomendaciones)
- Fraud Detection (detectar transacciones sospechosas)
- Sistemas de recomendación
- Análisis predictivo

---

## 10. Replicación Multi-Master

### ¿En replicación multi-master, las actualizaciones se envían a un master líder específico y luego a otros masters y sus slaves. El mayor beneficio es evitar conflictos transaccionales?

**Respuesta: FALSE (Falso)**

**Explicación:**
La replicación multi-master NO evita conflictos transaccionales. Los conflictos son uno de los principales desafíos de multi-master.

**Beneficios reales de multi-master:**
1. **Alta disponibilidad**: Si un master falla, otros siguen funcionando
2. **Balanceo de carga**: Distribución de escrituras entre múltiples masters
3. **Escritura distribuida**: Escritura en cualquier master

**Desafíos:**
- **Conflictos transaccionales**: Ocurren cuando el mismo dato se modifica en múltiples masters simultáneamente
- **Complejidad**: Requiere manejo cuidadoso de conflictos
- **Consistencia**: Trade-off entre consistencia y performance

**Estrategias de resolución de conflictos:**
- Timestamp-based (último gana)
- Application-level (lógica de negocio decide)
- Manual resolution
- Partitioning (dividir datos por región/usuario)

---

## 11. Execution Plan vs Índice

### ¿Una secuencia de pasos usada para acceder a datos en un RDBMS es un índice de base de datos?

**Respuesta: FALSE (Falso)**

**Explicación:**
Una secuencia de pasos para acceder a datos en un RDBMS NO es un índice. Es un **Execution Plan (Plan de Ejecución)**.

**Execution Plan:**
- Secuencia de pasos/operaciones
- Muestra cómo ejecutar una query
- Incluye orden de operaciones
- Indica qué índices se usan

**Índice:**
- Estructura de datos física
- Mejora velocidad de búsqueda
- Almacena valores ordenados + punteros
- Similar a un índice en un libro

**Relación:**
- El Execution Plan puede usar índices
- El plan muestra qué índices se utilizan
- Los índices mejoran el plan (evitan table scans)

---

## 12. Queries Sargable

### ¿Cuándo una condición o predicado en una query puede aprovechar un índice para acelerar la ejecución?

**Respuesta: Queries Sargable (Search ARGument ABLE)**

**Explicación:**
Una condición puede aprovechar un índice cuando la query es **sargable**: la columna en la condición está indexada y la condición permite usar el índice directamente.

**Condiciones SARGABLE (pueden usar índices):**
- ✅ Igualdad (=): `WHERE id = 123`
- ✅ Rangos (>, <, >=, <=): `WHERE price > 100`
- ✅ BETWEEN: `WHERE date BETWEEN ...`
- ✅ IN: `WHERE status IN (...)`
- ✅ LIKE con prefijo: `WHERE name LIKE 'A%'`

**Condiciones NO-SARGABLE (NO pueden usar índices):**
- ❌ Funciones en columna: `WHERE YEAR(date) = 2020`
- ❌ LIKE con wildcard inicial: `WHERE name LIKE '%text'`
- ❌ Operaciones matemáticas: `WHERE price * 1.1 > 100`
- ❌ Comparación con NULL usando =: `WHERE email = NULL`

**Ejemplo:**
```sql
-- ❌ NO-SARGABLE
SELECT * FROM orders WHERE YEAR(OrderDate) = 2020;

-- ✅ SARGABLE
SELECT * FROM orders 
WHERE OrderDate >= '2020-01-01' AND OrderDate < '2021-01-01';
```

---

## 13. GRASP Information Expert

### ¿Qué principio se usa para determinar dónde delegar responsabilidades como métodos, campos compuestos, etc.?

**Respuesta: GRASP Information Expert (Experto en Información)**

**Explicación:**
**Information Expert** es un principio de GRASP (General Responsibility Assignment Software Patterns) que determina dónde delegar responsabilidades.

**Principio:**
Asigna una responsabilidad a la clase que tiene la información necesaria para cumplirla.

**Regla:**
La clase que tiene los datos necesarios para realizar una operación debe tener el método que realiza esa operación.

**Ejemplo:**
```java
// ✅ Correcto (sigue Information Expert)
class Order {
    private List<Item> items;
    
    // Order tiene la información (items), 
    // por lo tanto debe tener el método
    public double calculateTotal() {
        return items.stream()
            .mapToDouble(item -> item.getPrice() * item.getQuantity())
            .sum();
    }
}
```

**Beneficios:**
- Mejor encapsulación
- Bajo acoplamiento
- Alta cohesión
- Código más mantenible

---

## 14. Factory Method Pattern

### ¿Qué design pattern muestra buen uso cuando las subclases de una clase dada pueden decidir qué objetos la clase puede crear?

**Respuesta: Factory Method (Método de Fábrica)**

**Explicación:**
**Factory Method** es un patrón creacional que permite que las subclases decidan qué clase instanciar.

**Características:**
- Las subclases deciden qué clase instanciar
- Encapsula la creación de objetos
- Desacopla la creación del uso
- Define interfaz para crear objetos, pero delega instanciación a subclases

**Ejemplo:**
```java
// Abstract Creator
abstract class DocumentCreator {
    // Factory Method - las subclases lo implementan
    abstract Document createDocument();
    
    public void newDocument() {
        Document doc = createDocument();
        doc.open();
    }
}

// Concrete Creators - Subclases deciden qué crear
class PDFCreator extends DocumentCreator {
    public Document createDocument() {
        return new PDFDocument(); // Subclase decide
    }
}
```

**Cuándo usarlo:**
- No conoces el tipo exacto hasta runtime
- Quieres desacoplar creación de uso
- Lógica compleja de creación
- Centralizar la creación de objetos

**Variantes de Factory:**
- **Simple Factory**: Método que crea objetos según parámetro
- **Factory Method**: Subclases deciden qué clase instanciar ✅
- **Abstract Factory**: Familia de objetos relacionados

---

## Resumen de Conceptos Clave

### Kubernetes
- ✅ Permite escalado horizontal mediante HPA, Deployment/ReplicaSet, Cluster Autoscaler

### Terraform
- ❌ NO es orquestador, es herramienta de IaC

### Antipatrones
- Architecture By Implication: NO útil en nuevos proyectos
- Antipatrones comunes: God Object, Spaghetti Code, Poltergeist, CYA, etc.

### Big Data
- 5 V: Volumen, Velocidad, Variedad, Veracidad, Valor

### Data Mining
- Extracción sistemática de patrones de grandes conjuntos de datos
- Técnicas: Clustering, Classification, Association Rules, Regression, Anomaly Detection

### Replicación Multi-Master
- Beneficios: Alta disponibilidad, balanceo de carga, escritura distribuida
- Desafíos: Conflictos transaccionales (NO los evita)

### Execution Plan vs Índice
- Execution Plan: Secuencia de pasos
- Índice: Estructura de datos física

### Queries Sargable
- Pueden usar índices cuando no hay funciones en columnas, no hay wildcards iniciales, etc.

### GRASP Information Expert
- Asigna responsabilidad a la clase que tiene la información necesaria

### Factory Method
- Subclases deciden qué clase instanciar

---

**Notas:**
- Todas las respuestas están basadas en los documentos de estudio de AssureSoft para Senior Software Engineer
- Las explicaciones incluyen referencias a los documentos cuando están disponibles
- Este cuestionario cubre temas de Kubernetes, Bases de Datos, Big Data, Design Patterns, y más

