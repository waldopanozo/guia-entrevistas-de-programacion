# 100 Preguntas y Respuestas - Examen Técnico 360

## Agile Software Development

### 1. ¿Qué es Scrum y cuáles son sus principales componentes?
**Respuesta:** Scrum es una metodología ágil para desarrollo de software. Sus componentes principales son:
- **Roles**: Product Owner (define requisitos), Scrum Master (facilita proceso), Development Team (desarrolla)
- **Artefactos**: Product Backlog (lista de requisitos), Sprint Backlog (tareas del sprint), Increment (producto entregable)
- **Eventos**: Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective
- **Valores**: Compromiso, Coraje, Enfoque, Apertura, Respeto

### 2. ¿Cuál es la diferencia entre Scrum y Kanban?
**Respuesta:** 
- **Scrum**: Trabaja en sprints fijos (1-4 semanas), roles definidos, eventos estructurados
- **Kanban**: Flujo continuo sin sprints, visualización en tablero, límite de trabajo en progreso (WIP), más flexible

### 3. ¿Qué es Continuous Integration (CI) y cuáles son sus beneficios?
**Respuesta:** CI es la práctica de integrar cambios de código frecuentemente (varias veces al día) en un repositorio compartido. Beneficios:
- Detección temprana de errores
- Reducción de conflictos de merge
- Mejora de calidad del código
- Feedback rápido al desarrollador
- Despliegues más confiables

### 4. ¿Qué elementos son necesarios para configurar CI?
**Respuesta:** 
- Servidor de CI (Jenkins, GitLab CI, GitHub Actions)
- Repositorio de código fuente
- Build automatizado
- Suite de tests automatizados
- Notificaciones de estado
- Integración con herramientas de despliegue

### 5. ¿Qué es Continuous Delivery (CD) y cómo se diferencia de Continuous Deployment?
**Respuesta:** 
- **Continuous Delivery**: El código está siempre listo para desplegarse a producción, pero requiere aprobación manual
- **Continuous Deployment**: El código se despliega automáticamente a producción sin intervención manual

### 6. ¿Cuáles son los valores del Manifiesto Ágil?
**Respuesta:** 
1. Individuos e interacciones sobre procesos y herramientas
2. Software funcionando sobre documentación exhaustiva
3. Colaboración con el cliente sobre negociación contractual
4. Respuesta al cambio sobre seguir un plan

### 7. ¿Qué es Pair Programming y cuáles son sus beneficios?
**Respuesta:** Pair Programming es una práctica donde dos desarrolladores trabajan juntos en el mismo código, uno escribe (driver) y otro revisa (navigator). Beneficios:
- Mejor calidad de código
- Compartir conocimiento
- Menos bugs
- Mejor diseño de código
- Mejor comunicación

### 8. ¿Qué es Test Driven Development (TDD)?
**Respuesta:** TDD es una metodología donde primero escribes el test (que falla), luego escribes el código mínimo para que pase, y finalmente refactorizas. Ciclo: Red → Green → Refactor.

---

## Algorithms and Data Structures

### 9. ¿Qué es la notación Big O y para qué se usa?
**Respuesta:** Big O describe la complejidad temporal o espacial de un algoritmo en el peor caso. Ejemplos:
- O(1): Constante - Acceso a array por índice
- O(log n): Logarítmico - Búsqueda binaria
- O(n): Lineal - Recorrer array
- O(n log n): Linealítmico - Merge sort
- O(n²): Cuadrático - Bubble sort
- O(2ⁿ): Exponencial - Fibonacci recursivo

### 10. ¿Cuál es la diferencia entre un Stack y una Queue?
**Respuesta:** 
- **Stack**: LIFO (Last In First Out) - El último elemento agregado es el primero en salir. Operaciones: push, pop
- **Queue**: FIFO (First In First Out) - El primer elemento agregado es el primero en salir. Operaciones: enqueue, dequeue

### 11. ¿Qué es una Hash Table y cuál es su complejidad promedio?
**Respuesta:** Una Hash Table es una estructura de datos que mapea claves a valores usando una función hash. Complejidad promedio:
- Inserción: O(1)
- Búsqueda: O(1)
- Eliminación: O(1)
- En el peor caso (colisiones): O(n)

### 12. ¿Cuál es la diferencia entre Quick Sort y Merge Sort?
**Respuesta:** 
- **Quick Sort**: 
  - Complejidad promedio: O(n log n), peor caso: O(n²)
  - In-place (no requiere memoria extra)
  - No estable
  - Mejor para arrays pequeños
  
- **Merge Sort**: 
  - Complejidad: O(n log n) siempre
  - Requiere memoria extra O(n)
  - Estable (mantiene orden relativo)
  - Mejor para arrays grandes

### 13. ¿Qué es un árbol binario y cuáles son sus tipos?
**Respuesta:** Un árbol binario es una estructura donde cada nodo tiene máximo 2 hijos. Tipos:
- **Árbol binario de búsqueda**: Valores menores a la izquierda, mayores a la derecha
- **Árbol balanceado**: Altura mínima (AVL, Red-Black)
- **Heap**: Árbol completo con propiedad heap (max-heap o min-heap)

