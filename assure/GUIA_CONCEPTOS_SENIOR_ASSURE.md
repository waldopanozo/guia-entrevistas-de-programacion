# Guía de Conceptos - Examen Senior AssureSoft

## Introducción

Esta guía contiene los conceptos fundamentales y avanzados que debes dominar para el examen de nivel Senior en AssureSoft. Los temas están organizados según las condiciones establecidas para obtener el cargo de Senior.

---

## 1. CI/CD (Integración y Despliegue Continuos)

### 1.1 Fundamentos de CI/CD

#### Integración Continua (CI)
- **Definición**: Práctica de integrar código frecuentemente (múltiples veces al día) en un repositorio compartido
- **Objetivo**: Detectar errores tempranamente mediante builds y tests automatizados
- **Beneficios**: 
  - Detección rápida de problemas
  - Reducción de conflictos de merge
  - Mejor calidad de código
  - Feedback inmediato a desarrolladores

#### Despliegue Continuo (CD)
- **Definición**: Automatización del proceso de despliegue a diferentes entornos
- **Tipos**:
  - **Continuous Delivery**: Código siempre listo para producción (requiere aprobación manual)
  - **Continuous Deployment**: Despliegue automático a producción sin intervención manual
- **Beneficios**:
  - Reducción de tiempo de entrega
  - Menor riesgo en despliegues
  - Mayor frecuencia de releases
  - Rollback más rápido

### 1.2 Componentes de un Pipeline CI/CD

#### Stages (Etapas)
1. **Build**: Compilación del código fuente
2. **Test**: Ejecución de pruebas automatizadas
3. **Deploy**: Despliegue a diferentes entornos
4. **Monitor**: Monitoreo post-despliegue

#### Jobs y Steps
- **Job**: Tarea que se ejecuta en un runner
- **Step**: Comando individual dentro de un job
- **Artifacts**: Archivos generados por un job (builds, reports, etc.)

### 1.3 Estrategias de Despliegue

#### Blue-Green Deployment
- Mantener dos entornos idénticos (blue y green)
- Desplegar nueva versión en entorno inactivo
- Cambiar tráfico al nuevo entorno
- **Ventajas**: Rollback instantáneo, cero downtime
- **Desventajas**: Requiere duplicar infraestructura

#### Canary Deployment
- Desplegar nueva versión a un pequeño porcentaje de usuarios
- Monitorear métricas y errores
- Gradualmente aumentar porcentaje si todo va bien
- **Ventajas**: Reducción de riesgo, validación con usuarios reales
- **Desventajas**: Complejidad operacional

#### Rolling Deployment
- Actualizar instancias gradualmente
- Una instancia a la vez o en grupos pequeños
- **Ventajas**: Menor uso de recursos que Blue-Green
- **Desventajas**: Puede haber incompatibilidades temporales

### 1.4 Herramientas de CI/CD

#### Jenkins
- Servidor de automatización open-source
- **Jenkinsfile**: Pipeline as code (Declarative o Scripted)
- Plugins extensibles
- Self-hosted o cloud

#### GitLab CI/CD
- Integrado en GitLab
- Configuración mediante `.gitlab-ci.yml`
- Runners: shared, group, project, specific
- Variables de entorno y secrets management

#### GitHub Actions
- Integrado en GitHub
- Workflows en YAML (`.github/workflows/`)
- Marketplace de actions
- Matrices para testing en múltiples versiones

#### CircleCI
- Plataforma cloud
- Configuración en `.circleci/config.yml`
- Parallel jobs y caching
- Orbs para reutilización

### 1.5 Buenas Prácticas de CI/CD

#### Pipeline Eficiente
- **Paralelización**: Ejecutar jobs independientes en paralelo
- **Caché**: Cachear dependencias entre builds
- **Condicionales**: Ejecutar jobs solo cuando sea necesario
- **Matrices**: Testing en múltiples versiones/entornos simultáneamente

#### Seguridad
- **Secret Management**: Usar herramientas como Vault, AWS Secrets Manager
- **Scanning**: SAST, DAST, dependency scanning
- **Least Privilege**: Permisos mínimos necesarios
- **Audit Logs**: Registrar accesos y cambios

