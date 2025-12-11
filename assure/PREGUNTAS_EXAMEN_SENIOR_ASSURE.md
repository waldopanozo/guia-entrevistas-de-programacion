# 100 Preguntas - Examen Senior AssureSoft

## Instrucciones

- Las preguntas son de selección múltiple
- **Puede haber más de una respuesta correcta** en cada pregunta
- Marca todas las opciones que consideres correctas
- Las preguntas están diseñadas para evaluar conocimientos a nivel Senior Software Engineer según las condiciones de AssureSoft

---

## CI/CD (Preguntas 1-40)

### 1. En un pipeline de CI/CD, ¿qué prácticas son esenciales para garantizar la calidad del código antes del despliegue?

- [ ] A) Ejecución automática de tests unitarios en cada commit
- [ ] B) Code coverage mínimo del 80%
- [ ] C) Linting y análisis estático de código
- [ ] D) Code review obligatorio antes del merge
- [ ] E) Todas las anteriores

### 2. ¿Cuál es la diferencia principal entre Continuous Delivery y Continuous Deployment?

- [ ] A) Continuous Delivery requiere aprobación manual, Continuous Deployment es automático
- [ ] B) Continuous Delivery despliega a staging, Continuous Deployment a producción
- [ ] C) Continuous Deployment incluye más tests automatizados
- [ ] D) No hay diferencia, son términos sinónimos
- [ ] E) Solo A es correcta

### 3. En GitLab CI/CD, ¿qué secciones son obligatorias en un archivo `.gitlab-ci.yml`?

- [ ] A) `stages`
- [ ] B) `variables`
- [ ] C) Al menos un `job`
- [ ] D) `image`
- [ ] E) Solo C es obligatoria

### 4. ¿Qué estrategia de despliegue permite un rollback más rápido en caso de problemas?

- [ ] A) Blue-Green Deployment
- [ ] B) Canary Deployment
- [ ] C) Rolling Deployment
- [ ] D) Big Bang Deployment
- [ ] E) A y B son correctas

### 5. En Jenkins Pipeline, ¿cuál es la diferencia entre Declarative y Scripted Pipeline?

- [ ] A) Declarative es más simple y estructurado, Scripted es más flexible
- [ ] B) Declarative usa sintaxis YAML, Scripted usa Groovy
- [ ] C) Scripted permite lógica más compleja
- [ ] D) Declarative tiene mejor soporte para validación
- [ ] E) A, C y D son correctas

### 6. ¿Qué es un "build artifact" en el contexto de CI/CD?

- [ ] A) Un archivo o conjunto de archivos producidos por un build
- [ ] B) Un contenedor Docker con la aplicación compilada
- [ ] C) Un paquete ejecutable listo para despliegue
- [ ] D) Logs de ejecución del pipeline
- [ ] E) A, B y C son correctas

### 7. ¿Cuáles son beneficios de implementar Infrastructure as Code (IaC)?

- [ ] A) Infraestructura versionada y reproducible
- [ ] B) Reducción de errores manuales
- [ ] C) Documentación automática de la infraestructura
- [ ] D) Rollback más fácil de cambios
- [ ] E) Todas las anteriores

### 8. En GitHub Actions, ¿qué componentes forman un workflow?

- [ ] A) `on` (events/triggers)
- [ ] B) `jobs`
- [ ] C) `steps`
- [ ] D) `uses` (actions)
- [ ] E) Todos los anteriores

### 9. ¿Qué prácticas mejoran la seguridad en pipelines de CI/CD?

- [ ] A) Scanning de dependencias vulnerables (Snyk, Dependabot)
- [ ] B) SAST (Static Application Security Testing)
- [ ] C) DAST (Dynamic Application Security Testing)
- [ ] D) Secrets management adecuado (Vault, Secrets Manager)
- [ ] E) Todas las anteriores

### 10. ¿Qué es "feature flag" y para qué se usa en CI/CD?

- [ ] A) Habilitar/deshabilitar features sin redeploy
- [ ] B) A/B testing de nuevas funcionalidades
- [ ] C) Rollback rápido de features problemáticas
- [ ] D) Testing en producción de forma segura
- [ ] E) Todas las anteriores

### 11. En un pipeline, ¿qué tipos de pruebas deberían ejecutarse en diferentes etapas?

- [ ] A) Unit tests en la etapa de build
- [ ] B) Integration tests después del build
- [ ] C) E2E tests antes del despliegue a staging
- [ ] D) Performance tests en staging, no en producción
- [ ] E) Todas las anteriores

### 12. ¿Qué características debe tener un sistema de secret management en CI/CD?

- [ ] A) Encriptación de secrets en repositorio
- [ ] B) Rotación automática de credenciales
- [ ] C) Acceso basado en roles (RBAC)
- [ ] D) Audit logs de acceso a secrets
- [ ] E) Todas las anteriores

### 13. ¿Qué es "shift-left testing" en CI/CD?

- [ ] A) Ejecutar tests lo más temprano posible en el ciclo de desarrollo
- [ ] B) Mover tests de producción a desarrollo
- [ ] C) Priorizar tests unitarios sobre tests de integración
- [ ] D) Testing en el entorno del desarrollador antes de commit
- [ ] E) A, C y D son correctas

### 14. En CI/CD, ¿qué es "pipeline as code"?

- [ ] A) Definir pipelines en archivos de código (YAML, Groovy, etc.)
- [ ] B) Versionar la configuración del pipeline
- [ ] C) Revisar cambios de pipeline en PRs
- [ ] D) Aplicar principios de código limpio a pipelines
- [ ] E) Todas las anteriores

### 15. ¿Qué herramientas se usan comúnmente para IaC en CI/CD?

- [ ] A) Terraform
- [ ] B) Ansible
- [ ] C) CloudFormation
- [ ] D) Pulumi
- [ ] E) Todas las anteriores

### 16. En GitLab CI/CD, ¿qué directivas permiten controlar la ejecución de jobs?

- [ ] A) `only` / `except`
- [ ] B) `rules` (más moderno y flexible)
- [ ] C) `when`
- [ ] D) `if`
- [ ] E) Todas las anteriores

### 17. ¿Qué es "canary deployment" y cuándo se utiliza?

- [ ] A) Desplegar cambios a un pequeño porcentaje de usuarios
- [ ] B) Monitorear métricas antes de despliegue completo
- [ ] C) Reducir riesgo de cambios en producción
- [ ] D) Validar cambios con usuarios reales
- [ ] E) Todas las anteriores

### 18. ¿Qué prácticas mejoran el tiempo de ejecución de un pipeline?

- [ ] A) Paralelización de jobs independientes
- [ ] B) Caché de dependencias entre builds
- [ ] C) Ejecutar jobs condicionales basados en cambios de archivos
- [ ] D) Usar matrices para testing en múltiples versiones en paralelo
- [ ] E) Todas las anteriores

### 19. En CI/CD, ¿qué es "continuous monitoring"?

- [ ] A) Monitoreo de métricas de aplicación post-despliegue
- [ ] B) Monitoreo de salud del pipeline
- [ ] C) Alertas automáticas ante fallos
- [ ] D) Dashboards de métricas de CI/CD
- [ ] E) Todas las anteriores

### 20. ¿Qué es "GitOps" y cómo se relaciona con CI/CD?

- [ ] A) Usar Git como fuente de verdad para infraestructura
- [ ] B) Automatización de despliegues basada en cambios en Git
- [ ] C) Pull-based deployment model
- [ ] D) Auditoría completa de cambios
- [ ] E) Todas las anteriores

### 21. En Jenkins, ¿qué plugins son esenciales para un pipeline moderno?

- [ ] A) Pipeline plugin
- [ ] B) Docker plugin
- [ ] C) Git plugin
- [ ] D) Credentials plugin
- [ ] E) Todas las anteriores

### 22. ¿Qué estrategias de branching son compatibles con CI/CD?

- [ ] A) GitFlow
- [ ] B) Trunk-Based Development
- [ ] C) GitHub Flow
- [ ] D) Feature Branch Workflow
- [ ] E) Todas las anteriores

### 23. ¿Qué es "build matrix" en un pipeline?

- [ ] A) Ejecutar el mismo job en múltiples configuraciones
- [ ] B) Testing en múltiples versiones de lenguajes/entornos
- [ ] C) Paralelización de builds
- [ ] D) Una matriz de dependencias
- [ ] E) A, B y C son correctas

### 24. ¿Qué prácticas mejoran la confiabilidad de pipelines?

- [ ] A) Idempotencia de jobs
- [ ] B) Retry logic para operaciones transitorias
- [ ] C) Timeouts apropiados
- [ ] D) Validación de pre-condiciones
- [ ] E) Todas las anteriores

### 25. En CI/CD, ¿qué es "environment promotion"?

- [ ] A) Promover artefactos de un entorno a otro (dev → staging → prod)
- [ ] B) Promover desarrolladores a roles superiores
- [ ] C) Actualizar configuración de entornos
- [ ] D) Mejorar la calidad de entornos
- [ ] E) A y C son correctas

### 26. ¿Qué herramientas se usan para scanning de seguridad en CI/CD?

- [ ] A) SonarQube
- [ ] B) Snyk
- [ ] C) OWASP ZAP
- [ ] D) Trivy
- [ ] E) Todas las anteriores

### 27. ¿Qué es "deployment automation" en CI/CD?

- [ ] A) Automatización del proceso de despliegue sin intervención manual
- [ ] B) Automatización de rollbacks en caso de fallos
- [ ] C) Automatización de pruebas post-despliegue
- [ ] D) Automatización de monitoreo y alertas
- [ ] E) Todas las anteriores

### 28. ¿Cuáles son ventajas de usar contenedores Docker en CI/CD?

- [ ] A) Entornos de ejecución consistentes
- [ ] B) Aislamiento de dependencias
- [ ] C) Portabilidad entre diferentes sistemas
- [ ] D) Escalabilidad horizontal más fácil
- [ ] E) Todas las anteriores

### 29. En un pipeline de CI/CD, ¿qué es un "stage"?

- [ ] A) Una fase del pipeline que agrupa jobs relacionados
- [ ] B) Un entorno de despliegue (dev, staging, prod)
- [ ] C) Un paso individual en un job
- [ ] D) Una condición para ejecutar un job
- [ ] E) Solo A es correcta

### 30. ¿Qué prácticas ayudan a mantener pipelines mantenibles?

