# 100 Preguntas de Nivel Senior - Examen 360

## Instrucciones

- Las preguntas son de selección múltiple
- **Puede haber más de una respuesta correcta** en cada pregunta
- Marca todas las opciones que consideres correctas
- Las preguntas están diseñadas para evaluar conocimientos a nivel Senior Software Engineer

---

## CI/CD (Preguntas 1-35)

### 1. ¿Cuáles de las siguientes son estrategias de despliegue continuo utilizadas en producción?

- [ ] A) Blue-Green Deployment
- [ ] B) Canary Deployment
- [ ] C) Rolling Deployment
- [ ] D) Big Bang Deployment
- [ ] E) Feature Flag Deployment

### 2. En un pipeline de CI/CD, ¿qué prácticas ayudan a mejorar el tiempo de ejecución del pipeline?

- [ ] A) Paralelización de jobs independientes
- [ ] B) Caché de dependencias entre builds
- [ ] C) Ejecutar todos los tests en secuencia
- [ ] D) Usar matrices para testing en múltiples versiones
- [ ] E) Ejecutar jobs condicionales basados en cambios de archivos

### 3. ¿Cuáles de las siguientes herramientas son comúnmente usadas para CI/CD?

- [ ] A) Jenkins
- [ ] B) GitLab CI/CD
- [ ] C) GitHub Actions
- [ ] D) CircleCI
- [ ] E) Docker (solo como herramienta de CI/CD)

### 4. En GitLab CI/CD, ¿qué secciones pueden definirse en un archivo `.gitlab-ci.yml`?

- [ ] A) stages
- [ ] B) variables
- [ ] C) jobs
- [ ] D) services
- [ ] E) todos los anteriores

### 5. ¿Qué características debe tener un pipeline de CI/CD robusto?

- [ ] A) Ejecución automática de tests en cada commit
- [ ] B) Validación de calidad de código (linting, code coverage)
- [ ] C) Builds reproducibles
- [ ] D) Rollback automático en caso de fallos
- [ ] E) Notificaciones de estado del pipeline

### 6. En el contexto de CI/CD, ¿qué es un "build artifact"?

- [ ] A) Un archivo o conjunto de archivos producidos por un build
- [ ] B) Un contenedor Docker con la aplicación
- [ ] C) Un paquete ejecutable listo para despliegue
- [ ] D) Logs de ejecución del pipeline
- [ ] E) Configuración de infraestructura

### 7. ¿Cuáles son beneficios de implementar Infrastructure as Code (IaC) en CI/CD?

- [ ] A) Infraestructura versionada y reproducible
- [ ] B) Reducción de errores manuales
- [ ] C) Documentación automática de la infraestructura
- [ ] D) Rollback más fácil de cambios de infraestructura
- [ ] E) Mayor velocidad de despliegue

### 8. En Jenkins, ¿qué plugins son esenciales para un pipeline moderno?

- [ ] A) Pipeline plugin
- [ ] B) Docker plugin
- [ ] C) Git plugin
- [ ] D) Blue Ocean plugin
- [ ] E) Credentials plugin

### 9. ¿Qué estrategias de branching son compatibles con CI/CD?

- [ ] A) GitFlow
- [ ] B) Trunk-Based Development
- [ ] C) GitHub Flow
- [ ] D) Feature Branch Workflow
- [ ] E) Todas las anteriores

### 10. En un pipeline, ¿qué tipos de pruebas deberían ejecutarse en diferentes etapas?

- [ ] A) Unit tests en la etapa de build
- [ ] B) Integration tests después del build
- [ ] C) E2E tests antes del despliegue a staging
- [ ] D) Performance tests en producción
- [ ] E) Security scans en cada etapa

### 11. ¿Cuáles son características de un buen sistema de secret management en CI/CD?

- [ ] A) Encriptación de secrets en repositorio
- [ ] B) Rotación automática de credenciales
- [ ] C) Acceso basado en roles
- [ ] D) Audit logs de acceso a secrets
- [ ] E) Secrets en variables de entorno sin encriptar

### 12. En GitHub Actions, ¿qué componentes forman un workflow?

- [ ] A) events (triggers)
- [ ] B) jobs
- [ ] C) steps
- [ ] D) actions
- [ ] E) runners

### 13. ¿Qué prácticas mejoran la seguridad en pipelines de CI/CD?