#### Mantenibilidad
- **Pipeline as Code**: Versionar configuración
- **Templates**: Reutilizar código común
- **Documentación**: Comentar decisiones complejas
- **Testing**: Probar cambios de pipeline en branches

### 1.6 Infrastructure as Code (IaC)

#### Conceptos
- Definir infraestructura mediante código versionado
- Reproducibilidad y consistencia
- Documentación automática

#### Herramientas
- **Terraform**: Multi-cloud, estado versionado
- **Ansible**: Configuración y orquestación
- **CloudFormation**: AWS nativo
- **Pulumi**: Código en lenguajes de programación

### 1.7 Feature Flags
- Habilitar/deshabilitar features sin redeploy
- A/B testing
- Rollback rápido
- Testing en producción seguro

---

## 2. GraphQL

### 2.1 Fundamentos de GraphQL

#### ¿Qué es GraphQL?
- Lenguaje de consulta para APIs desarrollado por Facebook
- Single endpoint en lugar de múltiples endpoints REST
- Permite a clientes solicitar exactamente los datos que necesitan
- Tipado fuerte con sistema de tipos

#### Ventajas sobre REST
- **Over-fetching**: Evita traer más datos de los necesarios
- **Under-fetching**: Evita múltiples requests para obtener datos relacionados
- **Tipado Fuerte**: Validación automática de tipos
- **Introspection**: Documentación automática y exploración de schema
- **Evolución**: Cambios sin breaking changes

### 2.2 Schema y Tipos

#### Schema Definition Language (SDL)
```graphql
type User {
  id: ID!
  name: String!
  email: String!
  posts: [Post!]!
}

type Post {
  id: ID!
  title: String!
  content: String!
  author: User!
}
```

#### Tipos Escalares
- **String**: Texto
- **Int**: Entero de 32 bits
- **Float**: Número de punto flotante
- **Boolean**: true/false
- **ID**: Identificador único (serializado como String)

#### Tipos de Objeto
- Representan entidades con campos
- Pueden tener relaciones con otros tipos

#### Enums
```graphql
enum Status {
  ACTIVE
  INACTIVE
  PENDING
}
```

#### Interfaces
- Tipos abstractos que definen campos comunes
- Múltiples tipos pueden implementar una interfaz

#### Union Types
- Un tipo que puede ser uno de varios tipos
- Requiere `__typename` para discriminar

### 2.3 Operaciones GraphQL

#### Queries (Lectura)
```graphql
query GetUser($id: ID!) {
  user(id: $id) {
    id
    name
    email
    posts {
      id
      title
    }
  }
}
```

#### Mutations (Escritura)
```graphql
mutation CreatePost($input: PostInput!) {
  createPost(input: $input) {
    id
    title
    author {
      name
    }
  }
}
```

#### Subscriptions (Tiempo Real)
```graphql
subscription OnPostCreated {
  postCreated {
    id
    title
    author {
      name
    }
  }
}
```

### 2.4 Resolvers

#### Concepto
- Funciones que resuelven cada campo en una query
- Pueden ser síncronos o asíncronos
- Acceden a múltiples fuentes de datos

#### Problema N+1
- Múltiples queries a la base de datos para resolver relaciones
- Ejemplo: Query de usuarios → N queries para posts de cada usuario
- **Solución**: DataLoader para batching y caching

#### DataLoader
- Agrupa múltiples requests en batches
- Cachea resultados durante un request
- Resuelve el problema N+1 eficientemente

### 2.5 Paginación

#### Cursor-based (Recomendado)
```graphql
type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type PostConnection {
  edges: [PostEdge!]!
  pageInfo: PageInfo!
}
```

#### Offset-based
```graphql
query GetPosts($limit: Int!, $offset: Int!) {
  posts(limit: $limit, offset: $offset) {
    id
    title
  }
}
```

### 2.6 Seguridad en GraphQL

#### Rate Limiting
- Limitar requests por IP/usuario
- Basado en query complexity
- Prevenir abuso del API