- [ ] A) Reutilización de código con templates/libraries
- [ ] B) Documentación clara de cada etapa
- [ ] C) Variables de entorno para configuración
- [ ] D) Jobs pequeños y enfocados
- [ ] E) Todas las anteriores

### 31. ¿Qué es "chaos engineering" en el contexto de CI/CD?

- [ ] A) Introducir fallos intencionales para probar resiliencia
- [ ] B) Validar que sistemas se recuperan correctamente
- [ ] C) Mejorar confiabilidad de sistemas
- [ ] D) Testing de disaster recovery
- [ ] E) Todas las anteriores

### 32. En GitHub Actions, ¿qué es un "self-hosted runner"?

- [ ] A) Un runner ejecutándose en tu propia infraestructura
- [ ] B) Un runner proporcionado por GitHub
- [ ] C) Un runner con configuración personalizada
- [ ] D) Un runner con acceso a recursos privados
- [ ] E) A, C y D son correctas

### 33. ¿Qué es "continuous feedback" en CI/CD?

- [ ] A) Feedback rápido a desarrolladores sobre calidad de código
- [ ] B) Notificaciones de estado de pipeline
- [ ] C) Reportes de cobertura de código
- [ ] D) Métricas de performance del pipeline
- [ ] E) Todas las anteriores

### 34. ¿Cómo manejarías versionado de artefactos en CI/CD?

- [ ] A) Semantic versioning (semver)
- [ ] B) Tags de Git como versiones
- [ ] C) Timestamps en nombres de artefactos
- [ ] D) Hash de commit como versión
- [ ] E) Todas las anteriores son válidas

### 35. En GitLab CI/CD, ¿qué es un "job dependency"?

- [ ] A) Un job que debe completarse antes de otro
- [ ] B) Dependencias de paquetes en un job
- [ ] C) Un job que necesita artefactos de otro job
- [ ] D) Un job que se ejecuta en paralelo con otro
- [ ] E) A y C son correctas

### 36. ¿Qué es "shift-left security" en CI/CD?

- [ ] A) Integrar seguridad desde las primeras etapas del desarrollo
- [ ] B) Mover herramientas de seguridad al inicio del pipeline
- [ ] C) Detectar vulnerabilidades antes de producción
- [ ] D) Escanear dependencias y código en cada commit
- [ ] E) Todas las anteriores

### 37. ¿Qué consideraciones hay al implementar CI/CD para aplicaciones móviles?

- [ ] A) Testing en múltiples dispositivos y OS
- [ ] B) Distribución a testers y stores
- [ ] C) Code signing y certificados
- [ ] D) Versionado de apps y compatibilidad
- [ ] E) Todas las anteriores

### 38. ¿Qué es "idempotencia" en scripts de despliegue?

- [ ] A) Ejecutar scripts múltiples veces sin efectos secundarios
- [ ] B) Verificar estado antes de aplicar cambios
- [ ] C) Usar herramientas que garanticen idempotencia (Ansible, Terraform)
- [ ] D) Implementar checksums para validar cambios
- [ ] E) Todas las anteriores

### 39. ¿Qué consideraciones tendrías al implementar CI/CD en una arquitectura de microservicios?

- [ ] A) Pipelines independientes por servicio
- [ ] B) Coordinación de despliegues entre servicios
- [ ] C) Versionado de APIs y compatibilidad hacia atrás
- [ ] D) Testing de integración entre servicios
- [ ] E) Todas las anteriores

### 40. ¿Qué prácticas mejoran la eficiencia de un pipeline de CI/CD?

- [ ] A) Ejecución rápida (< 10 minutos para feedback rápido)
- [ ] B) Jobs paralelos cuando sea posible
- [ ] C) Caché inteligente de dependencias
- [ ] D) Ejecución condicional de jobs innecesarios
- [ ] E) Todas las anteriores

---

## GraphQL (Preguntas 41-70)

### 41. ¿Cuáles son las operaciones principales en GraphQL?

- [ ] A) Query
- [ ] B) Mutation
- [ ] C) Subscription
- [ ] D) Resolver
- [ ] E) A, B y C son correctas

### 42. En GraphQL, ¿qué es un "resolver"?

- [ ] A) Una función que resuelve un campo específico en el schema
- [ ] B) El mecanismo que obtiene datos para un campo
- [ ] C) Puede ser síncrono o asíncrono
- [ ] D) Puede acceder a múltiples fuentes de datos
- [ ] E) Todas las anteriores

### 43. ¿Cuáles son ventajas de GraphQL sobre REST?

- [ ] A) Evita over-fetching (traer más datos de los necesarios)
- [ ] B) Evita under-fetching (necesitar múltiples requests)
- [ ] C) Single endpoint
- [ ] D) Tipado fuerte
- [ ] E) Todas las anteriores

### 44. En GraphQL, ¿qué tipos escalares están disponibles por defecto?

- [ ] A) String
- [ ] B) Int
- [ ] C) Float
- [ ] D) Boolean
- [ ] E) ID
- [ ] F) Todas las anteriores

### 45. ¿Qué es el "N+1 problem" en GraphQL y cómo se resuelve?

- [ ] A) Múltiples queries a la base de datos para resolver relaciones
- [ ] B) Se resuelve con DataLoader para batching
- [ ] C) Se resuelve con eager loading
- [ ] D) Es un problema de performance común
- [ ] E) Todas las anteriores

### 46. En GraphQL, ¿qué es "introspection"?

- [ ] A) Capacidad de consultar el schema mismo
- [ ] B) Documentación automática del API
- [ ] C) Exploración del schema disponible
- [ ] D) Validación de tipos en runtime
- [ ] E) A, B y C son correctas

### 47. ¿Cuáles son componentes de un schema GraphQL?

- [ ] A) Types
- [ ] B) Queries
- [ ] C) Mutations
- [ ] D) Subscriptions
- [ ] E) Todas las anteriores

### 48. En GraphQL, ¿qué es un "fragment"?

- [ ] A) Un conjunto reutilizable de campos
- [ ] B) Una forma de evitar duplicación en queries
- [ ] C) Puede ser usado en múltiples queries
- [ ] D) Puede ser condicional con `@include` o `@skip`
- [ ] E) Todas las anteriores

### 49. ¿Qué son "directives" en GraphQL?

- [ ] A) Instrucciones que modifican la ejecución de queries
- [ ] B) @skip, @include son directives built-in
- [ ] C) @deprecated marca campos obsoletos
- [ ] D) Se pueden crear custom directives
- [ ] E) Todas las anteriores

### 50. En GraphQL, ¿qué es "query complexity"?

- [ ] A) Una métrica que mide la complejidad de una query
- [ ] B) Se usa para prevenir queries costosas
- [ ] C) Se puede limitar para prevenir DoS
- [ ] D) Depende de la profundidad y número de campos
- [ ] E) Todas las anteriores

### 51. ¿Cuáles son implementaciones populares de servidor GraphQL?

- [ ] A) Apollo Server
- [ ] B) GraphQL.js
- [ ] C) Hasura
- [ ] D) Express GraphQL
- [ ] E) Todas las anteriores

### 52. En GraphQL, ¿qué es "schema stitching"?

- [ ] A) Combinar múltiples schemas GraphQL en uno
- [ ] B) Unificar APIs de diferentes servicios
- [ ] C) Crear un gateway GraphQL
- [ ] D) Delegar queries a diferentes servicios
- [ ] E) Todas las anteriores

### 53. ¿Qué es "GraphQL Federation"?

- [ ] A) Arquitectura para múltiples GraphQL services
- [ ] B) Cada servicio mantiene su propio schema
- [ ] C) Un gateway unifica los schemas
- [ ] D) Permite escalar GraphQL a microservicios
- [ ] E) Todas las anteriores

### 54. En GraphQL, ¿cómo se manejan errores?

- [ ] A) Errores en el array `errors` de la respuesta
- [ ] B) Union types para manejar errores tipados
- [ ] C) Extensions para metadata de errores
- [ ] D) Errores no detienen la ejecución completa
- [ ] E) Todas las anteriores

### 55. ¿Qué es "query batching" en GraphQL?

- [ ] A) Enviar múltiples queries en una sola request
- [ ] B) Reducir round-trips al servidor
- [ ] C) Mejorar performance de la aplicación
- [ ] D) Requiere soporte del cliente
- [ ] E) Todas las anteriores

### 56. En GraphQL, ¿qué es "depth limiting"?

- [ ] A) Limitar la profundidad máxima de queries anidadas
- [ ] B) Prevenir queries recursivas profundas
- [ ] C) Medida de seguridad contra DoS
- [ ] D) Configurable en el servidor
- [ ] E) Todas las anteriores

### 57. ¿Cuáles son características de GraphQL Subscriptions?

- [ ] A) Operaciones en tiempo real
- [ ] B) Usan WebSockets o Server-Sent Events
- [ ] C) Útiles para notificaciones y actualizaciones en vivo
- [ ] D) Requieren configuración adicional del servidor
- [ ] E) Todas las anteriores

### 58. En GraphQL, ¿qué es "field aliasing"?

- [ ] A) Dar un nombre diferente a un campo en la query
- [ ] B) Útil para consultar el mismo campo múltiples veces con diferentes argumentos
- [ ] C) Sintaxis: `alias: fieldName`
- [ ] D) Solo para campos de diferentes tipos
- [ ] E) A, B y C son correctas

### 59. ¿Qué es "pagination" en GraphQL y qué enfoques existen?

- [ ] A) Cursor-based pagination (recomendado)
- [ ] B) Offset-based pagination
- [ ] C) Connection pattern (edges, nodes, pageInfo)
- [ ] D) Limitar resultados grandes
- [ ] E) Todas las anteriores

### 60. En GraphQL, ¿qué es "input validation"?

- [ ] A) Validación de argumentos de queries/mutations
- [ ] B) Validación de tipos en el schema
- [ ] C) Validación custom en resolvers
- [ ] D) Prevenir datos inválidos
- [ ] E) Todas las anteriores

### 61. ¿Cuáles son buenas prácticas para diseño de schema GraphQL?

- [ ] A) Nombres descriptivos y consistentes
- [ ] B) Evitar anidamiento excesivo (máximo 3-4 niveles)
- [ ] C) Usar paginación para listas
- [ ] D) Versionado cuidadoso del schema
- [ ] E) Todas las anteriores

