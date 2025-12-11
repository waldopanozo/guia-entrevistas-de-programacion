# Preparación Técnica para Entrevistas VanHack

## Índice

1. [Algoritmos y Estructuras de Datos](#algoritmos-y-estructuras-de-datos)
2. [System Design](#system-design)
3. [Lenguajes y Frameworks](#lenguajes-y-frameworks)
4. [Bases de Datos](#bases-de-datos)
5. [DevOps y CI/CD](#devops-y-cicd)
6. [Práctica de Coding](#práctica-de-coding)
7. [Recursos de Estudio](#recursos-de-estudio)

---

## Algoritmos y Estructuras de Datos

### Estructuras de Datos Esenciales

#### Arrays y Strings
- **Operaciones básicas:** acceso, inserción, eliminación
- **Algoritmos comunes:** two pointers, sliding window
- **Problemas típicos:** encontrar subarrays, anagramas, palíndromos

**Problemas para practicar:**
- Two Sum
- Longest Substring Without Repeating Characters
- Container With Most Water
- Valid Anagram

#### Linked Lists
- **Operaciones:** inserción, eliminación, reversión
- **Técnicas:** two pointers, fast/slow pointers
- **Variantes:** singly, doubly, circular

**Problemas para practicar:**
- Reverse Linked List
- Merge Two Sorted Lists
- Detect Cycle in Linked List
- Remove Nth Node From End

#### Stacks y Queues
- **Uso:** validación de paréntesis, BFS/DFS
- **Implementación:** array-based, linked list-based
- **Variantes:** priority queue, deque

**Problemas para practicar:**
- Valid Parentheses
- Daily Temperatures
- Design Circular Queue
- Sliding Window Maximum

#### Trees
- **Tipos:** Binary Tree, BST, AVL, Red-Black
- **Traversals:** inorder, preorder, postorder, level-order
- **Conceptos:** height, depth, diameter, LCA

**Problemas para practicar:**
- Maximum Depth of Binary Tree
- Validate Binary Search Tree
- Lowest Common Ancestor
- Serialize and Deserialize Binary Tree

#### Graphs
- **Representación:** adjacency list, adjacency matrix
- **Algoritmos:** DFS, BFS, Dijkstra, A*
- **Conceptos:** cycles, shortest path, MST

**Problemas para practicar:**
- Number of Islands
- Clone Graph
- Course Schedule
- Network Delay Time

#### Hash Tables
- **Uso:** lookups O(1), counting, grouping
- **Implementación:** collision handling (chaining, open addressing)
- **Aplicaciones:** caching, indexing

**Problemas para practicar:**
- Two Sum
- Group Anagrams
- Longest Consecutive Sequence
- Design HashMap

### Algoritmos Esenciales

#### Sorting
- **Algoritmos:** Quick Sort, Merge Sort, Heap Sort
- **Complejidad:** tiempo y espacio
- **Cuándo usar cada uno**

**Problemas para practicar:**
- Sort Colors
- Merge Intervals
- Kth Largest Element
- Top K Frequent Elements

#### Searching
- **Binary Search:** en arrays ordenados
- **DFS/BFS:** en trees y graphs
- **Aplicaciones:** encontrar elementos, rangos

**Problemas para practicar:**
- Binary Search
- Search in Rotated Sorted Array
- Find First and Last Position
- Search in 2D Matrix

#### Dynamic Programming
- **Conceptos:** overlapping subproblems, optimal substructure
- **Tipos:** 1D, 2D, knapsack, LCS, LIS
- **Patrones:** memoization, tabulation

**Problemas para practicar:**
- Climbing Stairs
- Coin Change
- Longest Increasing Subsequence
- Edit Distance
- House Robber

#### Greedy Algorithms
- **Concepto:** hacer elección localmente óptima
- **Aplicaciones:** scheduling, graph algorithms
- **Cuándo funciona:** optimal substructure

**Problemas para practicar:**
- Jump Game
- Meeting Rooms
- Non-overlapping Intervals
- Gas Station

#### Backtracking
- **Concepto:** explorar todas las posibilidades
- **Aplicaciones:** permutations, combinations, N-Queens
- **Optimización:** pruning

**Problemas para practicar:**
- Generate Parentheses
- N-Queens
- Word Search
- Subsets

### Complejidad Algorítmica

#### Big O Notation
- **O(1):** constante
- **O(log n):** logarítmica
- **O(n):** lineal
- **O(n log n):** linearithmic
- **O(n²):** cuadrática
- **O(2^n):** exponencial

#### Análisis de Complejidad
- **Tiempo:** cuánto tarda
- **Espacio:** cuánta memoria usa
- **Best/Average/Worst case**

---

## System Design

### Conceptos Fundamentales

#### Escalabilidad
- **Horizontal vs Vertical:** agregar más servidores vs más poder
- **Load Balancing:** distribuir carga
- **Caching:** reducir carga en base de datos
- **CDN:** servir contenido estático

#### Disponibilidad y Confiabilidad
- **Redundancia:** múltiples copias
- **Failover:** cambio automático en caso de fallo
- **Replication:** copias de datos
- **Backup y Recovery:** estrategias de respaldo

#### Consistencia
- **ACID:** propiedades de transacciones
- **CAP Theorem:** Consistency, Availability, Partition tolerance
- **Eventual Consistency:** consistencia eventual
- **Strong vs Weak Consistency:** diferentes niveles

### Componentes del Sistema

#### Load Balancer
- **Tipos:** Round Robin, Least Connections, IP Hash
- **Niveles:** DNS, Application, Network
- **Health Checks:** verificar estado de servidores

#### Caching
- **Estrategias:** Cache-Aside, Write-Through, Write-Back
- **Eviction Policies:** LRU, LFU, FIFO
- **Implementaciones:** Redis, Memcached

#### Database
- **SQL vs NoSQL:** cuándo usar cada uno
- **Replication:** master-slave, master-master
- **Sharding:** dividir datos horizontalmente
- **Indexing:** mejorar performance de queries

#### Message Queue
- **Propósito:** desacoplar servicios
- **Implementaciones:** RabbitMQ, Kafka, AWS SQS
- **Patrones:** pub/sub, point-to-point

### Diseños de Sistemas Populares

#### Diseñar un Sistema de Chat
- **Componentes:** servidor, base de datos, message queue
- **Escalabilidad:** manejar millones de usuarios
- **Real-time:** WebSockets, Server-Sent Events

#### Diseñar un Sistema de Recomendaciones
- **Algoritmos:** collaborative filtering, content-based
- **Storage:** datos de usuarios, productos, interacciones
- **Performance:** caching, pre-computation

#### Diseñar un Sistema de Búsqueda
- **Componentes:** crawler, indexer, query processor
- **Algoritmos:** inverted index, ranking
- **Escalabilidad:** distribuir indexación

#### Diseñar un Sistema de Notificaciones
- **Tipos:** push, email, SMS
- **Escalabilidad:** manejar millones de notificaciones
- **Priorización:** urgent vs normal

### Preguntas de System Design

**Estructura de respuesta:**
1. **Clarificar requisitos:** funcionales y no funcionales
2. **Estimar escala:** usuarios, requests, storage
3. **Diseño de alto nivel:** componentes principales
4. **Diseño detallado:** APIs, database schema
5. **Escalabilidad:** cómo escalar cada componente
6. **Trade-offs:** decisiones y alternativas

---

## Lenguajes y Frameworks

### JavaScript/TypeScript

#### Conceptos Avanzados
- **Closures:** scope y lexical environment
- **Promises y Async/Await:** programación asíncrona
- **Event Loop:** cómo funciona
- **Prototypes:** herencia prototípica
- **Hoisting:** comportamiento de variables y funciones

#### React
- **Hooks:** useState, useEffect, useContext, custom hooks
- **Performance:** memo, useMemo, useCallback
- **State Management:** Context API, Redux
- **Lifecycle:** componentes funcionales vs clases

#### Node.js
- **Event Loop:** fases y callbacks
- **Streams:** readable, writable, transform
- **Modules:** CommonJS vs ES6
- **Async Patterns:** callbacks, promises, async/await

### Python

#### Conceptos Avanzados
- **Decorators:** funciones que modifican otras funciones
- **Generators:** yield y lazy evaluation
- **Context Managers:** with statement
- **Metaclasses:** clases que crean clases

#### Frameworks Populares
- **Django:** ORM, middleware, views
- **Flask:** routing, blueprints, extensions
- **FastAPI:** async, type hints, OpenAPI

### Java

#### Conceptos Avanzados
- **Collections:** List, Set, Map y sus implementaciones
- **Concurrency:** threads, executors, concurrent collections
- **JVM:** memory management, garbage collection
- **Design Patterns:** Singleton, Factory, Observer

#### Frameworks
- **Spring:** dependency injection, AOP, MVC
- **Spring Boot:** auto-configuration, starters

---

## Bases de Datos

### SQL

#### Conceptos Avanzados
- **Joins:** INNER, LEFT, RIGHT, FULL OUTER
- **Subqueries:** correlacionadas vs no correlacionadas
- **Window Functions:** ROW_NUMBER, RANK, LAG, LEAD
- **Indexes:** B-tree, hash, composite
- **Transactions:** ACID properties, isolation levels

#### Optimización
- **Query Optimization:** EXPLAIN, execution plans
- **Indexing Strategy:** cuándo y qué indexar
- **Normalization:** formas normales
- **Denormalization:** trade-offs

### NoSQL

#### Tipos
- **Document:** MongoDB, CouchDB
- **Key-Value:** Redis, DynamoDB
- **Column:** Cassandra, HBase
- **Graph:** Neo4j, ArangoDB

#### Cuándo Usar
- **SQL:** datos estructurados, relaciones complejas, ACID
- **NoSQL:** datos no estructurados, alta escalabilidad, flexibilidad

---

## DevOps y CI/CD

### Conceptos

#### CI/CD
- **Integración Continua:** automatizar builds y tests
- **Despliegue Continuo:** automatizar releases
- **Herramientas:** Jenkins, GitLab CI, GitHub Actions

#### Containerización
- **Docker:** imágenes, contenedores, Dockerfile
- **Kubernetes:** pods, services, deployments
- **Orquestación:** escalado, load balancing

#### Infrastructure as Code
- **Terraform:** provisioning de infraestructura
- **Ansible:** configuración y deployment
- **CloudFormation:** AWS infrastructure

---

## Práctica de Coding

### Estrategia para Coding Interviews

#### Proceso
1. **Clarificar:** entender el problema completamente
2. **Ejemplos:** pensar en casos de ejemplo
3. **Approach:** explicar tu enfoque antes de codificar
4. **Code:** escribir código limpio
5. **Test:** probar con casos edge
6. **Optimize:** mejorar si es posible

#### Comunicación
- **Think out loud:** explica tu proceso de pensamiento
- **Pregunta:** clarifica dudas antes de empezar
- **Discute trade-offs:** menciona alternativas
- **Optimiza después:** primero solución funcional

### Plataformas de Práctica

#### LeetCode
- **URL:** https://leetcode.com
- **Características:** problemas por dificultad, company tags
- **Recomendación:** Empieza con Easy, luego Medium

#### HackerRank
- **URL:** https://www.hackerrank.com
- **Características:** categorías específicas, certificaciones
- **Recomendación:** Practica por categoría

#### CodeWars
- **URL:** https://www.codewars.com
- **Características:** problemas por nivel (kyu)
- **Recomendación:** Progreso gradual

#### AlgoExpert
- **URL:** https://www.algoexpert.io
- **Características:** explicaciones detalladas, video solutions
- **Recomendación:** Para entender conceptos profundamente

### Plan de Estudio Recomendado

#### Semana 1-2: Fundamentos
- Arrays y Strings (20 problemas)
- Linked Lists (15 problemas)
- Stacks y Queues (15 problemas)

#### Semana 3-4: Trees y Graphs
- Binary Trees (20 problemas)
- Graphs (15 problemas)
- DFS y BFS (10 problemas)

#### Semana 5-6: Algoritmos Avanzados
- Dynamic Programming (20 problemas)
- Greedy (15 problemas)
- Backtracking (10 problemas)

#### Semana 7-8: System Design
- Estudiar diseños de sistemas populares
- Practicar diseñar sistemas desde cero
- Revisar trade-offs y escalabilidad

---

## Recursos de Estudio

### Libros
- **Cracking the Coding Interview:** guía completa
- **Elements of Programming Interviews:** problemas y soluciones
- **System Design Interview:** diseño de sistemas

### Cursos Online
- **AlgoExpert:** algoritmos explicados
- **Grokking the System Design Interview:** system design
- **LeetCode Premium:** problemas de empresas específicas

### Comunidades
- **LeetCode Discuss:** soluciones y discusiones
- **Reddit r/cscareerquestions:** consejos y experiencias
- **Blind:** reviews de empresas (requiere email corporativo)

---

## Checklist de Preparación Técnica

### Antes de la Entrevista
- [ ] Practicado 50+ problemas en LeetCode
- [ ] Revisado estructuras de datos fundamentales
- [ ] Revisado algoritmos comunes
- [ ] Practicado system design (si aplica)
- [ ] Revisado tecnologías del stack mencionado
- [ ] Preparado ejemplos de proyectos técnicos

### Durante la Entrevista
- [ ] Clarificar requisitos antes de empezar
- [ ] Explicar proceso de pensamiento
- [ ] Escribir código limpio y legible
- [ ] Probar con casos edge
- [ ] Discutir complejidad de tiempo y espacio
- [ ] Mencionar optimizaciones posibles

---

*Buena suerte en tu preparación técnica!*

---

*Última actualización: 2025*

