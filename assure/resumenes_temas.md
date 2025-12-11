# Resúmenes de Temas - Examen Técnico 360

## 1. Agile Software Development

### Scrum
Scrum es una metodología ágil que organiza el trabajo en sprints cortos. Sus componentes principales son:
- **Roles**: Product Owner, Scrum Master, Development Team
- **Artefactos**: Product Backlog, Sprint Backlog, Increment
- **Eventos**: Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective
- **Valores**: Compromiso, Coraje, Enfoque, Apertura, Respeto

### Kanban
Metodología ágil basada en visualización del flujo de trabajo mediante tableros. Se enfoca en:
- Visualización del trabajo
- Limitación del trabajo en progreso (WIP)
- Gestión del flujo
- Mejora continua

### Fundamentos Ágiles
La mentalidad ágil se basa en el Manifiesto Ágil con 4 valores:
1. Individuos e interacciones sobre procesos y herramientas
2. Software funcionando sobre documentación exhaustiva
3. Colaboración con el cliente sobre negociación contractual
4. Respuesta al cambio sobre seguir un plan

**Prácticas comunes:**
- **Pair Programming**: Dos desarrolladores trabajan juntos en el mismo código
- **TDD (Test Driven Development)**: Escribir tests antes del código
- **Timeboxing**: Asignar tiempo fijo a actividades

### Continuous Integration (CI)
Integración continua significa integrar cambios de código frecuentemente (varias veces al día) en un repositorio compartido.

**Elementos clave:**
- Build automatizado
- Tests automatizados
- Integración frecuente
- Feedback rápido

**Prácticas:**
- Commits frecuentes
- Builds automatizados
- Tests automatizados
- Notificaciones de fallos

**Ventajas:**
- Detección temprana de errores
- Reducción de conflictos
- Mejora de calidad

**Retos:**
- Configuración inicial
- Mantenimiento de tests
- Cultura de equipo

**Configuración práctica:**
- Herramientas: Jenkins, GitLab CI, GitHub Actions
- Integración con Docker/Vagrant
- Gestión de configuración

### Continuous Delivery (CD)
Entrega continua extiende CI para automatizar el despliegue a producción.

**Pipeline CD:**
- Build → Test → Deploy a staging → Deploy a producción
- Automatización completa del proceso
- Despliegue con un solo clic

**Beneficios:**
- Reducción de tiempo de entrega
- Menor riesgo en despliegues
- Feedback rápido del cliente

**Configuración práctica:**
- Definición de Jobs/Stages
- Automatización de despliegues
- Rollback automático

---

## 2. Algorithms and Data Structures

### Análisis de Algoritmos
Evaluación de eficiencia de algoritmos en términos de tiempo y espacio.

**Notación Big O:**
- O(1): Constante
- O(log n): Logarítmico
- O(n): Lineal
- O(n log n): Linealítmico
- O(n²): Cuadrático
- O(2ⁿ): Exponencial

### Algoritmos de Ordenamiento
- **Bubble Sort**: O(n²) - Simple pero ineficiente
- **Quick Sort**: O(n log n) promedio - Muy eficiente
- **Merge Sort**: O(n log n) - Estable y eficiente
- **Insertion Sort**: O(n²) - Eficiente para arrays pequeños

### Algoritmos de Búsqueda
- **Búsqueda Lineal**: O(n) - Busca elemento por elemento
- **Búsqueda Binaria**: O(log n) - Requiere array ordenado

### Estructuras de Datos
- **Arrays**: Acceso O(1), inserción O(n)
- **Linked Lists**: Inserción O(1), búsqueda O(n)
- **Stacks**: LIFO (Last In First Out)
- **Queues**: FIFO (First In First Out)
- **Trees**: Jerarquía de datos
- **Hash Tables**: Acceso promedio O(1)

---

## 3. Databases

### Fundamentos de Bases de Datos Relacionales
- **Modelos de Datos**: Estructura que define cómo se organizan los datos
- **DBMS**: Sistema de gestión de bases de datos (MySQL, PostgreSQL, Oracle)
- **Normalización**: Proceso de organizar datos para reducir redundancia
- **Constraints**: Restricciones que aseguran integridad (PK, FK, UNIQUE, NOT NULL)
- **Índices**: Estructuras que mejoran velocidad de búsqueda
- **Tipos de Datos**: INT, VARCHAR, DATE, BOOLEAN, etc.