### 62. En GraphQL, ¿qué es "query caching"?

- [ ] A) Cachear resultados de queries
- [ ] B) Mejorar performance de queries frecuentes
- [ ] C) Puede ser a nivel de servidor o cliente
- [ ] D) Considerar invalidation de cache
- [ ] E) Todas las anteriores

### 63. ¿Qué es "DataLoader" y para qué se usa en GraphQL?

- [ ] A) Una librería para batching y caching de cargas de datos
- [ ] B) Resuelve el problema N+1
- [ ] C) Agrupa múltiples requests en batches
- [ ] D) Cachea resultados durante un request
- [ ] E) Todas las anteriores

### 64. En GraphQL, ¿qué son "union types"?

- [ ] A) Un tipo que puede ser uno de varios tipos
- [ ] B) Útil para campos que pueden retornar diferentes tipos
- [ ] C) Requiere `__typename` para discriminar
- [ ] D) Alternativa a interfaces en algunos casos
- [ ] E) Todas las anteriores

### 65. ¿Qué es "rate limiting" en GraphQL y por qué es importante?

- [ ] A) Limitar el número de requests por tiempo
- [ ] B) Prevenir abuso del API
- [ ] C) Puede ser por IP, usuario, o query complexity
- [ ] D) Protección contra DoS
- [ ] E) Todas las anteriores

### 66. En GraphQL, ¿qué es "middleware"?

- [ ] A) Funciones que se ejecutan antes/después de resolvers
- [ ] B) Útil para logging, autenticación, autorización
- [ ] C) Puede modificar el contexto
- [ ] D) Puede interceptar queries/mutations
- [ ] E) Todas las anteriores

### 67. ¿Cuáles son diferencias entre GraphQL y REST?

- [ ] A) GraphQL tiene un solo endpoint, REST múltiples
- [ ] B) GraphQL permite queries flexibles, REST endpoints fijos
- [ ] C) GraphQL usa POST para queries, REST usa GET/POST/PUT/DELETE
- [ ] D) GraphQL tiene tipado fuerte, REST no necesariamente
- [ ] E) Todas las anteriores

### 68. En GraphQL, ¿qué es "context"?

- [ ] A) Un objeto compartido entre todos los resolvers en un request
- [ ] B) Útil para autenticación, autorización, conexiones a DB
- [ ] C) Se crea una vez por request
- [ ] D) Puede contener información del usuario
- [ ] E) Todas las anteriores

### 69. ¿Qué es "schema-first" vs "code-first" en GraphQL?

- [ ] A) Schema-first: definir schema primero, luego implementar resolvers
- [ ] B) Code-first: generar schema desde código/types
- [ ] C) Schema-first es más explícito
- [ ] D) Code-first puede ser más rápido de desarrollar
- [ ] E) Todas las anteriores

### 70. En GraphQL, ¿qué son "interfaces"?

- [ ] A) Un tipo abstracto que define campos comunes
- [ ] B) Tipos pueden implementar interfaces
- [ ] C) Útil para polimorfismo
- [ ] D) Requiere `__typename` para resolver el tipo concreto
- [ ] E) Todas las anteriores

---

## SQL (Preguntas 71-100)

### 71. ¿Cuáles son los principios ACID en transacciones SQL?

- [ ] A) Atomicity (Atomicidad)
- [ ] B) Consistency (Consistencia)
- [ ] C) Isolation (Aislamiento)
- [ ] D) Durability (Durabilidad)
- [ ] E) Todas las anteriores

### 72. En SQL, ¿qué tipos de JOINs existen?

- [ ] A) INNER JOIN
- [ ] B) LEFT JOIN (LEFT OUTER JOIN)
- [ ] C) RIGHT JOIN (RIGHT OUTER JOIN)
- [ ] D) FULL OUTER JOIN
- [ ] E) CROSS JOIN
- [ ] F) Todas las anteriores

### 73. ¿Qué son "window functions" en SQL y para qué se usan?

- [ ] A) Funciones que operan sobre un conjunto de filas relacionadas
- [ ] B) ROW_NUMBER(), RANK(), DENSE_RANK()
- [ ] C) LAG(), LEAD() para acceder a filas anteriores/siguientes
- [ ] D) SUM() OVER() para running totals
- [ ] E) Todas las anteriores

### 74. En SQL, ¿qué es una "subquery correlacionada"?

- [ ] A) Una subquery que referencia columnas de la query externa
- [ ] B) Se ejecuta una vez por cada fila de la query externa
- [ ] C) Puede ser menos eficiente que JOINs
- [ ] D) Útil cuando la lógica es compleja
- [ ] E) Todas las anteriores

### 75. ¿Cuáles son niveles de aislamiento en transacciones SQL?

- [ ] A) READ UNCOMMITTED
- [ ] B) READ COMMITTED
- [ ] C) REPEATABLE READ
- [ ] D) SERIALIZABLE
- [ ] E) Todas las anteriores

### 76. En SQL, ¿qué es un "index" y qué tipos existen?

- [ ] A) Estructura que mejora la velocidad de búsquedas
- [ ] B) B-tree index (más común)
- [ ] C) Hash index
- [ ] D) Bitmap index
- [ ] E) Composite index (múltiples columnas)
- [ ] F) Todas las anteriores

### 77. ¿Qué es "query optimization" en SQL?

- [ ] A) Mejorar el performance de queries
- [ ] B) Usar EXPLAIN/EXPLAIN ANALYZE para ver execution plan
- [ ] C) Identificar y crear índices apropiados
- [ ] D) Evitar full table scans cuando sea posible
- [ ] E) Todas las anteriores

### 78. En SQL, ¿qué son "CTEs" (Common Table Expressions)?

- [ ] A) Consultas temporales nombradas con WITH clause
- [ ] B) Mejoran legibilidad de queries complejas
- [ ] C) Pueden ser recursivas
- [ ] D) Útiles para jerarquías y árboles
- [ ] E) Todas las anteriores

### 79. ¿Qué es "normalization" en bases de datos y cuáles son las formas normales?

- [ ] A) Proceso de organizar datos para reducir redundancia
- [ ] B) 1NF: Atomic values
- [ ] C) 2NF: Eliminar dependencias parciales
- [ ] D) 3NF: Eliminar dependencias transitivas
- [ ] E) BCNF: Boyce-Codd Normal Form
- [ ] F) Todas las anteriores

### 80. En SQL, ¿qué es un "trigger"?

- [ ] A) Procedimiento almacenado que se ejecuta automáticamente
- [ ] B) Puede ser BEFORE o AFTER de un evento
- [ ] C) Puede ser FOR EACH ROW o FOR EACH STATEMENT
- [ ] D) Útil para auditoría, validación, lógica de negocio
- [ ] E) Todas las anteriores

### 81. ¿Qué es "pessimistic locking" vs "optimistic locking"?

- [ ] A) Pessimistic: bloquea registros durante la transacción
- [ ] B) Optimistic: asume que no habrá conflictos, verifica al commit
- [ ] C) Pessimistic puede causar deadlocks
- [ ] D) Optimistic usa version numbers o timestamps
- [ ] E) Todas las anteriores

### 82. En SQL, ¿qué son "stored procedures"?

- [ ] A) Código SQL almacenado en la base de datos
- [ ] B) Pueden tener parámetros de entrada y salida
- [ ] C) Pueden retornar resultados
- [ ] D) Útiles para lógica de negocio compleja
- [ ] E) Todas las anteriores

### 83. ¿Qué es "partitioning" en bases de datos?

- [ ] A) Dividir una tabla grande en partes más pequeñas
- [ ] B) Range partitioning
- [ ] C) List partitioning
- [ ] D) Hash partitioning
- [ ] E) Mejora performance de queries grandes
- [ ] F) Todas las anteriores

### 84. En SQL, ¿qué es "MVCC" (Multi-Version Concurrency Control)?

- [ ] A) Mecanismo para manejar concurrencia sin locks pesados
- [ ] B) Mantiene múltiples versiones de datos
- [ ] C) Permite reads sin bloquear writes
- [ ] D) Usado en PostgreSQL, MySQL InnoDB
- [ ] E) Todas las anteriores

### 85. ¿Qué es "covering index" en SQL?

- [ ] A) Un índice que contiene todas las columnas necesarias para una query
- [ ] B) Evita acceso a la tabla principal
- [ ] C) Mejora significativamente el performance
- [ ] D) También conocido como "index-only scan"
- [ ] E) Todas las anteriores

### 86. En SQL, ¿qué es "deadlock" y cómo se previene?

- [ ] A) Situación donde dos transacciones se bloquean mutuamente
- [ ] B) El DBMS detecta y aborta una transacción
- [ ] C) Prevención: mismo orden de locks, timeouts
- [ ] D) Prevención: evitar transacciones largas
- [ ] E) Todas las anteriores

### 87. ¿Qué son "aggregate functions" en SQL?

- [ ] A) COUNT(), SUM(), AVG(), MAX(), MIN()
- [ ] B) Operan sobre grupos de filas
- [ ] C) Usadas con GROUP BY
- [ ] D) Pueden usar HAVING para filtrar grupos
- [ ] E) Todas las anteriores

### 88. En SQL, ¿qué es "EXISTS" vs "IN"?

- [ ] A) EXISTS retorna true/false si la subquery tiene resultados
- [ ] B) IN verifica si un valor está en una lista
- [ ] C) EXISTS puede ser más eficiente con subqueries
- [ ] D) IN puede tener problemas con NULLs
- [ ] E) Todas las anteriores

### 89. ¿Qué es "denormalization" y cuándo se usa?

- [ ] A) Proceso de agregar redundancia intencional
- [ ] B) Trade-off: redundancia vs performance
- [ ] C) Útil para mejorar performance de reads
- [ ] D) Puede complicar mantenimiento
- [ ] E) Todas las anteriores

### 90. En SQL, ¿qué es "full table scan"?

- [ ] A) Lectura de todas las filas de una tabla
- [ ] B) Ocurre cuando no hay índice apropiado
- [ ] C) Puede ser lento en tablas grandes
- [ ] D) A veces es la mejor opción (tablas pequeñas)
- [ ] E) Todas las anteriores

### 91. ¿Qué es "query execution plan" en SQL?

