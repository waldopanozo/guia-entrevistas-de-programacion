# 100 Preguntas y Respuestas - Senior Software Engineer
## Formato: Opciones Múltiples con Justificaciones

**Instrucciones:**
- Las preguntas son de selección múltiple
- **Puede haber más de una respuesta correcta** en cada pregunta
- Marca todas las opciones que consideres correctas
- Las preguntas están diseñadas para evaluar conocimientos a nivel Senior Software Engineer según las condiciones de AssureSoft

---

## Continuous Integration & Delivery

### 1. ¿Cómo configurarías un servidor de CI desde cero? (Selecciona todas las que apliquen)

**A)** Elegir herramienta (Jenkins, GitLab CI, GitHub Actions) y configurar servidor/build agent  
**B)** Conectar con repositorio de código y crear pipeline básico (checkout, build, tests, deploy)  
**C)** Configurar notificaciones, integrar herramientas de calidad de código y configurar secrets  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** Configurar un servidor de CI desde cero requiere todos estos pasos: elegir la herramienta apropiada según necesidades, configurar el servidor o build agent, conectar con el repositorio de código, crear un pipeline básico con las etapas esenciales (checkout, instalar dependencias, build, tests, deploy), configurar notificaciones para el equipo, integrar herramientas de calidad de código (linters, code coverage), configurar secrets y variables de entorno de forma segura, y documentar el proceso para el equipo. Todos estos elementos son esenciales para un CI funcional y seguro.

---

### 2. ¿Cómo integrarías Docker en un pipeline de CI? (Selecciona todas las que apliquen)

**A)** Usar imágenes Docker para builds consistentes y multi-stage builds para optimizar  
**B)** Cache de layers de Docker y ejecutar tests en contenedores  
**C)** Build y push de imágenes a registry, usar Docker Compose para servicios dependientes  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** Integrar Docker en CI/CD ofrece múltiples beneficios: usar imágenes Docker garantiza builds consistentes independientemente del ambiente, los multi-stage builds optimizan el tamaño de imágenes finales, el cache de layers acelera builds subsecuentes, ejecutar tests en contenedores asegura ambiente aislado y reproducible, build y push de imágenes permite distribución y reutilización, y Docker Compose facilita orquestación de servicios dependientes. Todas estas prácticas mejoran la calidad y eficiencia del pipeline.

---

### 3. ¿Cómo configurarías un pipeline de CD completo? (Selecciona todas las que apliquen)

**A)** Stages: Build → Test → Deploy Staging → Deploy Production con jobs apropiados  
**B)** Gates: Tests deben pasar y code review aprobado antes de avanzar  
**C)** Rollback automático si health check falla, notificaciones en cada etapa, artifacts guardados  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** Un pipeline de CD completo requiere: stages bien definidos (Build para compilar y crear artefactos, Test para unit/integration/e2e tests, Deploy Staging para ambiente de prueba, Deploy Production con aprobación manual), gates de calidad (tests pasando, code review aprobado), mecanismo de rollback automático si health checks fallan después del deploy, notificaciones (Slack, email) en cada etapa para mantener al equipo informado, y guardar artifacts para permitir rollback manual si es necesario. Todos estos elementos son esenciales para un CD robusto.

---

### 4. ¿Qué estrategias de despliegue implementarías y cuándo? (Selecciona todas las que apliquen)

**A)** Blue-Green: Para cero downtime crítico, cambiar tráfico instantáneamente  
**B)** Canary: Para validar en producción gradualmente, desplegar a pequeño porcentaje primero  
**C)** Rolling: Para servicios con múltiples instancias, actualizar gradualmente  
**D)** Todas las anteriores según criticidad, tamaño de equipo e infraestructura

**Respuesta correcta: D**

**Justificación:** Cada estrategia tiene su caso de uso: Blue-Green Deployment usa dos ambientes idénticos y permite cambiar tráfico instantáneamente, ideal para aplicaciones críticas que requieren cero downtime. Canary Deployment despliega a un pequeño porcentaje primero para validar en producción gradualmente antes de expandir. Rolling Deployment actualiza instancias gradualmente, ideal para servicios con múltiples instancias. Feature Flags permiten activar features gradualmente. La elección depende de criticidad de la aplicación, tamaño del equipo, infraestructura disponible y requisitos de negocio.

---

### 5. ¿Cómo manejarías secrets y configuración en CI/CD? (Selecciona todas las que apliquen)

**A)** Usar secret management (AWS Secrets Manager, HashiCorp Vault) y variables encriptadas en CI/CD tool  
**B)** No commitear secrets en código, rotación regular y diferentes secrets por ambiente  
**C)** Acceso basado en roles y audit logging de acceso a secrets  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** La seguridad de secrets es crítica en CI/CD. Debe usarse secret management profesional (AWS Secrets Manager, HashiCorp Vault) en lugar de variables de entorno simples, las variables en CI/CD tools deben estar encriptadas, nunca commitear secrets en código (usar .gitignore y scanning), rotar secrets regularmente para limitar exposición, usar diferentes secrets por ambiente (dev, staging, prod), implementar acceso basado en roles (principio de menor privilegio), y mantener audit logging para rastrear acceso a secrets. Todas estas prácticas son esenciales para seguridad.

---

### 6. ¿Cómo optimizarías un pipeline de CI lento? (Selecciona todas las que apliquen)

**A)** Paralelizar jobs independientes y ejecutar tests en paralelo  
**B)** Cache de dependencias (npm, maven) y cache de Docker layers  
**C)** Ejecutar solo tests afectados (test impact analysis) y optimizar Dockerfiles  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** Optimizar un pipeline lento requiere múltiples estrategias: paralelizar jobs independientes reduce tiempo total, ejecutar tests en paralelo aprovecha recursos disponibles, cache de dependencias evita descargas repetidas, cache de Docker layers reutiliza layers no modificados, test impact analysis ejecuta solo tests afectados por cambios, optimizar Dockerfiles (multi-stage builds, orden correcto de layers) reduce tiempo de build, usar runners más rápidos mejora performance, y skip stages innecesarias en feature branches ahorra tiempo. La combinación de estas técnicas puede reducir significativamente el tiempo del pipeline.

---

### 7. ¿Cómo implementarías rollback automático en CD? (Selecciona todas las que apliquen)

**A)** Health checks después de deploy y rollback automático si fallan después de X minutos  
**B)** Mantener últimas N versiones disponibles y scripts de rollback automatizados  
**C)** Notificar al equipo y crear incident cuando ocurre rollback, monitoreo continuo post-deploy  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** El rollback automático requiere: health checks después del deploy para verificar que la aplicación funciona correctamente, si el health check falla después de X minutos (tiempo suficiente para detectar problemas), automáticamente desplegar la versión anterior, mantener últimas N versiones disponibles para permitir rollback rápido, scripts de rollback automatizados para garantizar proceso consistente, notificar al equipo inmediatamente cuando ocurre rollback, crear incident para documentar el problema, y monitoreo continuo post-deploy para detectar problemas temprano. Todos estos elementos son necesarios para un sistema de rollback confiable.

---

## Databases - Advanced Topics

### 8. ¿Qué es Big Data y qué tecnologías usarías? (Selecciona todas las que apliquen)

**A)** Big Data son datos que exceden capacidad de procesamiento tradicional, usar Hadoop para procesamiento distribuido  
**B)** Spark para procesamiento en memoria más rápido, Kafka para streaming de datos  
**C)** Cassandra/HBase para bases de datos distribuidas, Elasticsearch para búsqueda y análisis  
**D)** Todas las anteriores según casos de uso (Analytics, ML, IoT, logs masivos)

**Respuesta correcta: D**

**Justificación:** Big Data se refiere a datos que exceden la capacidad de procesamiento tradicional. Las tecnologías principales incluyen: Hadoop para procesamiento distribuido (HDFS, MapReduce), Spark para procesamiento en memoria más rápido que MapReduce, Kafka para streaming de datos en tiempo real, Cassandra/HBase para bases de datos distribuidas que escalan horizontalmente, y Elasticsearch para búsqueda y análisis. La elección depende del caso de uso: analytics, machine learning, IoT, logs masivos, etc. Todas estas tecnologías son relevantes para diferentes aspectos de Big Data.

---

### 9. ¿Cómo configurarías replicación de base de datos Master-Slave? (Selecciona todas las que apliquen)

**A)** Configurar Master habilitando binary logging y configurar Slave apuntando a Master  
**B)** Configurar replication user con permisos apropiados e iniciar replicación desde punto específico  
**C)** Monitorear lag de replicación, configurar failover automático y hacer backup desde Slave  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** Configurar replicación Master-Slave requiere: configurar el Master habilitando binary logging para registrar cambios, configurar el Slave apuntando al Master, crear un usuario de replicación con permisos apropiados (REPLICATION SLAVE), iniciar replicación desde un punto específico o snapshot para sincronización inicial, monitorear lag de replicación para detectar problemas, configurar failover automático si es necesario para alta disponibilidad, y hacer backups desde el Slave para no afectar el Master. Los beneficios incluyen lecturas distribuidas, backups sin impacto en producción y alta disponibilidad.

---

### 10. ¿Qué es un Data Warehouse y cómo lo diseñarías? (Selecciona todas las que apliquen)

**A)** Almacén centralizado de datos para análisis con proceso ETL (Extract, Transform, Load)  
**B)** Dimensional Modeling con Star Schema (Fact table + dimension tables) o Snowflake Schema  
**C)** Optimizado para OLAP (análisis) vs OLTP (transacciones), usar Data Marts por departamento  
**D)** Todas las anteriores usando herramientas como Redshift, BigQuery o Snowflake

**Respuesta correcta: D**

**Justificación:** Un Data Warehouse es un almacén centralizado de datos optimizado para análisis. El diseño incluye: proceso ETL para extraer datos de fuentes, transformarlos (limpiar, normalizar) y cargarlos al warehouse, Dimensional Modeling con Star Schema (fact table central + dimension tables) o Snowflake Schema (dimensiones normalizadas), optimización para OLAP (consultas analíticas complejas) en lugar de OLTP (transacciones), Data Marts como subconjuntos por departamento para acceso más rápido, y herramientas modernas como Redshift, BigQuery o Snowflake que manejan escalabilidad y performance automáticamente. Todos estos elementos son esenciales para un diseño efectivo.

---

### 11. ¿Cómo optimizarías una consulta SQL compleja con execution plan? (Selecciona todas las que apliquen)

**A)** Ejecutar EXPLAIN ANALYZE para ver plan real e identificar operaciones costosas (table scans, sorts)  
**B)** Crear índices apropiados en columnas de WHERE y JOIN, usar índices compuestos  
**C)** Optimizar JOINs (orden correcto, índices), considerar particionamiento y reescribir query si necesario  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** Optimizar una consulta SQL compleja requiere análisis sistemático: ejecutar EXPLAIN ANALYZE para ver el plan de ejecución real e identificar operaciones costosas como table scans (buscar sin índices), sorts costosos, o nested loops en lugar de hash joins. Luego crear índices apropiados en columnas usadas en WHERE y JOIN, usar índices compuestos para queries específicas, optimizar JOINs con orden correcto (tabla pequeña primero) y asegurar índices en columnas de JOIN, considerar particionamiento para tablas grandes, reescribir query si es necesario (subqueries vs JOINs), y actualizar estadísticas de tabla para que el optimizador tome mejores decisiones. Todas estas técnicas son complementarias.

---

### 12. ¿Cuándo crearías un índice compuesto y cómo decidirías el orden? (Selecciona todas las que apliquen)

**A)** Cuando queries filtran por múltiples columnas, columna más selectiva primero  
**B)** Columnas usadas en WHERE antes que ORDER BY, considerar queries más frecuentes  
**C)** Aplicar regla de leftmost prefix (índice puede usarse si query usa columnas desde izquierda)  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** Crear un índice compuesto es apropiado cuando queries filtran por múltiples columnas. El orden es crítico: columna más selectiva primero (menos valores únicos) para maximizar eficiencia, columnas usadas en WHERE antes que ORDER BY porque WHERE reduce el conjunto de datos más, considerar las queries más frecuentes para optimizar el caso común, y aplicar la regla de leftmost prefix donde el índice puede usarse si la query usa columnas desde la izquierda. Por ejemplo, un índice en (category, date) puede usarse para queries que filtran solo por category, pero no para queries que filtran solo por date. Todas estas consideraciones son importantes.

---

### 13. ¿Qué es Data Mining y qué técnicas conoces? (Selecciona todas las que apliquen)

**A)** Extracción de patrones de grandes conjuntos de datos, Clustering (K-means) y Classification (Decision Trees, SVM)  
**B)** Association Rules (Market Basket Analysis) y Regression para predecir valores numéricos  
**C)** Anomaly Detection para detectar outliers  
**D)** Todas las anteriores aplicables a marketing, fraud detection, recomendaciones y análisis predictivo

**Respuesta correcta: D**

**Justificación:** Data Mining es la extracción de patrones y conocimiento de grandes conjuntos de datos. Las técnicas principales incluyen: Clustering (K-means) para agrupar datos similares, Classification (Decision Trees, SVM) para clasificar en categorías, Association Rules (Market Basket Analysis) para encontrar relaciones entre items, Regression para predecir valores numéricos, y Anomaly Detection para detectar outliers o comportamientos anómalos. Estas técnicas tienen aplicaciones en marketing (segmentación, recomendaciones), fraud detection (detectar transacciones sospechosas), sistemas de recomendación, y análisis predictivo en general. Todas son técnicas válidas de Data Mining.

---