### SQL - Query Languages

**DQL (Data Query Language):**
- SELECT: Consultar datos
- FROM: Especificar tabla
- WHERE: Filtrar resultados
- JOIN: Combinar tablas
- GROUP BY, HAVING: Agrupación
- ORDER BY: Ordenar resultados

**DDL (Data Definition Language):**
- CREATE: Crear objetos (tablas, índices)
- ALTER: Modificar estructura
- DROP: Eliminar objetos
- TRUNCATE: Vaciar tabla

**DCL (Data Control Language):**
- GRANT: Otorgar permisos
- REVOKE: Revocar permisos

**SCL (Session Control Language):**
- ALTER SESSION: Controlar sesión
- SET: Configurar parámetros

### NoSQL
Bases de datos no relacionales para casos específicos.

**Tipos:**
- **Documentos**: MongoDB, CouchDB
- **Clave-Valor**: Redis, DynamoDB
- **Columnas**: Cassandra, HBase
- **Grafos**: Neo4j

**Ventajas:**
- Escalabilidad horizontal
- Flexibilidad de esquema
- Alto rendimiento

**Desventajas:**
- Menos consistencia
- Curva de aprendizaje
- Menos herramientas maduras

### Administración de Bases de Datos (DBA Basics)
- Crear/revisar modelos siguiendo buenas prácticas
- Normalización adecuada
- Revisar problemas de rendimiento
- Sugerir mejoras en consultas
- Table Partitioning: Dividir tablas grandes

### Tópicos Avanzados
- **Big Data**: Procesamiento de grandes volúmenes de datos
- **Replicación**: Copiar datos entre servidores
- **Data Warehouse**: Almacén centralizado de datos
- **Data Mining**: Extracción de patrones de datos

### Tuning y Performance
- **Índices**: Mejoran velocidad pero aumentan espacio
- **Execution Plan**: Analizar cómo se ejecuta una consulta
- **Optimización**: Identificar cuellos de botella
- **Query Optimization**: Mejorar consultas lentas

---

## 4. Object Oriented Programming

### Fundamentos OOP
**Pilares de OOP:**
1. **Encapsulación**: Ocultar detalles internos
2. **Herencia**: Reutilizar código de clases padre
3. **Polimorfismo**: Múltiples formas de ejecutar
4. **Abstracción**: Simplificar complejidad

**Conceptos clave:**
- **Clases**: Plantillas para objetos
- **Objetos**: Instancias de clases
- **Interfaces**: Contratos que deben cumplir las clases
- **UML**: Lenguaje de modelado unificado

### Principios de Programación

**SOLID:**
- **S**ingle Responsibility: Una clase, una responsabilidad
- **O**pen/Closed: Abierto a extensión, cerrado a modificación
- **L**iskov Substitution: Subtipos deben ser sustituibles
- **I**nterface Segregation: Interfaces específicas, no generales
- **D**ependency Inversion: Depender de abstracciones

**Otros principios:**
- **SoC (Separation of Concerns)**: Separar responsabilidades
- **STUPID (Bad Practices)**: Singleton, Tight coupling, Untestability, Premature optimization, Indescriptive naming, Duplication

### Design Patterns

**Categorías:**
- **Creacionales**: Factory, Singleton, Builder
- **Estructurales**: Adapter, Decorator, Facade
- **Comportamiento**: Observer, Strategy, Command

**Aplicación:**
- Identificar problemas de diseño
- Aplicar patrón apropiado
- Combinar patrones cuando sea necesario
- Entender efectos secundarios

### Anti-patterns
Patrones comunes que causan problemas.

**Identificación:**
- Código difícil de mantener
- Acoplamiento fuerte
- Duplicación excesiva
- Violación de principios SOLID

**Soluciones:**
- Refactorización
- Aplicar design patterns apropiados
- Mejorar arquitectura

---

## 5. Scripting

### Bash Scripting
Comandos fundamentales para Linux:

**Comandos básicos:**
- `ls`, `cd`, `pwd`: Navegación
- `cat`, `grep`, `sed`: Visualización y edición
- `chmod`, `chown`: Permisos
- `ps`, `top`: Procesos
- `systemctl`: Servicios

**Conceptos:**
- Redirección: `>`, `>>`, `<`, `|`
- Variables: `$VAR`, `${VAR}`
- Filtrado: `grep`, `awk`, `cut`
- Procesos en background: `&`, `nohup`

---

## 6. Source Control Management

### Fundamentos
- **Source Control**: Control de código fuente
- **Version Control**: Control de versiones
- **Arquitectura**: Centralizada vs Distribuida
- **Conceptos**: Commit, Branch, Merge, Tag
- **Mejores prácticas**: Commits frecuentes, mensajes claros

### Git
Sistema de control de versiones distribuido.

**Conceptos básicos:**
- Repository: Repositorio
- Working Directory: Directorio de trabajo
- Staging Area: Área de preparación
- Commit: Confirmación de cambios

**Comandos básicos:**
- `git init`, `git clone`
- `git add`, `git commit`
- `git status`, `git log`
- `git branch`, `git checkout`

**Comandos avanzados:**
- `git rebase`, `git cherry-pick`
- `git stash`, `git reset`
- `git merge`, `git diff`

**Resolución de conflictos:**
- Identificar conflictos
- Resolver manualmente
- Marcar como resuelto

**Estrategias de branching:**
- Git Flow
- GitHub Flow
- Feature branches

**Tags y releases:**
- Crear tags para versiones
- Releases versionados

---

## 7. Software Testing

### Fundamentos
**Conceptos:**
- Testing: Verificar que el software funciona correctamente
- Test Cases: Casos de prueba
- Test Coverage: Cobertura de pruebas

**AAA Pattern:**
- **Arrange**: Preparar datos y objetos
- **Act**: Ejecutar acción a probar
- **Assert**: Verificar resultado

**Tipos de pruebas:**
- **Unit**: Pruebas de unidades individuales
- **Integration**: Pruebas de integración entre componentes
- **E2E**: Pruebas end-to-end del sistema completo

**Testing Pyramid:**
- Base: Muchas pruebas unitarias (rápidas, baratas)
- Medio: Algunas pruebas de integración
- Cima: Pocas pruebas E2E (lentas, caras)

**Mocks:**
- Objetos simulados para aislar pruebas
- Evitar dependencias externas

**Errores comunes:**
- Pruebas frágiles
- Pruebas lentas
- Baja cobertura
- Pruebas acopladas al código

### Test Doubles
Objetos que reemplazan dependencias reales.

**Tipos:**
- **Dummy**: Objeto que no se usa
- **Fake**: Implementación funcional simplificada
- **Stub**: Proporciona respuestas predefinidas
- **Spy**: Registra llamadas
- **Mock**: Verifica interacciones

**Mock vs Stub:**
- Mock: Verifica comportamiento
- Stub: Proporciona datos

**Aislamiento:**
- Pruebas independientes
- Sin dependencias externas
- Resultados predecibles

**Code Coverage:**
- Porcentaje de código probado
- Statement Coverage
- Branch Coverage
- Path Coverage

---

## 8. Project Management

### Herramientas
**Gestión de proyectos:**
- Jira, Trello, Asana
- Seguimiento de tareas
- Planificación de sprints

**Seguimiento de defectos:**
- Bug tracking
- Issue management
- Priorización

**Documentación:**
- Wikis (Confluence, MediaWiki)
- Documentación técnica
- Knowledge base

### Métricas de Performance
**Métricas comunes:**
- Velocity: Velocidad del equipo
- Burndown: Trabajo restante
- Cycle Time: Tiempo de ciclo
- Lead Time: Tiempo de entrega

**Métricas Scrum:**
- Story Points completados
- Sprint Goal achievement
- Team velocity trends

**Criterios de medición:**
- Calidad del código
- Tiempo de entrega
- Satisfacción del cliente
- Productividad del equipo

---

## 9. Software Engineering

### Debugging
**Conceptos:**
- Identificar bugs
- Reproducir problemas
- Aislar causas
- Corregir errores

**Estrategias:**
- Logging
- Breakpoints
- Step-by-step execution
- Variable inspection