- [ ] A) El plan que el optimizador usa para ejecutar una query
- [ ] B) Se puede ver con EXPLAIN o EXPLAIN ANALYZE
- [ ] C) Muestra qué índices se usan
- [ ] D) Muestra el orden de operaciones
- [ ] E) Todas las anteriores

### 92. En SQL, ¿qué son "constraints"?

- [ ] A) Reglas que limitan los datos en una tabla
- [ ] B) PRIMARY KEY
- [ ] C) FOREIGN KEY
- [ ] D) UNIQUE
- [ ] E) CHECK, NOT NULL
- [ ] F) Todas las anteriores

### 93. ¿Qué es "connection pooling" y por qué es importante?

- [ ] A) Reutilizar conexiones a la base de datos
- [ ] B) Reducir overhead de crear/cerrar conexiones
- [ ] C) Mejorar performance de aplicaciones
- [ ] D) Limitar número de conexiones simultáneas
- [ ] E) Todas las anteriores

### 94. En SQL, ¿qué es "materialized view"?

- [ ] A) Una vista que almacena resultados físicamente
- [ ] B) Mejora performance de queries complejas
- [ ] C) Requiere refresco periódico
- [ ] D) Trade-off: storage vs performance
- [ ] E) Todas las anteriores

### 95. ¿Qué es "SQL injection" y cómo se previene?

- [ ] A) Ataque donde código SQL malicioso se inyecta en queries
- [ ] B) Prevención: usar prepared statements
- [ ] C) Prevención: validar y sanitizar input
- [ ] D) Prevención: usar parameterized queries
- [ ] E) Todas las anteriores

### 96. En SQL, ¿qué es "cascade delete"?

- [ ] A) Eliminar filas relacionadas automáticamente
- [ ] B) Configurado en FOREIGN KEY constraints
- [ ] C) Puede ser peligroso si no se usa con cuidado
- [ ] D) Útil para mantener integridad referencial
- [ ] E) Todas las anteriores

### 97. ¿Qué son "transactions" y cuándo se usan?

- [ ] A) Grupo de operaciones que se ejecutan como una unidad
- [ ] B) Todo o nada (atomicidad)
- [ ] C) BEGIN TRANSACTION, COMMIT, ROLLBACK
- [ ] D) Útiles para mantener consistencia de datos
- [ ] E) Todas las anteriores

### 98. En SQL, ¿qué es "index selectivity"?

- [ ] A) Medida de qué tan único es un índice
- [ ] B) Índices con alta selectividad son más útiles
- [ ] C) Afecta la decisión del optimizador
- [ ] D) Columnas con muchos valores únicos tienen alta selectividad
- [ ] E) Todas las anteriores

### 99. ¿Qué es "sharding" en bases de datos?

- [ ] A) Dividir datos horizontalmente en múltiples bases de datos
- [ ] B) Escalar horizontalmente
- [ ] C) Cada shard contiene un subconjunto de datos
- [ ] D) Requiere lógica de routing
- [ ] E) Todas las anteriores

### 100. ¿Qué son "database migrations" y por qué son importantes?

- [ ] A) Scripts que versionan cambios de schema
- [ ] B) Permiten aplicar cambios de forma controlada
- [ ] C) Facilitan rollback de cambios
- [ ] D) Mantienen sincronización entre entornos
- [ ] E) Todas las anteriores

---

## Respuestas y Explicaciones

*Nota: Las respuestas correctas están marcadas con ✓. Algunas preguntas tienen múltiples respuestas correctas.*

---

## CI/CD - Respuestas (Preguntas 1-40)

### 1. En un pipeline de CI/CD, ¿qué prácticas son esenciales para garantizar la calidad del código antes del despliegue?
**Respuestas correctas: E (Todas las anteriores)**
- A) Ejecución automática de tests unitarios en cada commit ✓
- B) Code coverage mínimo del 80% ✓
- C) Linting y análisis estático de código ✓
- D) Code review obligatorio antes del merge ✓
- E) Todas las anteriores ✓

**Explicación**: Un pipeline robusto debe incluir todas estas prácticas para asegurar calidad antes del despliegue.

### 2. ¿Cuál es la diferencia principal entre Continuous Delivery y Continuous Deployment?
**Respuestas correctas: E (Solo A es correcta)**
- A) Continuous Delivery requiere aprobación manual, Continuous Deployment es automático ✓
- B) Continuous Delivery despliega a staging, Continuous Deployment a producción (ambos pueden desplegar a producción)
- C) Continuous Deployment incluye más tests automatizados (no necesariamente)
- D) No hay diferencia, son términos sinónimos (incorrecto)
- E) Solo A es correcta ✓

**Explicación**: La diferencia clave es la aprobación manual en Continuous Delivery vs automatización completa en Continuous Deployment.

### 3. En GitLab CI/CD, ¿qué secciones son obligatorias en un archivo `.gitlab-ci.yml`?
**Respuestas correctas: E (Solo C es obligatoria)**
- A) `stages` (opcional, tiene valores por defecto)
- B) `variables` (opcional)
- C) Al menos un `job` ✓
- D) `image` (opcional, puede estar en cada job)
- E) Solo C es obligatoria ✓

**Explicación**: Solo se requiere al menos un job. Las demás secciones tienen valores por defecto o son opcionales.

### 4. ¿Qué estrategia de despliegue permite un rollback más rápido en caso de problemas?
**Respuestas correctas: E (A y B son correctas)**
- A) Blue-Green Deployment ✓
- B) Canary Deployment ✓
- C) Rolling Deployment (rollback más lento)
- D) Big Bang Deployment (riesgoso)
- E) A y B son correctas ✓

**Explicación**: Blue-Green permite rollback instantáneo cambiando tráfico. Canary permite detener despliegue rápidamente.

### 5. En Jenkins Pipeline, ¿cuál es la diferencia entre Declarative y Scripted Pipeline?
**Respuestas correctas: E (A, C y D son correctas)**
- A) Declarative es más simple y estructurado, Scripted es más flexible ✓
- B) Declarative usa sintaxis YAML (ambos usan Groovy)
- C) Scripted permite lógica más compleja ✓
- D) Declarative tiene mejor soporte para validación ✓
- E) A, C y D son correctas ✓

**Explicación**: Declarative es más estructurado y validado, Scripted ofrece más flexibilidad con Groovy completo.

### 6. ¿Qué es un "build artifact" en el contexto de CI/CD?
**Respuestas correctas: E (A, B y C son correctas)**
- A) Un archivo o conjunto de archivos producidos por un build ✓
- B) Un contenedor Docker con la aplicación compilada ✓
- C) Un paquete ejecutable listo para despliegue ✓
- D) Logs de ejecución del pipeline (no es artifact)
- E) A, B y C son correctas ✓

**Explicación**: Los artifacts son productos del build que se pueden usar en etapas posteriores o desplegar.

### 7. ¿Cuáles son beneficios de implementar Infrastructure as Code (IaC)?
**Respuestas correctas: E (Todas las anteriores)**
- A) Infraestructura versionada y reproducible ✓
- B) Reducción de errores manuales ✓
- C) Documentación automática de la infraestructura ✓
- D) Rollback más fácil de cambios ✓
- E) Todas las anteriores ✓

**Explicación**: IaC proporciona todos estos beneficios al tratar la infraestructura como código.

### 8. En GitHub Actions, ¿qué componentes forman un workflow?
**Respuestas correctas: E (Todos los anteriores)**
- A) `on` (events/triggers) ✓
- B) `jobs` ✓
- C) `steps` ✓
- D) `uses` (actions) ✓
- E) Todos los anteriores ✓

**Explicación**: Un workflow completo requiere todos estos componentes para definir cuándo y cómo ejecutar.

### 9. ¿Qué prácticas mejoran la seguridad en pipelines de CI/CD?
**Respuestas correctas: E (Todas las anteriores)**
- A) Scanning de dependencias vulnerables (Snyk, Dependabot) ✓
- B) SAST (Static Application Security Testing) ✓
- C) DAST (Dynamic Application Security Testing) ✓
- D) Secrets management adecuado (Vault, Secrets Manager) ✓
- E) Todas las anteriores ✓

**Explicación**: La seguridad en CI/CD requiere múltiples capas de protección.

### 10. ¿Qué es "feature flag" y para qué se usa en CI/CD?
**Respuestas correctas: E (Todas las anteriores)**
- A) Habilitar/deshabilitar features sin redeploy ✓
- B) A/B testing de nuevas funcionalidades ✓
- C) Rollback rápido de features problemáticas ✓
- D) Testing en producción de forma segura ✓
- E) Todas las anteriores ✓

**Explicación**: Los feature flags permiten control granular de features sin necesidad de redeploy.

### 11. En un pipeline, ¿qué tipos de pruebas deberían ejecutarse en diferentes etapas?
**Respuestas correctas: E (Todas las anteriores)**
- A) Unit tests en la etapa de build ✓
- B) Integration tests después del build ✓
- C) E2E tests antes del despliegue a staging ✓
- D) Performance tests en staging, no en producción ✓
- E) Todas las anteriores ✓

**Explicación**: Cada tipo de test tiene su lugar apropiado en el pipeline según su costo y propósito.

### 12. ¿Qué características debe tener un sistema de secret management en CI/CD?
**Respuestas correctas: E (Todas las anteriores)**
- A) Encriptación de secrets en repositorio ✓
- B) Rotación automática de credenciales ✓
- C) Acceso basado en roles (RBAC) ✓
- D) Audit logs de acceso a secrets ✓
- E) Todas las anteriores ✓

**Explicación**: Un sistema robusto de secret management requiere todas estas características de seguridad.

### 13. ¿Qué es "shift-left testing" en CI/CD?
**Respuestas correctas: E (A, C y D son correctas)**
- A) Ejecutar tests lo más temprano posible en el ciclo de desarrollo ✓
- B) Mover tests de producción a desarrollo (no es la definición)
- C) Priorizar tests unitarios sobre tests de integración ✓
- D) Testing en el entorno del desarrollador antes de commit ✓
- E) A, C y D son correctas ✓

**Explicación**: Shift-left significa mover testing más temprano en el ciclo de desarrollo para detectar problemas antes.

### 14. En CI/CD, ¿qué es "pipeline as code"?
**Respuestas correctas: E (Todas las anteriores)**
- A) Definir pipelines en archivos de código (YAML, Groovy, etc.) ✓
- B) Versionar la configuración del pipeline ✓
- C) Revisar cambios de pipeline en PRs ✓
- D) Aplicar principios de código limpio a pipelines ✓
- E) Todas las anteriores ✓