- [ ] A) Scanning de dependencias vulnerables
- [ ] B) SAST (Static Application Security Testing)
- [ ] C) DAST (Dynamic Application Security Testing)
- [ ] D) Secrets scanning en código
- [ ] E) Ejecutar pipelines con permisos mínimos necesarios

### 14. En el contexto de CI/CD, ¿qué es "deployment automation"?

- [ ] A) Automatización del proceso de despliegue sin intervención manual
- [ ] B) Automatización de rollbacks en caso de fallos
- [ ] C) Automatización de pruebas post-despliegue
- [ ] D) Automatización de monitoreo y alertas
- [ ] E) Solo automatización de builds

### 15. ¿Cuáles son ventajas de usar contenedores Docker en CI/CD?

- [ ] A) Entornos de ejecución consistentes
- [ ] B) Aislamiento de dependencias
- [ ] C) Portabilidad entre diferentes sistemas
- [ ] D) Escalabilidad horizontal más fácil
- [ ] E) Reducción del tiempo de build

### 16. En un pipeline de CI/CD, ¿qué es un "stage"?

- [ ] A) Una fase del pipeline que agrupa jobs relacionados
- [ ] B) Un entorno de despliegue (dev, staging, prod)
- [ ] C) Un paso individual en un job
- [ ] D) Una condición para ejecutar un job
- [ ] E) Un artefacto generado por el pipeline

### 17. ¿Qué herramientas se usan comúnmente para IaC en CI/CD?

- [ ] A) Terraform
- [ ] B) Ansible
- [ ] C) CloudFormation
- [ ] D) Pulumi
- [ ] E) Docker Compose (solo para IaC)

### 18. En CI/CD, ¿qué es "continuous monitoring"?

- [ ] A) Monitoreo de métricas de aplicación post-despliegue
- [ ] B) Monitoreo de salud del pipeline
- [ ] C) Alertas automáticas ante fallos
- [ ] D) Dashboards de métricas de CI/CD
- [ ] E) Solo monitoreo de logs

### 19. ¿Cuáles son características de un pipeline eficiente?

- [ ] A) Ejecución rápida (< 10 minutos para feedback rápido)
- [ ] B) Jobs paralelos cuando sea posible
- [ ] C) Caché inteligente de dependencias
- [ ] D) Ejecución condicional de jobs innecesarios
- [ ] E) Re-ejecución automática en fallos intermitentes

### 20. En GitLab CI/CD, ¿qué directivas permiten controlar la ejecución de jobs?

- [ ] A) `only` / `except`
- [ ] B) `rules`
- [ ] C) `when`
- [ ] D) `if`
- [ ] E) `allow_failure`

### 21. ¿Qué es "feature flag" en el contexto de CI/CD?

- [ ] A) Un mecanismo para habilitar/deshabilitar features sin redeploy
- [ ] B) Una técnica de A/B testing
- [ ] C) Un método de rollback rápido
- [ ] D) Una forma de testing en producción
- [ ] E) Solo una variable de configuración

### 22. En Jenkins Pipeline (Jenkinsfile), ¿qué sintaxis se puede usar?

- [ ] A) Declarative Pipeline
- [ ] B) Scripted Pipeline
- [ ] C) YAML Pipeline
- [ ] D) JSON Pipeline
- [ ] E) Solo Groovy

### 23. ¿Qué prácticas ayudan a mantener pipelines mantenibles?

- [ ] A) Reutilización de código con templates/libraries
- [ ] B) Documentación clara de cada etapa
- [ ] C) Variables de entorno para configuración
- [ ] D) Jobs pequeños y enfocados
- [ ] E) Hardcoding de valores en el pipeline

### 24. En CI/CD, ¿qué es "shift-left testing"?

- [ ] A) Ejecutar tests lo más temprano posible en el ciclo de desarrollo
- [ ] B) Mover tests de producción a desarrollo
- [ ] C) Ejecutar tests en el lado izquierdo del pipeline
- [ ] D) Priorizar tests unitarios sobre tests de integración
- [ ] E) Testing en el entorno del desarrollador

### 25. ¿Cuáles son tipos de tests que deberían estar en un pipeline de CI/CD?

- [ ] A) Unit tests
- [ ] B) Integration tests
- [ ] C) End-to-end tests
- [ ] D) Performance tests
- [ ] E) Security tests

### 26. En GitHub Actions, ¿qué es un "self-hosted runner"?