### 14. ¿Cómo manejarías replicación Master-Master y sus conflictos? (Selecciona todas las que apliquen)

**A)** Conflict Resolution: Timestamp-based (último gana), Application-level (lógica de negocio), Manual resolution  
**B)** Partitioning: Dividir datos por región/usuario para evitar conflictos  
**C)** Synchronous vs Asynchronous: Trade-off entre consistencia y performance, monitoring y testing de conflictos  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** La replicación Master-Master permite escritura en ambos servidores pero requiere manejo cuidadoso de conflictos. Las estrategias incluyen: Conflict Resolution con timestamp-based (último gana), application-level (lógica de negocio decide), o manual resolution para casos complejos, Partitioning para dividir datos por región o usuario evitando conflictos en la mayoría de casos, elegir entre Synchronous (más consistencia, menos performance) vs Asynchronous (mejor performance, consistencia eventual), monitoring para detectar y alertar sobre conflictos, y testing exhaustivo de escenarios de conflicto. Master-Master es más complejo que Master-Slave y requiere cuidado en el diseño para evitar problemas de consistencia.

---

## Object Oriented Programming - Advanced

### 15. ¿Cómo diseñarías un framework reutilizable que cumpla SOLID? (Selecciona todas las que apliquen)

**A)** Single Responsibility: Cada módulo tiene responsabilidad única  
**B)** Open/Closed: Extension points mediante interfaces/abstracciones, Liskov Substitution con interfaces bien definidas  
**C)** Interface Segregation: Interfaces pequeñas y específicas, Dependency Inversion: Framework depende de abstracciones  
**D)** Todas las anteriores (ejemplo: Framework de logging con interfaces ILogger, IAppender, extensible sin modificar código base)

**Respuesta correcta: D**

**Justificación:** Diseñar un framework reutilizable requiere aplicar todos los principios SOLID: Single Responsibility para que cada módulo tenga una responsabilidad única, Open/Closed para permitir extensión sin modificación mediante interfaces y abstracciones, Liskov Substitution para que las interfaces estén bien definidas y las implementaciones sean intercambiables, Interface Segregation para interfaces pequeñas y específicas en lugar de interfaces grandes, y Dependency Inversion para que el framework dependa de abstracciones no de implementaciones concretas. Un ejemplo es un framework de logging con interfaces ILogger e IAppender que permite extensibilidad sin modificar el código base.

---

### 16. ¿Cómo combinarías múltiples design patterns en un sistema? (Selecciona todas las que apliquen)

**A)** Factory + Strategy: Factory crea estrategias según contexto  
**B)** Observer + Command: Commands como eventos observables, Repository + Unit of Work para transacciones  
**C)** Facade + Adapter: Facade simplifica, Adapter integra sistemas externos, Decorator + Strategy  
**D)** Todas las anteriores considerando: no sobre-ingeniería, mantener simplicidad, documentar decisiones y entender trade-offs

**Respuesta correcta: D**

**Justificación:** Combinar múltiples design patterns es común en sistemas complejos: Factory + Strategy donde Factory crea estrategias según contexto, Observer + Command donde Commands actúan como eventos observables, Repository + Unit of Work donde Repository maneja acceso a datos y UoW gestiona transacciones, Facade + Adapter donde Facade simplifica APIs complejas y Adapter integra sistemas externos, y Decorator + Strategy donde Decoradores cambian estrategias. Sin embargo, es crucial evitar sobre-ingeniería, mantener simplicidad, documentar decisiones arquitectónicas y entender los trade-offs de cada combinación.

---

### 17. ¿Cuándo NO usarías un design pattern? (Selecciona todas las que apliquen)

**A)** Cuando añade complejidad innecesaria o para problemas simples que no requieren patrón  
**B)** Cuando el patrón no resuelve el problema real o viola principios (ej: Singleton viola SRP)  
**C)** Cuando hay solución más simple o si el equipo no entiende el patrón  
**D)** Todas las anteriores (regla: usar patrón solo si resuelve problema real y añade valor)

**Respuesta correcta: D**

**Justificación:** No siempre es apropiado usar un design pattern. No debes usarlo cuando: añade complejidad innecesaria sin beneficio claro, para problemas simples que tienen soluciones directas, cuando el patrón no resuelve el problema real que tienes, si viola principios (ej: Singleton puede violar Single Responsibility Principle), cuando hay una solución más simple disponible, o si el equipo no entiende el patrón (complejidad de mantenimiento). La regla de oro es: usar un patrón solo si resuelve un problema real y añade valor al sistema.

---

### 18. ¿Cómo refactorizarías un sistema legacy grande usando patrones? (Selecciona todas las que apliquen)

**A)** Análisis: Identificar deuda técnica y problemas, escribir tests para código crítico primero  
**B)** Refactorizar incrementalmente módulo por módulo  
**C)** Usar patrones apropiados: Adapter para integraciones, Facade para APIs complejas, Strategy para algoritmos, Repository para datos  
**D)** Todas las anteriores incluyendo documentación, code reviews y métricas de mejora

**Respuesta correcta: D**

**Justificación:** Refactorizar un sistema legacy grande requiere un enfoque sistemático: análisis inicial para identificar deuda técnica y problemas específicos, escribir tests para código crítico primero para tener seguridad al refactorizar, refactorizar incrementalmente módulo por módulo para reducir riesgo, usar patrones apropiados (Adapter para integraciones con sistemas externos, Facade para simplificar APIs complejas, Strategy para algoritmos intercambiables, Repository para acceso a datos), documentar cambios y razones para futuros desarrolladores, code reviews para asegurar calidad, y medir mejoras mediante métricas como code coverage y complejidad ciclomática.

---

### 19. ¿Qué efectos secundarios puede tener aplicar un patrón incorrectamente? (Selecciona todas las que apliquen)

**A)** Over-engineering: Complejidad innecesaria y overhead de abstracciones afectando performance  
**B)** Mantenibilidad: Código más difícil de entender y acoplamiento aumentado si se aplica mal  
**C)** Testing más difícil si está mal aplicado y nuevos desarrolladores confundidos  
**D)** Todas las anteriores (ejemplo: Singleton mal aplicado crea dependencias ocultas y dificulta testing)

**Respuesta correcta: D**

**Justificación:** Aplicar un patrón incorrectamente puede tener efectos secundarios negativos: Over-engineering con complejidad innecesaria que no aporta valor, overhead de abstracciones que afecta performance, código más difícil de entender reduciendo mantenibilidad, acoplamiento aumentado si el patrón se aplica mal (contrario al objetivo), testing más difícil debido a dependencias ocultas o complejidad innecesaria, y confusión para nuevos desarrolladores durante onboarding. Un ejemplo común es Singleton mal aplicado que crea dependencias ocultas y dificulta testing al hacer difícil mockear o reemplazar la instancia.

---

### 20. ¿Cómo identificarías y resolverías el antipatrón "Architecture By Implication"? (Selecciona todas las que apliquen)

**A)** Identificación: Código funciona pero nadie entiende por qué, decisiones arquitectónicas implícitas en código  
**B)** Falta de documentación de diseño  
**C)** Solución: Documentar arquitectura actual (diagramas, ADRs), hacer explícitas las decisiones  
**D)** Todas las anteriores incluyendo code reviews enfocados en arquitectura, documentar trade-offs y crear guías

**Respuesta correcta: D**

**Justificación:** Architecture By Implication es un antipatrón donde la arquitectura existe pero no está documentada. Se identifica por: código que funciona pero nadie entiende por qué funciona así, decisiones arquitectónicas implícitas solo en el código sin explicación, y falta de documentación de diseño. La solución incluye: documentar la arquitectura actual usando diagramas (C4, UML) y Architecture Decision Records (ADRs), hacer explícitas las decisiones arquitectónicas y sus razones, code reviews enfocados en arquitectura para mantener consistencia, documentar trade-offs y razones de decisiones, y crear guías de arquitectura para desarrolladores. Esto mejora mantenibilidad y facilita onboarding.

---

## Kubernetes & Container Orchestration

### 21. ¿Qué son los componentes principales de Kubernetes? (Selecciona todas las que apliquen)

**A)** Master Node: API Server (punto de entrada), etcd (base de datos distribuida), Controller Manager, Scheduler  
**B)** Worker Node: kubelet (agente que ejecuta pods), kube-proxy (networking y load balancing)  
**C)** Container Runtime: Docker, containerd, etc.  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** Kubernetes tiene componentes principales en dos tipos de nodos: Master Node incluye API Server como punto de entrada que valida requests, etcd como base de datos distribuida que almacena el estado del cluster, Controller Manager con controladores que mantienen el estado deseado, y Scheduler que asigna pods a nodos. Worker Node incluye kubelet como agente que ejecuta pods, kube-proxy para networking y load balancing, y Container Runtime (Docker, containerd, etc.) que ejecuta los contenedores. Todos estos componentes trabajan juntos para orquestar contenedores.

---

### 22. ¿Qué es un Pod y cómo lo usarías? (Selecciona todas las que apliquen)

**A)** Unidad mínima de despliegue en Kubernetes, puede contener uno o más contenedores  
**B)** Contenedores comparten red y almacenamiento, es efímero (se puede recrear), tiene su propia IP  
**C)** Contenedores en mismo pod comparten localhost  
**D)** Todas las anteriores, usar para contenedores que trabajan juntos (app + sidecar), compartir volúmenes, comunicación local eficiente

**Respuesta correcta: D**

**Justificación:** Un Pod es la unidad mínima de despliegue en Kubernetes. Características clave: puede contener uno o más contenedores, los contenedores comparten red y almacenamiento, es efímero (se puede recrear), tiene su propia IP única, y contenedores en el mismo pod comparten localhost para comunicación eficiente. Se usa para: contenedores que trabajan juntos (aplicación + sidecar como logging o monitoring), compartir volúmenes entre contenedores relacionados, y comunicación local eficiente entre contenedores del mismo pod.

---

### 23. ¿Cuál es la diferencia entre Deployment, ReplicaSet y Pod? (Selecciona todas las que apliquen)

**A)** Pod: Instancia de contenedor(es), ReplicaSet: Mantiene número deseado de pods (replicas)  
**B)** Deployment: Gestiona ReplicaSets, permite updates y rollbacks  
**C)** Jerarquía: Deployment → ReplicaSet → Pods  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** La jerarquía en Kubernetes es: Pod es la instancia de contenedor(es), ReplicaSet mantiene el número deseado de pods (replicas) asegurando que siempre haya N pods corriendo, y Deployment gestiona ReplicaSets añadiendo capacidades de updates (rolling updates), rollbacks, y pausa/reanudación. La jerarquía es Deployment → ReplicaSet → Pods. Deployment es el recurso de más alto nivel que normalmente usas, y automáticamente crea y gestiona ReplicaSets.

---

### 24. ¿Cómo configurarías un Service en Kubernetes? (Selecciona todas las que apliquen)

**A)** Service expone pods de forma estable, tipos: ClusterIP (IP interna), NodePort (puerto en cada nodo)  
**B)** LoadBalancer (balanceador externo), ExternalName (mapea a DNS externo)  
**C)** Usar selector para asociar pods, configurar ports (port y targetPort)  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** Un Service en Kubernetes expone pods de forma estable proporcionando una IP y nombre DNS consistentes. Los tipos incluyen: ClusterIP (IP interna del cluster, default), NodePort (expone puerto en cada nodo), LoadBalancer (crea balanceador de carga externo), y ExternalName (mapea a nombre DNS externo). Se configura con selector para asociar pods (ej: app: my-app), y ports especificando port (puerto del service) y targetPort (puerto del pod). Esto permite que los pods sean accesibles de forma estable aunque se recreen.

---

### 25. ¿Qué es un Ingress y cuándo lo usarías? (Selecciona todas las que apliquen)

**A)** Gestiona acceso externo a servicios, routing basado en host/path  
**B)** SSL/TLS termination y load balancing  
**C)** Name-based virtual hosting  
**D)** Todas las anteriores (requiere Ingress Controller como nginx o traefik, ejemplo: routing /api a backend, / a frontend)

**Respuesta correcta: D**

**Justificación:** Un Ingress gestiona acceso externo a servicios HTTP/HTTPS en Kubernetes. Se usa para: routing basado en host o path (ej: routing /api a backend, / a frontend), SSL/TLS termination centralizada, load balancing entre servicios, y name-based virtual hosting (múltiples dominios). Requiere un Ingress Controller instalado (nginx, traefik, etc.) que implementa las reglas del Ingress. Es más flexible que LoadBalancer para manejar múltiples rutas y dominios.

---

### 26. ¿Cómo manejarías almacenamiento persistente en Kubernetes? (Selecciona todas las que apliquen)

**A)** PersistentVolume (PV): Recurso de almacenamiento en cluster, PersistentVolumeClaim (PVC): Request por pod  
**B)** StorageClass: Define tipos de almacenamiento disponibles  
**C)** StatefulSet: Para aplicaciones con estado que necesitan almacenamiento estable  
**D)** Todas las anteriores (flujo: Pod → PVC → PV → Storage físico)

**Respuesta correcta: D**

**Justificación:** El almacenamiento persistente en Kubernetes usa varios recursos: PersistentVolume (PV) es un recurso de almacenamiento en el cluster, PersistentVolumeClaim (PVC) es una solicitud de almacenamiento por parte de un pod, StorageClass define tipos de almacenamiento disponibles y permite aprovisionamiento dinámico, y StatefulSet gestiona aplicaciones con estado que necesitan almacenamiento estable y persistente. El flujo es Pod → PVC → PV → Storage físico. StatefulSet asegura que cada pod tenga su propio volumen persistente.