#### Query Complexity
- Métrica que mide complejidad de una query
- Depende de profundidad y número de campos
- Limitar para prevenir DoS

#### Depth Limiting
- Limitar profundidad máxima de queries anidadas
- Prevenir queries recursivas profundas

#### Autenticación y Autorización
- Headers HTTP (Authorization)
- Context object con información del usuario
- Validación en resolvers

### 2.7 GraphQL Federation

#### Concepto
- Arquitectura para múltiples GraphQL services
- Cada servicio mantiene su propio schema
- Gateway unifica los schemas
- Escalar GraphQL a microservicios

#### Ventajas
- Separación de concerns
- Escalabilidad independiente
- Equipos autónomos

---

## 3. SQL (Bases de Datos Relacionales)

### 3.1 Fundamentos de SQL

#### Lenguaje de Consulta Estructurado
- Estándar ANSI SQL
- Variaciones por DBMS: PostgreSQL, MySQL, SQL Server, Oracle
- Operaciones CRUD: CREATE, READ, UPDATE, DELETE

### 3.2 Operaciones Básicas

#### SELECT
```sql
SELECT column1, column2
FROM table_name
WHERE condition
ORDER BY column1 DESC
LIMIT 10;
```

#### INSERT
```sql
INSERT INTO table_name (column1, column2)
VALUES (value1, value2);

-- Bulk insert
INSERT INTO table_name (column1, column2)
SELECT column1, column2
FROM another_table;
```

#### UPDATE
```sql
UPDATE table_name
SET column1 = value1, column2 = value2
WHERE condition;
```

#### DELETE
```sql
DELETE FROM table_name
WHERE condition;

-- Soft delete (recomendado)
UPDATE table_name
SET deleted_at = NOW()
WHERE condition;
```

### 3.3 JOINs

#### INNER JOIN
- Solo filas con coincidencias en ambas tablas
- Más común y eficiente

#### LEFT JOIN (LEFT OUTER JOIN)
- Todas las filas de la tabla izquierda
- NULLs para no coincidencias

#### RIGHT JOIN (RIGHT OUTER JOIN)
- Todas las filas de la tabla derecha
- Menos común

#### FULL OUTER JOIN
- Todas las filas de ambas tablas
- NULLs donde no hay coincidencias

#### CROSS JOIN
- Producto cartesiano
- Usar con precaución

### 3.4 Funciones Agregadas

```sql
SELECT 
  COUNT(*) as total,
  SUM(amount) as total_amount,
  AVG(amount) as average_amount,
  MAX(amount) as max_amount,
  MIN(amount) as min_amount
FROM orders
GROUP BY customer_id
HAVING COUNT(*) > 10;
```

### 3.5 Window Functions

#### Concepto
- Funciones que operan sobre un conjunto de filas relacionadas
- No agrupan filas como GROUP BY

#### Ejemplos
```sql
-- ROW_NUMBER
SELECT 
  id,
  name,
  ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) as rank
FROM employees;

-- LAG/LEAD
SELECT 
  date,
  sales,
  LAG(sales) OVER (ORDER BY date) as previous_sales,
  LEAD(sales) OVER (ORDER BY date) as next_sales
FROM daily_sales;

-- Running Total
SELECT 
  date,
  amount,
  SUM(amount) OVER (ORDER BY date) as running_total
FROM transactions;
```

### 3.6 CTEs (Common Table Expressions)

```sql
WITH recent_orders AS (
  SELECT * FROM orders
  WHERE created_at > NOW() - INTERVAL '30 days'
),
high_value_customers AS (
  SELECT customer_id, SUM(amount) as total
  FROM recent_orders
  GROUP BY customer_id
  HAVING SUM(amount) > 1000
)
SELECT c.name, hvc.total
FROM customers c
JOIN high_value_customers hvc ON c.id = hvc.customer_id;
```

#### Recursive CTEs
```sql
WITH RECURSIVE category_tree AS (
  SELECT id, name, parent_id, 1 as level
  FROM categories
  WHERE parent_id IS NULL
  
  UNION ALL
  
  SELECT c.id, c.name, c.parent_id, ct.level + 1
  FROM categories c
  JOIN category_tree ct ON c.parent_id = ct.id
)
SELECT * FROM category_tree;
```