- [ ] A) Un runner ejecutándose en tu propia infraestructura
- [ ] B) Un runner proporcionado por GitHub
- [ ] C) Un runner con configuración personalizada
- [ ] D) Un runner con acceso a recursos privados
- [ ] E) Solo un servidor local

### 27. ¿Qué es "pipeline as code"?

- [ ] A) Definir pipelines en archivos de código (YAML, Groovy, etc.)
- [ ] B) Versionar la configuración del pipeline
- [ ] C) Revisar cambios de pipeline en PRs
- [ ] D) Aplicar principios de código limpio a pipelines
- [ ] E) Solo escribir pipelines en lenguajes de programación

### 28. En CI/CD, ¿qué es "deployment strategy"?

- [ ] A) El método elegido para desplegar cambios a producción
- [ ] B) La estrategia de rollback en caso de fallos
- [ ] C) El plan de testing antes del despliegue
- [ ] D) La estrategia de comunicación de cambios
- [ ] E) Solo el orden de despliegue de servicios

### 29. ¿Qué herramientas se usan para scanning de seguridad en CI/CD?

- [ ] A) SonarQube
- [ ] B) Snyk
- [ ] C) OWASP ZAP
- [ ] D) Trivy
- [ ] E) ESLint (solo para seguridad)

### 30. En un pipeline, ¿qué es "build matrix"?

- [ ] A) Ejecutar el mismo job en múltiples configuraciones
- [ ] B) Testing en múltiples versiones de lenguajes/entornos
- [ ] C) Paralelización de builds
- [ ] D) Una matriz de dependencias
- [ ] E) Solo una tabla de builds

### 31. ¿Cuáles son beneficios de "trunk-based development" con CI/CD?

- [ ] A) Integración continua más frecuente
- [ ] B) Menos conflictos de merge
- [ ] C) Feedback más rápido
- [ ] D) Feature flags para control de releases
- [ ] E) Branches de larga duración

### 32. En CI/CD, ¿qué es "environment promotion"?

- [ ] A) Promover artefactos de un entorno a otro (dev → staging → prod)
- [ ] B) Promover desarrolladores a roles superiores
- [ ] C) Mejorar la calidad de entornos
- [ ] D) Actualizar configuración de entornos
- [ ] E) Solo despliegue a producción

### 33. ¿Qué prácticas mejoran la confiabilidad de pipelines?

- [ ] A) Idempotencia de jobs
- [ ] B) Retry logic para operaciones transitorias
- [ ] C) Timeouts apropiados
- [ ] D) Validación de pre-condiciones
- [ ] E) Jobs que dependen de estado externo no controlado

### 34. En GitLab CI/CD, ¿qué es un "job dependency"?

- [ ] A) Un job que debe completarse antes de otro
- [ ] B) Dependencias de paquetes en un job
- [ ] C) Un job que necesita artefactos de otro job
- [ ] D) Un job que se ejecuta en paralelo con otro
- [ ] E) Solo dependencias de npm/pip

### 35. ¿Qué es "continuous feedback" en CI/CD?

- [ ] A) Feedback rápido a desarrolladores sobre calidad de código
- [ ] B) Notificaciones de estado de pipeline
- [ ] C) Reportes de cobertura de código
- [ ] D) Métricas de performance del pipeline
- [ ] E) Solo comentarios en PRs

---

## GraphQL (Preguntas 36-65)

### 36. ¿Cuáles son las operaciones principales en GraphQL?

- [ ] A) Query
- [ ] B) Mutation
- [ ] C) Subscription
- [ ] D) Operation
- [ ] E) Resolver

### 37. En GraphQL, ¿qué es un "resolver"?

- [ ] A) Una función que resuelve un campo específico en el schema
- [ ] B) El mecanismo que obtiene datos para un campo
- [ ] C) Puede ser síncrono o asíncrono
- [ ] D) Puede acceder a múltiples fuentes de datos
- [ ] E) Solo una función de validación

### 38. ¿Cuáles son ventajas de GraphQL sobre REST?

- [ ] A) Evita over-fetching (traer más datos de los necesarios)
- [ ] B) Evita under-fetching (necesitar múltiples requests)
- [ ] C) Single endpoint
- [ ] D) Tipado fuerte
- [ ] E) Introspection automática

### 39. En GraphQL, ¿qué tipos escalares están disponibles por defecto?

