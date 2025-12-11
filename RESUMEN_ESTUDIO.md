# Resumen de Estudio para Examen 360 - Senior Software Engineer

## Índice de Secciones

1. [CI/CD](#cicd)
2. [GraphQL](#graphql)
3. [SQL](#sql)
4. [React](#react)
5. [Node.js](#nodejs)
6. [PHP](#php)
7. [C#](#c-sharp)
8. [Cypress](#cypress)

---

## CI/CD

### Conceptos Fundamentales

**Integración Continua (CI):**
- Automatización de la integración de código de múltiples desarrolladores
- Ejecución automática de pruebas en cada commit o pull request
- Detección temprana de errores y conflictos
- Builds automatizados y validación de calidad de código

**Despliegue Continuo (CD):**
- Automatización del proceso de despliegue a diferentes entornos
- Estrategias de despliegue: Blue-Green, Canary, Rolling
- Automatización de pruebas de integración y end-to-end
- Monitoreo continuo post-despliegue

### Herramientas Principales

- **Jenkins**: Servidor de automatización open-source, extensible con plugins
- **GitLab CI/CD**: Integrado en GitLab, configuración mediante `.gitlab-ci.yml`
- **GitHub Actions**: Integrado en GitHub, workflows en YAML
- **CircleCI**: Plataforma cloud con soporte para múltiples lenguajes
- **Azure DevOps**: Suite completa de herramientas de Microsoft

### Buenas Prácticas

1. **Estrategias de Branching:**
   - GitFlow: Branches para features, develop, release, hotfix, main
   - Trunk-Based Development: Desarrollo en main con feature flags
   - GitHub Flow: Branches de feature que se mergean a main

2. **Pipelines Eficientes:**
   - Paralelización de jobs cuando sea posible
   - Caché de dependencias para acelerar builds
   - Jobs condicionales basados en cambios en archivos específicos
   - Uso de matrices para testing en múltiples versiones/entornos

3. **Pruebas Automatizadas:**
   - Unitarias: Ejecutadas en cada commit
   - Integración: Validación de componentes trabajando juntos
   - End-to-End: Validación de flujos completos
   - Pruebas de seguridad: SAST, DAST, dependencias vulnerables

4. **Monitoreo y Observabilidad:**
   - Logs estructurados
   - Métricas de performance post-despliegue
   - Alertas automáticas ante fallos
   - Dashboards de CI/CD health

### Conceptos Avanzados

- **Infrastructure as Code (IaC)**: Terraform, CloudFormation, Ansible
- **Containerización**: Docker para builds reproducibles
- **Orquestación**: Kubernetes para despliegues escalables
- **Secret Management**: Vault, AWS Secrets Manager, Azure Key Vault
- **Feature Flags**: Control de features sin redeploy

---

## GraphQL

### Conceptos Fundamentales

**¿Qué es GraphQL?**
- Lenguaje de consulta para APIs desarrollado por Facebook
- Permite a los clientes solicitar exactamente los datos que necesitan
- Single endpoint en lugar de múltiples endpoints REST
- Tipado fuerte con sistema de tipos

### Componentes Principales

1. **Schema (Esquema):**
   - Define los tipos de datos disponibles
   - Especifica qué queries, mutations y subscriptions están disponibles
   - Utiliza SDL (Schema Definition Language)
   - Validación de tipos en tiempo de ejecución

2. **Types (Tipos):**
   - Scalar types: String, Int, Float, Boolean, ID
   - Object types: Tipos personalizados
   - Enums: Conjunto de valores predefinidos
   - Interfaces y Unions: Para polimorfismo

3. **Resolvers:**
   - Funciones que resuelven cada campo en una query
   - Pueden ser síncronos o asíncronos
   - N+1 problem: Solucionado con DataLoader
   - Resolvers anidados para relaciones

4. **Queries:**
   - Operaciones de lectura
   - Permiten consultas anidadas
   - Variables para queries parametrizadas
   - Fragments para reutilización

5. **Mutations:**
   - Operaciones de escritura
   - Modifican datos en el servidor
   - Retornan datos actualizados
   - Validación de input

6. **Subscriptions:**
   - Operaciones en tiempo real
   - WebSockets o Server-Sent Events
   - Útiles para notificaciones, chat, actualizaciones en vivo

### Ventajas sobre REST

- **Over-fetching**: Evita traer más datos de los necesarios
- **Under-fetching**: Evita múltiples requests para obtener datos relacionados
- **Tipado Fuerte**: Validación automática de tipos
- **Introspection**: Documentación automática y exploración de schema
- **Versionado**: Evolución del schema sin breaking changes

### Implementaciones Comunes

- **Apollo Server**: Implementación completa con muchas features
- **GraphQL.js**: Implementación de referencia
- **Relay**: Framework de Facebook para React
- **Hasura**: GraphQL engine sobre PostgreSQL

### Buenas Prácticas

1. **Diseño de Schema:**
   - Nombres descriptivos y consistentes
   - Evitar anidamiento excesivo (máximo 3-4 niveles)
   - Usar paginación para listas grandes
   - Versionado cuidadoso del schema

2. **Performance:**
   - Implementar DataLoader para resolver N+1 queries
   - Caché de queries frecuentes
   - Rate limiting para prevenir abuso
   - Query complexity analysis

3. **Seguridad:**
   - Validación de input
   - Autenticación y autorización en resolvers
   - Depth limiting para prevenir queries recursivas profundas
   - Timeout en queries

4. **Error Handling:**
   - Errores tipados y descriptivos
   - Uso de union types para manejar errores
   - Logging apropiado sin exponer información sensible

### Conceptos Avanzados

- **Federation**: Múltiples GraphQL services unificados
- **Schema Stitching**: Combinar múltiples schemas
- **Directives**: @deprecated, @skip, @include, custom directives
- **Middleware**: Para logging, autenticación, etc.
- **Batch Resolving**: Optimización de múltiples resolvers

---

## SQL

### Conceptos Fundamentales

**Lenguaje de Consulta Estructurado:**
- Lenguaje estándar para gestionar bases de datos relacionales
- ANSI SQL como estándar base
- Variaciones por DBMS: PostgreSQL, MySQL, SQL Server, Oracle

### Operaciones Básicas (CRUD)

1. **SELECT:**
   - Consulta de datos
   - Cláusulas: WHERE, ORDER BY, GROUP BY, HAVING
   - Funciones agregadas: COUNT, SUM, AVG, MAX, MIN
   - DISTINCT para valores únicos

2. **INSERT:**
   - Inserción de nuevas filas
   - INSERT INTO ... VALUES
   - INSERT INTO ... SELECT (bulk insert)
   - INSERT ... ON DUPLICATE KEY UPDATE

3. **UPDATE:**
   - Modificación de datos existentes
   - WHERE clause obligatorio en producción
   - UPDATE con JOINs
   - Transacciones para múltiples updates

4. **DELETE:**
   - Eliminación de filas
   - DELETE vs TRUNCATE
   - Soft delete (marcar como eliminado)
   - CASCADE deletes

### Joins

1. **INNER JOIN:**
   - Solo filas con coincidencias en ambas tablas
   - Más común y eficiente

2. **LEFT JOIN (LEFT OUTER JOIN):**
   - Todas las filas de la tabla izquierda
   - NULLs para no coincidencias

3. **RIGHT JOIN (RIGHT OUTER JOIN):**
   - Todas las filas de la tabla derecha
   - Menos común que LEFT JOIN

4. **FULL OUTER JOIN:**
   - Todas las filas de ambas tablas
   - NULLs donde no hay coincidencias

5. **CROSS JOIN:**
   - Producto cartesiano
   - Usar con precaución (puede generar muchos resultados)

### Conceptos Avanzados

1. **Subconsultas:**
   - Subconsultas correlacionadas vs no correlacionadas
   - EXISTS vs IN
   - Subconsultas en SELECT, FROM, WHERE

2. **Window Functions:**
   - ROW_NUMBER(), RANK(), DENSE_RANK()
   - LAG(), LEAD() para datos anteriores/siguientes
   - SUM() OVER() para running totals
   - PARTITION BY para agrupaciones

3. **CTEs (Common Table Expressions):**
   - WITH clause para consultas más legibles
   - Recursive CTEs para jerarquías
   - Reutilización en la misma query

4. **Índices:**
   - B-tree, Hash, Bitmap indexes
   - Composite indexes y orden de columnas
   - Covering indexes
   - Índices únicos y parciales
   - Impacto en INSERT/UPDATE performance

5. **Transacciones:**
   - ACID: Atomicity, Consistency, Isolation, Durability
   - BEGIN TRANSACTION, COMMIT, ROLLBACK
   - Isolation levels: READ UNCOMMITTED, READ COMMITTED, REPEATABLE READ, SERIALIZABLE
   - Deadlocks y cómo prevenirlos

6. **Normalización:**
   - 1NF, 2NF, 3NF, BCNF
   - Cuándo desnormalizar para performance
   - Trade-offs entre normalización y performance

7. **Optimización de Queries:**
   - EXPLAIN / EXPLAIN ANALYZE
   - Query execution plans
   - Identificar full table scans
   - Uso apropiado de índices
   - Evitar funciones en WHERE clause

8. **Stored Procedures y Functions:**
   - Lógica de negocio en la base de datos
   - Parámetros y return values
   - Triggers: BEFORE/AFTER, FOR EACH ROW
   - Eventos programados

9. **Concurrencia:**
   - Locking: Shared locks, Exclusive locks
   - Pessimistic vs Optimistic locking
   - MVCC (Multi-Version Concurrency Control)
   - Isolation levels y sus efectos

10. **Particionamiento:**
    - Range, List, Hash partitioning
    - Partition pruning
    - Beneficios para grandes volúmenes de datos

### Buenas Prácticas

1. **Seguridad:**
   - Prepared statements para prevenir SQL injection
   - Least privilege principle
   - Validación de input
   - Encriptación de datos sensibles

2. **Performance:**
   - Índices apropiados
   - Evitar SELECT *
   - LIMIT en queries grandes
   - Paginación eficiente

3. **Mantenibilidad:**
   - Nombres descriptivos
   - Comentarios en queries complejas
   - Versionado de schema changes
   - Migrations automatizadas

---

## React

### Conceptos Fundamentales

**Biblioteca de JavaScript para UIs:**
- Component-based architecture
- Virtual DOM para eficiencia
- Unidirectional data flow
- JSX para sintaxis declarativa

### Componentes

1. **Functional Components:**
   - Componentes como funciones
   - Más simples y modernos
   - Hooks para estado y efectos

2. **Class Components:**
   - Componentes como clases
   - Lifecycle methods
   - Menos común en código nuevo

### Hooks Principales

- **useState**: Manejo de estado local
- **useEffect**: Efectos secundarios y lifecycle
- **useContext**: Acceso a context
- **useReducer**: Estado complejo con reducer pattern
- **useMemo**: Memoización de valores
- **useCallback**: Memoización de funciones
- **useRef**: Referencias a elementos DOM
- **Custom Hooks**: Reutilización de lógica

### Gestión de Estado

1. **Local State:**
   - useState, useReducer
   - Para estado específico del componente

2. **Context API:**
   - Estado compartido sin prop drilling
   - Provider y Consumer pattern

3. **Redux:**
   - Estado global predecible
   - Actions, Reducers, Store
   - Redux Toolkit para simplificar

### Performance

- **React.memo**: Prevenir re-renders innecesarios
- **useMemo**: Memoizar cálculos costosos
- **useCallback**: Memoizar funciones
- **Code splitting**: Lazy loading de componentes
- **Virtual scrolling**: Para listas grandes

### Buenas Prácticas

- Componentes pequeños y reutilizables
- Props validation con PropTypes o TypeScript
- Separación de concerns
- Testing con Jest y React Testing Library

---

## Node.js

### Conceptos Fundamentales

**Runtime de JavaScript en el servidor:**
- Basado en V8 engine de Chrome
- Event-driven, non-blocking I/O
- Single-threaded con event loop
- NPM para gestión de paquetes

### Módulos Core

- **http/https**: Crear servidores HTTP
- **fs**: File system operations
- **path**: Manejo de rutas
- **crypto**: Encriptación y hashing
- **stream**: Streams para datos grandes
- **events**: EventEmitter pattern

### Frameworks Populares

- **Express.js**: Framework minimalista
- **NestJS**: Framework con TypeScript y decoradores
- **Fastify**: Framework rápido y eficiente
- **Koa**: Framework moderno con async/await

### Asincronía

- **Callbacks**: Funciones callback tradicionales
- **Promises**: Manejo de operaciones asíncronas
- **async/await**: Sintaxis moderna para async
- **Event Loop**: Entender cómo funciona

### Buenas Prácticas

- Manejo de errores apropiado
- Variables de entorno para configuración
- Logging estructurado
- Security best practices
- Testing con Jest o Mocha

---

## PHP

### Conceptos Fundamentales

**Lenguaje de scripting del servidor:**
- Interpretado, orientado a objetos
- Ampliamente usado en web development
- Versión 8+ con mejoras significativas

### Frameworks Populares

- **Laravel**: Framework moderno y completo
- **Symfony**: Framework modular y flexible
- **CodeIgniter**: Framework ligero

### Características Clave

- **Namespaces**: Organización de código
- **Autoloading**: Carga automática de clases
- **Composer**: Gestor de dependencias
- **PDO**: Acceso seguro a bases de datos

### Buenas Prácticas

- PSR standards (PSR-1, PSR-2, PSR-4)
- Prepared statements para SQL
- Validación de input
- Manejo de errores apropiado
- Testing con PHPUnit

---

## C#

### Conceptos Fundamentales

**Lenguaje orientado a objetos de Microsoft:**
- Tipado estático y fuerte
- Compilado a IL (Intermediate Language)
- Ejecutado en CLR (Common Language Runtime)

### Características Clave

- **LINQ**: Language Integrated Query
- **async/await**: Programación asíncrona
- **Generics**: Tipos genéricos
- **Delegates y Events**: Programación basada en eventos
- **Attributes**: Metadatos en código

### Frameworks

- **.NET Core / .NET 5+**: Cross-platform
- **ASP.NET Core**: Framework web
- **Entity Framework**: ORM
- **Blazor**: Framework para web UI

### Buenas Prácticas

- SOLID principles
- Dependency Injection
- Async/await para I/O operations
- Exception handling apropiado
- Testing con NUnit o xUnit

---

## Cypress

### Conceptos Fundamentales

**Framework de pruebas end-to-end:**
- Ejecuta en el navegador
- API simple y poderosa
- Time travel debugging
- Screenshots y videos automáticos

### Características Principales

- **Commands**: Comandos personalizados
- **Fixtures**: Datos de prueba
- **Intercepts**: Mocking de requests
- **Custom Commands**: Extensibilidad

### Buenas Prácticas

- Selectores únicos y estables
- Evitar hard-coded waits
- Tests independientes
- Organización de tests
- Integración con CI/CD

### Integración CI/CD

- Configuración para diferentes entornos
- Headless mode para CI
- Reportes de resultados
- Screenshots en fallos

---

## Estrategia de Estudio

### Priorización

1. **Alta Prioridad**: CI/CD, GraphQL, SQL (temas del examen 360)
2. **Media Prioridad**: React, Node.js (tecnologías de la empresa)
3. **Baja Prioridad**: PHP, C#, Cypress (conocimiento general)

### Método de Estudio

1. Revisar conceptos fundamentales de cada sección
2. Practicar con ejemplos reales
3. Resolver preguntas de práctica
4. Revisar errores y conceptos débiles
5. Repasar antes del examen

### Recursos Adicionales

- Documentación oficial de cada tecnología
- Proyectos de ejemplo en GitHub
- Comunidades y foros técnicos
- Videos y tutoriales prácticos

---

*Última actualización: Preparación para examen 360 - Senior Software Engineer*

