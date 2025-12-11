# Resumen de Temas - Software Engineer II

## Temas Evaluados en el Examen

### 1. Agile Software Development

#### Kanban (Methods II)
**Conocimiento requerido:**
- Metodología Kanban y sus características principales
- Visualización del flujo de trabajo mediante tableros
- Limitación del trabajo en progreso (WIP)
- Gestión del flujo continuo
- Mejora continua basada en métricas
- Diferencias con Scrum

#### Continuous Integration II
**Conocimiento requerido:**
- Prácticas avanzadas de CI
- Ventajas de la integración continua:
  - Detección temprana de errores
  - Reducción de conflictos de merge
  - Mejora de calidad del código
  - Feedback rápido
- Retos y desafíos de CI/CD:
  - Configuración inicial compleja
  - Mantenimiento de tests
  - Cultura de equipo
  - Integración con múltiples herramientas
- CI Elements y CI Practices avanzadas
- CI Values y principios

#### Continuous Delivery II
**Conocimiento requerido:**
- Beneficios asociados a la entrega continua:
  - Reducción de tiempo de entrega
  - Menor riesgo en despliegues
  - Feedback rápido del cliente
  - Despliegues más frecuentes
  - Rollback más fácil

---

### 2. Databases

#### Query Languages II
**Conocimiento requerido:**
- **DDL (Data Definition Language)**: CREATE, ALTER, DROP, TRUNCATE
- **DCL (Data Control Language)**: GRANT, REVOKE (permisos)
- **SCL (Session Control Language)**: ALTER SESSION, SET (configuración de sesión)
- Capacidad de ejecutar subconsultas avanzadas
- Manejo de transacciones
- Control de acceso y seguridad

#### Non-Relational (NoSQL)
**Conocimiento requerido:**
- Conceptos fundamentales de bases de datos no relacionales
- Tipos de NoSQL:
  - **Documentos**: MongoDB, CouchDB
  - **Clave-Valor**: Redis, DynamoDB
  - **Columnas**: Cassandra, HBase
  - **Grafos**: Neo4j
- Atributos de bases de datos NoSQL
- Ventajas y desventajas vs SQL
- Cuándo usar cada tipo según el contexto
- Modelos de datos NoSQL

#### Administration (DBA Basics)
**Conocimiento requerido:**
- Crear y revisar modelos de base de datos siguiendo buenas prácticas
- Aplicar reglas de normalización correctamente
- Revisar problemas de rendimiento en consultas
- Sugerir mejoras en consultas SQL
- Table Partitioning: concepto y uso
- Trabajo colaborativo con DBAs
- Optimización básica de consultas

---

### 3. Object Oriented Programming

#### Principles II
**Conocimiento requerido:**
- Capacidad de modificar código existente para cumplir principios OOP
- Aplicar SOLID en código legacy
- Refactorización de código para mejorar:
  - Single Responsibility Principle
  - Open/Closed Principle
  - Liskov Substitution Principle
  - Interface Segregation Principle
  - Dependency Inversion Principle
- Identificar violaciones de principios
- Separación de concerns (SoC)

#### Design Patterns II
**Conocimiento requerido:**
- Identificar problemas de diseño que requieren patrones
- Aplicar patrones de diseño para resolver problemas OOP
- Patrones comunes:
  - **Creacionales**: Factory, Builder, Singleton
  - **Estructurales**: Adapter, Decorator, Facade
  - **Comportamiento**: Observer, Strategy, Command
- Cuándo usar cada patrón
- Implementación práctica de patrones

#### Anti-patterns II
**Conocimiento requerido:**
- Identificar antipatrones en código existente:
  - God Object
  - Spaghetti Code
  - Copy-Paste Programming
  - Golden Hammer
  - Premature Optimization
- Proveer soluciones mediante:
  - Uso de design patterns apropiados
  - Estrategias de refactorización
  - Mejora de arquitectura
- Entender implicaciones de antipatrones
- Prevenir antipatrones comunes

---

### 4. Source Control Management

#### Git (Completo)
**Conocimiento requerido:**
- Arquitectura de Git (distribuido vs centralizado)
- Conceptos básicos: repository, working directory, staging area, commit
- Configuración: user.name, user.email, alias
- Workflow básico: add, commit, push, pull
- Comandos básicos CLI: status, log, diff, show
- Comandos avanzados CLI:
  - rebase, cherry-pick
  - stash, reset
  - merge, diff avanzado
- Resolución de conflictos
- Estrategias de branching:
  - Git Flow
  - GitHub Flow
  - Feature branches
- Tags y releases
- Mejores prácticas de Git

---

### 5. Software Testing

#### Fundamentals II
**Conocimiento requerido:**
- Tipos de Test Doubles:
  - **Dummy**: Objeto que no se usa
  - **Fake**: Implementación funcional simplificada
  - **Stubs**: Proporciona respuestas predefinidas
  - **Spies**: Registra llamadas
  - **Mocks**: Verifica interacciones
- Diferencia entre Mock y Stub
- Aislamiento de pruebas
- Code Coverage:
  - Statement Coverage
  - Branch Coverage
  - Path Coverage
  - Function Coverage