- [ ] A) String
- [ ] B) Int
- [ ] C) Float
- [ ] D) Boolean
- [ ] E) ID

### 40. ¿Qué es el "N+1 problem" en GraphQL y cómo se resuelve?

- [ ] A) Múltiples queries a la base de datos para resolver relaciones
- [ ] B) Se resuelve con DataLoader para batching
- [ ] C) Se resuelve con eager loading
- [ ] D) Es un problema de performance común
- [ ] E) Solo afecta a mutations

### 41. En GraphQL, ¿qué es "introspection"?

- [ ] A) Capacidad de consultar el schema mismo
- [ ] B) Documentación automática del API
- [ ] C) Exploración del schema disponible
- [ ] D) Validación de tipos en runtime
- [ ] E) Solo una característica de desarrollo

### 42. ¿Cuáles son componentes de un schema GraphQL?

- [ ] A) Types
- [ ] B) Queries
- [ ] C) Mutations
- [ ] D) Subscriptions
- [ ] E) Resolvers (definidos en schema)

### 43. En GraphQL, ¿qué es un "fragment"?

- [ ] A) Un conjunto reutilizable de campos
- [ ] B) Una forma de evitar duplicación en queries
- [ ] C) Puede ser usado en múltiples queries
- [ ] D) Puede ser condicional con `@include` o `@skip`
- [ ] E) Solo un comentario en el schema

### 44. ¿Qué son "directives" en GraphQL?

- [ ] A) Instrucciones que modifican la ejecución de queries
- [ ] B) @skip, @include son directives built-in
- [ ] C) @deprecated marca campos obsoletos
- [ ] D) Se pueden crear custom directives
- [ ] E) Solo para documentación

### 45. En GraphQL, ¿qué es "query complexity"?

- [ ] A) Una métrica que mide la complejidad de una query
- [ ] B) Se usa para prevenir queries costosas
- [ ] C) Se puede limitar para prevenir DoS
- [ ] D) Depende de la profundidad y número de campos
- [ ] E) Solo relevante para mutations

### 46. ¿Cuáles son implementaciones populares de servidor GraphQL?

- [ ] A) Apollo Server
- [ ] B) GraphQL.js
- [ ] C) Hasura
- [ ] D) Relay
- [ ] E) Express GraphQL

### 47. En GraphQL, ¿qué es "schema stitching"?

- [ ] A) Combinar múltiples schemas GraphQL en uno
- [ ] B) Unificar APIs de diferentes servicios
- [ ] C) Crear un gateway GraphQL
- [ ] D) Delegar queries a diferentes servicios
- [ ] E) Solo duplicar schemas

### 48. ¿Qué es "GraphQL Federation"?

- [ ] A) Arquitectura para múltiples GraphQL services
- [ ] B) Cada servicio mantiene su propio schema
- [ ] C) Un gateway unifica los schemas
- [ ] D) Permite escalar GraphQL a microservicios
- [ ] E) Solo una forma de versionar schemas

### 49. En GraphQL, ¿cómo se manejan errores?

- [ ] A) Errores en el array `errors` de la respuesta
- [ ] B) Union types para manejar errores tipados
- [ ] C) Extensions para metadata de errores
- [ ] D) Errores no detienen la ejecución completa
- [ ] E) Solo excepciones lanzadas

### 50. ¿Qué es "query batching" en GraphQL?

- [ ] A) Enviar múltiples queries en una sola request
- [ ] B) Reducir round-trips al servidor
- [ ] C) Mejorar performance de la aplicación
- [ ] D) Requiere soporte del cliente
- [ ] E) Solo para mutations

### 51. En GraphQL, ¿qué es "depth limiting"?

- [ ] A) Limitar la profundidad máxima de queries anidadas
- [ ] B) Prevenir queries recursivas profundas
- [ ] C) Medida de seguridad contra DoS
- [ ] D) Configurable en el servidor
- [ ] E) Solo para validación de schema

### 52. ¿Cuáles son características de GraphQL Subscriptions?

- [ ] A) Operaciones en tiempo real
- [ ] B) Usan WebSockets o Server-Sent Events
- [ ] C) Útiles para notificaciones y actualizaciones en vivo
- [ ] D) Requieren configuración adicional del servidor
- [ ] E) Solo para queries simples

### 53. En GraphQL, ¿qué es "field aliasing"?