**Explicación**: Pipeline as code significa tratar la configuración del pipeline como código versionado.

### 15. ¿Qué herramientas se usan comúnmente para IaC en CI/CD?
**Respuestas correctas: E (Todas las anteriores)**
- A) Terraform ✓
- B) Ansible ✓
- C) CloudFormation ✓
- D) Pulumi ✓
- E) Todas las anteriores ✓

**Explicación**: Todas estas son herramientas populares para Infrastructure as Code.

### 16. En GitLab CI/CD, ¿qué directivas permiten controlar la ejecución de jobs?
**Respuestas correctas: E (Todas las anteriores)**
- A) `only` / `except` ✓
- B) `rules` (más moderno y flexible) ✓
- C) `when` ✓
- D) `if` ✓
- E) Todas las anteriores ✓

**Explicación**: GitLab CI/CD ofrece múltiples formas de controlar cuándo se ejecutan los jobs.

### 17. ¿Qué es "canary deployment" y cuándo se utiliza?
**Respuestas correctas: E (Todas las anteriores)**
- A) Desplegar cambios a un pequeño porcentaje de usuarios ✓
- B) Monitorear métricas antes de despliegue completo ✓
- C) Reducir riesgo de cambios en producción ✓
- D) Validar cambios con usuarios reales ✓
- E) Todas las anteriores ✓

**Explicación**: Canary deployment permite validación gradual con usuarios reales antes del despliegue completo.

### 18. ¿Qué prácticas mejoran el tiempo de ejecución de un pipeline?
**Respuestas correctas: E (Todas las anteriores)**
- A) Paralelización de jobs independientes ✓
- B) Caché de dependencias entre builds ✓
- C) Ejecutar jobs condicionales basados en cambios de archivos ✓
- D) Usar matrices para testing en múltiples versiones en paralelo ✓
- E) Todas las anteriores ✓

**Explicación**: Todas estas prácticas reducen el tiempo total de ejecución del pipeline.

### 19. En CI/CD, ¿qué es "continuous monitoring"?
**Respuestas correctas: E (Todas las anteriores)**
- A) Monitoreo de métricas de aplicación post-despliegue ✓
- B) Monitoreo de salud del pipeline ✓
- C) Alertas automáticas ante fallos ✓
- D) Dashboards de métricas de CI/CD ✓
- E) Todas las anteriores ✓

**Explicación**: Continuous monitoring cubre tanto la aplicación como el pipeline mismo.

### 20. ¿Qué es "GitOps" y cómo se relaciona con CI/CD?
**Respuestas correctas: E (Todas las anteriores)**
- A) Usar Git como fuente de verdad para infraestructura ✓
- B) Automatización de despliegues basada en cambios en Git ✓
- C) Pull-based deployment model ✓
- D) Auditoría completa de cambios ✓
- E) Todas las anteriores ✓

**Explicación**: GitOps extiende CI/CD usando Git como fuente de verdad para todo, incluyendo infraestructura.

### 21. En Jenkins, ¿qué plugins son esenciales para un pipeline moderno?
**Respuestas correctas: E (Todas las anteriores)**
- A) Pipeline plugin ✓
- B) Docker plugin ✓
- C) Git plugin ✓
- D) Credentials plugin ✓
- E) Todas las anteriores ✓

**Explicación**: Estos plugins son fundamentales para pipelines modernos en Jenkins.

### 22. ¿Qué estrategias de branching son compatibles con CI/CD?
**Respuestas correctas: E (Todas las anteriores)**
- A) GitFlow ✓
- B) Trunk-Based Development ✓
- C) GitHub Flow ✓
- D) Feature Branch Workflow ✓
- E) Todas las anteriores ✓

**Explicación**: Todas estas estrategias pueden funcionar con CI/CD, cada una con sus ventajas.

### 23. ¿Qué es "build matrix" en un pipeline?
**Respuestas correctas: E (A, B y C son correctas)**
- A) Ejecutar el mismo job en múltiples configuraciones ✓
- B) Testing en múltiples versiones de lenguajes/entornos ✓
- C) Paralelización de builds ✓
- D) Una matriz de dependencias (no es la definición)
- E) A, B y C son correctas ✓

**Explicación**: Build matrix permite ejecutar el mismo job en múltiples configuraciones en paralelo.

### 24. ¿Qué prácticas mejoran la confiabilidad de pipelines?
**Respuestas correctas: E (Todas las anteriores)**
- A) Idempotencia de jobs ✓
- B) Retry logic para operaciones transitorias ✓
- C) Timeouts apropiados ✓
- D) Validación de pre-condiciones ✓
- E) Todas las anteriores ✓

**Explicación**: Estas prácticas aseguran que los pipelines sean confiables y resilientes.

### 25. En CI/CD, ¿qué es "environment promotion"?
**Respuestas correctas: E (A y C son correctas)**
- A) Promover artefactos de un entorno a otro (dev → staging → prod) ✓
- B) Promover desarrolladores a roles superiores (no es la definición)
- C) Actualizar configuración de entornos ✓
- D) Mejorar la calidad de entornos (no es la definición técnica)
- E) A y C son correctas ✓

**Explicación**: Environment promotion es mover artefactos y configuración entre entornos de forma controlada.

### 26. ¿Qué herramientas se usan para scanning de seguridad en CI/CD?
**Respuestas correctas: E (Todas las anteriores)**
- A) SonarQube ✓
- B) Snyk ✓
- C) OWASP ZAP ✓
- D) Trivy ✓
- E) Todas las anteriores ✓

**Explicación**: Estas son herramientas populares para diferentes tipos de security scanning.

### 27. ¿Qué es "deployment automation" en CI/CD?
**Respuestas correctas: E (Todas las anteriores)**
- A) Automatización del proceso de despliegue sin intervención manual ✓
- B) Automatización de rollbacks en caso de fallos ✓
- C) Automatización de pruebas post-despliegue ✓
- D) Automatización de monitoreo y alertas ✓
- E) Todas las anteriores ✓

**Explicación**: Deployment automation incluye todo el proceso automatizado alrededor del despliegue.

### 28. ¿Cuáles son ventajas de usar contenedores Docker en CI/CD?
**Respuestas correctas: E (Todas las anteriores)**
- A) Entornos de ejecución consistentes ✓
- B) Aislamiento de dependencias ✓
- C) Portabilidad entre diferentes sistemas ✓
- D) Escalabilidad horizontal más fácil ✓
- E) Todas las anteriores ✓

**Explicación**: Los contenedores proporcionan todas estas ventajas en pipelines CI/CD.

### 29. En un pipeline de CI/CD, ¿qué es un "stage"?
**Respuestas correctas: E (Solo A es correcta)**
- A) Una fase del pipeline que agrupa jobs relacionados ✓
- B) Un entorno de despliegue (dev, staging, prod) (eso es "environment")
- C) Un paso individual en un job (eso es "step")
- D) Una condición para ejecutar un job (no es la definición)
- E) Solo A es correcta ✓

**Explicación**: Un stage agrupa jobs relacionados que se ejecutan en secuencia o paralelo.

### 30. ¿Qué prácticas ayudan a mantener pipelines mantenibles?
**Respuestas correctas: E (Todas las anteriores)**
- A) Reutilización de código con templates/libraries ✓
- B) Documentación clara de cada etapa ✓
- C) Variables de entorno para configuración ✓
- D) Jobs pequeños y enfocados ✓
- E) Todas las anteriores ✓

**Explicación**: Estas prácticas mejoran la mantenibilidad de los pipelines a largo plazo.

### 31. ¿Qué es "chaos engineering" en el contexto de CI/CD?
**Respuestas correctas: E (Todas las anteriores)**
- A) Introducir fallos intencionales para probar resiliencia ✓
- B) Validar que sistemas se recuperan correctamente ✓
- C) Mejorar confiabilidad de sistemas ✓
- D) Testing de disaster recovery ✓
- E) Todas las anteriores ✓

**Explicación**: Chaos engineering prueba la resiliencia del sistema introduciendo fallos controlados.

### 32. En GitHub Actions, ¿qué es un "self-hosted runner"?
**Respuestas correctas: E (A, C y D son correctas)**
- A) Un runner ejecutándose en tu propia infraestructura ✓
- B) Un runner proporcionado por GitHub (eso es "GitHub-hosted runner")
- C) Un runner con configuración personalizada ✓
- D) Un runner con acceso a recursos privados ✓
- E) A, C y D son correctas ✓

**Explicación**: Self-hosted runners se ejecutan en tu propia infraestructura con configuración personalizada.

### 33. ¿Qué es "continuous feedback" en CI/CD?
**Respuestas correctas: E (Todas las anteriores)**
- A) Feedback rápido a desarrolladores sobre calidad de código ✓
- B) Notificaciones de estado de pipeline ✓
- C) Reportes de cobertura de código ✓
- D) Métricas de performance del pipeline ✓
- E) Todas las anteriores ✓

**Explicación**: Continuous feedback proporciona información rápida a desarrolladores sobre el estado del código.

### 34. ¿Cómo manejarías versionado de artefactos en CI/CD?
**Respuestas correctas: E (Todas las anteriores son válidas)**
- A) Semantic versioning (semver) ✓
- B) Tags de Git como versiones ✓
- C) Timestamps en nombres de artefactos ✓
- D) Hash de commit como versión ✓
- E) Todas las anteriores son válidas ✓

**Explicación**: Diferentes estrategias de versionado son válidas según el contexto y necesidades.

### 35. En GitLab CI/CD, ¿qué es un "job dependency"?
**Respuestas correctas: E (A y C son correctas)**
- A) Un job que debe completarse antes de otro ✓
- B) Dependencias de paquetes en un job (no es la definición)
- C) Un job que necesita artefactos de otro job ✓
- D) Un job que se ejecuta en paralelo con otro (no es dependency)
- E) A y C son correctas ✓

**Explicación**: Job dependency significa que un job necesita que otro complete o necesita sus artifacts.

### 36. ¿Qué es "shift-left security" en CI/CD?
**Respuestas correctas: E (Todas las anteriores)**
- A) Integrar seguridad desde las primeras etapas del desarrollo ✓
- B) Mover herramientas de seguridad al inicio del pipeline ✓
- C) Detectar vulnerabilidades antes de producción ✓
- D) Escanear dependencias y código en cada commit ✓
- E) Todas las anteriores ✓