---

### 27. ¿Qué es RBAC en Kubernetes y cómo lo configurarías? (Selecciona todas las que apliquen)

**A)** RBAC (Role-Based Access Control) controla acceso a recursos  
**B)** Role/ClusterRole: Define permisos (recursos y verbs como get, list, create)  
**C)** RoleBinding/ClusterRoleBinding: Asigna rol a usuario/grupo  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** RBAC (Role-Based Access Control) en Kubernetes controla el acceso a recursos del cluster. Los componentes son: Role/ClusterRole define permisos especificando apiGroups, resources (pods, services, etc.) y verbs (get, list, create, update, delete), RoleBinding asigna un Role a usuarios/grupos dentro de un namespace, y ClusterRoleBinding asigna un ClusterRole a nivel de cluster. Esto permite implementar principio de menor privilegio donde cada usuario/grupo tiene solo los permisos necesarios para su trabajo.

---

### 28. ¿Cómo implementarías auto-scaling en Kubernetes? (Selecciona todas las que apliquen)

**A)** Horizontal Pod Autoscaler (HPA): Escala pods basado en CPU/memoria u otras métricas  
**B)** Vertical Pod Autoscaler (VPA): Ajusta recursos (CPU/memoria) de pods  
**C)** Cluster Autoscaler: Añade/quita nodos del cluster según demanda  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** Kubernetes ofrece múltiples tipos de auto-scaling: Horizontal Pod Autoscaler (HPA) escala el número de pods basado en métricas como CPU, memoria o métricas custom, configurando minReplicas y maxReplicas; Vertical Pod Autoscaler (VPA) ajusta los recursos (CPU/memoria requests y limits) de los pods existentes; y Cluster Autoscaler añade o quita nodos del cluster según la demanda de recursos. HPA es el más común para escalar aplicaciones stateless, mientras que VPA ajusta recursos de pods individuales y Cluster Autoscaler escala la infraestructura.

---

### 29. ¿Cómo manejarías secrets en Kubernetes? (Selecciona todas las que apliquen)

**A)** Secrets: Objetos que almacenan datos sensibles (encriptados en etcd)  
**B)** Crear secret con kubectl, usar en pods mediante variables de entorno o volúmenes  
**C)** External Secrets Operator: Para integrar con Vault, AWS Secrets Manager  
**D)** Todas las anteriores siguiendo best practices: rotación regular, acceso mínimo, encriptación en tránsito

**Respuesta correcta: D**

**Justificación:** Los Secrets en Kubernetes almacenan datos sensibles como contraseñas, tokens y claves. Se crean con kubectl (ej: `kubectl create secret generic my-secret --from-literal=key=value`) y se usan en pods mediante variables de entorno o volúmenes. Están encriptados en etcd pero deben seguirse best practices: rotación regular de secrets, acceso mínimo (RBAC), encriptación en tránsito (TLS), y usar External Secrets Operator para integrar con sistemas externos como HashiCorp Vault o AWS Secrets Manager para gestión centralizada.

---

### 30. ¿Qué es un StatefulSet y cuándo usarlo vs Deployment? (Selecciona todas las que apliquen)

**A)** StatefulSet gestiona aplicaciones con estado, identidad estable (nombre único por pod)  
**B)** Ordenado deployment (despliega y escala en orden), almacenamiento estable (cada pod su propio volumen)  
**C)** Usar StatefulSet para: bases de datos, aplicaciones que necesitan identidad estable, aplicaciones con estado  
**D)** Todas las anteriores (usar Deployment para aplicaciones stateless y microservices)

**Respuesta correcta: D**

**Justificación:** StatefulSet gestiona aplicaciones con estado con características específicas: identidad estable donde cada pod tiene nombre único y estable (ej: app-0, app-1), deployment ordenado donde se despliega y escala en orden específico, y almacenamiento estable donde cada pod tiene su propio volumen persistente. Se usa para: bases de datos (MySQL, PostgreSQL), aplicaciones que necesitan identidad estable, y aplicaciones con estado. Deployment se usa para aplicaciones stateless y microservices donde no importa qué pod maneja qué request.

---

## Software Architecture - Advanced

### 31. ¿Cómo identificarías el antipatrón "Stovepipe Enterprise"? (Selecciona todas las que apliquen)

**A)** Sistemas duplicados con funcionalidad similar y datos duplicados entre sistemas  
**B)** Integración manual (copy-paste de datos) y no hay arquitectura de integración  
**C)** Cada sistema es silo independiente  
**D)** Todas las anteriores (solución: API Gateway, Event-driven architecture, Message queues, Arquitectura orientada a servicios, Data integration layer)

**Respuesta correcta: D**

**Justificación:** Stovepipe Enterprise es un antipatrón donde sistemas empresariales están aislados y no se comunican. Las señales incluyen: sistemas duplicados con funcionalidad similar, datos duplicados entre sistemas, integración manual mediante copy-paste de datos, falta de arquitectura de integración, y cada sistema funciona como silo independiente. La solución requiere: API Gateway para integración centralizada, Event-driven architecture para comunicación asíncrona, Message queues para desacoplamiento, Arquitectura orientada a servicios para integración estructurada, y Data integration layer para sincronización de datos. Todas estas señales indican el antipatrón.

---

### 32. ¿Qué es "Cover Your Assets" (CYA) y cómo evitarlo? (Selecciona todas las que apliquen)

**A)** Documentación excesiva sin valor real, solo para "cubrirse"  
**B)** Documentar solo lo necesario y útil, documentación viva (actualizada con código)  
**C)** Code como documentación cuando sea posible, ADRs para decisiones importantes, evitar documentación que nadie lee  
**D)** Todas las anteriores (mejor práctica: documentar "por qué" no "qué", el código ya dice qué)

**Respuesta correcta: D**

**Justificación:** Cover Your Assets (CYA) es un antipatrón donde se genera documentación excesiva sin valor real solo para protección personal. Para evitarlo: documentar solo lo necesario y útil que realmente aporta valor, mantener documentación viva que se actualiza con el código, usar el código como documentación cuando sea posible (código limpio y bien nombrado), usar ADRs (Architecture Decision Records) para decisiones importantes, y evitar documentación que nadie lee o mantiene. La mejor práctica es documentar "por qué" se tomaron decisiones, no "qué" hace el código (el código ya lo dice). Todas estas prácticas ayudan a evitar CYA.

---

### 33. ¿Cómo resolverías el antipatrón "Architecture By Implication"? (Selecciona todas las que apliquen)

**A)** Documentar arquitectura actual (diagramas C4) y ADRs para decisiones importantes  
**B)** Code reviews enfocados en arquitectura y guías de arquitectura para desarrolladores  
**C)** Diagramas actualizados y onboarding que explique arquitectura  
**D)** Todas las anteriores usando herramientas como PlantUML, Mermaid, Structurizr

**Respuesta correcta: D**

**Justificación:** Resolver Architecture By Implication requiere hacer la arquitectura explícita mediante: documentar la arquitectura actual usando diagramas C4 (Context, Container, Component, Code), crear ADRs (Architecture Decision Records) para decisiones importantes con razones y trade-offs, code reviews enfocados en arquitectura para mantener consistencia, crear guías de arquitectura para desarrolladores, mantener diagramas actualizados con cambios del sistema, y onboarding que explique la arquitectura a nuevos miembros del equipo. Herramientas útiles incluyen PlantUML, Mermaid, y Structurizr para crear y mantener diagramas. Todas estas prácticas hacen la arquitectura explícita.

---

### 34. ¿Qué es "The Grand Old Duke of York" y cómo prevenirlo? (Selecciona todas las que apliquen)

**A)** Cambiar arquitectura innecesariamente (subir y bajar sin razón)  
**B)** Evaluar necesidad real de cambio, medir impacto antes de cambiar, no cambiar por moda tecnológica  
**C)** ROI claro antes de refactorizar arquitectura, cambios incrementales no big bang  
**D)** Todas las anteriores (señales: refactorizaciones frecuentes sin beneficio claro, cambios sin métricas)

**Respuesta correcta: D**

**Justificación:** The Grand Old Duke of York es un antipatrón donde se cambia la arquitectura innecesariamente sin razón clara (como el personaje que sube y baja la colina sin propósito). Para prevenirlo: evaluar la necesidad real del cambio antes de hacerlo, medir el impacto y beneficios esperados, no cambiar por moda tecnológica sin justificación, tener ROI claro antes de refactorizar arquitectura, y hacer cambios incrementales en lugar de big bang. Las señales incluyen: refactorizaciones frecuentes sin beneficio claro, cambios de arquitectura sin métricas que demuestren mejora, y ciclos de cambio sin propósito definido. Todas estas prácticas previenen este antipatrón.

---

## Front-end - Advanced Performance

### 35. ¿Cómo implementarías code splitting en una aplicación React? (Selecciona todas las que apliquen)

**A)** Route-based splitting: Cargar componentes por ruta  
**B)** Component-based splitting: React.lazy() y Suspense, Library splitting: Separar vendor bundles  
**C)** Dynamic imports: import() para carga dinámica  
**D)** Todas las anteriores (beneficios: bundle inicial más pequeño, carga más rápida)

**Respuesta correcta: D**

**Justificación:** Code splitting en React puede implementarse de múltiples formas: Route-based splitting carga componentes por ruta para dividir el bundle por páginas, Component-based splitting usa React.lazy() y Suspense para cargar componentes bajo demanda, Library splitting separa vendor bundles (React, librerías grandes) del código de aplicación, y Dynamic imports con import() permiten carga dinámica de módulos. Ejemplo: `const LazyComponent = React.lazy(() => import('./LazyComponent'));` con `<Suspense>` para manejar loading. Los beneficios incluyen bundle inicial más pequeño y carga más rápida de la aplicación.

---

### 36. ¿Qué estrategias usarías para optimizar rendimiento frontend? (Selecciona todas las que apliquen)

**A)** Code splitting, lazy loading, tree shaking (eliminar código no usado)  
**B)** Minificación y compresión, caching (service workers), CDN para assets  
**C)** Image optimization (WebP, lazy loading), Critical CSS inline, preloading recursos importantes  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** Optimizar rendimiento frontend requiere múltiples estrategias: Code splitting para dividir código en chunks, lazy loading para cargar recursos cuando se necesiten, tree shaking para eliminar código no usado, minificación y compresión para reducir tamaño de archivos, caching mediante service workers para assets estáticos, CDN para servir assets desde ubicaciones cercanas, image optimization usando WebP y lazy loading de imágenes, Critical CSS inline para renderizar contenido importante rápido, y preloading recursos importantes. La combinación de estas técnicas mejora significativamente el tiempo de carga y la experiencia del usuario.

---

### 37. ¿Cómo implementarías virtual scrolling? (Selecciona todas las que apliquen)

**A)** Virtual scrolling renderiza solo elementos visibles  
**B)** Calcular altura total basada en número de items, renderizar solo items visibles + buffer  
**C)** Actualizar scroll position virtualmente, re-renderizar items cuando cambia viewport  
**D)** Todas las anteriores usando librerías como react-window o react-virtualized (beneficios: rendimiento constante con miles de items)

**Respuesta correcta: D**

**Justificación:** Virtual scrolling es una técnica que renderiza solo los elementos visibles en lugar de todos los items de una lista larga. La implementación incluye: calcular la altura total basada en el número de items, renderizar solo los items visibles más un buffer pequeño arriba y abajo, actualizar la posición de scroll virtualmente, y re-renderizar items cuando cambia el viewport. Librerías como react-window y react-virtualized implementan esto eficientemente. Los beneficios incluyen rendimiento constante incluso con miles o millones de items, ya que solo se renderizan los elementos visibles, reduciendo significativamente el uso de memoria y mejorando el rendimiento.

---

### 38. ¿Qué es un Design System y cómo lo implementarías? (Selecciona todas las que apliquen)

**A)** Colección de componentes y guías reutilizables, componentes base (botones, inputs, cards)  
**B)** Tokens de diseño (colores, tipografía, espaciado), documentación (Storybook, Style Guide)  
**C)** Versionado (publicar como paquete npm), testing (tests visuales y unitarios), governance (proceso para añadir/modificar)  
**D)** Todas las anteriores (beneficios: consistencia, velocidad de desarrollo, mantenibilidad)

**Respuesta correcta: D**

**Justificación:** Un Design System es una colección de componentes y guías reutilizables que aseguran consistencia en una aplicación. La implementación incluye: componentes base reutilizables (botones, inputs, cards), tokens de diseño que definen colores, tipografía y espaciado de forma centralizada, documentación usando herramientas como Storybook y Style Guide, versionado publicando como paquete npm para reutilización entre proyectos, testing con tests visuales y unitarios para asegurar calidad, y governance con procesos claros para añadir o modificar componentes. Los beneficios incluyen consistencia visual, velocidad de desarrollo y mejor mantenibilidad.

---

### 39. ¿Cómo manejarías estado global en una aplicación grande? (Selecciona todas las que apliquen)

**A)** Context API para estado simple compartido, Redux/Zustand para estado complejo  
**B)** State colocation: Estado cerca de donde se usa  
**C)** Normalización de estructura de datos, selectores memoized para performance, middleware para side effects  
**D)** Todas las anteriores (elegir según complejidad, tamaño de app, necesidades del equipo)

**Respuesta correcta: D**