### 3.7 Transacciones ACID

#### Atomicity (Atomicidad)
- Todas las operaciones se ejecutan o ninguna
- Rollback en caso de error

#### Consistency (Consistencia)
- Base de datos siempre en estado válido
- Constraints y reglas de negocio

#### Isolation (Aislamiento)
- Transacciones concurrentes no interfieren
- Niveles de aislamiento

#### Durability (Durabilidad)
- Cambios confirmados son permanentes
- Persistencia en disco

### 3.8 Niveles de Aislamiento

1. **READ UNCOMMITTED**
   - Menor aislamiento
   - Puede leer datos no confirmados (dirty reads)

2. **READ COMMITTED**
   - Solo lee datos confirmados
   - Puede haber non-repeatable reads

3. **REPEATABLE READ**
   - Lecturas consistentes durante transacción
   - Puede haber phantom reads

4. **SERIALIZABLE**
   - Mayor aislamiento
   - Transacciones ejecutadas como si fueran secuenciales

### 3.9 Índices

#### Tipos de Índices
- **B-tree**: Más común, eficiente para rangos
- **Hash**: Solo igualdad, muy rápido
- **Bitmap**: Para columnas con pocos valores únicos
- **Composite**: Múltiples columnas

#### Covering Index
- Índice que contiene todas las columnas necesarias para una query
- Evita acceso a la tabla principal
- También conocido como "index-only scan"

#### Selectividad
- Medida de qué tan único es un índice
- Alta selectividad = más útil
- Afecta decisión del optimizador

### 3.10 Optimización de Queries

#### EXPLAIN y EXPLAIN ANALYZE
```sql
EXPLAIN ANALYZE
SELECT * FROM orders
WHERE customer_id = 123
ORDER BY created_at DESC;
```

#### Buenas Prácticas
- Usar índices apropiados
- Evitar funciones en WHERE clause
- Evitar SELECT *
- Usar LIMIT en queries grandes
- Optimizar JOINs (orden de tablas)

### 3.11 Normalización

#### Formas Normales
- **1NF**: Valores atómicos, sin arrays/listas
- **2NF**: 1NF + eliminar dependencias parciales
- **3NF**: 2NF + eliminar dependencias transitivas
- **BCNF**: Boyce-Codd Normal Form

#### Desnormalización
- Agregar redundancia intencional
- Trade-off: redundancia vs performance
- Útil para mejorar performance de reads

### 3.12 Concurrencia

#### Locking
- **Pessimistic**: Bloquea registros durante transacción
- **Optimistic**: Asume que no habrá conflictos, verifica al commit

#### MVCC (Multi-Version Concurrency Control)
- Múltiples versiones de datos
- Permite reads sin bloquear writes
- Usado en PostgreSQL, MySQL InnoDB

#### Deadlocks
- Dos transacciones se bloquean mutuamente
- DBMS detecta y aborta una transacción
- Prevención: mismo orden de locks, timeouts

### 3.13 Stored Procedures y Triggers

#### Stored Procedures
- Código SQL almacenado en la base de datos
- Parámetros de entrada y salida
- Útiles para lógica de negocio compleja

#### Triggers
- Procedimientos que se ejecutan automáticamente
- BEFORE/AFTER eventos
- FOR EACH ROW o FOR EACH STATEMENT
- Útiles para auditoría, validación

### 3.14 Partitioning

#### Tipos
- **Range**: Por rangos de valores (fechas, IDs)
- **List**: Por lista de valores
- **Hash**: Distribución uniforme

#### Beneficios
- Mejor performance en queries grandes
- Mantenimiento más fácil
- Partition pruning

---

## 4. Conceptos Avanzados de Nivel Senior

### 4.1 Arquitectura de Software

#### Clean Architecture
- Separación de concerns en capas
- Independencia de frameworks
- Testabilidad
- Independencia de UI y base de datos

#### Microservicios vs Monolito
- **Microservicios**: Escalabilidad independiente, tecnologías diferentes
- **Monolito**: Más simple, menos overhead operacional
- Elegir según contexto