**Análisis estático:**
- Revisión de código sin ejecutar
- Linters
- Code analyzers

**Herramientas:**
- Debuggers (GDB, Visual Studio Debugger)
- Profilers
- Logging tools

### Profiling
Análisis de rendimiento del código.

**Tipos:**
- **Instrumentation**: Insertar código de medición
- **Sampling**: Muestreo periódico

**Medidas:**
- Tiempo de ejecución
- Uso de memoria
- Llamadas a funciones
- Hotspots

**Uso:**
- Identificar cuellos de botella
- Optimizar código
- Mejorar rendimiento

### Principios de Programación
- **KISS**: Keep It Simple, Stupid - Mantener simple
- **DRY**: Don't Repeat Yourself - No repetir código
- **YAGNI**: You Aren't Going to Need It - No agregar funcionalidad innecesaria

---

## 10. Cloud Computing

### Conceptos Fundamentales
Computación en la nube: Servicios de TI bajo demanda.

**Tipos de Servicio:**
- **IaaS**: Infrastructure as a Service (AWS EC2)
- **PaaS**: Platform as a Service (Heroku, Google App Engine)
- **SaaS**: Software as a Service (Gmail, Salesforce)

**Ventajas:**
- Escalabilidad
- Costos reducidos
- Acceso global
- Mantenimiento reducido

**Desventajas:**
- Dependencia del proveedor
- Seguridad
- Latencia
- Costos ocultos

### Modelos de Despliegue
- **Público**: Infraestructura compartida
- **Privado**: Infraestructura dedicada
- **Híbrido**: Combinación público/privado
- **Comunitario**: Compartido por organizaciones

**Orquestación:**
- Gestión automatizada de servicios
- Kubernetes, Docker Swarm
- Escalado automático

**Notification Engines:**
- SNS (AWS), Pub/Sub (GCP)
- Mensajería asíncrona

**Queue Engines:**
- SQS (AWS), RabbitMQ
- Colas de mensajes

**Serverless:**
- Functions as a Service
- AWS Lambda, Azure Functions
- Sin gestión de servidores

---

## 11. DevOps

### Containerization
**Conceptos:**
- Contenedores: Empaquetado de aplicaciones
- Aislamiento: Cada contenedor es independiente
- Portabilidad: Funciona en cualquier entorno

**Docker:**
- Plataforma de contenedores
- Dockerfile: Definición de imagen
- Imágenes: Plantillas de contenedores
- Contenedores: Instancias ejecutables

**Gestión:**
- Dockerfile: Crear imágenes
- Volúmenes: Persistencia de datos
- Redes: Comunicación entre contenedores
- Comandos: `docker build`, `docker run`, `docker ps`

### Container Orchestration
**Kubernetes (K8s):**
- Orquestador de contenedores
- Escalado automático
- Auto-healing

**Componentes:**
- **Pods**: Unidad mínima de despliegue
- **Services**: Exposición de servicios
- **Deployments**: Gestión de aplicaciones
- **ConfigMaps/Secrets**: Configuración

**Arquitectura:**
- Master nodes: Control del cluster
- Worker nodes: Ejecución de cargas
- etcd: Almacenamiento de estado

**Administración:**
- Escalado horizontal
- Balanceo de carga
- Gestión de recursos

**Storage:**
- Persistent Volumes
- Storage Classes
- StatefulSets

**Networking:**
- Services: ClusterIP, NodePort, LoadBalancer
- Ingress: Entrada externa
- Network Policies: Seguridad

**Seguridad:**
- RBAC: Control de acceso
- Pod Security Policies
- Secrets management

**Minikube:**
- Kubernetes local para desarrollo
- Entorno de prueba

---

## 12. Software Architecture

### Patrones de Arquitectura
**MVC (Model-View-Controller):**
- Separación de responsabilidades
- Model: Lógica de negocio
- View: Presentación
- Controller: Coordinación

**Microservices:**
- Arquitectura distribuida
- Servicios independientes
- Comunicación vía API
- Escalado independiente

**Otros patrones:**
- Layered Architecture
- Event-Driven Architecture
- Service-Oriented Architecture (SOA)