**Justificación:** Manejar estado global en aplicaciones grandes requiere elegir la estrategia apropiada: Context API para estado simple compartido sin necesidad de librerías externas, Redux o Zustand para estado complejo con muchas interacciones, state colocation manteniendo estado cerca de donde se usa cuando sea posible, normalización de estructura de datos para evitar duplicación, selectores memoized para optimizar performance evitando re-renders innecesarios, y middleware (Redux Thunk, Saga) para manejar side effects de forma organizada. La elección depende de la complejidad del estado, tamaño de la aplicación y necesidades específicas del equipo.

---

## Back-end - Advanced Practices

### 40. ¿Cómo diseñarías una API RESTful escalable? (Selecciona todas las que apliquen)

**A)** Versionado (/api/v1/, /api/v2/), paginación (cursor-based o offset-based), filtrado y sorting consistentes  
**B)** Rate limiting por usuario/IP, caching con headers apropiados (ETag, Cache-Control)  
**C)** HATEOAS (Hypermedia para navegación), documentación (OpenAPI/Swagger), monitoring (logging, métricas, tracing)  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** Diseñar una API RESTful escalable requiere múltiples consideraciones: versionado para evolucionar sin romper clientes existentes, paginación eficiente (cursor-based es mejor para grandes datasets), filtrado y sorting mediante query parameters consistentes, rate limiting para prevenir abuso y proteger recursos, caching con headers HTTP apropiados para reducir carga, HATEOAS para navegación descubrible, documentación completa con OpenAPI/Swagger, y monitoring para detectar problemas y optimizar performance. Todas estas prácticas son esenciales para escalabilidad.

---

### 41. ¿Cómo optimizarías un resolver de GraphQL para evitar N+1? (Selecciona todas las que apliquen)

**A)** N+1 problem: Query principal + N queries adicionales  
**B)** DataLoader: Batching y caching automático de queries  
**C)** Join queries: Cargar datos relacionados en una query, field-level resolvers eficientes  
**D)** Todas las anteriores incluyendo caching de resultados de resolvers

**Respuesta correcta: D**

**Justificación:** El problema N+1 en GraphQL ocurre cuando una query principal genera N queries adicionales (una por cada item). Las soluciones incluyen: DataLoader que agrupa automáticamente múltiples requests en batches y cachea resultados, join queries que cargan datos relacionados en una sola query SQL, field-level resolvers eficientes que minimizan queries, y caching de resultados de resolvers. Ejemplo con DataLoader: `const userLoader = new DataLoader(ids => db.users.findByIds(ids));` agrupa automáticamente requests. Todas estas técnicas son complementarias.

---

### 42. ¿Qué buenas prácticas aplicarías en GraphQL? (Selecciona todas las que apliquen)

**A)** Schema design: Tipos bien definidos y relaciones claras, resolvers eficientes evitando N+1  
**B)** Query complexity: Limitar profundidad y complejidad, caching a nivel de campo y query  
**C)** Error handling tipado y descriptivo, security (rate limiting, autenticación, validación)  
**D)** Todas las anteriores incluyendo documentación autodocumentada y versionado sin breaking changes

**Respuesta correcta: D**

**Justificación:** Las buenas prácticas en GraphQL incluyen: schema design con tipos bien definidos y relaciones claras, resolvers eficientes usando DataLoader para evitar N+1, query complexity limits para prevenir queries costosas, caching a nivel de campo y query para mejorar performance, error handling tipado y descriptivo para mejor debugging, security con rate limiting, autenticación y validación de inputs, documentación autodocumentada del schema, y versionado mediante evolución del schema sin breaking changes. Todas estas prácticas mejoran calidad y performance.

---

### 43. ¿Cómo implementarías caching distribuido? (Selecciona todas las que apliquen)

**A)** Redis Cluster: Cache distribuido con sharding  
**B)** Cache-aside pattern: App verifica cache, carga de BD si no existe  
**C)** Write-through: Escribe en cache y BD simultáneamente, cache invalidation (TTL, eventos, manual)  
**D)** Todas las anteriores considerando eventual consistency para cache y monitoring (hit rate, latency, memory usage)

**Respuesta correcta: D**

**Justificación:** Implementar caching distribuido requiere: Redis Cluster para cache distribuido con sharding que escala horizontalmente, Cache-aside pattern donde la aplicación verifica cache primero y carga de BD si no existe, Write-through que escribe en cache y BD simultáneamente para consistencia, estrategias de cache invalidation (TTL automático, eventos, o manual), aceptar eventual consistency para cache (trade-off aceptable), y monitoring de hit rate, latency y memory usage para optimizar. La combinación de estas técnicas permite caching escalable y eficiente.

---

### 44. ¿Cuándo elegirías Node.js vs Python vs Java vs Go para backend? (Selecciona todas las que apliquen)

**A)** Node.js: I/O intensivo, real-time apps, mismo lenguaje frontend/backend, ecosistema npm grande  
**B)** Python: Data science, ML, scripting, desarrollo rápido, Django/Flask  
**C)** Java: Enterprise apps, sistemas grandes, ecosistema maduro, Spring Boot  
**D)** Todas las anteriores (Go: performance crítico, concurrencia alta, microservices, APIs) - elegir según requisitos de performance, ecosistema, expertise del equipo y tipo de aplicación

**Respuesta correcta: D**

**Justificación:** La elección de tecnología backend depende de requisitos específicos: Node.js es ideal para I/O intensivo, aplicaciones real-time, cuando se usa mismo lenguaje frontend/backend, y aprovecha ecosistema npm grande. Python es mejor para data science, ML, scripting, desarrollo rápido, y frameworks como Django/Flask. Java es apropiado para enterprise apps, sistemas grandes, ecosistema maduro, y Spring Boot. Go es ideal para performance crítico, alta concurrencia, microservices y APIs. La elección debe basarse en requisitos de performance, ecosistema disponible, expertise del equipo y tipo de aplicación.

---

### 45. ¿Cómo diseñarías un sistema de microservices? (Selecciona todas las que apliquen)

**A)** Domain boundaries: Dividir por dominio de negocio, API Gateway como punto de entrada único  
**B)** Service discovery (Consul, Eureka, Kubernetes), communication (REST, gRPC, message queues)  
**C)** Database per service, distributed tracing (Zipkin, Jaeger), centralized logging (ELK stack)  
**D)** Todas las anteriores incluyendo circuit breakers para resiliencia y deployment independiente por servicio

**Respuesta correcta: D**

**Justificación:** Diseñar un sistema de microservices requiere múltiples componentes: domain boundaries dividiendo por dominio de negocio (DDD), API Gateway como punto de entrada único que maneja routing y cross-cutting concerns, service discovery para que servicios se encuentren dinámicamente, múltiples opciones de comunicación (REST para HTTP, gRPC para performance, message queues para async), database per service para independencia, distributed tracing para debugging, centralized logging para agregación, circuit breakers para resiliencia ante fallos, y deployment independiente por servicio. Todos estos elementos son esenciales para microservices exitosos.

---

## Preguntas Mixtas y Arquitectónicas

### 46. ¿Cómo diseñarías un sistema que maneje 1 millón de requests por segundo? (Selecciona todas las que apliquen)

**A)** Load balancing múltiples niveles (DNS, application, database), horizontal scaling con instancias stateless  
**B)** Caching múltiples niveles (CDN, application cache, database cache)  
**C)** Database: Sharding, read replicas, NoSQL si apropiado, async processing con queues  
**D)** Todas las anteriores incluyendo CDN para assets estáticos, optimización de database y monitoring para detectar cuellos

**Respuesta correcta: D**

**Justificación:** Diseñar un sistema para 1 millón de requests/segundo requiere múltiples estrategias: load balancing en múltiples niveles (DNS, application layer, database) para distribuir carga, horizontal scaling con muchas instancias stateless que pueden escalar independientemente, caching en múltiples niveles (CDN para assets estáticos, application cache, database cache) para reducir carga en backend, database con sharding para dividir datos, read replicas para distribuir lecturas, considerar NoSQL si apropiado, async processing con queues para tareas pesadas, optimización de database (índices, query optimization), y monitoring para detectar y resolver cuellos de botella. La combinación de todas estas técnicas es necesaria.

---

### 47. ¿Cómo manejarías transacciones distribuidas en microservices? (Selecciona todas las que apliquen)

**A)** Saga Pattern: Secuencia de transacciones locales con compensación  
**B)** Two-Phase Commit: No recomendado por acoplamiento fuerte  
**C)** Eventual Consistency: Aceptar para mayoría de casos, Outbox Pattern para publicar eventos  
**D)** Todas las anteriores considerando Choreography (servicios coordinan mediante eventos) vs Orchestration (orquestador coordina) - elegir según requisitos de consistencia y complejidad aceptable

**Respuesta correcta: D**

**Justificación:** Manejar transacciones distribuidas en microservices es complejo: Saga Pattern usa secuencia de transacciones locales con acciones compensatorias si algo falla, Two-Phase Commit no es recomendado por acoplamiento fuerte entre servicios, Eventual Consistency es aceptable para la mayoría de casos y más escalable, Outbox Pattern publica eventos desde transacciones locales de forma confiable. Choreography permite servicios coordinar mediante eventos (más desacoplado), mientras Orchestration usa un orquestador central (más control). La elección depende de requisitos de consistencia y complejidad aceptable.

---

### 48. ¿Cómo implementarías observability en un sistema distribuido? (Selecciona todas las que apliquen)

**A)** Logging: Structured logging (JSON), centralized (ELK stack)  
**B)** Metrics: Prometheus, Grafana (latency, throughput, errors)  
**C)** Tracing: Distributed tracing (Jaeger, Zipkin) con Trace ID propagado y spans para operaciones  
**D)** Todas las anteriores incluyendo APM (Application Performance Monitoring), dashboards y alerting proactivo

**Respuesta correcta: D**

**Justificación:** Implementar observability en sistemas distribuidos requiere tres pilares: Logging con structured logging (JSON) para parsing fácil y centralized logging (ELK stack) para agregación, Metrics con Prometheus para recolección y Grafana para visualización (latency, throughput, error rates), y Distributed Tracing con Jaeger o Zipkin donde Trace ID se propaga entre servicios y spans representan operaciones individuales. Además se necesita APM para monitoreo de aplicación, dashboards para visualización, y alerting proactivo para detectar problemas antes de que afecten usuarios. Los tres pilares son complementarios.

---

### 49. ¿Cómo diseñarías un sistema de eventos para microservices? (Selecciona todas las que apliquen)

**A)** Event Bus: Kafka, RabbitMQ, AWS EventBridge  
**B)** Event Sourcing: Almacenar eventos como fuente de verdad, CQRS: Separar lectura y escritura  
**C)** Event Schema: Versionado de eventos, idempotency para procesar eventos de forma idempotente  
**D)** Todas las anteriores incluyendo ordering cuando sea necesario y Dead Letter Queue para eventos fallidos

**Respuesta correcta: D**

**Justificación:** Diseñar un sistema de eventos para microservices requiere: Event Bus (Kafka, RabbitMQ, AWS EventBridge) para transporte de eventos, Event Sourcing almacenando eventos como fuente de verdad permitiendo reconstruir estado, CQRS separando lectura y escritura para optimización, Event Schema con versionado para evolución sin breaking changes, idempotency para procesar eventos de forma segura (evitar duplicados), ordering cuando sea necesario para garantizar secuencia, y Dead Letter Queue para eventos fallidos que requieren atención manual. Todos estos elementos son importantes para un sistema de eventos robusto.

---

### 50. ¿Cómo manejarías la seguridad en una arquitectura de microservices? (Selecciona todas las que apliquen)

**A)** API Gateway: Punto único de autenticación, JWT/OAuth2 para tokens  
**B)** mTLS: Mutual TLS entre servicios, secrets management (Vault, AWS Secrets Manager)  
**C)** Network policies para restringir comunicación, rate limiting por servicio y global  
**D)** Todas las anteriores incluyendo input validation en cada servicio y security scanning de vulnerabilidades

**Respuesta correcta: D**

**Justificación:** La seguridad en microservices requiere múltiples capas: API Gateway como punto único de autenticación centralizando lógica de seguridad, JWT/OAuth2 para tokens stateless y escalables, mTLS (Mutual TLS) para autenticación mutua entre servicios, secrets management profesional (Vault, AWS Secrets Manager) para manejar credenciales, network policies para restringir comunicación entre servicios (defense in depth), rate limiting por servicio y global para prevenir abuso, input validation en cada servicio (no confiar en validación externa), y security scanning para detectar vulnerabilidades en dependencias. Todas estas prácticas son esenciales para seguridad robusta.

### 51. ¿Cómo optimizarías una base de datos que está lenta? (Selecciona todas las que apliquen)

**A)** Análisis: Execution plans, slow query log, crear índices apropiados y eliminar no usados  
**B)** Query optimization reescribiendo queries lentas, particionamiento para tablas grandes, connection pooling  
**C)** Read replicas para distribuir lecturas, caching de queries frecuentes  
**D)** Todas las anteriores incluyendo hardware (más RAM, SSD, mejor CPU) y archiving de datos antiguos

**Respuesta correcta: D**

**Justificación:** Optimizar una base de datos lenta requiere un enfoque sistemático: análisis usando execution plans y slow query log para identificar problemas, crear índices apropiados y eliminar índices no usados, optimizar queries reescribiéndolas cuando sea necesario, particionamiento para tablas grandes, connection pooling para reutilizar conexiones, read replicas para distribuir carga de lecturas, caching de queries frecuentes para reducir carga, mejorar hardware (más RAM, SSD, mejor CPU) cuando sea necesario, y archiving de datos antiguos para reducir tamaño de tablas activas. Todas estas técnicas son complementarias.

---