**Explicación**: Shift-left security significa integrar seguridad temprano en el ciclo de desarrollo.

### 37. ¿Qué consideraciones hay al implementar CI/CD para aplicaciones móviles?
**Respuestas correctas: E (Todas las anteriores)**
- A) Testing en múltiples dispositivos y OS ✓
- B) Distribución a testers y stores ✓
- C) Code signing y certificados ✓
- D) Versionado de apps y compatibilidad ✓
- E) Todas las anteriores ✓

**Explicación**: CI/CD para móviles tiene consideraciones específicas como signing y distribución.

### 38. ¿Qué es "idempotencia" en scripts de despliegue?
**Respuestas correctas: E (Todas las anteriores)**
- A) Ejecutar scripts múltiples veces sin efectos secundarios ✓
- B) Verificar estado antes de aplicar cambios ✓
- C) Usar herramientas que garanticen idempotencia (Ansible, Terraform) ✓
- D) Implementar checksums para validar cambios ✓
- E) Todas las anteriores ✓

**Explicación**: Idempotencia significa que ejecutar el script múltiples veces produce el mismo resultado.

### 39. ¿Qué consideraciones tendrías al implementar CI/CD en una arquitectura de microservicios?
**Respuestas correctas: E (Todas las anteriores)**
- A) Pipelines independientes por servicio ✓
- B) Coordinación de despliegues entre servicios ✓
- C) Versionado de APIs y compatibilidad hacia atrás ✓
- D) Testing de integración entre servicios ✓
- E) Todas las anteriores ✓

**Explicación**: Microservicios requieren consideraciones especiales en CI/CD por su naturaleza distribuida.

### 40. ¿Qué prácticas mejoran la eficiencia de un pipeline de CI/CD?
**Respuestas correctas: E (Todas las anteriores)**
- A) Ejecución rápida (< 10 minutos para feedback rápido) ✓
- B) Jobs paralelos cuando sea posible ✓
- C) Caché inteligente de dependencias ✓
- D) Ejecución condicional de jobs innecesarios ✓
- E) Todas las anteriores ✓

**Explicación**: Estas prácticas mejoran la eficiencia y velocidad del pipeline.

---

## GraphQL - Respuestas (Preguntas 41-70)

### 41. ¿Cuáles son las operaciones principales en GraphQL?
**Respuestas correctas: E (A, B y C son correctas)**
- A) Query ✓
- B) Mutation ✓
- C) Subscription ✓
- D) Resolver (no es una operación, es una función)
- E) A, B y C son correctas ✓

**Explicación**: Las tres operaciones principales son Query (lectura), Mutation (escritura) y Subscription (tiempo real).

### 42. En GraphQL, ¿qué es un "resolver"?
**Respuestas correctas: E (Todas las anteriores)**
- A) Una función que resuelve un campo específico en el schema ✓
- B) El mecanismo que obtiene datos para un campo ✓
- C) Puede ser síncrono o asíncrono ✓
- D) Puede acceder a múltiples fuentes de datos ✓
- E) Todas las anteriores ✓

**Explicación**: Los resolvers son funciones que obtienen datos para cada campo, pueden ser async y acceder a múltiples fuentes.

### 43. ¿Cuáles son ventajas de GraphQL sobre REST?
**Respuestas correctas: E (Todas las anteriores)**
- A) Evita over-fetching (traer más datos de los necesarios) ✓
- B) Evita under-fetching (necesitar múltiples requests) ✓
- C) Single endpoint ✓
- D) Tipado fuerte ✓
- E) Todas las anteriores ✓

**Explicación**: GraphQL ofrece todas estas ventajas sobre REST tradicional.

### 44. En GraphQL, ¿qué tipos escalares están disponibles por defecto?
**Respuestas correctas: F (Todas las anteriores)**
- A) String ✓
- B) Int ✓
- C) Float ✓
- D) Boolean ✓
- E) ID ✓
- F) Todas las anteriores ✓

**Explicación**: Estos son los cinco tipos escalares built-in en GraphQL.

### 45. ¿Qué es el "N+1 problem" en GraphQL y cómo se resuelve?
**Respuestas correctas: E (Todas las anteriores)**
- A) Múltiples queries a la base de datos para resolver relaciones ✓
- B) Se resuelve con DataLoader para batching ✓
- C) Se resuelve con eager loading ✓
- D) Es un problema de performance común ✓
- E) Todas las anteriores ✓

**Explicación**: El problema N+1 ocurre cuando se hacen múltiples queries para relaciones, se resuelve con batching o eager loading.

### 46. En GraphQL, ¿qué es "introspection"?
**Respuestas correctas: E (A, B y C son correctas)**
- A) Capacidad de consultar el schema mismo ✓
- B) Documentación automática del API ✓
- C) Exploración del schema disponible ✓
- D) Validación de tipos en runtime (es parte pero no la definición completa)
- E) A, B y C son correctas ✓

**Explicación**: Introspection permite consultar el schema mismo, proporcionando documentación automática.

### 47. ¿Cuáles son componentes de un schema GraphQL?
**Respuestas correctas: E (Todas las anteriores)**
- A) Types ✓
- B) Queries ✓
- C) Mutations ✓
- D) Subscriptions ✓
- E) Todas las anteriores ✓

**Explicación**: Un schema GraphQL completo incluye tipos y las tres operaciones principales.

### 48. En GraphQL, ¿qué es un "fragment"?
**Respuestas correctas: E (Todas las anteriores)**
- A) Un conjunto reutilizable de campos ✓
- B) Una forma de evitar duplicación en queries ✓
- C) Puede ser usado en múltiples queries ✓
- D) Puede ser condicional con `@include` o `@skip` ✓
- E) Todas las anteriores ✓

**Explicación**: Los fragments permiten reutilizar conjuntos de campos y pueden ser condicionales.

### 49. ¿Qué son "directives" en GraphQL?
**Respuestas correctas: E (Todas las anteriores)**
- A) Instrucciones que modifican la ejecución de queries ✓
- B) @skip, @include son directives built-in ✓
- C) @deprecated marca campos obsoletos ✓
- D) Se pueden crear custom directives ✓
- E) Todas las anteriores ✓

**Explicación**: Las directives modifican la ejecución y pueden ser built-in o custom.

### 50. En GraphQL, ¿qué es "query complexity"?
**Respuestas correctas: E (Todas las anteriores)**
- A) Una métrica que mide la complejidad de una query ✓
- B) Se usa para prevenir queries costosas ✓
- C) Se puede limitar para prevenir DoS ✓
- D) Depende de la profundidad y número de campos ✓
- E) Todas las anteriores ✓

**Explicación**: Query complexity es una métrica de seguridad importante para prevenir queries costosas.

### 51. ¿Cuáles son implementaciones populares de servidor GraphQL?
**Respuestas correctas: E (Todas las anteriores)**
- A) Apollo Server ✓
- B) GraphQL.js ✓
- C) Hasura ✓
- D) Express GraphQL ✓
- E) Todas las anteriores ✓

**Explicación**: Todas estas son implementaciones populares de servidores GraphQL.

### 52. En GraphQL, ¿qué es "schema stitching"?
**Respuestas correctas: E (Todas las anteriores)**
- A) Combinar múltiples schemas GraphQL en uno ✓
- B) Unificar APIs de diferentes servicios ✓
- C) Crear un gateway GraphQL ✓
- D) Delegar queries a diferentes servicios ✓
- E) Todas las anteriores ✓

**Explicación**: Schema stitching permite combinar múltiples schemas en un gateway unificado.

### 53. ¿Qué es "GraphQL Federation"?
**Respuestas correctas: E (Todas las anteriores)**
- A) Arquitectura para múltiples GraphQL services ✓
- B) Cada servicio mantiene su propio schema ✓
- C) Un gateway unifica los schemas ✓
- D) Permite escalar GraphQL a microservicios ✓
- E) Todas las anteriores ✓

**Explicación**: Federation permite escalar GraphQL a arquitecturas de microservicios.

### 54. En GraphQL, ¿cómo se manejan errores?
**Respuestas correctas: E (Todas las anteriores)**
- A) Errores en el array `errors` de la respuesta ✓
- B) Union types para manejar errores tipados ✓
- C) Extensions para metadata de errores ✓
- D) Errores no detienen la ejecución completa ✓
- E) Todas las anteriores ✓

**Explicación**: GraphQL tiene múltiples formas de manejar errores, incluyendo el array errors y union types.

### 55. ¿Qué es "query batching" en GraphQL?
**Respuestas correctas: E (Todas las anteriores)**
- A) Enviar múltiples queries en una sola request ✓
- B) Reducir round-trips al servidor ✓
- C) Mejorar performance de la aplicación ✓
- D) Requiere soporte del cliente ✓
- E) Todas las anteriores ✓

**Explicación**: Query batching permite enviar múltiples queries en una request para mejorar performance.

### 56. En GraphQL, ¿qué es "depth limiting"?
**Respuestas correctas: E (Todas las anteriores)**
- A) Limitar la profundidad máxima de queries anidadas ✓
- B) Prevenir queries recursivas profundas ✓
- C) Medida de seguridad contra DoS ✓
- D) Configurable en el servidor ✓
- E) Todas las anteriores ✓

**Explicación**: Depth limiting es una medida de seguridad importante para prevenir queries recursivas profundas.

### 57. ¿Cuáles son características de GraphQL Subscriptions?
**Respuestas correctas: E (Todas las anteriores)**
- A) Operaciones en tiempo real ✓
- B) Usan WebSockets o Server-Sent Events ✓
- C) Útiles para notificaciones y actualizaciones en vivo ✓
- D) Requieren configuración adicional del servidor ✓
- E) Todas las anteriores ✓

**Explicación**: Las subscriptions permiten operaciones en tiempo real usando WebSockets o SSE.

### 58. En GraphQL, ¿qué es "field aliasing"?
**Respuestas correctas: E (A, B y C son correctas)**
- A) Dar un nombre diferente a un campo en la query ✓
- B) Útil para consultar el mismo campo múltiples veces con diferentes argumentos ✓
- C) Sintaxis: `alias: fieldName` ✓
- D) Solo para campos de diferentes tipos (incorrecto)
- E) A, B y C son correctas ✓