---

## Databases

### 14. ¿Qué es la normalización y cuáles son sus formas normales?
**Respuesta:** Normalización es el proceso de organizar datos para reducir redundancia. Formas normales:
- **1NF**: Cada columna contiene valores atómicos (no múltiples valores)
- **2NF**: 1NF + todas las columnas no clave dependen completamente de la clave primaria
- **3NF**: 2NF + no hay dependencias transitivas (columnas no clave no dependen de otras columnas no clave)
- **BCNF**: Versión más estricta de 3NF

### 15. ¿Cuál es la diferencia entre DDL, DML, DQL y DCL?
**Respuesta:** 
- **DDL (Data Definition Language)**: Define estructura (CREATE, ALTER, DROP, TRUNCATE)
- **DML (Data Manipulation Language)**: Manipula datos (INSERT, UPDATE, DELETE)
- **DQL (Data Query Language)**: Consulta datos (SELECT)
- **DCL (Data Control Language)**: Controla acceso (GRANT, REVOKE)

### 16. ¿Qué es un índice en base de datos y cuándo se debe usar?
**Respuesta:** Un índice es una estructura que mejora la velocidad de búsqueda. Se debe usar cuando:
- Columnas se usan frecuentemente en WHERE
- Columnas se usan en JOINs
- Columnas se usan para ORDER BY

**Desventajas**: Aumentan espacio y tiempo de escritura (INSERT/UPDATE)

### 17. ¿Qué es un JOIN y cuáles son sus tipos?
**Respuesta:** JOIN combina filas de dos o más tablas. Tipos:
- **INNER JOIN**: Solo filas que coinciden en ambas tablas
- **LEFT JOIN**: Todas las filas de la tabla izquierda + coincidencias
- **RIGHT JOIN**: Todas las filas de la tabla derecha + coincidencias
- **FULL OUTER JOIN**: Todas las filas de ambas tablas
- **CROSS JOIN**: Producto cartesiano (todas las combinaciones)

### 18. ¿Qué es NoSQL y cuándo usarlo en lugar de SQL?
**Respuesta:** NoSQL son bases de datos no relacionales. Usar cuando:
- Datos no estructurados o semi-estructurados
- Necesitas escalabilidad horizontal
- Alta velocidad de escritura
- Datos grandes (Big Data)
- Esquema flexible

**Tipos**: Documentos (MongoDB), Clave-Valor (Redis), Columnas (Cassandra), Grafos (Neo4j)

### 19. ¿Qué es un Execution Plan y por qué es importante?
**Respuesta:** Un Execution Plan muestra cómo el motor de base de datos ejecutará una consulta SQL. Es importante porque:
- Identifica cuellos de botella
- Muestra uso de índices
- Permite optimizar consultas
- Detecta table scans costosos
- Ayuda a mejorar rendimiento

### 20. ¿Qué es la replicación de bases de datos?
**Respuesta:** Replicación es copiar datos de una base de datos a otra para:
- Alta disponibilidad
- Balanceo de carga
- Backup en tiempo real
- Reducción de latencia geográfica

**Tipos**: Master-Slave, Master-Master, Multi-master

---

## Object Oriented Programming

### 21. ¿Cuáles son los cuatro pilares de la programación orientada a objetos?
**Respuesta:** 
1. **Encapsulación**: Ocultar detalles internos, exponer solo interfaz pública
2. **Herencia**: Reutilizar código de clases padre
3. **Polimorfismo**: Múltiples formas de ejecutar (sobrecarga, sobrescritura)
4. **Abstracción**: Simplificar complejidad mediante clases abstractas/interfaces

### 22. ¿Qué son los principios SOLID? Explica cada uno.
**Respuesta:** 
- **S**ingle Responsibility: Una clase debe tener una sola razón para cambiar
- **O**pen/Closed: Abierto a extensión, cerrado a modificación
- **L**iskov Substitution: Los objetos de superclase deben ser reemplazables por objetos de subclase
- **I**nterface Segregation: Muchas interfaces específicas mejor que una general
- **D**ependency Inversion: Depender de abstracciones, no de implementaciones concretas