### 52. ¿Cómo diseñarías un sistema de notificaciones escalable? (Selecciona todas las que apliquen)

**A)** Queue-based: Cola de mensajes (RabbitMQ, SQS), workers escalables  
**B)** Multi-channel: Email, SMS, Push, In-app, templates para reutilización  
**C)** Rate limiting por usuario/canal, retry logic con exponential backoff  
**D)** Todas las anteriores incluyendo Dead Letter Queue para fallos persistentes y analytics para tracking

**Respuesta correcta: D**

**Justificación:** Un sistema de notificaciones escalable requiere: queue-based architecture con cola de mensajes (RabbitMQ, SQS) para desacoplamiento, workers escalables que procesan notificaciones, multi-channel support (Email, SMS, Push, In-app) para diferentes canales, templates para reutilización de mensajes, rate limiting por usuario/canal para prevenir spam, retry logic con exponential backoff para manejar fallos temporales, Dead Letter Queue para fallos persistentes que requieren atención manual, y analytics para tracking de entregas y métricas. Todos estos elementos son esenciales para escalabilidad y confiabilidad.

---

### 53. ¿Cómo implementarías feature flags en producción? (Selecciona todas las que apliquen)

**A)** Feature flag service (LaunchDarkly, custom solution) con tipos: Release flags (temporary), Business flags (long-term), Experiment flags (A/B testing)  
**B)** Targeting: Por usuario, porcentaje, geografía  
**C)** Monitoring de métricas de uso, cleanup de flags no usados, testing con flags activados/desactivados  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** Implementar feature flags en producción requiere: feature flag service profesional (LaunchDarkly) o solución custom, diferentes tipos de flags (Release flags temporales para control de releases, Business flags de largo plazo para funcionalidad condicional, Experiment flags para A/B testing), targeting flexible (por usuario específico, porcentaje de usuarios, geografía), monitoring de métricas de uso para entender impacto, cleanup regular de flags no usados para mantener código limpio, y testing exhaustivo con flags activados y desactivados para asegurar que ambas variantes funcionan. Todas estas prácticas son importantes.

---

### 54. ¿Cómo manejarías la migración de datos en un sistema grande? (Selecciona todas las que apliquen)

**A)** Planificación: Análisis de impacto, rollback plan, testing en staging primero  
**B)** Incremental: Migrar en batches si es posible, dual write en ambos sistemas durante transición  
**C)** Verification de datos migrados, cutover gradual o big bang según caso  
**D)** Todas las anteriores incluyendo monitoring durante y después, y plan de rollback preparado

**Respuesta correcta: D**

**Justificación:** Migrar datos en un sistema grande requiere planificación cuidadosa: análisis de impacto y rollback plan antes de empezar, testing exhaustivo en staging primero, migración incremental en batches cuando sea posible para reducir riesgo, dual write escribiendo en ambos sistemas durante transición para mantener sincronización, verification de datos migrados para asegurar integridad, cutover gradual o big bang según el caso específico, monitoring continuo durante y después de la migración, y plan de rollback preparado para revertir si es necesario. Todos estos pasos son críticos para migración exitosa.

---

### 55. ¿Cómo diseñarías un sistema de búsqueda escalable? (Selecciona todas las que apliquen)

**A)** Search engine: Elasticsearch, Solr, indexing de múltiples fuentes  
**B)** Sharding para distribuir índices, replication para disponibilidad  
**C)** Caching de queries frecuentes, analytics para optimización, auto-complete en tiempo real  
**D)** Todas las anteriores incluyendo ranking algorithms para relevancia

**Respuesta correcta: D**

**Justificación:** Diseñar un sistema de búsqueda escalable requiere: search engine profesional (Elasticsearch, Solr) con capacidades avanzadas, indexing de datos de múltiples fuentes para agregación, sharding para distribuir índices y escalar horizontalmente, replication para alta disponibilidad, caching de queries frecuentes para mejorar performance, query analytics para optimización continua, auto-complete con sugerencias en tiempo real para mejor UX, y ranking algorithms para ordenar resultados por relevancia. Todos estos componentes trabajan juntos para crear búsqueda escalable y efectiva.

---

### 56. ¿Cómo implementarías un sistema de colas de mensajes? (Selecciona todas las que apliquen)

**A)** Message broker: RabbitMQ, Kafka, AWS SQS  
**B)** Queue types: Simple queue, Priority queue, Delayed queue  
**C)** Consumers (workers), acknowledgment para confirmar procesamiento, Dead Letter Queue  
**D)** Todas las anteriores incluyendo scaling con múltiples consumers y monitoring (queue depth, processing time)

**Respuesta correcta: D**

**Justificación:** Implementar un sistema de colas de mensajes requiere: message broker apropiado (RabbitMQ para colas tradicionales, Kafka para streaming, AWS SQS para cloud), diferentes tipos de colas según necesidades (simple, priority, delayed), consumers (workers) que procesan mensajes, acknowledgment para confirmar procesamiento exitoso y evitar pérdida de mensajes, Dead Letter Queue para mensajes fallidos que requieren atención, scaling con múltiples consumers para procesar más mensajes, y monitoring de queue depth y processing time para detectar problemas. Todos estos elementos son esenciales.

---

### 57. ¿Cómo manejarías la consistencia de datos en un sistema distribuido? (Selecciona todas las que apliquen)

**A)** ACID para datos críticos, Eventual Consistency para mayoría de casos (más escalable)  
**B)** CAP Theorem: Elegir entre Consistency, Availability, Partition tolerance  
**C)** Conflict resolution: Last-write-wins, Vector clocks, Application-level  
**D)** Todas las anteriores incluyendo Saga pattern para transacciones distribuidas y CQRS para separar lectura y escritura

**Respuesta correcta: D**

**Justificación:** Manejar consistencia en sistemas distribuidos requiere entender trade-offs: ACID para datos críticos pero con complejidad en transacciones distribuidas, Eventual Consistency aceptable para mayoría de casos y más escalable, CAP Theorem donde debes elegir entre Consistency, Availability y Partition tolerance según requisitos, conflict resolution strategies (Last-write-wins simple, Vector clocks para orden, Application-level para lógica de negocio), Saga pattern para transacciones distribuidas con compensación, y CQRS separando lectura y escritura para optimización. La elección depende de requisitos específicos.

---

### 58. ¿Cómo diseñarías un sistema de autenticación distribuido? (Selecciona todas las que apliquen)

**A)** Centralized auth service dedicado, JWT tokens stateless y escalables  
**B)** Token refresh para renovación, SSO para múltiples servicios, OAuth2 para autorización  
**C)** Session management si es necesario (Redis), rate limiting para prevenir brute force  
**D)** Todas las anteriores incluyendo multi-factor auth para seguridad adicional

**Respuesta correcta: D**

**Justificación:** Diseñar autenticación distribuida requiere: centralized auth service dedicado para gestión centralizada, JWT tokens stateless y escalables sin necesidad de almacenamiento de sesión, token refresh para renovación segura, SSO (Single Sign-On) para múltiples servicios con un solo login, OAuth2 para autorización entre servicios, session management con Redis si es necesario para casos específicos, rate limiting para prevenir brute force attacks, y multi-factor auth para seguridad adicional. Todos estos componentes son importantes para seguridad y escalabilidad.

---

### 59. ¿Cómo optimizarías el tiempo de carga de una aplicación web? (Selecciona todas las que apliquen)

**A)** Frontend: Code splitting, lazy loading, minificar y comprimir assets, CDN para assets estáticos  
**B)** Frontend: Image optimization (WebP, lazy loading), Critical CSS inline, preload recursos importantes, service workers  
**C)** Backend: Caching de respuestas, database query optimization, connection pooling, compression (gzip, brotli)  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** Optimizar tiempo de carga requiere trabajo en frontend y backend: Frontend con code splitting y lazy loading para reducir bundle inicial, minificar y comprimir assets, CDN para servir assets estáticos desde ubicaciones cercanas, image optimization usando WebP y lazy loading, Critical CSS inline para renderizar contenido importante rápido, preload de recursos importantes, service workers para caching. Backend con caching de respuestas, database query optimization, connection pooling para reutilizar conexiones, y compression (gzip, brotli). La combinación de todas estas técnicas mejora significativamente el tiempo de carga.

---

### 60. ¿Cómo implementarías un sistema de recomendaciones? (Selecciona todas las que apliquen)

**A)** Collaborative Filtering basado en comportamiento de usuarios similares, Content-based basado en características del item  
**B)** Hybrid combinando ambos enfoques, Machine Learning con modelos para mejorar  
**C)** Real-time para actualizar recomendaciones en tiempo real, caching de recomendaciones calculadas  
**D)** Todas las anteriores incluyendo A/B testing para probar diferentes algoritmos

**Respuesta correcta: D**

**Justificación:** Implementar un sistema de recomendaciones requiere múltiples técnicas: Collaborative Filtering que encuentra usuarios similares y recomienda basado en su comportamiento, Content-based que recomienda items similares a los que el usuario ha interactuado, Hybrid que combina ambos enfoques para mejores resultados, Machine Learning con modelos que mejoran con más datos, Real-time para actualizar recomendaciones según comportamiento reciente, caching de recomendaciones calculadas para mejorar performance, y A/B testing para probar diferentes algoritmos y encontrar el más efectivo. La combinación de estas técnicas produce mejores recomendaciones.

### 61. ¿Cómo manejarías la escalabilidad de una base de datos? (Selecciona todas las que apliquen)

**A)** Escalado vertical: Mejorar servidor (limitado)  
**B)** Escalado horizontal: Sharding (dividir datos por clave), Read replicas (distribuir lecturas), Partitioning  
**C)** Caching (Redis/Memcached), NoSQL si apropiado (MongoDB, Cassandra)  
**D)** Todas las anteriores (estrategia: empezar vertical, luego horizontal cuando sea necesario)

**Respuesta correcta: D**

**Justificación:** Manejar escalabilidad de base de datos requiere múltiples estrategias: Escalado vertical mejorando servidor (más RAM, CPU, SSD) pero limitado por hardware máximo, Escalado horizontal con sharding dividiendo datos por clave, read replicas para distribuir carga de lecturas, partitioning para dividir tablas grandes, caching con Redis/Memcached para reducir carga en database, y considerar NoSQL (MongoDB, Cassandra) si es apropiado para el caso de uso. La estrategia recomendada es empezar con escalado vertical y luego mover a horizontal cuando sea necesario. Todas estas técnicas son complementarias.

---

### 62. ¿Cómo diseñarías un sistema de analytics en tiempo real? (Selecciona todas las que apliquen)

**A)** Stream processing: Kafka, Kinesis para ingesta de datos  
**B)** Processing: Spark Streaming, Flink para procesamiento en tiempo real  
**C)** Storage: Time-series database (InfluxDB, TimescaleDB), agregaciones en tiempo real  
**D)** Todas las anteriores incluyendo visualización (dashboards en tiempo real con Grafana), procesamiento distribuido y objetivo de latencia baja

**Respuesta correcta: D**

**Justificación:** Diseñar analytics en tiempo real requiere: Stream processing con Kafka o Kinesis para ingesta de datos en tiempo real, processing con Spark Streaming o Flink para procesamiento distribuido de streams, storage en time-series database (InfluxDB, TimescaleDB) optimizada para datos temporales, agregaciones en tiempo real para métricas calculadas, visualización con dashboards en tiempo real (Grafana) para monitoreo, scaling con procesamiento distribuido para manejar grandes volúmenes, y objetivo de latencia baja para resultados casi instantáneos. Todos estos componentes trabajan juntos para analytics en tiempo real efectivo.

---

### 63. ¿Cómo implementarías un sistema de pagos seguro? (Selecciona todas las que apliquen)

**A)** PCI Compliance: Cumplir estándares de seguridad, Tokenization: No almacenar datos de tarjeta  
**B)** Encryption: Encriptación en tránsito y reposo, Payment gateway: Integrar con procesadores (Stripe, PayPal)  
**C)** Idempotency: Requests idempotentes, Audit logging: Log de todas las transacciones  
**D)** Todas las anteriores incluyendo fraud detection y testing en sandbox

**Respuesta correcta: D**

**Justificación:** Implementar un sistema de pagos seguro requiere cumplir estándares estrictos: PCI Compliance para cumplir regulaciones de seguridad de datos de tarjetas, Tokenization para no almacenar datos de tarjeta directamente (usar tokens), Encryption en tránsito (TLS) y reposo para proteger datos sensibles, Payment gateway integrando con procesadores profesionales (Stripe, PayPal) que manejan complejidad de PCI, Idempotency para requests idempotentes evitando cobros duplicados, Audit logging de todas las transacciones para compliance y debugging, Fraud detection para detectar transacciones sospechosas, y Testing en sandbox antes de producción. Todas estas prácticas son esenciales para seguridad.

---

### 64. ¿Cómo manejarías la internacionalización (i18n) en una aplicación? (Selecciona todas las que apliquen)

**A)** Translation files: JSON/YAML por idioma, Locale detection: Detectar idioma del usuario  
**B)** Date/number formatting según locale, RTL support para idiomas RTL, Pluralization  
**C)** Lazy loading de traducciones bajo demanda, Fallback a idioma por defecto  
**D)** Todas las anteriores usando herramientas como i18next o react-intl

**Respuesta correcta: D**