**Explicación**: Field aliasing permite renombrar campos en la query, útil para múltiples consultas del mismo campo.

### 59. ¿Qué es "pagination" en GraphQL y qué enfoques existen?
**Respuestas correctas: E (Todas las anteriores)**
- A) Cursor-based pagination (recomendado) ✓
- B) Offset-based pagination ✓
- C) Connection pattern (edges, nodes, pageInfo) ✓
- D) Limitar resultados grandes ✓
- E) Todas las anteriores ✓

**Explicación**: Hay múltiples enfoques de paginación, siendo cursor-based el más recomendado.

### 60. En GraphQL, ¿qué es "input validation"?
**Respuestas correctas: E (Todas las anteriores)**
- A) Validación de argumentos de queries/mutations ✓
- B) Validación de tipos en el schema ✓
- C) Validación custom en resolvers ✓
- D) Prevenir datos inválidos ✓
- E) Todas las anteriores ✓

**Explicación**: Input validation ocurre a múltiples niveles en GraphQL.

### 61. ¿Cuáles son buenas prácticas para diseño de schema GraphQL?
**Respuestas correctas: E (Todas las anteriores)**
- A) Nombres descriptivos y consistentes ✓
- B) Evitar anidamiento excesivo (máximo 3-4 niveles) ✓
- C) Usar paginación para listas ✓
- D) Versionado cuidadoso del schema ✓
- E) Todas las anteriores ✓

**Explicación**: Estas son buenas prácticas fundamentales para diseñar schemas GraphQL escalables.

### 62. En GraphQL, ¿qué es "query caching"?
**Respuestas correctas: E (Todas las anteriores)**
- A) Cachear resultados de queries ✓
- B) Mejorar performance de queries frecuentes ✓
- C) Puede ser a nivel de servidor o cliente ✓
- D) Considerar invalidation de cache ✓
- E) Todas las anteriores ✓

**Explicación**: Query caching puede implementarse tanto en servidor como cliente para mejorar performance.

### 63. ¿Qué es "DataLoader" y para qué se usa en GraphQL?
**Respuestas correctas: E (Todas las anteriores)**
- A) Una librería para batching y caching de cargas de datos ✓
- B) Resuelve el problema N+1 ✓
- C) Agrupa múltiples requests en batches ✓
- D) Cachea resultados durante un request ✓
- E) Todas las anteriores ✓

**Explicación**: DataLoader es esencial para resolver el problema N+1 mediante batching y caching.

### 64. En GraphQL, ¿qué son "union types"?
**Respuestas correctas: E (Todas las anteriores)**
- A) Un tipo que puede ser uno de varios tipos ✓
- B) Útil para campos que pueden retornar diferentes tipos ✓
- C) Requiere `__typename` para discriminar ✓
- D) Alternativa a interfaces en algunos casos ✓
- E) Todas las anteriores ✓

**Explicación**: Union types permiten que un campo retorne uno de varios tipos posibles.

### 65. ¿Qué es "rate limiting" en GraphQL y por qué es importante?
**Respuestas correctas: E (Todas las anteriores)**
- A) Limitar el número de requests por tiempo ✓
- B) Prevenir abuso del API ✓
- C) Puede ser por IP, usuario, o query complexity ✓
- D) Protección contra DoS ✓
- E) Todas las anteriores ✓

**Explicación**: Rate limiting es crucial para proteger APIs GraphQL contra abuso.

### 66. En GraphQL, ¿qué es "middleware"?
**Respuestas correctas: E (Todas las anteriores)**
- A) Funciones que se ejecutan antes/después de resolvers ✓
- B) Útil para logging, autenticación, autorización ✓
- C) Puede modificar el contexto ✓
- D) Puede interceptar queries/mutations ✓
- E) Todas las anteriores ✓

**Explicación**: Middleware permite ejecutar lógica común antes/después de resolvers.

### 67. ¿Cuáles son diferencias entre GraphQL y REST?
**Respuestas correctas: E (Todas las anteriores)**
- A) GraphQL tiene un solo endpoint, REST múltiples ✓
- B) GraphQL permite queries flexibles, REST endpoints fijos ✓
- C) GraphQL usa POST para queries, REST usa GET/POST/PUT/DELETE ✓
- D) GraphQL tiene tipado fuerte, REST no necesariamente ✓
- E) Todas las anteriores ✓

**Explicación**: Estas son las diferencias fundamentales entre GraphQL y REST.

### 68. En GraphQL, ¿qué es "context"?
**Respuestas correctas: E (Todas las anteriores)**
- A) Un objeto compartido entre todos los resolvers en un request ✓
- B) Útil para autenticación, autorización, conexiones a DB ✓
- C) Se crea una vez por request ✓
- D) Puede contener información del usuario ✓
- E) Todas las anteriores ✓

**Explicación**: El context es un objeto compartido útil para autenticación y recursos compartidos.

### 69. ¿Qué es "schema-first" vs "code-first" en GraphQL?
**Respuestas correctas: E (Todas las anteriores)**
- A) Schema-first: definir schema primero, luego implementar resolvers ✓
- B) Code-first: generar schema desde código/types ✓
- C) Schema-first es más explícito ✓
- D) Code-first puede ser más rápido de desarrollar ✓
- E) Todas las anteriores ✓

**Explicación**: Ambos enfoques son válidos, cada uno con sus ventajas.

### 70. En GraphQL, ¿qué son "interfaces"?
**Respuestas correctas: E (Todas las anteriores)**
- A) Un tipo abstracto que define campos comunes ✓
- B) Tipos pueden implementar interfaces ✓
- C) Útil para polimorfismo ✓
- D) Requiere `__typename` para resolver el tipo concreto ✓
- E) Todas las anteriores ✓

**Explicación**: Las interfaces permiten polimorfismo en GraphQL.

---

## SQL - Respuestas (Preguntas 71-100)

### 71. ¿Cuáles son los principios ACID en transacciones SQL?
**Respuestas correctas: E (Todas las anteriores)**
- A) Atomicity (Atomicidad) ✓
- B) Consistency (Consistencia) ✓
- C) Isolation (Aislamiento) ✓
- D) Durability (Durabilidad) ✓
- E) Todas las anteriores ✓

**Explicación**: ACID son los cuatro principios fundamentales de las transacciones en bases de datos.

### 72. En SQL, ¿qué tipos de JOINs existen?
**Respuestas correctas: F (Todas las anteriores)**
- A) INNER JOIN ✓
- B) LEFT JOIN (LEFT OUTER JOIN) ✓
- C) RIGHT JOIN (RIGHT OUTER JOIN) ✓
- D) FULL OUTER JOIN ✓
- E) CROSS JOIN ✓
- F) Todas las anteriores ✓

**Explicación**: Estos son los cinco tipos principales de JOINs en SQL.

### 73. ¿Qué son "window functions" en SQL y para qué se usan?
**Respuestas correctas: E (Todas las anteriores)**
- A) Funciones que operan sobre un conjunto de filas relacionadas ✓
- B) ROW_NUMBER(), RANK(), DENSE_RANK() ✓
- C) LAG(), LEAD() para acceder a filas anteriores/siguientes ✓
- D) SUM() OVER() para running totals ✓
- E) Todas las anteriores ✓

**Explicación**: Window functions operan sobre ventanas de filas sin agrupar como GROUP BY.

### 74. En SQL, ¿qué es una "subquery correlacionada"?
**Respuestas correctas: E (Todas las anteriores)**
- A) Una subquery que referencia columnas de la query externa ✓
- B) Se ejecuta una vez por cada fila de la query externa ✓
- C) Puede ser menos eficiente que JOINs ✓
- D) Útil cuando la lógica es compleja ✓
- E) Todas las anteriores ✓

**Explicación**: Las subqueries correlacionadas referencian la query externa y pueden ser menos eficientes.

### 75. ¿Cuáles son niveles de aislamiento en transacciones SQL?
**Respuestas correctas: E (Todas las anteriores)**
- A) READ UNCOMMITTED ✓
- B) READ COMMITTED ✓
- C) REPEATABLE READ ✓
- D) SERIALIZABLE ✓
- E) Todas las anteriores ✓

**Explicación**: Estos son los cuatro niveles de aislamiento estándar en SQL.

### 76. En SQL, ¿qué es un "index" y qué tipos existen?
**Respuestas correctas: F (Todas las anteriores)**
- A) Estructura que mejora la velocidad de búsquedas ✓
- B) B-tree index (más común) ✓
- C) Hash index ✓
- D) Bitmap index ✓
- E) Composite index (múltiples columnas) ✓
- F) Todas las anteriores ✓

**Explicación**: Los índices mejoran performance y existen varios tipos según el caso de uso.

### 77. ¿Qué es "query optimization" en SQL?
**Respuestas correctas: E (Todas las anteriores)**
- A) Mejorar el performance de queries ✓
- B) Usar EXPLAIN/EXPLAIN ANALYZE para ver execution plan ✓
- C) Identificar y crear índices apropiados ✓
- D) Evitar full table scans cuando sea posible ✓
- E) Todas las anteriores ✓

**Explicación**: Query optimization incluye análisis de execution plans y creación de índices.

### 78. En SQL, ¿qué son "CTEs" (Common Table Expressions)?
**Respuestas correctas: E (Todas las anteriores)**
- A) Consultas temporales nombradas con WITH clause ✓
- B) Mejoran legibilidad de queries complejas ✓
- C) Pueden ser recursivas ✓
- D) Útiles para jerarquías y árboles ✓
- E) Todas las anteriores ✓

**Explicación**: CTEs mejoran legibilidad y pueden ser recursivas para jerarquías.

### 79. ¿Qué es "normalization" en bases de datos y cuáles son las formas normales?
**Respuestas correctas: F (Todas las anteriores)**
- A) Proceso de organizar datos para reducir redundancia ✓
- B) 1NF: Atomic values ✓
- C) 2NF: Eliminar dependencias parciales ✓
- D) 3NF: Eliminar dependencias transitivas ✓
- E) BCNF: Boyce-Codd Normal Form ✓
- F) Todas las anteriores ✓

**Explicación**: La normalización reduce redundancia mediante formas normales progresivas.