- [ ] A) Dar un nombre diferente a un campo en la query
- [ ] B) Útil para consultar el mismo campo múltiples veces con diferentes argumentos
- [ ] C) Sintaxis: `alias: fieldName`
- [ ] D) Solo para campos de diferentes tipos
- [ ] E) Solo una característica de documentación

### 54. ¿Qué es "pagination" en GraphQL y qué enfoques existen?

- [ ] A) Cursor-based pagination (recomendado)
- [ ] B) Offset-based pagination
- [ ] C) Connection pattern (edges, nodes, pageInfo)
- [ ] D) Limitar resultados grandes
- [ ] E) Solo para mutations

### 55. En GraphQL, ¿qué es "input validation"?

- [ ] A) Validación de argumentos de queries/mutations
- [ ] B) Validación de tipos en el schema
- [ ] C) Validación custom en resolvers
- [ ] D] Prevenir datos inválidos
- [ ] E) Solo validación de sintaxis

### 56. ¿Cuáles son buenas prácticas para diseño de schema GraphQL?

- [ ] A) Nombres descriptivos y consistentes
- [ ] B) Evitar anidamiento excesivo (máximo 3-4 niveles)
- [ ] C) Usar paginación para listas
- [ ] D) Versionado cuidadoso del schema
- [ ] E) Cambios breaking frecuentes

### 57. En GraphQL, ¿qué es "query caching"?

- [ ] A) Cachear resultados de queries
- [ ] B) Mejorar performance de queries frecuentes
- [ ] C) Puede ser a nivel de servidor o cliente
- [ ] D) Considerar invalidation de cache
- [ ] E) Solo para mutations

### 58. ¿Qué es "DataLoader" y para qué se usa en GraphQL?

- [ ] A) Una librería para batching y caching de cargas de datos
- [ ] B) Resuelve el problema N+1
- [ ] C) Agrupa múltiples requests en batches
- [ ] D) Cachea resultados durante un request
- [ ] E) Solo para validación de datos

### 59. En GraphQL, ¿qué son "union types"?

- [ ] A) Un tipo que puede ser uno de varios tipos
- [ ] B) Útil para campos que pueden retornar diferentes tipos
- [ ] C) Requiere `__typename` para discriminar
- [ ] D) Alternativa a interfaces en algunos casos
- [ ] E) Solo para tipos escalares

### 60. ¿Qué es "rate limiting" en GraphQL y por qué es importante?

- [ ] A) Limitar el número de requests por tiempo
- [ ] B) Prevenir abuso del API
- [ ] C) Puede ser por IP, usuario, o query complexity
- [ ] D] Protección contra DoS
- [ ] E) Solo para desarrollo

### 61. En GraphQL, ¿qué es "middleware"?

- [ ] A) Funciones que se ejecutan antes/después de resolvers
- [ ] B) Útil para logging, autenticación, autorización
- [ ] C) Puede modificar el contexto
- [ ] D) Puede interceptar queries/mutations
- [ ] E) Solo para validación

### 62. ¿Cuáles son diferencias entre GraphQL y REST?

- [ ] A) GraphQL tiene un solo endpoint, REST múltiples
- [ ] B) GraphQL permite queries flexibles, REST endpoints fijos
- [ ] C) GraphQL usa POST para queries, REST usa GET/POST/PUT/DELETE
- [ ] D) GraphQL tiene tipado fuerte, REST no necesariamente
- [ ] E) GraphQL siempre es mejor que REST

### 63. En GraphQL, ¿qué es "context"?

- [ ] A] Un objeto compartido entre todos los resolvers en un request
- [ ] B) Útil para autenticación, autorización, conexiones a DB
- [ ] C) Se crea una vez por request
- [ ] D) Puede contener información del usuario
- [ ] E) Solo para configuración del servidor

### 64. ¿Qué es "schema-first" vs "code-first" en GraphQL?

- [ ] A) Schema-first: definir schema primero, luego implementar resolvers
- [ ] B) Code-first: generar schema desde código/types
- [ ] C) Schema-first es más explícito
- [ ] D) Code-first puede ser más rápido de desarrollar
- [ ] E) Solo hay un enfoque correcto

### 65. En GraphQL, ¿qué son "interfaces"?

- [ ] A) Un tipo abstracto que define campos comunes
- [ ] B) Tipos pueden implementar interfaces
- [ ] C) Útil para polimorfismo
- [ ] D) Requiere `__typename` para resolver el tipo concreto
- [ ] E) Solo para documentación