- Test Coverage: estrategias y métricas
- Escribir pruebas unitarias efectivas según contexto

---

### 6. Project Management

#### Performance
**Conocimiento requerido:**
- Identificar métricas de desempeño apropiadas
- Métricas comunes:
  - Velocity
  - Cycle Time
  - Lead Time
  - Throughput
- Métricas de productividad Scrum:
  - Story Points completados
  - Sprint Goal achievement
  - Team velocity trends
- Criterios para medir performance:
  - Calidad del código
  - Tiempo de entrega
  - Satisfacción del cliente
  - Productividad del equipo

---

### 7. Cloud Computing

#### Service Models II
**Conocimiento requerido:**
- Tipos de modelos de despliegue:
  - Público
  - Privado
  - Híbrido
  - Comunitario
- Orquestación:
  - Conceptos de orquestación
  - Herramientas: Kubernetes, Docker Swarm
  - Escalado automático
- Notification Engines:
  - SNS (AWS), Pub/Sub (GCP)
  - Mensajería asíncrona
- Queue Engines:
  - SQS (AWS), RabbitMQ
  - Colas de mensajes
- Serverless:
  - Functions as a Service
  - AWS Lambda, Azure Functions
  - Ventajas y casos de uso

---

### 8. DevOps

#### Containerization
**Conocimiento requerido:**
- Conceptos fundamentales de contenedores
- Arquitectura de Docker
- Building Container Images:
  - Dockerfile y sus instrucciones
  - FROM, RUN, COPY, WORKDIR, EXPOSE, CMD
- Docker volume management:
  - Volúmenes nombrados
  - Bind mounts
  - tmpfs mounts
- Docker container management:
  - docker run, docker ps, docker stop
  - docker exec, docker logs
  - docker build, docker images
- Uso práctico de Docker en desarrollo

---

### 9. Software Architecture

#### Patterns I
**Conocimiento requerido:**
- Patrones de arquitectura de software
- **MVC (Model-View-Controller)**:
  - Separación de responsabilidades
  - Model: lógica de negocio
  - View: presentación
  - Controller: coordinación
- **Microservices**:
  - Arquitectura distribuida
  - Servicios independientes
  - Comunicación vía API
  - Escalado independiente
- Otros patrones comunes:
  - Layered Architecture
  - Event-Driven Architecture
  - Service-Oriented Architecture (SOA)

#### Anti-patterns I (Arquitectura)
**Conocimiento requerido:**
- Entender qué es un antipatrón de arquitectura
- Antipatrones básicos:
  - **Jumble**: Código desorganizado
  - **Swiss Army Knife**: Componente que hace todo
  - **Stovepipe System**: Sistemas aislados
  - **Vendor Lock-In**: Dependencia excesiva de proveedor
  - **Wolf Ticket**: Promesas falsas
  - **Warm Bodies**: Personal sin habilidades
  - **Design By Committee**: Demasiados diseñadores
  - **Reinvent The Wheel**: Recrear soluciones existentes

---

### 10. Front-end Web Development

#### Front-end II
**Conocimiento requerido:**
- Librerías JavaScript comunes: jQuery, Lodash
- Frameworks: React, Vue, Angular (conceptos)
- Metodologías CSS: BEM, OOCSS, SMACSS
- Package Managers: npm, yarn
- Task Runners: Webpack, Gulp, Grunt
- ECMAScript (ES6+):
  - Arrow functions
  - Classes
  - Modules
  - Async/await, Promises
  - Destructuring
  - Spread operator
- TypeScript: conceptos básicos y ventajas
- CSS Preprocessors: Sass, Less, Stylus
- Responsive Design:
  - Media queries
  - Mobile-first approach
  - Breakpoints
  - Flexible layouts

---

### 11. Back-end Web Development

#### Back-end II
**Conocimiento requerido:**
- Desarrollo de servicios RESTFul:
  - Principios REST
  - Métodos HTTP: GET, POST, PUT, DELETE, PATCH
  - Resource-based URLs
  - Stateless architecture
- Métodos de autenticación:
  - Basic Auth
  - Token-based (JWT)
  - OAuth/OAuth2
  - Session-based
- GraphQL:
  - Conceptos fundamentales
  - Query language
  - Un solo endpoint
  - Type system
  - Ventajas sobre REST
- Experiencia práctica en desarrollo de APIs

---

## Puntos Clave para el Examen

1. **Enfoque práctico**: No solo conocer conceptos, sino poder aplicarlos
2. **Resolución de problemas**: Identificar problemas y proponer soluciones
3. **Mejores prácticas**: Conocer y aplicar mejores prácticas en cada área
4. **Herramientas**: Conocer herramientas específicas y cuándo usarlas
5. **Contexto**: Entender cuándo usar cada tecnología según el contexto
6. **Refactorización**: Capacidad de mejorar código existente
7. **Testing**: Escribir tests efectivos con diferentes técnicas
8. **Arquitectura**: Entender patrones y antipatrones de arquitectura

---

**Nota**: Este examen evalúa tu capacidad de aplicar conocimientos en situaciones prácticas y resolver problemas reales de desarrollo de software.