### 80. En SQL, ¿qué es un "trigger"?
**Respuestas correctas: E (Todas las anteriores)**
- A) Procedimiento almacenado que se ejecuta automáticamente ✓
- B) Puede ser BEFORE o AFTER de un evento ✓
- C) Puede ser FOR EACH ROW o FOR EACH STATEMENT ✓
- D) Útil para auditoría, validación, lógica de negocio ✓
- E) Todas las anteriores ✓

**Explicación**: Los triggers ejecutan código automáticamente ante eventos específicos.

### 81. ¿Qué es "pessimistic locking" vs "optimistic locking"?
**Respuestas correctas: E (Todas las anteriores)**
- A) Pessimistic: bloquea registros durante la transacción ✓
- B) Optimistic: asume que no habrá conflictos, verifica al commit ✓
- C) Pessimistic puede causar deadlocks ✓
- D) Optimistic usa version numbers o timestamps ✓
- E) Todas las anteriores ✓

**Explicación**: Dos estrategias diferentes de locking, cada una con sus ventajas y desventajas.

### 82. En SQL, ¿qué son "stored procedures"?
**Respuestas correctas: E (Todas las anteriores)**
- A) Código SQL almacenado en la base de datos ✓
- B) Pueden tener parámetros de entrada y salida ✓
- C) Pueden retornar resultados ✓
- D) Útiles para lógica de negocio compleja ✓
- E) Todas las anteriores ✓

**Explicación**: Stored procedures almacenan lógica SQL en la base de datos.

### 83. ¿Qué es "partitioning" en bases de datos?
**Respuestas correctas: F (Todas las anteriores)**
- A) Dividir una tabla grande en partes más pequeñas ✓
- B) Range partitioning ✓
- C) List partitioning ✓
- D) Hash partitioning ✓
- E) Mejora performance de queries grandes ✓
- F) Todas las anteriores ✓

**Explicación**: Partitioning divide tablas grandes para mejorar performance.

### 84. En SQL, ¿qué es "MVCC" (Multi-Version Concurrency Control)?
**Respuestas correctas: E (Todas las anteriores)**
- A) Mecanismo para manejar concurrencia sin locks pesados ✓
- B) Mantiene múltiples versiones de datos ✓
- C) Permite reads sin bloquear writes ✓
- D) Usado en PostgreSQL, MySQL InnoDB ✓
- E) Todas las anteriores ✓

**Explicación**: MVCC permite alta concurrencia manteniendo múltiples versiones de datos.

### 85. ¿Qué es "covering index" en SQL?
**Respuestas correctas: E (Todas las anteriores)**
- A) Un índice que contiene todas las columnas necesarias para una query ✓
- B) Evita acceso a la tabla principal ✓
- C) Mejora significativamente el performance ✓
- D) También conocido como "index-only scan" ✓
- E) Todas las anteriores ✓

**Explicación**: Un covering index contiene todas las columnas necesarias, evitando acceso a la tabla.

### 86. En SQL, ¿qué es "deadlock" y cómo se previene?
**Respuestas correctas: E (Todas las anteriores)**
- A) Situación donde dos transacciones se bloquean mutuamente ✓
- B) El DBMS detecta y aborta una transacción ✓
- C) Prevención: mismo orden de locks, timeouts ✓
- D) Prevención: evitar transacciones largas ✓
- E) Todas las anteriores ✓

**Explicación**: Deadlocks ocurren cuando transacciones se bloquean mutuamente, se previenen con orden consistente.

### 87. ¿Qué son "aggregate functions" en SQL?
**Respuestas correctas: E (Todas las anteriores)**
- A) COUNT(), SUM(), AVG(), MAX(), MIN() ✓
- B) Operan sobre grupos de filas ✓
- C) Usadas con GROUP BY ✓
- D) Pueden usar HAVING para filtrar grupos ✓
- E) Todas las anteriores ✓

**Explicación**: Aggregate functions operan sobre grupos de filas, típicamente con GROUP BY.

### 88. En SQL, ¿qué es "EXISTS" vs "IN"?
**Respuestas correctas: E (Todas las anteriores)**
- A) EXISTS retorna true/false si la subquery tiene resultados ✓
- B) IN verifica si un valor está en una lista ✓
- C) EXISTS puede ser más eficiente con subqueries ✓
- D) IN puede tener problemas con NULLs ✓
- E) Todas las anteriores ✓

**Explicación**: EXISTS y IN tienen diferencias en uso y performance, especialmente con NULLs.

### 89. ¿Qué es "denormalization" y cuándo se usa?
**Respuestas correctas: E (Todas las anteriores)**
- A) Proceso de agregar redundancia intencional ✓
- B) Trade-off: redundancia vs performance ✓
- C) Útil para mejorar performance de reads ✓
- D) Puede complicar mantenimiento ✓
- E) Todas las anteriores ✓

**Explicación**: Desnormalización es un trade-off entre redundancia y performance de lectura.

### 90. En SQL, ¿qué es "full table scan"?
**Respuestas correctas: E (Todas las anteriores)**
- A) Lectura de todas las filas de una tabla ✓
- B) Ocurre cuando no hay índice apropiado ✓
- C) Puede ser lento en tablas grandes ✓
- D) A veces es la mejor opción (tablas pequeñas) ✓
- E) Todas las anteriores ✓

**Explicación**: Full table scan lee todas las filas, puede ser necesario o indicar falta de índices.

### 91. ¿Qué es "query execution plan" en SQL?
**Respuestas correctas: E (Todas las anteriores)**
- A) El plan que el optimizador usa para ejecutar una query ✓
- B) Se puede ver con EXPLAIN o EXPLAIN ANALYZE ✓
- C) Muestra qué índices se usan ✓
- D) Muestra el orden de operaciones ✓
- E) Todas las anteriores ✓

**Explicación**: El execution plan muestra cómo el optimizador ejecutará la query.

### 92. En SQL, ¿qué son "constraints"?
**Respuestas correctas: F (Todas las anteriores)**
- A) Reglas que limitan los datos en una tabla ✓
- B) PRIMARY KEY ✓
- C) FOREIGN KEY ✓
- D) UNIQUE ✓
- E) CHECK, NOT NULL ✓
- F) Todas las anteriores ✓

**Explicación**: Constraints aseguran integridad de datos mediante reglas.

### 93. ¿Qué es "connection pooling" y por qué es importante?
**Respuestas correctas: E (Todas las anteriores)**
- A) Reutilizar conexiones a la base de datos ✓
- B) Reducir overhead de crear/cerrar conexiones ✓
- C) Mejorar performance de aplicaciones ✓
- D) Limitar número de conexiones simultáneas ✓
- E) Todas las anteriores ✓

**Explicación**: Connection pooling reutiliza conexiones para mejorar performance.

### 94. En SQL, ¿qué es "materialized view"?
**Respuestas correctas: E (Todas las anteriores)**
- A) Una vista que almacena resultados físicamente ✓
- B) Mejora performance de queries complejas ✓
- C) Requiere refresco periódico ✓
- D) Trade-off: storage vs performance ✓
- E) Todas las anteriores ✓

**Explicación**: Materialized views almacenan resultados físicamente para mejorar performance.

### 95. ¿Qué es "SQL injection" y cómo se previene?
**Respuestas correctas: E (Todas las anteriores)**
- A) Ataque donde código SQL malicioso se inyecta en queries ✓
- B) Prevención: usar prepared statements ✓
- C) Prevención: validar y sanitizar input ✓
- D) Prevención: usar parameterized queries ✓
- E) Todas las anteriores ✓

**Explicación**: SQL injection es un ataque crítico que se previene con prepared statements y validación.

### 96. En SQL, ¿qué es "cascade delete"?
**Respuestas correctas: E (Todas las anteriores)**
- A) Eliminar filas relacionadas automáticamente ✓
- B) Configurado en FOREIGN KEY constraints ✓
- C) Puede ser peligroso si no se usa con cuidado ✓
- D) Útil para mantener integridad referencial ✓
- E) Todas las anteriores ✓

**Explicación**: Cascade delete elimina registros relacionados automáticamente, útil pero debe usarse con cuidado.

### 97. ¿Qué son "transactions" y cuándo se usan?
**Respuestas correctas: E (Todas las anteriores)**
- A) Grupo de operaciones que se ejecutan como una unidad ✓
- B) Todo o nada (atomicidad) ✓
- C) BEGIN TRANSACTION, COMMIT, ROLLBACK ✓
- D) Útiles para mantener consistencia de datos ✓
- E) Todas las anteriores ✓

**Explicación**: Las transacciones aseguran atomicidad y consistencia de operaciones relacionadas.

### 98. En SQL, ¿qué es "index selectivity"?
**Respuestas correctas: E (Todas las anteriores)**
- A) Medida de qué tan único es un índice ✓
- B) Índices con alta selectividad son más útiles ✓
- C) Afecta la decisión del optimizador ✓
- D) Columnas con muchos valores únicos tienen alta selectividad ✓
- E) Todas las anteriores ✓

**Explicación**: La selectividad del índice afecta su utilidad y la decisión del optimizador.

### 99. ¿Qué es "sharding" en bases de datos?
**Respuestas correctas: E (Todas las anteriores)**
- A) Dividir datos horizontalmente en múltiples bases de datos ✓
- B) Escalar horizontalmente ✓
- C) Cada shard contiene un subconjunto de datos ✓
- D) Requiere lógica de routing ✓
- E) Todas las anteriores ✓

**Explicación**: Sharding divide datos horizontalmente para escalar.

### 100. ¿Qué son "database migrations" y por qué son importantes?
**Respuestas correctas: E (Todas las anteriores)**
- A) Scripts que versionan cambios de schema ✓
- B) Permiten aplicar cambios de forma controlada ✓
- C) Facilitan rollback de cambios ✓
- D) Mantienen sincronización entre entornos ✓
- E) Todas las anteriores ✓

**Explicación**: Las migrations versionan cambios de schema y facilitan despliegues controlados.

---

### Cómo usar este documento:

1. Intenta responder las preguntas sin ver las respuestas
2. Revisa tus respuestas y estudia las explicaciones
3. Identifica áreas donde necesitas más estudio
4. Repite el proceso hasta dominar todos los conceptos

### Recursos adicionales:

- Consulta `GUIA_CONCEPTOS_SENIOR_ASSURE.md` para conceptos detallados
- Practica con ejemplos reales de cada tecnología
- Revisa documentación oficial de las herramientas
- Únete a comunidades técnicas para resolver dudas

---

*Buena suerte en tu examen Senior de AssureSoft!*