---

## SQL (Preguntas 66-100)

### 66. ¿Cuáles son los principios ACID en transacciones SQL?

- [ ] A) Atomicity (Atomicidad)
- [ ] B) Consistency (Consistencia)
- [ ] C) Isolation (Aislamiento)
- [ ] D) Durability (Durabilidad)
- [ ] E) Availability (Disponibilidad)

### 67. En SQL, ¿qué tipos de JOINs existen?

- [ ] A) INNER JOIN
- [ ] B) LEFT JOIN (LEFT OUTER JOIN)
- [ ] C) RIGHT JOIN (RIGHT OUTER JOIN)
- [ ] D) FULL OUTER JOIN
- [ ] E) CROSS JOIN

### 68. ¿Qué son "window functions" en SQL y para qué se usan?

- [ ] A) Funciones que operan sobre un conjunto de filas relacionadas
- [ ] B) ROW_NUMBER(), RANK(), DENSE_RANK()
- [ ] C) LAG(), LEAD() para acceder a filas anteriores/siguientes
- [ ] D) SUM() OVER() para running totals
- [ ] E) Solo para ordenar resultados

### 69. En SQL, ¿qué es una "subquery correlacionada"?

- [ ] A) Una subquery que referencia columnas de la query externa
- [ ] B) Se ejecuta una vez por cada fila de la query externa
- [ ] C) Puede ser menos eficiente que JOINs
- [ ] D) Útil cuando la lógica es compleja
- [ ] E) Solo para queries simples

### 70. ¿Cuáles son niveles de aislamiento en transacciones SQL?

- [ ] A) READ UNCOMMITTED
- [ ] B) READ COMMITTED
- [ ] C) REPEATABLE READ
- [ ] D) SERIALIZABLE
- [ ] E) READ ONLY

### 71. En SQL, ¿qué es un "index" y qué tipos existen?

- [ ] A) Estructura que mejora la velocidad de búsquedas
- [ ] B) B-tree index (más común)
- [ ] C) Hash index
- [ ] D) Bitmap index
- [ ] E) Composite index (múltiples columnas)

### 72. ¿Qué es "query optimization" en SQL?

- [ ] A) Mejorar el performance de queries
- [ ] B) Usar EXPLAIN/EXPLAIN ANALYZE para ver execution plan
- [ ] C) Identificar y crear índices apropiados
- [ ] D) Evitar full table scans cuando sea posible
- [ ] E) Solo cambiar el orden de columnas

### 73. En SQL, ¿qué son "CTEs" (Common Table Expressions)?

- [ ] A) Consultas temporales nombradas con WITH clause
- [ ] B) Mejoran legibilidad de queries complejas
- [ ] C) Pueden ser recursivas
- [ ] D) Útiles para jerarquías y árboles
- [ ] E) Solo para subconsultas simples

### 74. ¿Qué es "normalization" en bases de datos y cuáles son las formas normales?

- [ ] A) Proceso de organizar datos para reducir redundancia
- [ ] B) 1NF: Atomic values
- [ ] C) 2NF: Eliminar dependencias parciales
- [ ] D) 3NF: Eliminar dependencias transitivas
- [ ] E) BCNF: Boyce-Codd Normal Form

### 75. En SQL, ¿qué es un "trigger"?

- [ ] A) Procedimiento almacenado que se ejecuta automáticamente
- [ ] B) Puede ser BEFORE o AFTER de un evento
- [ ] C) Puede ser FOR EACH ROW o FOR EACH STATEMENT
- [ ] D) Útil para auditoría, validación, lógica de negocio
- [ ] E) Solo para logging

### 76. ¿Qué es "pessimistic locking" vs "optimistic locking"?

- [ ] A) Pessimistic: bloquea registros durante la transacción
- [ ] B) Optimistic: asume que no habrá conflictos, verifica al commit
- [ ] C) Pessimistic puede causar deadlocks
- [ ] D) Optimistic usa version numbers o timestamps
- [ ] E) Solo hay un tipo de locking

### 77. En SQL, ¿qué son "stored procedures"?

- [ ] A) Código SQL almacenado en la base de datos
- [ ] B) Pueden tener parámetros de entrada y salida
- [ ] C) Pueden retornar resultados
- [ ] D) Útiles para lógica de negocio compleja
- [ ] E) Solo para queries simples