**Justificación:** Manejar internacionalización requiere múltiples componentes: Translation files (JSON/YAML) por idioma para almacenar traducciones, Locale detection para detectar automáticamente idioma del usuario, Date/number formatting según locale para mostrar formatos apropiados, RTL support para idiomas de derecha a izquierda (árabe, hebreo), Pluralization para manejar plurales correctamente según idioma, Lazy loading para cargar traducciones bajo demanda y reducir bundle inicial, Fallback a idioma por defecto si falta traducción, y herramientas como i18next o react-intl que facilitan implementación. Todos estos elementos son necesarios para i18n completo.

---

### 65. ¿Cómo diseñarías un sistema de CI/CD para múltiples equipos? (Selecciona todas las que apliquen)

**A)** Monorepo vs Multi-repo: Decidir según organización, Pipeline templates para reutilizar configuración  
**B)** Environments: Dev, Staging, Production, Approval gates para producción  
**C)** Feature flags para control de releases, Rollback automático y manual  
**D)** Todas las anteriores incluyendo monitoring de deployments y documentación de procesos

**Respuesta correcta: D**

**Justificación:** Diseñar CI/CD para múltiples equipos requiere consideraciones organizacionales: Decidir entre Monorepo (código centralizado) vs Multi-repo (repositorios separados) según estructura organizacional, Pipeline templates para reutilizar configuración y mantener consistencia, Environments separados (Dev, Staging, Production) para diferentes etapas, Approval gates para producción requiriendo aprobación antes de deploy, Feature flags para control granular de releases, Rollback tanto automático como manual para revertir cambios problemáticos, Monitoring de deployments para detectar problemas, y Documentación de procesos para que todos los equipos entiendan flujos. Todos estos elementos facilitan colaboración entre equipos.

### 66. ¿Cómo implementarías un sistema de versionado de API? (Selecciona todas las que apliquen)

**A)** URL versioning: /api/v1/, /api/v2/, Header versioning: Accept header con versión  
**B)** Backward compatibility: Mantener versiones anteriores, Deprecation: Avisar y deprecar gradualmente  
**C)** Documentation de cada versión, Migration guide para migrar entre versiones  
**D)** Todas las anteriores incluyendo Sunset policy para retiro de versiones

**Respuesta correcta: D**

**Justificación:** Implementar versionado de API requiere múltiples estrategias: URL versioning (/api/v1/, /api/v2/) es simple y explícito, Header versioning (Accept: application/vnd.api+json;version=1) mantiene URLs limpias, Backward compatibility manteniendo versiones anteriores funcionando, Deprecation avisando usuarios y deprecando gradualmente con tiempo suficiente, Documentation completa de cada versión, Migration guide ayudando clientes a migrar entre versiones, y Sunset policy definiendo cuándo y cómo retirar versiones antiguas. Todas estas prácticas facilitan evolución de API sin romper clientes existentes.

---

### 67. ¿Cómo manejarías la deuda técnica en un proyecto grande? (Selecciona todas las que apliquen)

**A)** Identificación: Inventario de deuda técnica, Priorización: Impacto vs esfuerzo  
**B)** Planning: Incluir en roadmap, Incremental: Refactorizar gradualmente  
**C)** Tests antes de refactorizar, Documentation de decisiones, Prevention con code reviews y estándares  
**D)** Todas las anteriores incluyendo métricas para medir reducción de deuda

**Respuesta correcta: D**

**Justificación:** Manejar deuda técnica requiere proceso sistemático: Identificación creando inventario de deuda técnica existente, Priorización evaluando impacto vs esfuerzo para enfocarse en lo más importante, Planning incluyendo deuda técnica en roadmap junto con features nuevas, Incremental refactorizando gradualmente sin big bang, Tests escribiendo tests antes de refactorizar para tener seguridad, Documentation de decisiones y razones, Prevention mediante code reviews y estándares para evitar nueva deuda, y Metrics midiendo reducción de deuda para demostrar progreso. Todos estos pasos son necesarios para gestión efectiva.

---

### 68. ¿Cómo diseñarías un sistema de monitoreo y alertas? (Selecciona todas las que apliquen)

**A)** Metrics: Prometheus para métricas, Logging: ELK stack para logs, Tracing: Jaeger/Zipkin  
**B)** Dashboards: Grafana para visualización, Alerting: Alertmanager, PagerDuty  
**C)** SLOs/SLIs: Service Level Objectives/Indicators, On-call: Rotación de on-call  
**D)** Todas las anteriores incluyendo Runbooks con documentación para incidentes

**Respuesta correcta: D**

**Justificación:** Diseñar monitoreo y alertas requiere tres pilares: Metrics con Prometheus para recolección de métricas, Logging con ELK stack (Elasticsearch, Logstash, Kibana) para agregación y búsqueda de logs, Tracing con Jaeger o Zipkin para distributed tracing, Dashboards con Grafana para visualización de métricas y logs, Alerting con Alertmanager y PagerDuty para notificaciones, SLOs/SLIs definiendo objetivos de servicio y indicadores, On-call con rotación para responder a incidentes, y Runbooks con documentación paso a paso para resolver incidentes comunes. Todos estos componentes son esenciales para observabilidad completa.

---

### 69. ¿Cómo implementarías un sistema de backup y disaster recovery? (Selecciona todas las que apliquen)

**A)** Backup strategy: Full backups periódicos, Incremental backups frecuentes, Off-site backups  
**B)** Recovery testing: Probar restauración regularmente, RTO/RPO: Recovery Time/Point Objectives  
**C)** Disaster recovery plan documentado, Automation: Backups automatizados  
**D)** Todas las anteriores incluyendo monitoring con alertas si backup falla y documentación de procedimientos

**Respuesta correcta: D**

**Justificación:** Implementar backup y disaster recovery requiere estrategia completa: Backup strategy con full backups periódicos para punto de partida completo, incremental backups frecuentes para eficiencia, y off-site backups para protección contra desastres locales, Recovery testing probando restauración regularmente para asegurar que funciona, RTO/RPO definiendo Recovery Time Objective (tiempo máximo de downtime) y Recovery Point Objective (pérdida máxima de datos aceptable), Disaster recovery plan documentado con procedimientos claros, Automation de backups para consistencia, Monitoring con alertas si backup falla, y Documentation de procedimientos para que cualquiera pueda ejecutar recovery. Todos estos elementos son críticos para resiliencia.

---

### 70. ¿Cómo optimizarías un sistema que tiene problemas de memoria? (Selecciona todas las que apliquen)

**A)** Profiling: Identificar memory leaks, Garbage collection: Optimizar GC settings  
**B)** Object pooling: Reutilizar objetos, Lazy loading: Cargar bajo demanda  
**C)** Caching strategy: Revisar estrategia de cache, Memory limits: Establecer límites apropiados  
**D)** Todas las anteriores incluyendo monitoring de uso de memoria y code review para encontrar leaks

**Respuesta correcta: D**

**Justificación:** Optimizar problemas de memoria requiere enfoque sistemático: Profiling usando herramientas para identificar memory leaks y uso excesivo, Garbage collection optimizando settings del GC según características de la aplicación, Object pooling reutilizando objetos en lugar de crear nuevos constantemente, Lazy loading cargando datos bajo demanda en lugar de todo al inicio, Caching strategy revisando si el cache está causando problemas de memoria, Memory limits estableciendo límites apropiados para prevenir OOM, Monitoring monitoreando uso de memoria continuamente, y Code review revisando código por patrones que causan leaks. Todas estas técnicas ayudan a resolver problemas de memoria.

### 71. ¿Cómo diseñarías un sistema de colas de trabajo asíncrono? (Selecciona todas las que apliquen)

**A)** Job queue: Redis, RabbitMQ, AWS SQS, Workers escalables  
**B)** Priority: Colas de prioridad, Retry: Reintentos con exponential backoff  
**C)** Dead letter queue para trabajos fallidos, Monitoring: Estado y tiempo de procesamiento  
**D)** Todas las anteriores incluyendo auto-scaling de workers y idempotency de trabajos

**Respuesta correcta: D**

**Justificación:** Diseñar colas de trabajo asíncrono requiere múltiples componentes: Job queue (Redis, RabbitMQ, AWS SQS) para almacenar trabajos, Workers escalables que procesan trabajos, Priority queues para trabajos urgentes, Retry logic con exponential backoff para manejar fallos temporales, Dead letter queue para trabajos fallidos que requieren atención, Monitoring de estado de trabajos y tiempo de procesamiento, Auto-scaling de workers según carga, y Idempotency para que trabajos puedan ejecutarse múltiples veces sin efectos secundarios. Todos estos elementos son esenciales para sistema robusto.

---

### 72. ¿Cómo manejarías la migración de un monolith a microservices? (Selecciona todas las que apliquen)

**A)** Strangler Fig Pattern: Reemplazar gradualmente, Identify boundaries: Identificar límites de dominio  
**B)** Extract services: Extraer servicios uno por uno, API Gateway: Punto de entrada único  
**C)** Database: Migrar datos gradualmente, Testing: Tests de integración entre servicios  
**D)** Todas las anteriores incluyendo monitoring durante migración y team structure con equipos por servicio

**Respuesta correcta: D**

**Justificación:** Migrar de monolith a microservices requiere estrategia cuidadosa: Strangler Fig Pattern reemplazando gradualmente partes del monolith, Identify boundaries identificando límites de dominio usando DDD, Extract services extrayendo servicios uno por uno empezando por los más independientes, API Gateway como punto de entrada único durante transición, Database migrando datos gradualmente sin downtime, Testing con tests de integración entre servicios para asegurar funcionamiento, Monitoring durante migración para detectar problemas, y Team structure organizando equipos por servicio (Conway's Law). Todos estos pasos reducen riesgo de migración.

---

### 73. ¿Cómo implementarías un sistema de rate limiting distribuido? (Selecciona todas las que apliquen)

**A)** Token bucket: Algoritmo de rate limiting, Distributed cache: Redis para estado compartido  
**B)** Sliding window: Ventana deslizante, Per user/IP: Límites por usuario o IP  
**C)** Tiers: Diferentes límites según plan, Headers: Informar límites al cliente  
**D)** Todas las anteriores incluyendo monitoring de métricas de rate limiting

**Respuesta correcta: D**

**Justificación:** Implementar rate limiting distribuido requiere: Token bucket algorithm que permite bursts controlados, Distributed cache (Redis) para estado compartido entre instancias, Sliding window para límites basados en tiempo, Per user/IP para límites individuales, Tiers con diferentes límites según plan del usuario (free, premium, etc.), Headers informando límites actuales al cliente (X-RateLimit-*), y Monitoring de métricas para entender uso y ajustar límites. Todos estos elementos permiten rate limiting efectivo en sistemas distribuidos.

---

### 74. ¿Cómo diseñarías un sistema de búsqueda de texto completo? (Selecciona todas las que apliquen)

**A)** Search engine: Elasticsearch, Solr, Indexing: Indexar contenido de múltiples fuentes  
**B)** Analyzers: Para diferentes idiomas, Ranking: Algoritmos de relevancia  
**C)** Faceted search: Filtros por categorías, Autocomplete: Sugerencias en tiempo real  
**D)** Todas las anteriores incluyendo Fuzzy search para errores de tipeo y Highlighting de términos encontrados

**Respuesta correcta: D**

**Justificación:** Diseñar búsqueda de texto completo requiere: Search engine profesional (Elasticsearch, Solr) con capacidades avanzadas, Indexing de contenido de múltiples fuentes para agregación, Analyzers para diferentes idiomas y casos de uso, Ranking algorithms para ordenar resultados por relevancia, Faceted search con filtros por categorías para refinamiento, Autocomplete con sugerencias en tiempo real para mejor UX, Fuzzy search para manejar errores de tipeo, y Highlighting para resaltar términos encontrados en resultados. Todos estos componentes mejoran efectividad de búsqueda.

---

### 75. ¿Cómo manejarías la sincronización de datos entre sistemas? (Selecciona todas las que apliquen)

**A)** ETL: Extract, Transform, Load, Change Data Capture: Detectar cambios  
**B)** Event-driven: Eventos para sincronización, Batch processing: Procesamiento por lotes  
**C)** Conflict resolution: Resolver conflictos, Idempotency: Operaciones idempotentes  
**D)** Todas las anteriores incluyendo monitoring de lag de sincronización y manejo robusto de errores

**Respuesta correcta: D**

**Justificación:** Manejar sincronización de datos requiere múltiples estrategias: ETL (Extract, Transform, Load) para migración inicial y sincronización periódica, Change Data Capture para detectar cambios incrementales eficientemente, Event-driven usando eventos para sincronización en tiempo real, Batch processing para sincronización periódica de grandes volúmenes, Conflict resolution para manejar conflictos cuando ambos sistemas modifican mismos datos, Idempotency para operaciones que pueden ejecutarse múltiples veces sin efectos secundarios, Monitoring de lag de sincronización para detectar problemas, y Error handling robusto para recuperarse de fallos. Todas estas técnicas son complementarias según necesidades.

### 76. ¿Cómo implementarías un sistema de logs centralizado? (Selecciona todas las que apliquen)

**A)** Log aggregation: Fluentd, Logstash, Storage: Elasticsearch, S3  
**B)** Visualization: Kibana, Grafana, Structured logging: JSON format  
**C)** Log levels: DEBUG, INFO, WARN, ERROR, Retention: Política de retención  
**D)** Todas las anteriores incluyendo búsqueda eficiente y alertas basadas en logs

**Respuesta correcta: D**

**Justificación:** Implementar logs centralizados requiere: Log aggregation con Fluentd o Logstash para recolectar logs de múltiples fuentes, Storage con Elasticsearch para búsqueda rápida o S3 para almacenamiento de largo plazo, Visualization con Kibana o Grafana para explorar y visualizar logs, Structured logging en formato JSON para parsing fácil, Log levels apropiados (DEBUG, INFO, WARN, ERROR) para filtrar, Retention policy para gestionar almacenamiento, Search eficiente para encontrar logs relevantes, y Alerting basado en patrones en logs. Todos estos componentes son esenciales para logging efectivo.