### 23. ¿Qué es el principio DRY y por qué es importante?
**Respuesta:** DRY (Don't Repeat Yourself) significa no duplicar código. Importante porque:
- Reduce mantenimiento
- Facilita cambios (un solo lugar)
- Reduce bugs
- Mejora legibilidad
- Promueve reutilización

### 24. ¿Qué es un Design Pattern y cuáles son sus categorías?
**Respuesta:** Design Pattern es una solución reutilizable a problemas comunes de diseño. Categorías:
- **Creacionales**: Creación de objetos (Factory, Singleton, Builder)
- **Estructurales**: Composición de clases (Adapter, Decorator, Facade)
- **Comportamiento**: Comunicación entre objetos (Observer, Strategy, Command)

### 25. ¿Qué es el patrón Singleton y cuándo usarlo?
**Respuesta:** Singleton asegura que una clase tenga solo una instancia. Usar cuando:
- Necesitas una única instancia global
- Control de acceso a recursos compartidos
- Logging, configuración, conexiones de BD

**Problemas**: Dificulta testing, puede causar acoplamiento fuerte

### 26. ¿Qué es un Anti-pattern y da ejemplos?
**Respuesta:** Anti-pattern es una solución común pero inefectiva a un problema recurrente. Ejemplos:
- **God Object**: Objeto que hace demasiado
- **Spaghetti Code**: Código desorganizado
- **Copy-Paste Programming**: Duplicación excesiva
- **Golden Hammer**: Usar misma solución para todo
- **Premature Optimization**: Optimizar antes de medir

### 27. ¿Qué es la inyección de dependencias?
**Respuesta:** Inyección de dependencias es pasar dependencias a un objeto en lugar de que el objeto las cree. Beneficios:
- Desacoplamiento
- Facilita testing (mocks)
- Flexibilidad
- Cumple Dependency Inversion Principle

---

## Scripting y Source Control

### 28. ¿Qué es Git y cuál es la diferencia con otros sistemas de control de versiones?
**Respuesta:** Git es un sistema de control de versiones distribuido. Diferencias:
- **Centralizado (SVN)**: Un solo repositorio central
- **Distribuido (Git)**: Cada desarrollador tiene copia completa del repositorio
- Git permite trabajar offline
- Git es más rápido para operaciones locales
- Git maneja mejor branches y merges

### 29. ¿Qué es un branch en Git y cuáles son las estrategias comunes?
**Respuesta:** Branch es una línea de desarrollo independiente. Estrategias:
- **Git Flow**: Branches principales (main, develop) + feature, release, hotfix
- **GitHub Flow**: Branch simple, merge a main después de review
- **Feature Branch**: Una branch por feature, merge a main
- **Trunk-based**: Desarrollo directo en main con feature flags

### 30. ¿Cómo resuelves un merge conflict en Git?
**Respuesta:** 
1. Identificar archivos con conflictos (`git status`)
2. Abrir archivos y buscar marcadores `<<<<<<<`, `=======`, `>>>>>>>`
3. Decidir qué código mantener (o combinar ambos)
4. Eliminar marcadores de conflicto
5. `git add` archivos resueltos
6. `git commit` para completar merge

### 31. ¿Qué es un rebase y cuándo usarlo vs merge?
**Respuesta:** Rebase reaplica commits de una branch sobre otra, creando historia lineal. 

**Rebase cuando**: 
- Quieres historia limpia y lineal
- Trabajas en feature branch personal

**Merge cuando**: 
- Trabajas en branch compartida
- Quieres preservar historia completa

**Regla**: No hacer rebase de commits ya pusheados a repositorio compartido

### 32. ¿Qué comandos de Bash son esenciales para desarrollo?
**Respuesta:** 
- `ls`, `cd`, `pwd`: Navegación
- `grep`, `find`: Búsqueda
- `cat`, `less`, `head`, `tail`: Visualización
- `chmod`, `chown`: Permisos
- `ps`, `top`, `kill`: Procesos
- `tar`, `zip`: Compresión
- `curl`, `wget`: Descargas
- `ssh`, `scp`: Conexiones remotas

---

## Software Testing

### 33. ¿Qué es el patrón AAA en testing?
**Respuesta:** AAA (Arrange-Act-Assert) estructura tests en tres fases:
- **Arrange**: Preparar datos y objetos necesarios
- **Act**: Ejecutar la acción a probar
- **Assert**: Verificar que el resultado es el esperado

### 34. ¿Cuál es la diferencia entre Unit, Integration y E2E tests?
**Respuesta:** 
- **Unit**: Prueba una unidad aislada (función, método). Rápido, aislado, muchos tests
- **Integration**: Prueba interacción entre componentes. Más lento, requiere setup
- **E2E**: Prueba flujo completo del sistema. Muy lento, requiere entorno completo

**Pirámide**: Muchos unit tests (base), algunos integration (medio), pocos E2E (cima)

### 35. ¿Qué es un Mock y cuándo usarlo?
**Respuesta:** Mock es un objeto que simula comportamiento de dependencias reales. Usar cuando:
- Dependencia es lenta (BD, API externa)
- Dependencia no está disponible en test
- Quieres aislar la unidad bajo prueba
- Quieres verificar interacciones específicas

**Diferencia con Stub**: Mock verifica comportamiento, Stub solo proporciona datos

### 36. ¿Qué es Code Coverage y qué tipos existen?
**Respuesta:** Code Coverage mide qué porcentaje del código está cubierto por tests. Tipos:
- **Statement Coverage**: Porcentaje de líneas ejecutadas
- **Branch Coverage**: Porcentaje de ramas (if/else) probadas
- **Path Coverage**: Porcentaje de caminos de ejecución probados
- **Function Coverage**: Porcentaje de funciones llamadas

**Meta común**: 80% coverage, pero calidad > cantidad

### 37. ¿Qué son Test Doubles y cuáles son sus tipos?
**Respuesta:** Test Doubles son objetos que reemplazan dependencias reales. Tipos:
- **Dummy**: Objeto que no se usa, solo para cumplir parámetros
- **Fake**: Implementación funcional simplificada (in-memory database)
- **Stub**: Proporciona respuestas predefinidas
- **Spy**: Registra llamadas para verificación posterior
- **Mock**: Verifica interacciones específicas

---

## Project Management

### 38. ¿Qué métricas son importantes en Scrum?
**Respuesta:** 
- **Velocity**: Story points completados por sprint
- **Burndown Chart**: Trabajo restante vs tiempo
- **Sprint Goal Achievement**: Porcentaje de objetivo cumplido
- **Team Velocity Trend**: Tendencia de velocidad
- **Lead Time**: Tiempo desde idea hasta producción
- **Cycle Time**: Tiempo desde inicio hasta completar tarea

### 39. ¿Qué herramientas de gestión de proyectos conoces?
**Respuesta:** 
- **Jira**: Gestión ágil, tracking de bugs, reportes
- **Trello**: Tableros Kanban simples
- **Asana**: Gestión de tareas y proyectos
- **Confluence**: Wiki y documentación
- **GitHub Projects**: Integrado con repositorios

---

## Software Engineering

### 40. ¿Qué es debugging y cuáles son las estrategias?
**Respuesta:** Debugging es encontrar y corregir errores. Estrategias:
- **Logging**: Registrar información de ejecución
- **Breakpoints**: Pausar ejecución en puntos específicos
- **Step-by-step**: Ejecutar línea por línea
- **Variable inspection**: Examinar valores de variables
- **Stack trace**: Rastrear llamadas de funciones
- **Binary search**: Reducir área problemática

### 41. ¿Qué es profiling y para qué se usa?
**Respuesta:** Profiling es analizar rendimiento del código en ejecución. Usos:
- Identificar cuellos de botella
- Encontrar funciones lentas
- Analizar uso de memoria
- Optimizar código crítico

**Tipos**: Instrumentation (inserta código), Sampling (muestreo periódico)

### 42. ¿Qué significan los principios KISS, DRY y YAGNI?
**Respuesta:** 
- **KISS** (Keep It Simple, Stupid): Mantener soluciones simples
- **DRY** (Don't Repeat Yourself): No duplicar código
- **YAGNI** (You Aren't Going to Need It): No agregar funcionalidad hasta que sea necesaria

---

## Cloud Computing

### 43. ¿Cuáles son los modelos de servicio en Cloud Computing?
**Respuesta:** 
- **IaaS** (Infrastructure as a Service): Infraestructura virtualizada (EC2, Compute Engine)
- **PaaS** (Platform as a Service): Plataforma de desarrollo (Heroku, App Engine)
- **SaaS** (Software as a Service): Software completo (Gmail, Salesforce)

### 44. ¿Cuáles son los modelos de despliegue en Cloud?
**Respuesta:** 
- **Público**: Infraestructura compartida (AWS, GCP, Azure)
- **Privado**: Infraestructura dedicada a una organización
- **Híbrido**: Combinación de público y privado
- **Comunitario**: Compartido por varias organizaciones

### 45. ¿Qué es Serverless y cuáles son sus ventajas?
**Respuesta:** Serverless es modelo donde el proveedor gestiona servidores automáticamente. Ventajas:
- Sin gestión de servidores
- Escalado automático
- Pago por uso (solo cuando se ejecuta)
- Menor tiempo de desarrollo
- Alta disponibilidad automática

**Ejemplos**: AWS Lambda, Azure Functions, Google Cloud Functions

---

## DevOps

### 46. ¿Qué es Docker y cuáles son sus componentes principales?
**Respuesta:** Docker es plataforma de contenedores. Componentes:
- **Dockerfile**: Script para construir imagen
- **Image**: Plantilla read-only para crear contenedores
- **Container**: Instancia ejecutable de una imagen
- **Docker Hub**: Repositorio de imágenes
- **Docker Compose**: Orquestación de múltiples contenedores

### 47. ¿Qué es un Dockerfile y qué instrucciones comunes tiene?
**Respuesta:** Dockerfile define cómo construir una imagen. Instrucciones comunes:
- `FROM`: Imagen base
- `RUN`: Ejecutar comandos durante build
- `COPY/ADD`: Copiar archivos al contenedor
- `WORKDIR`: Establecer directorio de trabajo
- `EXPOSE`: Puerto que el contenedor escucha
- `CMD/ENTRYPOINT`: Comando por defecto al ejecutar

### 48. ¿Qué es Kubernetes y cuáles son sus componentes principales?
**Respuesta:** Kubernetes es orquestador de contenedores. Componentes:
- **Pods**: Unidad mínima de despliegue (uno o más contenedores)
- **Services**: Expone pods de forma estable
- **Deployments**: Gestiona réplicas de pods
- **ConfigMaps/Secrets**: Configuración y secretos
- **Nodes**: Máquinas worker que ejecutan pods
- **Master**: Controla el cluster

### 49. ¿Qué es un Pod en Kubernetes?
**Respuesta:** Pod es la unidad mínima de despliegue en Kubernetes. Características:
- Puede contener uno o más contenedores
- Contenedores comparten red y almacenamiento
- Es efímero (se puede recrear)
- Tiene su propia IP
- Contenedores en mismo pod comparten localhost

### 50. ¿Qué tipos de Services existen en Kubernetes?
**Respuesta:** 
- **ClusterIP**: IP interna del cluster (default)
- **NodePort**: Expone puerto en cada nodo
- **LoadBalancer**: Crea balanceador de carga externo
- **ExternalName**: Mapea a nombre DNS externo

---

## Software Architecture

### 51. ¿Qué es el patrón MVC y cómo funciona?
**Respuesta:** MVC (Model-View-Controller) separa aplicación en tres componentes:
- **Model**: Lógica de negocio y datos
- **View**: Presentación (UI)
- **Controller**: Maneja entrada del usuario, coordina Model y View

**Flujo**: Usuario → Controller → Model → View → Usuario

### 52. ¿Qué son Microservices y cuáles son sus ventajas y desventajas?
**Respuesta:** Microservices es arquitectura donde aplicación se divide en servicios pequeños e independientes.

**Ventajas**:
- Escalado independiente
- Tecnologías diferentes por servicio
- Despliegue independiente
- Aislamiento de fallos

**Desventajas**:
- Complejidad operacional
- Latencia de red
- Gestión de datos distribuidos
- Testing más complejo

### 53. ¿Qué es un Anti-pattern de arquitectura? Da ejemplos.
**Respuesta:** Anti-pattern de arquitectura es patrón común pero problemático. Ejemplos:
- **Stovepipe System**: Sistemas aislados sin comunicación
- **Vendor Lock-In**: Dependencia excesiva de proveedor específico
- **Swiss Army Knife**: Componente que intenta hacer todo
- **Jumble**: Arquitectura desorganizada sin estructura clara

---

## Front-end Web Development

### 54. ¿Qué es HTML5 y cuáles son sus nuevas características?
**Respuesta:** HTML5 es la quinta versión de HTML. Nuevas características:
- Elementos semánticos: `<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`
- Formularios mejorados: nuevos tipos de input, validación
- APIs: Canvas, WebSocket, Geolocation, LocalStorage, Web Workers
- Audio y video nativos: `<audio>`, `<video>`
- Mejor accesibilidad

### 55. ¿Qué es CSS3 y cuáles son sus características principales?
**Respuesta:** CSS3 añade nuevas capacidades. Características:
- **Flexbox**: Layout flexible unidimensional
- **Grid**: Layout bidimensional
- **Animaciones y transiciones**: Efectos visuales
- **Media queries**: Diseño responsive
- **Selectores avanzados**: Pseudo-clases y pseudo-elementos
- **Variables CSS**: Custom properties
- **Transformaciones**: Rotate, scale, translate

### 56. ¿Cuál es la diferencia entre var, let y const en JavaScript?
**Respuesta:** 
- **var**: Function-scoped, puede redeclararse, hoisting
- **let**: Block-scoped, no puede redeclararse en mismo scope, hoisting pero no inicializado
- **const**: Block-scoped, no puede redeclararse ni reasignarse, debe inicializarse

**Mejor práctica**: Usar `const` por defecto, `let` cuando necesites reasignar, evitar `var`

### 57. ¿Qué es el DOM y cómo se manipula?
**Respuesta:** DOM (Document Object Model) es representación en árbol del HTML. Manipulación:
- **Selección**: `getElementById`, `querySelector`, `querySelectorAll`
- **Modificación**: `textContent`, `innerHTML`, `setAttribute`
- **Creación**: `createElement`, `appendChild`
- **Eventos**: `addEventListener`, `removeEventListener`

### 58. ¿Qué es React y cuáles son sus conceptos principales?
**Respuesta:** React es librería para construir UIs. Conceptos:
- **Componentes**: Bloques reutilizables
- **Props**: Datos pasados a componentes
- **State**: Estado interno del componente
- **JSX**: Sintaxis que parece HTML
- **Virtual DOM**: Representación en memoria del DOM
- **Hooks**: Funciones para estado y efectos (useState, useEffect)

### 59. ¿Qué es TypeScript y cuáles son sus ventajas?
**Respuesta:** TypeScript es JavaScript con tipos estáticos. Ventajas:
- Detección temprana de errores
- Mejor autocompletado en IDE
- Refactoring más seguro
- Documentación implícita (tipos)
- Mejor para proyectos grandes

### 60. ¿Qué es Responsive Design y cómo se implementa?
**Respuesta:** Responsive Design adapta layout a diferentes tamaños de pantalla. Implementación:
- **Media queries**: `@media (max-width: 768px)`
- **Viewport meta tag**: `<meta name="viewport" content="width=device-width">`
- **Unidades relativas**: %, em, rem, vw, vh
- **Flexbox/Grid**: Layouts flexibles
- **Imágenes responsivas**: `srcset`, `sizes`

---

## Back-end Web Development

### 61. ¿Qué es REST y cuáles son sus principios?
**Respuesta:** REST (Representational State Transfer) es estilo arquitectónico para APIs. Principios:
- **Stateless**: Cada request contiene toda la información necesaria
- **Client-Server**: Separación de responsabilidades
- **Uniform Interface**: Métodos HTTP estándar (GET, POST, PUT, DELETE)
- **Resource-based**: URLs representan recursos
- **Cacheable**: Respuestas pueden ser cacheadas

### 62. ¿Cuáles son los métodos HTTP y cuándo usar cada uno?
**Respuesta:** 
- **GET**: Obtener recurso (idempotente, seguro)
- **POST**: Crear recurso o enviar datos
- **PUT**: Actualizar recurso completo (idempotente)
- **PATCH**: Actualizar recurso parcialmente
- **DELETE**: Eliminar recurso (idempotente)
- **OPTIONS**: Obtener métodos permitidos

### 63. ¿Qué es JWT y cómo funciona?
**Respuesta:** JWT (JSON Web Token) es estándar para autenticación. Estructura:
- **Header**: Tipo de token y algoritmo
- **Payload**: Datos (claims)
- **Signature**: Verificación de autenticidad

**Flujo**: Usuario se autentica → Servidor genera JWT → Cliente envía JWT en requests → Servidor valida

**Ventajas**: Stateless, escalable, funciona con APIs REST

### 64. ¿Qué es OAuth2 y cómo funciona?
**Respuesta:** OAuth2 es protocolo de autorización. Flujo:
1. Cliente solicita autorización al usuario
2. Usuario autoriza y redirige a servidor de autorización
3. Servidor devuelve código de autorización
4. Cliente intercambia código por access token
5. Cliente usa token para acceder a recursos

**Roles**: Resource Owner, Client, Authorization Server, Resource Server

### 65. ¿Qué es GraphQL y cuáles son sus ventajas sobre REST?
**Respuesta:** GraphQL es query language para APIs. Ventajas:
- Cliente especifica exactamente qué datos necesita
- Un solo endpoint
- Menos over-fetching y under-fetching
- Type system fuerte
- Introspection (explorar schema)

**Desventajas**: Curva de aprendizaje, puede ser más complejo para casos simples

### 66. ¿Qué es caching y qué estrategias existen?
**Respuesta:** Caching almacena datos frecuentemente accedidos para acceso rápido. Estrategias:
- **Cache-Aside**: Aplicación verifica cache, si no existe carga de BD
- **Write-Through**: Escribe en cache y BD simultáneamente
- **Write-Back**: Escribe en cache primero, BD después
- **Refresh-Ahead**: Pre-carga datos antes de expirar

**Herramientas**: Redis, Memcached, CDN

### 67. ¿Qué son las buenas prácticas para APIs REST?
**Respuesta:** 
- URLs claras y consistentes (`/api/v1/users`)
- Usar códigos HTTP apropiados (200, 201, 400, 404, 500)
- Versionado de API (`/v1/`, `/v2/`)
- Paginación para listas grandes
- Rate limiting
- Documentación (Swagger/OpenAPI)
- Manejo de errores consistente
- Autenticación segura

---

## Preguntas Mixtas y Avanzadas

### 68. ¿Qué es el patrón Observer y cuándo usarlo?
**Respuesta:** Observer permite que objetos se suscriban a eventos de otro objeto. Usar cuando:
- Cambios en un objeto requieren actualizar múltiples objetos
- Desacoplamiento entre sujeto y observadores
- Event-driven architecture

**Ejemplo**: Sistema de notificaciones, Model-View en MVC

### 69. ¿Qué es el patrón Factory y cuáles son sus variantes?
**Respuesta:** Factory crea objetos sin especificar clase exacta. Variantes:
- **Simple Factory**: Método que crea objetos según parámetro
- **Factory Method**: Subclases deciden qué clase instanciar
- **Abstract Factory**: Familia de objetos relacionados

### 70. ¿Qué es el patrón Strategy y cuándo usarlo?
**Respuesta:** Strategy define familia de algoritmos intercambiables. Usar cuando:
- Múltiples formas de hacer algo
- Quieres cambiar algoritmo en runtime
- Evitar condicionales múltiples (if/else o switch)

**Ejemplo**: Diferentes métodos de pago, algoritmos de ordenamiento

### 71. ¿Qué es el patrón Adapter y cuándo usarlo?
**Respuesta:** Adapter permite que interfaces incompatibles trabajen juntas. Usar cuando:
- Integrar código legacy
- Usar librería con interfaz diferente
- Adaptar API externa a tu código

### 72. ¿Qué es el patrón Decorator y cuándo usarlo?
**Respuesta:** Decorator añade funcionalidad a objetos dinámicamente. Usar cuando:
- Necesitas añadir características sin modificar clase base
- Composición de funcionalidades
- Evitar explosión de subclases

**Ejemplo**: Streams en Java, middleware en Express.js

### 73. ¿Qué es el principio de Inversión de Dependencias?
**Respuesta:** Depender de abstracciones (interfaces) no de implementaciones concretas. Beneficios:
- Desacoplamiento
- Facilita testing
- Flexibilidad para cambiar implementaciones
- Cumple Open/Closed Principle

### 74. ¿Qué es el principio de Responsabilidad Única?
**Respuesta:** Una clase debe tener una sola razón para cambiar. Si una clase tiene múltiples responsabilidades:
- Es más difícil de mantener
- Cambios en una responsabilidad pueden afectar otras
- Dificulta testing
- Viola cohesión

### 75. ¿Qué es el principio Open/Closed?
**Respuesta:** Clases abiertas a extensión, cerradas a modificación. Lograr mediante:
- Herencia
- Composición
- Interfaces
- Polimorfismo

**Beneficio**: Extender funcionalidad sin romper código existente

### 76. ¿Qué es el principio de Sustitución de Liskov?
**Respuesta:** Objetos de superclase deben ser reemplazables por objetos de subclase sin romper programa. Significa:
- Subclases deben cumplir contrato de superclase
- No deben lanzar excepciones inesperadas
- No deben tener precondiciones más fuertes
- No deben tener postcondiciones más débiles

### 77. ¿Qué es el principio de Segregación de Interfaces?
**Respuesta:** Muchas interfaces específicas mejor que una general. Si una clase no usa todos los métodos de una interfaz:
- Viola este principio
- Crea dependencias innecesarias
- Dificulta implementación

**Solución**: Dividir interfaz grande en interfaces más pequeñas

### 78. ¿Qué es un Stored Procedure y cuándo usarlo?
**Respuesta:** Stored Procedure es código SQL almacenado en BD. Usar cuando:
- Lógica compleja que requiere múltiples queries
- Necesitas mejor rendimiento (pre-compilado)
- Seguridad (control de acceso)
- Reducir tráfico de red

**Desventajas**: Menos portable, más difícil de versionar

### 79. ¿Qué es una transacción en base de datos y qué propiedades tiene?
**Respuesta:** Transacción es conjunto de operaciones que se ejecutan como unidad. Propiedades ACID:
- **Atomicity**: Todo o nada
- **Consistency**: Estado válido antes y después
- **Isolation**: Transacciones concurrentes no interfieren
- **Durability**: Cambios persisten después de commit

### 80. ¿Qué es un Deadlock y cómo prevenirlo?
**Respuesta:** Deadlock ocurre cuando dos o más procesos esperan recursos bloqueados por otros. Prevención:
- Ordenar adquisición de locks
- Timeout en operaciones
- Detección y recuperación
- Evitar locks innecesarios
- Usar transacciones cortas

### 81. ¿Qué es un índice compuesto y cuándo usarlo?
**Respuesta:** Índice compuesto usa múltiples columnas. Usar cuando:
- Queries filtran por múltiples columnas
- Ordenas por múltiples columnas
- Columnas se usan juntas frecuentemente

**Orden importa**: Primera columna más selectiva primero

### 82. ¿Qué es la denormalización y cuándo es apropiada?
**Respuesta:** Denormalización es agregar redundancia intencionalmente. Apropiada cuando:
- Necesitas mejor rendimiento de lectura
- Queries complejas son muy lentas
- Datos raramente cambian
- Trade-off aceptable entre consistencia y rendimiento

### 83. ¿Qué es un View en base de datos?
**Respuesta:** View es consulta guardada que actúa como tabla virtual. Usos:
- Simplificar queries complejas
- Seguridad (ocultar columnas)
- Abstracción de estructura de datos
- Reutilización de lógica

### 84. ¿Qué es un Trigger en base de datos?
**Respuesta:** Trigger es código que se ejecuta automáticamente ante eventos (INSERT, UPDATE, DELETE). Usos:
- Validación de datos
- Auditoría (log de cambios)
- Mantener integridad referencial
- Calcular valores derivados

**Cuidado**: Pueden hacer código difícil de rastrear y debuggear

### 85. ¿Qué es CORS y cómo funciona?
**Respuesta:** CORS (Cross-Origin Resource Sharing) permite requests entre diferentes orígenes. Funciona mediante headers HTTP:
- `Access-Control-Allow-Origin`: Orígenes permitidos
- `Access-Control-Allow-Methods`: Métodos permitidos
- `Access-Control-Allow-Headers`: Headers permitidos

**Preflight**: Request OPTIONS antes de request real para verificar permisos

### 86. ¿Qué es WebSocket y cuándo usarlo vs HTTP?
**Respuesta:** WebSocket es protocolo de comunicación bidireccional persistente. Usar cuando:
- Necesitas comunicación en tiempo real
- Chat, notificaciones push
- Actualizaciones frecuentes
- Menor overhead que HTTP polling

**HTTP cuando**: Request-response tradicional es suficiente

### 87. ¿Qué es el patrón Repository y cuándo usarlo?
**Respuesta:** Repository abstrae acceso a datos. Usar cuando:
- Desacoplar lógica de negocio de acceso a datos
- Facilitar testing (mock repository)
- Cambiar fuente de datos sin afectar lógica
- Centralizar lógica de acceso a datos

### 88. ¿Qué es el patrón Unit of Work?
**Respuesta:** Unit of Work mantiene lista de objetos afectados por transacción y coordina escritura de cambios. Beneficios:
- Mantiene consistencia
- Optimiza acceso a BD (batch operations)
- Maneja transacciones

### 89. ¿Qué es el patrón Command y cuándo usarlo?
**Respuesta:** Command encapsula request como objeto. Usar cuando:
- Necesitas desacoplar invocador de receptor
- Quieres hacer requests parametrizables
- Necesitas undo/redo
- Quieres hacer queue de operaciones

### 90. ¿Qué es el patrón Facade y cuándo usarlo?
**Respuesta:** Facade proporciona interfaz simplificada a subsistema complejo. Usar cuando:
- Quieres simplificar API compleja
- Ocultar complejidad de subsistema
- Proporcionar punto de entrada único

### 91. ¿Qué es el patrón Builder y cuándo usarlo?
**Respuesta:** Builder construye objetos complejos paso a paso. Usar cuando:
- Objeto tiene muchos parámetros opcionales
- Quieres hacer construcción más legible
- Evitar constructores telescópicos
- Construcción compleja con validaciones

### 92. ¿Qué es el patrón Singleton y por qué puede ser problemático?
**Respuesta:** Singleton asegura una sola instancia. Problemas:
- Dificulta testing (dependencias ocultas)
- Viola Single Responsibility Principle
- Puede causar acoplamiento fuerte
- Problemas en entornos multi-threaded
- Oculta dependencias

**Alternativas**: Dependency Injection, Factory

### 93. ¿Qué es el patrón Proxy y cuándo usarlo?
**Respuesta:** Proxy proporciona sustituto o placeholder para otro objeto. Usar cuando:
- Lazy loading (cargar objeto cuando se necesita)
- Control de acceso
- Logging de requests
- Caching de resultados

### 94. ¿Qué es el patrón Chain of Responsibility?
**Respuesta:** Chain pasa request por cadena de handlers hasta que uno lo procese. Usar cuando:
- Múltiples objetos pueden manejar request
- Quieres desacoplar sender y receiver
- Quieres especificar handlers dinámicamente

**Ejemplo**: Middleware en Express.js, manejo de excepciones

### 95. ¿Qué es el patrón Template Method?
**Respuesta:** Template Method define esqueleto de algoritmo en clase base, subclases implementan pasos específicos. Usar cuando:
- Algoritmo tiene estructura fija pero pasos variables
- Quieres reutilizar código común
- Quieres controlar extensión de algoritmo

### 96. ¿Qué es el patrón State y cuándo usarlo?
**Respuesta:** State permite que objeto cambie comportamiento cuando cambia estado interno. Usar cuando:
- Objeto tiene múltiples estados
- Comportamiento depende del estado
- Quieres evitar condicionales múltiples basadas en estado

**Ejemplo**: Máquina de estados, reproductor de música

### 97. ¿Qué es el patrón Mediator y cuándo usarlo?
**Respuesta:** Mediator define cómo objetos interactúan sin referenciarse directamente. Usar cuando:
- Muchos objetos se comunican entre sí
- Quieres reducir acoplamiento
- Comunicación compleja entre objetos

**Ejemplo**: Chat room donde usuarios no se conocen directamente

### 98. ¿Qué es el patrón Memento y cuándo usarlo?
**Respuesta:** Memento captura y restaura estado interno de objeto sin violar encapsulación. Usar cuando:
- Necesitas undo/redo
- Quieres guardar snapshots de estado
- No quieres exponer detalles internos

### 99. ¿Qué es el patrón Visitor y cuándo usarlo?
**Respuesta:** Visitor separa algoritmo de estructura de objeto. Usar cuando:
- Tienes estructura de objetos compleja
- Quieres añadir operaciones sin modificar clases
- Operaciones varían según tipo de objeto

**Desventaja**: Añadir nuevos tipos de objetos es difícil

### 100. ¿Qué es el patrón Flyweight y cuándo usarlo?
**Respuesta:** Flyweight minimiza uso de memoria compartiendo objetos similares. Usar cuando:
- Tienes muchos objetos similares
- Costo de almacenamiento es alto
- Puedes compartir estado intrínseco
- Estado extrínseco se pasa como parámetros

**Ejemplo**: Renderizado de caracteres en editor de texto, árboles en juego

---

**Nota:** Estas 100 preguntas cubren todos los temas de la matriz de competencias. Estudia cada respuesta en detalle y practica con ejemplos prácticos. ¡Éxito en tu examen 360!