### 78. ¿Qué es "partitioning" en bases de datos?

- [ ] A) Dividir una tabla grande en partes más pequeñas
- [ ] B) Range partitioning
- [ ] C) List partitioning
- [ ] D) Hash partitioning
- [ ] E) Mejora performance de queries grandes

### 79. En SQL, ¿qué es "MVCC" (Multi-Version Concurrency Control)?

- [ ] A) Mecanismo para manejar concurrencia sin locks pesados
- [ ] B) Mantiene múltiples versiones de datos
- [ ] C) Permite reads sin bloquear writes
- [ ] D) Usado en PostgreSQL, MySQL InnoDB
- [ ] E) Solo para bases de datos NoSQL

### 80. ¿Qué es "covering index" en SQL?

- [ ] A) Un índice que contiene todas las columnas necesarias para una query
- [ ] B) Evita acceso a la tabla principal
- [ ] C) Mejora significativamente el performance
- [ ] D) También conocido como "index-only scan"
- [ ] E) Solo para índices únicos

### 81. En SQL, ¿qué es "deadlock" y cómo se previene?

- [ ] A) Situación donde dos transacciones se bloquean mutuamente
- [ ] B) El DBMS detecta y aborta una transacción
- [ ] C) Prevención: mismo orden de locks, timeouts
- [ ] D) Prevención: evitar transacciones largas
- [ ] E) No se puede prevenir

### 82. ¿Qué son "aggregate functions" en SQL?

- [ ] A) COUNT(), SUM(), AVG(), MAX(), MIN()
- [ ] B) Operan sobre grupos de filas
- [ ] C) Usadas con GROUP BY
- [ ] D) Pueden usar HAVING para filtrar grupos
- [ ] E) Solo para una fila

### 83. En SQL, ¿qué es "EXISTS" vs "IN"?

- [ ] A) EXISTS retorna true/false si la subquery tiene resultados
- [ ] B) IN verifica si un valor está en una lista
- [ ] C) EXISTS puede ser más eficiente con subqueries
- [ ] D) IN puede tener problemas con NULLs
- [ ] E) Son siempre equivalentes

### 84. ¿Qué es "denormalization" y cuándo se usa?

- [ ] A) Proceso de agregar redundancia intencional
- [ ] B) Trade-off: redundancia vs performance
- [ ] C) Útil para mejorar performance de reads
- [ ] D) Puede complicar mantenimiento
- [ ] E) Siempre es una mala práctica

### 85. En SQL, ¿qué es "full table scan"?

- [ ] A) Lectura de todas las filas de una tabla
- [ ] B) Ocurre cuando no hay índice apropiado
- [ ] C) Puede ser lento en tablas grandes
- [ ] D) A veces es la mejor opción (tablas pequeñas)
- [ ] E) Siempre es ineficiente

### 86. ¿Qué es "query execution plan" en SQL?

- [ ] A) El plan que el optimizador usa para ejecutar una query
- [ ] B) Se puede ver con EXPLAIN o EXPLAIN ANALYZE
- [ ] C) Muestra qué índices se usan
- [ ] D) Muestra el orden de operaciones
- [ ] E) Solo para debugging

### 87. En SQL, ¿qué son "constraints"?

- [ ] A) Reglas que limitan los datos en una tabla
- [ ] B) PRIMARY KEY
- [ ] C) FOREIGN KEY
- [ ] D) UNIQUE
- [ ] E) CHECK, NOT NULL

### 88. ¿Qué es "connection pooling" y por qué es importante?

- [ ] A) Reutilizar conexiones a la base de datos
- [ ] B) Reducir overhead de crear/cerrar conexiones
- [ ] C) Mejorar performance de aplicaciones
- [ ] D) Limitar número de conexiones simultáneas
- [ ] E) Solo para desarrollo

### 89. En SQL, ¿qué es "materialized view"?

- [ ] A) Una vista que almacena resultados físicamente
- [ ] B) Mejora performance de queries complejas
- [ ] C) Requiere refresco periódico
- [ ] D) Trade-off: storage vs performance
- [ ] E] Solo una vista normal

### 90. ¿Qué es "SQL injection" y cómo se previene?

- [ ] A) Ataque donde código SQL malicioso se inyecta en queries
- [ ] B) Prevención: usar prepared statements
- [ ] C) Prevención: validar y sanitizar input
- [ ] D) Prevención: usar parameterized queries
- [ ] E) No se puede prevenir