---

### 77. ¿Cómo diseñarías un sistema de autenticación multi-factor? (Selecciona todas las que apliquen)

**A)** Factors: Something you know (password), Something you have (phone, token), Something you are (biometric)  
**B)** TOTP: Time-based One-Time Password, SMS/Email: Códigos por SMS/email  
**C)** Backup codes: Códigos de respaldo, Recovery: Proceso de recuperación  
**D)** Todas las anteriores balanceando seguridad y usabilidad (UX)

**Respuesta correcta: D**

**Justificación:** Diseñar autenticación multi-factor requiere múltiples factores de autenticación: Something you know (password tradicional), Something you have (teléfono, token físico), Something you are (biométrico como huella, face ID). Implementación incluye: TOTP (Time-based One-Time Password) con apps como Google Authenticator, SMS/Email con códigos temporales, Backup codes para acceso cuando se pierde dispositivo, Recovery process para recuperar cuenta si se pierde acceso, y balance entre seguridad y usabilidad (UX) para no frustrar usuarios. Todos estos elementos mejoran seguridad significativamente.

---

### 78. ¿Cómo optimizarías un sistema de imágenes? (Selecciona todas las que apliquen)

**A)** CDN: Servir desde CDN, Format optimization: WebP, AVIF  
**B)** Responsive images: Diferentes tamaños, Lazy loading: Cargar cuando se necesita  
**C)** Compression apropiada, Caching agresivo, Processing: Resize/optimize on upload  
**D)** Todas las anteriores incluyendo almacenamiento eficiente

**Respuesta correcta: D**

**Justificación:** Optimizar sistema de imágenes requiere múltiples técnicas: CDN para servir imágenes desde ubicaciones cercanas reduciendo latencia, Format optimization usando WebP o AVIF que ofrecen mejor compresión que JPEG/PNG, Responsive images con diferentes tamaños según dispositivo, Lazy loading cargando imágenes cuando se necesitan, Compression apropiada balanceando calidad y tamaño, Caching agresivo para imágenes estáticas, Processing optimizando imágenes al subirlas (resize, compress), y Storage eficiente usando object storage escalable. La combinación de todas estas técnicas mejora significativamente performance y reduce costos de ancho de banda.

---

### 79. ¿Cómo implementarías un sistema de A/B testing? (Selecciona todas las que apliquen)

**A)** Feature flags: Para variantes, Traffic splitting: Dividir tráfico  
**B)** Metrics: Métricas a medir, Statistical significance: Validación estadística  
**C)** User segmentation: Segmentar usuarios, Analysis: Análisis de resultados  
**D)** Todas las anteriores incluyendo rollout gradual y herramientas como Optimizely o LaunchDarkly

**Respuesta correcta: D**

**Justificación:** Implementar A/B testing requiere: Feature flags para controlar variantes de experimento, Traffic splitting dividiendo tráfico entre variantes (ej: 50/50), Metrics definiendo qué medir (conversión, engagement, etc.), Statistical significance validando que diferencias no son por azar, User segmentation para probar con grupos específicos, Analysis analizando resultados para determinar ganador, Rollout gradual desplegando variante ganadora gradualmente, y Tools profesionales (Optimizely, LaunchDarkly) que facilitan implementación y análisis. Todos estos elementos son necesarios para A/B testing efectivo.

---

### 80. ¿Cómo manejarías la escalabilidad de un sistema de mensajería? (Selecciona todas las que apliquen)

**A)** Message broker: Kafka, RabbitMQ cluster, Partitioning: Partir mensajes  
**B)** Consumers: Múltiples consumers, Load balancing: Balancear carga  
**C)** Persistence: Persistir mensajes, Replication: Réplicas para disponibilidad  
**D)** Todas las anteriores incluyendo monitoring (queue depth, throughput) y auto-scaling según carga

**Respuesta correcta: D**

**Justificación:** Escalar sistema de mensajería requiere: Message broker en cluster (Kafka, RabbitMQ) para alta disponibilidad, Partitioning partiendo mensajes en múltiples particiones para paralelismo, Consumers múltiples procesando mensajes en paralelo, Load balancing distribuyendo carga entre consumers, Persistence guardando mensajes en disco para no perderlos, Replication con réplicas para alta disponibilidad, Monitoring de queue depth y throughput para detectar problemas, y Auto-scaling escalando consumers según carga. Todos estos elementos permiten manejar grandes volúmenes de mensajes.

### 81. ¿Cómo diseñarías un sistema de cache multi-nivel? (Selecciona todas las que apliquen)

**A)** L1: Cache en memoria de aplicación, L2: Cache distribuido (Redis), L3: CDN para assets estáticos  
**B)** Cache strategy: Cache-aside, Write-through, Write-behind  
**C)** Invalidation: Estrategia de invalidación, TTL: Time To Live apropiado  
**D)** Todas las anteriores incluyendo monitoring de hit rate y latency

**Respuesta correcta: D**

**Justificación:** Diseñar cache multi-nivel requiere múltiples capas: L1 cache en memoria de aplicación (más rápido, limitado), L2 cache distribuido con Redis (compartido entre instancias), L3 CDN para assets estáticos (más cercano a usuarios). Cache strategies incluyen: Cache-aside donde app verifica cache primero, Write-through escribiendo en cache y storage simultáneamente, Write-behind escribiendo en cache primero y luego storage. Además se necesita: Invalidation strategy para mantener consistencia, TTL apropiado según tipo de dato, y Monitoring de hit rate y latency para optimizar. Todos estos elementos trabajan juntos para caching efectivo.

---

### 82. ¿Cómo implementarías un sistema de auditoría? (Selecciona todas las que apliquen)

**A)** Event logging: Log de todos los eventos importantes, Immutable logs: Logs inmutables  
**B)** User tracking: Quién hizo qué, Timestamp: Cuándo ocurrió, Context: Contexto del evento  
**C)** Storage: Almacenamiento seguro y durable, Retention: Política de retención  
**D)** Todas las anteriores incluyendo búsqueda eficiente y cumplimiento de regulaciones (compliance)

**Respuesta correcta: D**

**Justificación:** Implementar sistema de auditoría requiere: Event logging registrando todos los eventos importantes (creaciones, modificaciones, eliminaciones), Immutable logs que no pueden modificarse para integridad, User tracking identificando quién hizo cada acción, Timestamp registrando cuándo ocurrió cada evento, Context capturando contexto completo del evento, Storage seguro y durable para preservar logs, Retention policy según regulaciones, Querying eficiente para buscar eventos específicos, y Compliance cumpliendo regulaciones como GDPR, SOX, HIPAA. Todos estos elementos son esenciales para auditoría efectiva.

---

### 83. ¿Cómo manejarías la migración de datos entre formatos? (Selecciona todas las que apliquen)

**A)** ETL pipeline: Extract, Transform, Load, Validation: Validar datos migrados  
**B)** Incremental: Migrar en batches, Rollback: Plan de rollback  
**C)** Testing: Probar en staging, Monitoring: Monitorear durante migración  
**D)** Todas las anteriores incluyendo verification de integridad y documentación del proceso

**Respuesta correcta: D**

**Justificación:** Migrar datos entre formatos requiere proceso cuidadoso: ETL pipeline extrayendo datos del formato origen, transformándolos al formato destino, y cargándolos, Validation validando datos migrados para asegurar calidad, Incremental migration en batches para reducir riesgo, Rollback plan preparado para revertir si es necesario, Testing exhaustivo en staging antes de producción, Monitoring durante migración para detectar problemas temprano, Verification verificando integridad de datos migrados, y Documentation documentando proceso completo para referencia futura. Todos estos pasos son críticos para migración exitosa.

---

### 84. ¿Cómo optimizarías un sistema de reportes? (Selecciona todas las que apliquen)

**A)** Pre-computation: Pre-calcular reportes, Caching: Cache de reportes generados  
**B)** Incremental updates: Actualizar incrementalmente, Materialized views: Vistas materializadas  
**C)** Async generation: Generar asíncronamente, Data warehouse: Usar data warehouse  
**D)** Todas las anteriores incluyendo scheduling de generación y compression de reportes grandes

**Respuesta correcta: D**

**Justificación:** Optimizar sistema de reportes requiere múltiples técnicas: Pre-computation pre-calculando reportes comunes para respuesta instantánea, Caching de reportes generados para reutilización, Incremental updates actualizando solo datos nuevos en lugar de recalcular todo, Materialized views en database para queries complejas pre-calculadas, Async generation generando reportes en background sin bloquear usuarios, Data warehouse optimizado para analytics en lugar de OLTP, Scheduling programando generación en horarios de baja carga, y Compression comprimiendo reportes grandes para reducir almacenamiento y transferencia. Todas estas técnicas mejoran performance y experiencia de usuario.

---

### 85. ¿Cómo diseñarías un sistema de configuración distribuido? (Selecciona todas las que apliquen)

**A)** Configuration service: Servicio centralizado, Versioning: Versionado de configuración  
**B)** Environment-specific: Config por ambiente, Hot reload: Recargar sin restart  
**C)** Validation: Validar configuración, Secrets management: Manejar secrets separadamente  
**D)** Todas las anteriores incluyendo fallback a valores por defecto y monitoring de cambios

**Respuesta correcta: D**

**Justificación:** Diseñar configuración distribuida requiere: Configuration service centralizado para gestión única, Versioning de configuración para rastrear cambios y rollback, Environment-specific config para dev/staging/prod, Hot reload para aplicar cambios sin restart de servicios, Validation validando configuración antes de aplicar, Secrets management separado de configuración regular para seguridad, Fallback a valores por defecto si configuración no está disponible, y Monitoring de cambios de configuración para detectar problemas. Todos estos elementos facilitan gestión de configuración en sistemas distribuidos.

### 86. ¿Cómo implementarías un sistema de health checks? (Selecciona todas las que apliquen)

**A)** Health endpoints: /health, /ready, /live, Dependencies: Verificar dependencias  
**B)** Database: Verificar conexión a BD, External services: Verificar servicios externos  
**C)** Resource checks: CPU, memoria, disco, Kubernetes: Liveness y readiness probes  
**D)** Todas las anteriores incluyendo monitoring con alertas si falla y load balancer removiendo instancias unhealthy

**Respuesta correcta: D**

**Justificación:** Implementar health checks requiere múltiples niveles: Health endpoints (/health para estado general, /ready para readiness, /live para liveness), Dependencies verificando que dependencias críticas están disponibles, Database verificando conexión a base de datos, External services verificando servicios externos necesarios, Resource checks monitoreando CPU, memoria y disco, Kubernetes probes (liveness y readiness) para orquestación automática, Monitoring con alertas cuando health checks fallan, y Load balancer removiendo automáticamente instancias unhealthy del pool. Todos estos elementos aseguran que solo instancias saludables reciben tráfico.

---

### 87. ¿Cómo manejarías la consistencia eventual en un sistema distribuido? (Selecciona todas las que apliquen)

**A)** Accept eventual consistency: Aceptar como trade-off necesario  
**B)** Conflict resolution: Last-write-wins, Application-level, Vector clocks  
**C)** Compensating actions: Acciones compensatorias, Idempotency: Operaciones idempotentes  
**D)** Todas las anteriores incluyendo versioning para detectar conflictos, manejar UX durante inconsistencia y monitoring para detectar inconsistencias

**Respuesta correcta: D**

**Justificación:** Manejar consistencia eventual requiere aceptar trade-offs: Accept eventual consistency como trade-off necesario para escalabilidad, Conflict resolution con estrategias como Last-write-wins (simple), Application-level (lógica de negocio), o Vector clocks (orden causal), Compensating actions para corregir inconsistencias cuando se detectan, Idempotency para operaciones que pueden ejecutarse múltiples veces, Versioning para detectar conflictos mediante versiones de datos, User experience manejando UX durante períodos de inconsistencia (mostrar "sincronizando"), y Monitoring detectando y alertando sobre inconsistencias. Todos estos elementos ayudan a manejar consistencia eventual efectivamente.

---

### 88. ¿Cómo diseñarías un sistema de file storage escalable? (Selecciona todas las que apliquen)

**A)** Object storage: S3, Azure Blob, GCS, CDN: Para distribución  
**B)** Replication: Réplicas geográficas, Versioning: Versionado de archivos  
**C)** Access control: Control de acceso, Lifecycle policies: Políticas de ciclo de vida  
**D)** Todas las anteriores incluyendo backup de archivos críticos y monitoring de uso de almacenamiento

**Respuesta correcta: D**

**Justificación:** Diseñar file storage escalable requiere: Object storage (S3, Azure Blob, GCS) que escala automáticamente, CDN para distribución geográfica reduciendo latencia, Replication con réplicas geográficas para disponibilidad, Versioning para mantener historial de archivos, Access control con permisos granulares, Lifecycle policies para mover archivos a storage más barato automáticamente, Backup de archivos críticos para protección, y Monitoring de uso de almacenamiento para optimizar costos. Todos estos elementos permiten storage escalable y eficiente.

---

### 89. ¿Cómo implementarías un sistema de búsqueda geográfica? (Selecciona todas las que apliquen)