### Anti-patterns de Arquitectura

**Básicos:**
- **Jumble**: Código desorganizado
- **Swiss Army Knife**: Clase que hace todo
- **Stovepipe System**: Sistemas aislados
- **Vendor Lock-In**: Dependencia excesiva de proveedor
- **Wolf Ticket**: Promesas falsas
- **Warm Bodies**: Personal sin habilidades
- **Design By Committee**: Demasiados diseñadores
- **Reinvent The Wheel**: Recrear soluciones existentes

**Avanzados:**
- **Autogenerated Stovepipe**: Código generado aislado
- **Stovepipe Enterprise**: Sistemas empresariales aislados
- **Cover Your Assets (CYA)**: Documentación excesiva
- **Architecture By Implication**: Arquitectura implícita
- **The Grand Old Duke of York**: Cambios innecesarios

---

## 13. Front-end Web Development

### Front-end I
**HTML5:**
- Estructura semántica
- Nuevos elementos: `<header>`, `<nav>`, `<section>`, `<article>`
- Formularios mejorados
- APIs: Canvas, WebSocket, LocalStorage

**CSS3:**
- Selectores avanzados
- Flexbox y Grid
- Animaciones y transiciones
- Media queries

**JavaScript:**
- Fundamentos del lenguaje
- DOM manipulation
- Event handling
- AJAX

### Front-end II
**Librerías JS:**
- jQuery, Lodash
- Utilidades comunes

**Frameworks:**
- React, Vue, Angular
- Component-based architecture

**Metodologías CSS:**
- BEM, OOCSS, SMACSS
- Organización de estilos

**Package Managers:**
- npm, yarn
- Gestión de dependencias

**Task Runners:**
- Webpack, Gulp, Grunt
- Automatización de tareas

**ECMAScript:**
- ES6+: Arrow functions, classes, modules
- Async/await, Promises

**TypeScript:**
- JavaScript tipado
- Mejor tooling
- Detección temprana de errores

**CSS Preprocessors:**
- Sass, Less, Stylus
- Variables, mixins, nesting

**Responsive:**
- Mobile-first design
- Breakpoints
- Flexible layouts

### Front-end III
**Buenas prácticas:**
- Optimización de rendimiento
- Lazy loading
- Code splitting
- Minificación
- Caching strategies
- Escalabilidad de código

---

## 14. Back-end Web Development

### Back-end I
**Conceptos básicos:**
- Aplicaciones web: Cliente-servidor
- HTTP/HTTPS: Protocolos
- Request/Response: Ciclo de petición
- Servidores: Apache, Nginx, Node.js

**Autenticación/Autorización:**
- Autenticación: Verificar identidad
- Autorización: Verificar permisos
- Sessions: Sesiones de usuario
- Cookies: Almacenamiento cliente

**Web Services:**
- Servicios web básicos
- SOAP: Protocolo XML
- REST: Arquitectura RESTful

### Back-end II
**Métodos de autenticación:**
- Basic Auth
- Token-based (JWT)
- OAuth/OAuth2
- Session-based

**RESTFul Services:**
- REST: Representational State Transfer
- Métodos HTTP: GET, POST, PUT, DELETE
- Recursos: URLs representan recursos
- Stateless: Sin estado en servidor

**GraphQL:**
- Query language para APIs
- Un solo endpoint
- Cliente especifica datos necesarios
- Type system

### Back-end III
**Buenas prácticas REST:**
- Nombres de recursos claros
- Códigos HTTP apropiados
- Versionado de API
- Paginación
- Rate limiting
- Documentación (Swagger/OpenAPI)

**Buenas prácticas GraphQL:**
- Schema bien diseñado
- Resolvers eficientes
- N+1 problem solutions
- Caching strategies

**Caching:**
- Cache de respuestas
- Redis, Memcached
- Estrategias de cache
- Invalidation

**Tecnologías según contexto:**
- Node.js: JavaScript
- Python: Django, Flask
- Java: Spring Boot
- .NET: ASP.NET Core
- Go: Performance crítico

---

**Nota:** Estos resúmenes cubren todos los temas que serán evaluados en el examen técnico 360. Estudia cada sección en detalle y practica con ejemplos prácticos.