### 91. En SQL, ¿qué es "cascade delete"?

- [ ] A) Eliminar filas relacionadas automáticamente
- [ ] B) Configurado en FOREIGN KEY constraints
- [ ] C) Puede ser peligroso si no se usa con cuidado
- [ ] D] Útil para mantener integridad referencial
- [ ] E) Solo para PRIMARY KEYs

### 92. ¿Qué son "transactions" y cuándo se usan?

- [ ] A) Grupo de operaciones que se ejecutan como una unidad
- [ ] B) Todo o nada (atomicidad)
- [ ] C) BEGIN TRANSACTION, COMMIT, ROLLBACK
- [ ] D) Útiles para mantener consistencia de datos
- [ ] E) Solo para una operación

### 93. En SQL, ¿qué es "index selectivity"?

- [ ] A) Medida de qué tan único es un índice
- [ ] B) Índices con alta selectividad son más útiles
- [ ] C) Afecta la decisión del optimizador
- [ ] D) Columnas con muchos valores únicos tienen alta selectividad
- [ ] E) Solo relevante para índices únicos

### 94. ¿Qué es "sharding" en bases de datos?

- [ ] A) Dividir datos horizontalmente en múltiples bases de datos
- [ ] B) Escalar horizontalmente
- [ ] C) Cada shard contiene un subconjunto de datos
- [ ] D) Requiere lógica de routing
- [ ] E) Solo para bases de datos NoSQL

### 95. En SQL, ¿qué es "composite key"?

- [ ] A) Clave primaria compuesta de múltiples columnas
- [ ] B) Útil cuando una columna no es suficiente para unicidad
- [ ] C) Todas las columnas juntas forman la clave
- [ ] D) Puede afectar performance de JOINs
- [ ] E) Solo para FOREIGN KEYs

### 96. ¿Qué es "query hint" en SQL?

- [ ] A) Instrucción al optimizador sobre cómo ejecutar una query
- [ ] B) Puede forzar uso de un índice específico
- [ ] C) Debe usarse con precaución
- [ ] D) Puede mejorar o empeorar performance
- [ ] E) Siempre mejora performance

### 97. En SQL, ¿qué es "lateral join"?

- [ ] A) JOIN donde la tabla derecha puede referenciar columnas de la izquierda
- [ ] B) Útil para funciones que retornan tablas
- [ ] C) Sintaxis: `LATERAL JOIN` o `CROSS APPLY`
- [ ] D) Más flexible que subqueries en algunos casos
- [ ] E) Solo para PostgreSQL

### 98. ¿Qué es "temporal table" en SQL?

- [ ] A) Tabla que mantiene historial de cambios
- [ ] B) Sistema versionado de filas
- [ ] C) Permite consultar datos en un punto en el tiempo
- [ ] D) Útil para auditoría y compliance
- [ ] E) Solo una tabla temporal

### 99. En SQL, ¿qué es "full-text search"?

- [ ] A) Búsqueda de texto completo en columnas de texto
- [ ] B) Más potente que LIKE
- [ ] C) Usa índices especiales (full-text indexes)
- [ ] D) Soporta ranking de resultados
- [ ] E) Solo para bases de datos NoSQL

### 100. ¿Qué son "database migrations" y por qué son importantes?

- [ ] A) Scripts que versionan cambios de schema
- [ ] B) Permiten aplicar cambios de forma controlada
- [ ] C) Facilitan rollback de cambios
- [ ] D) Mantienen sincronización entre entornos
- [ ] E) Solo para desarrollo

---

## Respuestas y Explicaciones

*Nota: Las respuestas correctas están marcadas con [X]. Algunas preguntas tienen múltiples respuestas correctas.*

### Cómo usar este documento:

1. Intenta responder las preguntas sin ver las respuestas
2. Revisa tus respuestas y estudia las explicaciones
3. Identifica áreas donde necesitas más estudio
4. Repite el proceso hasta dominar todos los conceptos

### Recursos adicionales:

- Consulta el `RESUMEN_ESTUDIO.md` para conceptos detallados
- Practica con ejemplos reales de cada tecnología
- Revisa documentación oficial de las herramientas
- Únete a comunidades técnicas para resolver dudas

---

*Buena suerte en tu examen 360 para Senior Software Engineer!*