#### Event-Driven Architecture
- Componentes comunican mediante eventos
- Desacoplamiento
- Escalabilidad horizontal
- Eventual consistency

### 4.2 Principios SOLID

#### Single Responsibility Principle (SRP)
- Una clase debe tener una sola razón para cambiar
- Responsabilidad única y bien definida

#### Open/Closed Principle (OCP)
- Abierto para extensión, cerrado para modificación
- Usar herencia y polimorfismo

#### Liskov Substitution Principle (LSP)
- Objetos de superclase deben ser reemplazables por objetos de subclase
- Contratos deben cumplirse

#### Interface Segregation Principle (ISP)
- Clientes no deben depender de interfaces que no usan
- Interfaces pequeñas y específicas

#### Dependency Inversion Principle (DIP)
- Depender de abstracciones, no de concreciones
- Inversión de control (IoC)

### 4.3 Patrones de Diseño

#### Singleton
- Una sola instancia de una clase
- Útil para recursos compartidos
- Usar con precaución (testing)

#### Repository
- Abstrae acceso a datos
- Facilita testing con mocks
- Desacopla lógica de negocio

#### Factory
- Crear objetos sin especificar clase exacta
- Encapsula lógica de creación

#### Strategy
- Familia de algoritmos intercambiables
- Selección en runtime

### 4.4 Testing

#### Tipos de Tests
- **Unit**: Componentes aislados
- **Integration**: Componentes trabajando juntos
- **E2E**: Aplicación completa
- **Performance**: Carga y estrés

#### TDD (Test-Driven Development)
- Escribir tests antes del código
- Mejor diseño de código
- Cobertura garantizada

### 4.5 Seguridad

#### OWASP Top 10
1. Injection (SQL, NoSQL, etc.)
2. Broken Authentication
3. Sensitive Data Exposure
4. XML External Entities (XXE)
5. Broken Access Control
6. Security Misconfiguration
7. Cross-Site Scripting (XSS)
8. Insecure Deserialization
9. Using Components with Known Vulnerabilities
10. Insufficient Logging & Monitoring

#### Prevención de SQL Injection
- Prepared statements
- Parameterized queries
- Validación y sanitización de input
- Least privilege en DB users

#### Autenticación Multifactor (MFA)
- Algo que sabes (password)
- Algo que tienes (token, SMS)
- Algo que eres (biometría)

### 4.6 Performance y Escalabilidad

#### Caching Strategies
- **Application Cache**: Redis, Memcached
- **CDN**: Contenido estático
- **Database Cache**: Query results
- **Browser Cache**: HTTP headers

#### Load Balancing
- Distribuir carga entre múltiples servidores
- Algoritmos: Round-robin, Least connections, IP hash
- Health checks

#### Database Optimization
- Índices apropiados
- Query optimization
- Connection pooling
- Read replicas

### 4.7 Liderazgo Técnico

#### Mentoring
- Code reviews constructivos
- Pair programming
- Compartir conocimiento
- Establecer objetivos de crecimiento

#### Code Reviews
- Revisar código de otros
- Feedback constructivo
- Asegurar calidad y consistencia
- Oportunidad de aprendizaje

#### Technical Decision Making
- Evaluar trade-offs
- Considerar contexto
- Documentar decisiones
- Comunicar razones

---

## 5. Resumen de Conceptos Clave

### CI/CD
- Automatización de integración y despliegue
- Pipelines eficientes y seguros
- Estrategias de despliegue
- Infrastructure as Code

### GraphQL
- Single endpoint, tipado fuerte
- Resolvers y DataLoader
- Seguridad y performance
- Federation para microservicios

### SQL
- Queries eficientes
- Transacciones ACID
- Índices y optimización
- Normalización y concurrencia

### Nivel Senior
- Arquitectura y diseño
- Principios SOLID
- Seguridad y performance
- Liderazgo técnico

---

*Esta guía cubre los conceptos fundamentales para el examen Senior en AssureSoft. Estudia cada sección en profundidad y practica con ejemplos reales.*