**A)** Geospatial database: PostGIS, MongoDB geospatial, Indexing: Índices geoespaciales  
**B)** Queries: Near me, Within radius, Bounding box  
**C)** Distance calculation: Haversine, etc., Caching: Cache de resultados  
**D)** Todas las anteriores incluyendo sharding geográfico y herramientas como Elasticsearch geo queries

**Respuesta correcta: D**

**Justificación:** Implementar búsqueda geográfica requiere: Geospatial database (PostGIS para PostgreSQL, MongoDB geospatial) con soporte nativo para datos geoespaciales, Indexing con índices geoespaciales para queries eficientes, Queries comunes (Near me, Within radius, Bounding box), Distance calculation usando fórmulas como Haversine para calcular distancias, Caching de resultados frecuentes para mejorar performance, Scaling con sharding geográfico dividiendo datos por región, y Tools como Elasticsearch geo queries para búsqueda avanzada. Todos estos elementos permiten búsqueda geográfica eficiente y escalable.

---

### 90. ¿Cómo manejarías la migración de una base de datos sin downtime? (Selecciona todas las que apliquen)

**A)** Dual write: Escribir en ambos sistemas, Read from both: Leer de ambos durante transición  
**B)** Data sync: Sincronizar datos, Gradual cutover: Cambio gradual de tráfico  
**C)** Monitoring: Monitorear ambos sistemas, Rollback plan: Plan de rollback  
**D)** Todas las anteriores incluyendo testing extensivo y verification de integridad de datos

**Respuesta correcta: D**

**Justificación:** Migrar base de datos sin downtime requiere estrategia cuidadosa: Dual write escribiendo en ambos sistemas (antiguo y nuevo) durante transición, Read from both leyendo de ambos sistemas para validación, Data sync sincronizando datos continuamente para mantener consistencia, Gradual cutover cambiando tráfico gradualmente (ej: 10%, 50%, 100%), Monitoring monitoreando ambos sistemas para detectar problemas, Rollback plan preparado para revertir si es necesario, Testing extensivo probando migración en staging primero, y Verification verificando integridad de datos migrados. Todos estos pasos son críticos para migración sin downtime exitosa.

### 91. ¿Cómo diseñarías un sistema de machine learning en producción? (Selecciona todas las que apliquen)

**A)** Model serving: Servir modelos (TensorFlow Serving, MLflow), Feature store: Almacén de features  
**B)** A/B testing: Probar modelos, Monitoring: Model drift, Prediction latency, Accuracy  
**C)** Retraining: Re-entrenar modelos, Versioning: Versionado de modelos  
**D)** Todas las anteriores incluyendo CI/CD pipeline para ML e infrastructure con GPU/TPU cuando necesario

**Respuesta correcta: D**

**Justificación:** Diseñar ML en producción requiere consideraciones especiales: Model serving con TensorFlow Serving o MLflow para servir modelos eficientemente, Feature store para almacenar y versionar features consistentemente, A/B testing para comparar modelos en producción, Monitoring de model drift (cuando modelo se vuelve menos efectivo), prediction latency, y accuracy, Retraining periódico para mantener modelos actualizados, Versioning de modelos para rollback si es necesario, CI/CD pipeline específico para ML (MLOps), e Infrastructure con GPU/TPU cuando sea necesario para entrenamiento o inferencia. Todos estos elementos son esenciales para ML en producción.

---

### 92. ¿Cómo implementarías un sistema de real-time collaboration? (Selecciona todas las que apliquen)

**A)** WebSockets: Comunicación bidireccional, Operational Transform: Para conflict resolution  
**B)** CRDTs: Conflict-free Replicated Data Types, Presence: Mostrar usuarios online  
**C)** Conflict resolution: Resolver conflictos, Scaling: Múltiples servidores  
**D)** Todas las anteriores incluyendo persistence para guardar cambios y herramientas como ShareJS, Yjs, Firebase Realtime Database

**Respuesta correcta: D**

**Justificación:** Implementar real-time collaboration requiere: WebSockets para comunicación bidireccional en tiempo real, Operational Transform para resolver conflictos cuando múltiples usuarios editan simultáneamente, CRDTs (Conflict-free Replicated Data Types) como alternativa más simple que OT, Presence mostrando qué usuarios están online y dónde están editando, Conflict resolution para manejar ediciones simultáneas, Scaling con múltiples servidores para manejar muchos usuarios, Persistence guardando cambios para no perder trabajo, y Tools como ShareJS, Yjs, o Firebase Realtime Database que facilitan implementación. Todos estos elementos permiten colaboración en tiempo real efectiva.

---

### 93. ¿Cómo manejarías la seguridad de una API pública? (Selecciona todas las que apliquen)

**A)** Authentication: API keys, OAuth2, Rate limiting: Por API key/IP  
**B)** HTTPS: Obligatorio, Input validation: Validar toda entrada, Output sanitization: Sanitizar salida  
**C)** CORS: Configurar apropiadamente, WAF: Web Application Firewall  
**D)** Todas las anteriores incluyendo monitoring para detectar ataques y documentación de seguridad

**Respuesta correcta: D**

**Justificación:** Manejar seguridad de API pública requiere múltiples capas: Authentication con API keys o OAuth2 para identificar usuarios, Rate limiting por API key o IP para prevenir abuso, HTTPS obligatorio para encriptación en tránsito, Input validation validando toda entrada para prevenir injection attacks, Output sanitization sanitizando salida para prevenir XSS, CORS configurado apropiadamente para controlar acceso cross-origin, WAF (Web Application Firewall) para filtrar requests maliciosos, Monitoring para detectar ataques y patrones sospechosos, y Documentation de seguridad para que desarrolladores sepan cómo usar API de forma segura. Todas estas prácticas son esenciales para API pública segura.

---

### 94. ¿Cómo diseñarías un sistema de content delivery? (Selecciona todas las que apliquen)

**A)** CDN: Content Delivery Network, Edge caching: Cache en edge, Origin server: Servidor origen  
**B)** Cache invalidation: Invalidar cache, Compression: Comprimir contenido  
**C)** HTTP/2: Para mejor performance, Geographic distribution: Distribución geográfica  
**D)** Todas las anteriores incluyendo monitoring de performance de CDN

**Respuesta correcta: D**

**Justificación:** Diseñar content delivery requiere: CDN (Content Delivery Network) para distribuir contenido geográficamente, Edge caching cacheando contenido en edge servers cercanos a usuarios, Origin server como fuente de verdad para contenido, Cache invalidation para actualizar contenido cuando cambia, Compression comprimiendo contenido para reducir ancho de banda, HTTP/2 para mejor performance con multiplexing, Geographic distribution distribuyendo contenido en múltiples ubicaciones, y Monitoring de performance de CDN para optimizar. Todos estos elementos mejoran velocidad de entrega de contenido.

---

### 95. ¿Cómo implementarías un sistema de workflow automation? (Selecciona todas las que apliquen)

**A)** Workflow engine: Orquestador de workflows, State machine: Máquina de estados  
**B)** Tasks: Tareas del workflow, Retry: Reintentos automáticos, Error handling: Manejo de errores  
**C)** Monitoring: Estado de workflows, Scaling: Escalar workers  
**D)** Todas las anteriores usando herramientas como Temporal, AWS Step Functions, Airflow

**Respuesta correcta: D**

**Justificación:** Implementar workflow automation requiere: Workflow engine que orquesta ejecución de workflows, State machine definiendo estados y transiciones del workflow, Tasks representando pasos individuales del workflow, Retry automático para manejar fallos temporales, Error handling robusto para manejar errores, Monitoring del estado de workflows para debugging, Scaling escalando workers según carga, y Tools profesionales como Temporal (workflows distribuidos), AWS Step Functions (serverless workflows), o Airflow (data pipelines). Todos estos elementos permiten automatización de procesos complejos.

---

### 96. ¿Cómo manejarías la migración de un sistema legacy a cloud? (Selecciona todas las que apliquen)

**A)** Assessment: Evaluar sistema actual, Strategy: Lift and shift, Refactor, Rebuild  
**B)** Incremental: Migrar gradualmente, Hybrid: Híbrido durante transición  
**C)** Testing: Probar en cloud, Training: Entrenar equipo  
**D)** Todas las anteriores incluyendo cost optimization y revisión de seguridad

**Respuesta correcta: D**

**Justificación:** Migrar sistema legacy a cloud requiere planificación: Assessment evaluando sistema actual (dependencias, requisitos, complejidad), Strategy eligiendo entre Lift and shift (mover sin cambios), Refactor (adaptar para cloud), o Rebuild (reconstruir desde cero), Incremental migration migrando gradualmente para reducir riesgo, Hybrid approach manteniendo híbrido durante transición, Testing extensivo probando en cloud antes de cutover, Training del equipo en tecnologías cloud, Cost optimization optimizando costos de cloud, y Security revisando seguridad en nuevo ambiente. Todos estos pasos son importantes para migración exitosa.

---

### 97. ¿Cómo diseñarías un sistema de data pipeline? (Selecciona todas las que apliquen)

**A)** Ingestion: Kafka, Kinesis para ingesta, Processing: Spark, Flink para procesamiento  
**B)** Storage: Data lake, data warehouse, Orchestration: Airflow, Prefect  
**C)** Monitoring: Monitoreo de pipeline, Error handling: Manejo de errores  
**D)** Todas las anteriores incluyendo scaling según carga y validación de calidad de datos

**Respuesta correcta: D**

**Justificación:** Diseñar data pipeline requiere múltiples componentes: Ingestion con Kafka o Kinesis para ingesta de datos en tiempo real o batch, Processing con Spark o Flink para procesamiento distribuido de datos, Storage con data lake (raw data) y data warehouse (procesado), Orchestration con Airflow o Prefect para orquestar pipelines complejos, Monitoring monitoreando salud y performance del pipeline, Error handling robusto para recuperarse de fallos, Scaling escalando según carga de datos, y Data quality validando calidad de datos en cada etapa. Todos estos elementos son esenciales para pipeline robusto.

---

### 98. ¿Cómo implementarías un sistema de service mesh? (Selecciona todas las que apliquen)

**A)** Service mesh: Istio, Linkerd, Sidecar proxy: Proxy junto a cada servicio  
**B)** Traffic management: Gestión de tráfico, Security: mTLS entre servicios  
**C)** Observability: Métricas, logs, tracing, Policy enforcement: Políticas de seguridad  
**D)** Todas las anteriores incluyendo circuit breaking y load balancing

**Respuesta correcta: D**

**Justificación:** Implementar service mesh requiere: Service mesh (Istio, Linkerd) que gestiona comunicación entre servicios, Sidecar proxy desplegado junto a cada servicio manejando tráfico, Traffic management con routing, load balancing, y canary deployments, Security con mTLS (Mutual TLS) entre servicios para autenticación mutua, Observability agregando métricas, logs y tracing automáticamente, Policy enforcement aplicando políticas de seguridad y acceso, Circuit breaking para resiliencia ante fallos, y Load balancing distribuyendo tráfico. Todos estos elementos facilitan gestión de microservices.

---

### 99. ¿Cómo manejarías la optimización de costos en cloud? (Selecciona todas las que apliquen)

**A)** Right-sizing: Tamaño apropiado de recursos, Reserved instances: Instancias reservadas  
**B)** Spot instances: Instancias spot cuando apropiado, Auto-scaling: Escalar según necesidad  
**C)** Monitoring: Monitorear costos, Tagging: Etiquetar recursos  
**D)** Todas las anteriores incluyendo cost allocation y herramientas de optimización como AWS Cost Explorer

**Respuesta correcta: D**

**Justificación:** Optimizar costos en cloud requiere múltiples estrategias: Right-sizing eligiendo tamaño apropiado de recursos (no más grande de lo necesario), Reserved instances comprometiéndose a largo plazo para descuentos, Spot instances usando instancias spot para workloads tolerantes a interrupciones, Auto-scaling escalando según necesidad real evitando recursos ociosos, Monitoring monitoreando costos continuamente, Tagging etiquetando recursos para tracking y asignación, Cost allocation asignando costos a departamentos/proyectos, y Optimization tools como AWS Cost Explorer para identificar oportunidades. Todas estas prácticas reducen costos significativamente.

---

### 100. ¿Cómo diseñarías un sistema de zero-downtime deployment? (Selecciona todas las que apliquen)

**A)** Blue-Green deployment: Dos ambientes idénticos, Canary deployment: Despliegue gradual  
**B)** Health checks: Verificar salud antes de cambiar tráfico, Load balancer: Cambiar tráfico gradualmente  
**C)** Database migrations: Migraciones compatibles hacia atrás, Feature flags: Control de features  
**D)** Todas las anteriores incluyendo rollback rápido si hay problemas, monitoring durante deploy y testing extensivo antes

**Respuesta correcta: D**

**Justificación:** Diseñar zero-downtime deployment requiere múltiples técnicas: Blue-Green deployment con dos ambientes idénticos cambiando tráfico instantáneamente, Canary deployment desplegando gradualmente a porcentaje pequeño primero, Health checks verificando que nueva versión está saludable antes de cambiar tráfico, Load balancer cambiando tráfico gradualmente (ej: 10%, 50%, 100%), Database migrations compatibles hacia atrás para permitir rollback, Feature flags para control granular de features, Rollback rápido si hay problemas detectados, Monitoring durante deploy para detectar issues temprano, y Testing extensivo antes de producción. Todos estos elementos son necesarios para deployments sin downtime.

---

**Nota**: Estas 100 preguntas cubren todos los temas específicos de Senior Software Engineer, enfocándose en experiencia práctica, arquitectura avanzada y optimización de sistemas complejos. Estudia cada respuesta en detalle y practica con casos reales. ¡Éxito en tu examen!
