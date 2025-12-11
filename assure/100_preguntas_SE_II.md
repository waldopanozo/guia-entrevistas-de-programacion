# 100 Preguntas y Respuestas - Software Engineer II
## Formato: Opciones Múltiples con Justificaciones

---

## Agile Software Development

### 1. ¿Qué es Kanban y cuáles son sus principios fundamentales?

**A)** Solo una metodología de visualización de trabajo  
**B)** Metodología ágil basada en visualización del flujo de trabajo con límites WIP  
**C)** Una versión simplificada de Scrum  
**D)** Todas las anteriores

**Respuesta correcta: B**

**Justificación:** Kanban es una metodología ágil completa que se basa en visualizar el trabajo mediante tableros, limitar el trabajo en progreso (WIP limits), gestionar el flujo, hacer políticas explícitas, mejorar colaborativamente y evolucionar experimentalmente. No es solo visualización ni una versión simplificada de Scrum, sino una metodología independiente con sus propios principios.

---

### 2. ¿Cuál es la diferencia principal entre Scrum y Kanban?

**A)** Scrum usa sprints fijos, Kanban usa flujo continuo  
**B)** Scrum tiene roles definidos, Kanban no tiene roles fijos  
**C)** Ambos son metodologías ágiles pero con enfoques diferentes  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** Todas las opciones son correctas. Scrum trabaja en sprints fijos (1-4 semanas) con roles definidos (Product Owner, Scrum Master, Development Team) y eventos estructurados. Kanban usa flujo continuo sin sprints, sin roles fijos, eventos opcionales y planificación bajo demanda. Ambas son metodologías ágiles válidas con enfoques diferentes según las necesidades del equipo.

---

### 3. ¿Qué son los WIP limits en Kanban y por qué son importantes?

**A)** Límites del número de tareas en cada columna del tablero  
**B)** Previenen sobrecarga del equipo e identifican cuellos de botella  
**C)** Mejoran el flujo de trabajo y aumentan el throughput  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** Los WIP (Work In Progress) limits son límites del número de tareas que pueden estar en cada columna del tablero Kanban. Son importantes porque previenen sobrecarga del equipo, identifican cuellos de botella, mejoran el flujo de trabajo, reducen multitasking y aumentan el throughput. Todas las opciones describen correctamente los WIP limits y sus beneficios.

---

### 4. ¿Cuáles son las ventajas principales de Continuous Integration? (Selecciona todas las que apliquen)

**A)** Detección temprana de errores  
**B)** Reducción de conflictos de merge  
**C)** Mejora de calidad del código  
**D)** Feedback rápido al desarrollador  
**E)** Todas las anteriores

**Respuesta correcta: E**

**Justificación:** Todas las opciones son ventajas de CI. La integración continua permite detectar errores antes de llegar a producción, reduce conflictos mediante integración frecuente, mejora la calidad con tests automatizados, proporciona feedback rápido y hace los despliegues más confiables. CI es fundamental para desarrollo ágil moderno.

---

### 5. ¿Cuáles son los principales retos de implementar CI/CD? (Selecciona todas las que apliquen)

**A)** Configuración inicial compleja  
**B)** Mantenimiento de tests  
**C)** Cambio cultural del equipo  
**D)** Costo de infraestructura  
**E)** Todas las anteriores

**Respuesta correcta: E**

**Justificación:** Implementar CI/CD presenta varios retos: requiere configuración inicial compleja y conocimiento técnico, los tests deben mantenerse actualizados, necesita cambio cultural y disciplina del equipo, puede ser costoso en infraestructura, requiere curva de aprendizaje y puede encontrar resistencia al cambio. Todos estos son retos reales que deben considerarse.

---

### 6. ¿Qué elementos son esenciales en un pipeline de CI? (Selecciona todas las que apliquen)

**A)** Repositorio de código fuente  
**B)** Build automatizado  
**C)** Suite de tests automatizados  
**D)** Notificaciones de estado  
**E)** Todas las anteriores

**Respuesta correcta: E**

**Justificación:** Un pipeline de CI completo requiere: repositorio de código fuente conectado, build automatizado, suite de tests (unit, integration), análisis estático de código, notificaciones de estado, artefactos generados e integración con herramientas de despliegue. Todos estos elementos son esenciales para un CI efectivo.

---

### 7. ¿Cuáles son los beneficios de Continuous Delivery?

**A)** Reducción de tiempo de entrega  
**B)** Menor riesgo en despliegues  
**C)** Feedback rápido del cliente  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** Continuous Delivery ofrece múltiples beneficios: reduce tiempo de entrega (de semanas a horas), menor riesgo mediante despliegues pequeños y frecuentes, feedback rápido del cliente, capacidad de desplegar en cualquier momento, rollback más fácil y mayor confianza del equipo. Todos estos beneficios están relacionados.

---

### 8. ¿Qué es el flujo de trabajo en Kanban?

**A)** Movimiento de tareas desde "To Do" hasta "Done"  
**B)** Optimización del flujo para movimiento suave sin bloqueos  
**C)** Columnas típicas: Backlog, In Progress, Review, Done  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** El flujo de trabajo en Kanban es el movimiento de tareas a través de columnas (típicamente Backlog/To Do, In Progress/Doing, Review/Testing, Done). El objetivo es optimizar este flujo para que las tareas se muevan suavemente sin bloqueos, identificando y eliminando cuellos de botella para mejorar el throughput del equipo.

---

## Databases

### 9. ¿Qué es DDL y cuáles son sus comandos principales?

**A)** Data Definition Language que define estructura de BD  
**B)** CREATE, ALTER, DROP, TRUNCATE  
**C)** Solo CREATE y DROP  
**D)** A y B son correctas

**Respuesta correcta: D**

**Justificación:** DDL (Data Definition Language) define la estructura de la base de datos. Sus comandos principales son CREATE (crear objetos), ALTER (modificar estructura), DROP (eliminar objetos), TRUNCATE (vaciar tabla) y RENAME. CREATE y DROP son parte de DDL pero no los únicos comandos, por lo que la opción C es incompleta.

---

### 10. ¿Qué es DCL y para qué se usa?

**A)** Data Control Language para controlar acceso  
**B)** GRANT y REVOKE para permisos  
**C)** Solo para otorgar permisos  
**D)** A y B son correctas

**Respuesta correcta: D**

**Justificación:** DCL (Data Control Language) controla el acceso a la base de datos mediante comandos GRANT (otorgar permisos) y REVOKE (revocar permisos). Se usa para gestionar seguridad y permisos de usuarios y roles. La opción C es incorrecta porque DCL también revoca permisos, no solo los otorga.

---

### 11. ¿Qué es SCL y cuándo se usa?

**A)** Session Control Language para controlar sesión  
**B)** ALTER SESSION y SET para configuración  
**C)** Solo para modificar timezone  
**D)** A y B son correctas

**Respuesta correcta: D**

**Justificación:** SCL (Session Control Language) controla la sesión de base de datos mediante comandos como ALTER SESSION (modificar parámetros de sesión) y SET (configurar variables). Se usa para controlar comportamiento de la sesión actual, incluyendo pero no limitado a timezone, formato de fecha, etc. La opción C es demasiado restrictiva.

---

### 12. ¿Cuándo usarías una base de datos NoSQL en lugar de SQL? (Selecciona todas las que apliquen)

**A)** Datos no estructurados o semi-estructurados  
**B)** Necesitas escalabilidad horizontal masiva  
**C)** Alta velocidad de escritura requerida  
**D)** Esquema flexible que cambia frecuentemente  
**E)** Todas las anteriores

**Respuesta correcta: E**

**Justificación:** NoSQL es apropiado cuando: tienes datos no estructurados, necesitas escalabilidad horizontal masiva, requieres alta velocidad de escritura, el esquema es flexible, manejas Big Data, o tienes aplicaciones distribuidas. Todos estos casos son válidos para considerar NoSQL sobre SQL relacional.

---

### 13. ¿Cuáles son los tipos de bases de datos NoSQL y sus casos de uso?

**A)** Documentos (MongoDB) para contenido y catálogos  
**B)** Clave-Valor (Redis) para cache y sesiones  
**C)** Columnas (Cassandra) para análisis y time-series  
**D)** Grafos (Neo4j) para redes sociales y recomendaciones  
**E)** Todas las anteriores

**Respuesta correcta: E**

**Justificación:** Cada tipo de NoSQL tiene casos de uso específicos: Documentos para contenido estructurado flexible, Clave-Valor para cache y datos simples, Columnas para análisis de grandes volúmenes, y Grafos para relaciones complejas. Todos son tipos válidos de NoSQL con casos de uso apropiados.

---

### 14. ¿Cuáles son las ventajas y desventajas de NoSQL?

**A)** Ventajas: Escalabilidad horizontal, flexibilidad de esquema  
**B)** Desventajas: Menos consistencia, curva de aprendizaje  
**C)** Ventajas: Alto rendimiento, mejor para datos no estructurados  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** NoSQL tiene ventajas (escalabilidad horizontal, flexibilidad de esquema, alto rendimiento, mejor para datos no estructurados) y desventajas (menos consistencia eventual, curva de aprendizaje, menos herramientas maduras, no hay JOINs, menos estándares). Todas las opciones describen correctamente aspectos de NoSQL.

---

### 15. ¿Qué es Table Partitioning y cuándo usarlo?

**A)** Dividir tabla grande en partes más pequeñas  
**B)** Cuando tabla tiene millones de filas  
**C)** Para mejorar rendimiento en consultas con filtros por rango  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** Table Partitioning divide una tabla grande en partes más pequeñas (particiones). Se usa cuando la tabla tiene millones de filas, las consultas filtran por rango de fechas o valores, necesitas mejor rendimiento, o facilitar mantenimiento (eliminar particiones antiguas). Todos estos son casos válidos para particionamiento.

---

### 16. ¿Cómo revisarías un problema de rendimiento en una consulta SQL? (Selecciona todas las que apliquen)

**A)** Ejecutar EXPLAIN o EXPLAIN ANALYZE  
**B)** Identificar table scans y operaciones costosas  
**C)** Crear índices apropiados  
**D)** Optimizar JOINs y reescribir consulta si es necesario  
**E)** Todas las anteriores

**Respuesta correcta: E**

**Justificación:** Para revisar problemas de rendimiento: ejecutar EXPLAIN para ver execution plan, identificar table scans y operaciones costosas, crear índices apropiados, optimizar JOINs, considerar particionamiento, actualizar estadísticas y reescribir consulta si es necesario. Todos estos pasos son parte del proceso de optimización.

---

### 17. ¿Qué buenas prácticas seguirías al crear un modelo de base de datos? (Selecciona todas las que apliquen)

**A)** Aplicar normalización hasta 3NF  
**B)** Definir claves primarias y foráneas apropiadas  
**C)** Crear índices en columnas frecuentemente consultadas  
**D)** Usar tipos de datos apropiados  
**E)** Todas las anteriores

**Respuesta correcta: E**

**Justificación:** Buenas prácticas incluyen: normalización apropiada, claves primarias y foráneas bien definidas, índices en columnas consultadas frecuentemente, tipos de datos apropiados, evitar valores NULL cuando sea posible, documentar el modelo, considerar particionamiento y planificar para escalabilidad. Todas son prácticas importantes.

---

## Object Oriented Programming

### 18. ¿Cómo refactorizarías código para cumplir el Single Responsibility Principle?

**A)** Identificar responsabilidades múltiples en una clase  
**B)** Extraer cada responsabilidad a clase separada  
**C)** Usar composición en lugar de hacer todo en una clase  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** Para cumplir SRP: identificar responsabilidades múltiples, extraer cada responsabilidad a clase separada, usar composición, y separar concerns (ej: User de UserValidator de UserRepository). El principio establece que una clase debe tener una sola razón para cambiar, lo que requiere separación clara de responsabilidades.

---

### 19. ¿Cómo aplicarías el Open/Closed Principle en código existente?

**A)** Usar herencia o composición para extender funcionalidad  
**B)** Crear interfaces/abstracciones para puntos de extensión  
**C)** Usar Strategy pattern para algoritmos intercambiables  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** Open/Closed Principle significa abierto a extensión, cerrado a modificación. Se logra mediante: herencia o composición, interfaces/abstracciones para extensión, Strategy pattern para algoritmos intercambiables, y evitando modificar clases existentes. El objetivo es extender funcionalidad sin romper código existente.

---

### 20. ¿Qué patrón usarías para resolver el problema de múltiples if/else basados en tipo?

**A)** Strategy Pattern  
**B)** Factory Pattern  
**C)** Ambos pueden resolver el problema  
**D)** Ninguno de los anteriores

**Respuesta correcta: C**

**Justificación:** Tanto Strategy como Factory pueden resolver este problema. Strategy encapsula cada algoritmo en clase separada, Factory crea objetos según tipo. La elección depende del contexto: Strategy si los algoritmos son intercambiables en runtime, Factory si la creación es el problema principal. Ambos eliminan múltiples if/else.

---

### 21. ¿Cómo identificarías un antipatrón "God Object" y cómo lo resolverías?

**A)** Clase con muchos métodos (50+), múltiples razones para cambiar  
**B)** Aplicar Single Responsibility Principle  
**C)** Dividir en clases más pequeñas y cohesivas  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** God Object es clase que hace demasiado. Se identifica por muchos métodos, múltiples responsabilidades, dependencias de muchas clases. Se resuelve aplicando SRP, dividiendo en clases pequeñas y cohesivas, usando composición, y extrayendo funcionalidad relacionada. Todas las opciones son parte del proceso de resolución.

---

### 22. ¿Qué es el patrón Factory y cuándo usarlo?

**A)** Crea objetos sin especificar clase exacta  
**B)** Cuando no conoces tipo exacto hasta runtime  
**C)** Para desacoplar creación de uso  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** Factory Pattern crea objetos sin especificar clase exacta. Se usa cuando: no conoces tipo hasta runtime, quieres desacoplar creación de uso, tienes lógica compleja de creación, o quieres centralizar creación. Ejemplo: PaymentFactory.createPayment(type) retorna implementación apropiada según tipo.

---

### 23. ¿Qué es el patrón Observer y cómo lo implementarías?

**A)** Permite que objetos se suscriban a eventos  
**B)** Subject mantiene lista de observers y notifica cambios  
**C)** Observer tiene interfaz con método update()  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** Observer Pattern permite que objetos se suscriban a eventos. Implementación: Subject mantiene lista de observers y notifica cambios, Observer tiene interfaz con método update(), ConcreteObserver implementa Observer. Se usa para sistemas de notificaciones, Model-View en MVC, y event-driven architecture.

---

### 24. ¿Cómo identificarías y resolverías el antipatrón "Spaghetti Code"?

**A)** Código desorganizado, flujo difícil de seguir  
**B)** Refactorizar en funciones/métodos pequeños  
**C)** Aplicar principios SOLID y mejorar nombres  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** Spaghetti Code es código desorganizado difícil de seguir. Se identifica por flujo de control confuso, goto statements o equivalentes, código sin estructura. Se resuelve refactorizando en funciones pequeñas, aplicando SOLID, mejorando nombres, extrayendo lógica compleja y aplicando design patterns apropiados.

---

### 25. ¿Qué es el patrón Adapter y cuándo usarlo?

**A)** Permite que interfaces incompatibles trabajen juntas  
**B)** Integrar código legacy con nuevo código  
**C)** Adaptar API externa a tu código  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** Adapter Pattern permite que interfaces incompatibles trabajen juntas. Se usa para: integrar código legacy, usar librería externa con interfaz diferente, adaptar API externa, o hacer compatible código incompatible. Ejemplo: adaptar API de pago antigua a nueva interfaz de pago.

---

## Source Control Management (Git)

### 26. ¿Cuál es la diferencia entre `git merge` y `git rebase`?

**A)** merge crea commit de merge, rebase reaplica commits  
**B)** merge preserva historia completa, rebase crea historia lineal  
**C)** No hacer rebase de commits ya pusheados a repo compartido  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** merge crea commit de merge preservando historia completa (incluye ramas), mientras rebase reaplica commits sobre otra rama creando historia lineal. Regla importante: no hacer rebase de commits ya pusheados a repositorio compartido porque reescribe historia. Cada uno tiene su uso apropiado según contexto.

---

### 27. ¿Cómo resolverías un merge conflict en Git?

**A)** git status para ver archivos con conflictos  
**B)** Abrir archivos y buscar marcadores de conflicto  
**C)** Decidir qué código mantener, eliminar marcadores, git add, git commit  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** Para resolver merge conflict: ejecutar git status para ver archivos conflictivos, abrir archivos y buscar marcadores (<<<<<<<, =======, >>>>>>>), decidir qué código mantener o combinar ambos, eliminar marcadores, git add archivos resueltos, y git commit. También se pueden usar herramientas como git mergetool.

---

### 28. ¿Qué es Git Flow y cuáles son sus ramas principales?

**A)** Estrategia de branching con ramas: main, develop, feature, release, hotfix  
**B)** Flujo: feature → develop → release → main  
**C)** main para producción, develop para desarrollo  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** Git Flow es estrategia de branching con ramas: main/master (producción), develop (desarrollo), feature/ (nuevas features desde develop), release/ (preparación de release hacia main), hotfix/ (correcciones urgentes desde main). El flujo típico es feature → develop → release → main. Todas las opciones describen Git Flow correctamente.

---

### 29. ¿Qué hace `git rebase -i` y cuándo lo usarías?

**A)** Rebase interactivo para editar commits  
**B)** Combinar commits (squash), reordenar, editar mensajes  
**C)** Eliminar o dividir commits  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** git rebase -i (interactivo) permite editar commits durante rebase. Usos: combinar commits (squash), reordenar commits, editar mensajes, eliminar commits, dividir commits. Ejemplo: git rebase -i HEAD~3 para editar últimos 3 commits. Útil para limpiar historia antes de hacer push.

---

### 30. ¿Qué es `git stash` y cuándo usarlo?

**A)** Guarda cambios temporales sin commit  
**B)** Cuando necesitas cambiar de branch pero tienes cambios sin commit  
**C)** Para probar algo rápidamente  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** git stash guarda cambios temporales sin commit. Se usa cuando: necesitas cambiar de branch pero tienes cambios sin commit, quieres probar algo rápidamente, o cambios no están listos para commit. Comandos: git stash, git stash pop, git stash list, git stash apply. Útil para trabajo temporal.

---

### 31. ¿Cuál es la diferencia entre `git reset --soft`, `--mixed` y `--hard`?

**A)** --soft: mantiene cambios en staging area  
**B)** --mixed: mantiene cambios en working directory  
**C)** --hard: descarta todos los cambios (peligroso)  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** git reset mueve HEAD y maneja cambios según flag: --soft mantiene cambios en staging area (útil para rehacer commit), --mixed (default) mantiene cambios en working directory fuera de staging (útil para deshacer commit pero mantener cambios), --hard descarta todos los cambios (peligroso, pérdida de datos). Cada uno tiene su uso específico.

---

### 32. ¿Qué son los tags en Git y cómo los usarías?

**A)** Marcan puntos específicos en historia (generalmente releases)  
**B)** Lightweight (solo puntero) y Annotated (con metadata)  
**C)** git tag v1.0.0, git push origin v1.0.0  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** Tags marcan puntos específicos en historia, generalmente releases. Tipos: Lightweight (solo puntero a commit) y Annotated (incluye metadata como autor, fecha, mensaje). Comandos: git tag v1.0.0 (lightweight), git tag -a v1.0.0 -m "Release" (annotated), git push origin v1.0.0 (push tag). Útiles para versionado.

---

## Software Testing

### 33. ¿Cuál es la diferencia entre Mock y Stub?

**A)** Stub proporciona respuestas predefinidas, no verifica comportamiento  
**B)** Mock verifica interacciones específicas  
**C)** Stub: "Cuando llames a X, retorna Y"; Mock: "Verifica que X fue llamado"  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** Stub proporciona respuestas predefinidas sin verificar comportamiento ("cuando llames a X, retorna Y"). Mock verifica interacciones específicas ("verifica que X fue llamado 2 veces con parámetros Z"). La diferencia clave es que Mock verifica comportamiento, Stub solo proporciona datos. Ambos son tipos de Test Doubles.

---

### 34. ¿Qué son los Test Doubles y cuándo usar cada tipo? (Selecciona todas las que apliquen)

**A)** Dummy: objeto que no se usa, solo para cumplir parámetros  
**B)** Fake: implementación funcional simplificada  
**C)** Stub: respuestas predefinidas  
**D)** Mock: verifica interacciones específicas  
**E)** Todas las anteriores

**Respuesta correcta: E**

**Justificación:** Test Doubles reemplazan dependencias reales. Tipos: Dummy (objeto no usado), Fake (implementación simplificada como BD en memoria), Stub (respuestas predefinidas), Spy (registra llamadas), Mock (verifica interacciones). Cada tipo tiene su uso: Dummy para parámetros no usados, Fake para dependencias complejas, Stub para datos, Mock para verificar comportamiento.

---

### 35. ¿Qué es Code Coverage y qué tipos existen?

**A)** Mide porcentaje de código cubierto por tests  
**B)** Statement Coverage, Branch Coverage, Path Coverage, Function Coverage  
**C)** Meta común: 80% coverage, pero calidad > cantidad  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** Code Coverage mide qué porcentaje del código está cubierto por tests. Tipos: Statement (líneas ejecutadas), Branch (ramas probadas), Path (caminos de ejecución), Function (funciones llamadas). Meta común es 80% coverage, pero la calidad de tests es más importante que la cantidad. Coverage alto no garantiza calidad.

---

### 36. ¿Cómo escribirías un test unitario efectivo usando AAA pattern?

**A)** Arrange: preparar datos y objetos  
**B)** Act: ejecutar acción a probar  
**C)** Assert: verificar resultado  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** AAA (Arrange-Act-Assert) estructura tests en tres fases: Arrange prepara datos y objetos necesarios, Act ejecuta la acción a probar, Assert verifica que el resultado es el esperado. Este patrón hace tests más legibles y mantenibles, facilitando identificación de qué falla si el test falla.

---

### 37. ¿Qué es el aislamiento en testing y por qué es importante?

**A)** Tests no dependen de otros tests ni de estado externo  
**B)** Tests pueden ejecutarse en cualquier orden  
**C)** Facilita debugging y permite ejecución paralela  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** Aislamiento significa que tests no dependen de otros tests ni de estado externo. Es importante porque: tests pueden ejecutarse en cualquier orden, fallo de un test no afecta otros, resultados son predecibles, facilita debugging, y permite ejecución paralela. Se logra con setup/teardown, mocks y datos independientes.

---

## Project Management

### 38. ¿Qué métricas usarías para medir productividad en Scrum? (Selecciona todas las que apliquen)

**A)** Velocity: Story points completados por sprint  
**B)** Sprint Goal Achievement: porcentaje de objetivo cumplido  
**C)** Burndown Chart: trabajo restante vs tiempo  
**D)** Lead Time y Cycle Time  
**E)** Todas las anteriores

**Respuesta correcta: E**

**Justificación:** Métricas importantes en Scrum incluyen: Velocity (story points por sprint, tendencia), Sprint Goal Achievement, Burndown Chart (trabajo restante), Lead Time (idea a producción), Cycle Time (inicio a completar), Throughput (items completados). Todas estas métricas ayudan a entender y mejorar productividad del equipo.

---

### 39. ¿Cómo identificarías si un equipo tiene problemas de productividad?

**A)** Velocity decreciente o inconsistente  
**B)** Muchos items sin completar al final del sprint  
**C)** Alta cantidad de bugs en producción  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** Señales de problemas de productividad: velocity decreciente o inconsistente, muchos items sin completar al final del sprint, cycle time aumentando, alta cantidad de bugs en producción, deuda técnica creciente, burnout del equipo, baja satisfacción del cliente. Acciones: retrospectivas, identificar bloqueadores, mejorar procesos.

---

### 40. ¿Qué criterios considerarías para medir performance de un equipo? (Selecciona todas las que apliquen)

**A)** Calidad: bugs, code coverage, code reviews  
**B)** Velocidad: velocity, cycle time, throughput  
**C)** Satisfacción: team satisfaction, cliente satisfaction  
**D)** Estabilidad: tasa de éxito de despliegues  
**E)** Todas las anteriores

**Respuesta correcta: E**

**Justificación:** Criterios para medir performance: Calidad (bugs en producción, code coverage, code reviews), Velocidad (velocity, cycle time, throughput), Satisfacción (team satisfaction, cliente satisfaction), Estabilidad (tasa de éxito de despliegues, tiempo de recuperación), Colaboración (comunicación, pair programming, knowledge sharing). Todos son importantes.

---

## Cloud Computing

### 41. ¿Cuáles son los modelos de despliegue en Cloud Computing?

**A)** Público: infraestructura compartida  
**B)** Privado: infraestructura dedicada  
**C)** Híbrido: combinación público/privado  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** Modelos de despliegue: Público (infraestructura compartida como AWS, GCP, Azure - costo bajo, escalable, menos control), Privado (infraestructura dedicada - más control, seguridad, más caro), Híbrido (combinación - flexibilidad, complejidad), Comunitario (compartido por organizaciones similares). Cada uno tiene ventajas según necesidades.

---

### 42. ¿Qué es orquestación en Cloud Computing?

**A)** Gestión automatizada de servicios y recursos  
**B)** Despliegue automático, escalado automático  
**C)** Balanceo de carga, auto-healing  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** Orquestación es gestión automatizada de servicios y recursos en cloud. Incluye: despliegue automático, escalado automático, gestión de configuración, balanceo de carga, auto-healing (recuperación automática). Herramientas: Kubernetes, Docker Swarm, AWS ECS. Esencial para gestionar aplicaciones complejas en cloud.

---

### 43. ¿Qué son Notification Engines y cuándo usarlos?

**A)** Gestionan mensajería asíncrona  
**B)** Para notificaciones push, eventos del sistema  
**C)** Comunicación entre servicios, desacoplamiento  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** Notification Engines gestionan mensajería asíncrona. Se usan para: notificaciones push, eventos del sistema, comunicación entre servicios, desacoplamiento de servicios. Ejemplos: AWS SNS, Google Pub/Sub, RabbitMQ. Permiten arquitectura event-driven donde servicios se comunican mediante eventos.

---

### 44. ¿Qué son Queue Engines y cuándo usarlos?

**A)** Gestionan colas de mensajes  
**B)** Para procesamiento asíncrono  
**C)** Desacoplamiento de servicios, manejo de picos de carga  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** Queue Engines gestionan colas de mensajes. Se usan para: procesamiento asíncrono, desacoplamiento de servicios, manejo de picos de carga, garantizar entrega de mensajes. Ejemplos: AWS SQS, RabbitMQ, Apache Kafka. Permiten procesar trabajos en background y manejar carga variable.

---

### 45. ¿Qué es Serverless y cuáles son sus ventajas?

**A)** Proveedor gestiona servidores automáticamente  
**B)** Sin gestión de servidores, escalado automático  
**C)** Pago por uso, menor tiempo de desarrollo  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** Serverless es modelo donde proveedor gestiona servidores automáticamente. Ventajas: sin gestión de servidores, escalado automático, pago por uso (solo cuando se ejecuta), menor tiempo de desarrollo, alta disponibilidad automática. Ejemplos: AWS Lambda, Azure Functions, Google Cloud Functions. Ideal para funciones event-driven.

---

## DevOps (Docker)

### 46. ¿Qué es Docker y cuáles son sus componentes principales?

**A)** Plataforma de contenedores  
**B)** Dockerfile, Image, Container, Docker Hub  
**C)** Docker Compose para orquestación  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** Docker es plataforma de contenedores. Componentes: Dockerfile (script para construir imagen), Image (plantilla read-only), Container (instancia ejecutable), Docker Hub (repositorio de imágenes), Docker Compose (orquestación de múltiples contenedores). Permite empaquetar aplicaciones con dependencias para ejecución consistente.

---

### 47. ¿Qué instrucciones tiene un Dockerfile y qué hace cada una?

**A)** FROM: imagen base, RUN: ejecuta comandos, COPY: copia archivos  
**B)** WORKDIR: directorio de trabajo, EXPOSE: puerto, CMD: comando por defecto  
**C)** ENV: variables de entorno  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** Dockerfile tiene instrucciones: FROM (imagen base), RUN (ejecuta comandos durante build), COPY/ADD (copia archivos), WORKDIR (establece directorio), EXPOSE (documenta puerto), ENV (variables de entorno), CMD/ENTRYPOINT (comando por defecto). Cada instrucción crea una layer en la imagen Docker.

---

### 48. ¿Cuál es la diferencia entre COPY y ADD en Dockerfile?

**A)** COPY: copia archivos del host al contenedor  
**B)** ADD: similar pero puede descargar URLs y extraer archivos  
**C)** Mejor práctica: usar COPY a menos que necesites ADD  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** COPY copia archivos del host al contenedor (más simple, recomendado). ADD es similar pero también puede descargar URLs y extraer archivos comprimidos automáticamente. Mejor práctica es usar COPY a menos que necesites funcionalidad específica de ADD, porque COPY es más explícito y predecible.

---

### 49. ¿Qué son los Docker volumes y cuándo usarlos?

**A)** Proporcionan persistencia de datos  
**B)** Named volumes, Bind mounts, tmpfs mounts  
**C)** Para persistir datos entre reinicios o compartir entre contenedores  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** Docker volumes proporcionan persistencia de datos. Tipos: Named volumes (gestionados por Docker), Bind mounts (mapean directorio del host), tmpfs mounts (en memoria, Linux). Se usan cuando: necesitas persistir datos entre reinicios de contenedor, compartir datos entre contenedores, o mantener datos fuera del contenedor.

---

### 50. ¿Cómo gestionarías múltiples contenedores relacionados?

**A)** Usar Docker Compose  
**B)** Archivo docker-compose.yml define servicios  
**C)** Facilita networking y volúmenes compartidos  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** Docker Compose gestiona múltiples contenedores relacionados. Archivo docker-compose.yml define servicios, docker-compose up inicia todos, docker-compose down detiene. Facilita networking entre contenedores, gestión de volúmenes compartidos, y orquestación simple. Ejemplo: aplicación web con BD, Redis y API.

---

## Software Architecture

### 51. ¿Qué es el patrón MVC y cómo funciona?

**A)** Separa aplicación en Model, View, Controller  
**B)** Model: lógica de negocio, View: presentación, Controller: coordinación  
**C)** Flujo: Usuario → Controller → Model → View → Usuario  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** MVC (Model-View-Controller) separa aplicación en tres componentes: Model (lógica de negocio y datos), View (presentación/UI), Controller (maneja entrada, coordina Model y View). Flujo típico: Usuario interactúa con View → Controller procesa → Model ejecuta lógica → View muestra resultado. Facilita separación de concerns.

---

### 52. ¿Qué son Microservices y cuáles son sus ventajas?

**A)** Arquitectura donde aplicación se divide en servicios pequeños  
**B)** Escalado independiente, tecnologías diferentes, despliegue independiente  
**C)** Aislamiento de fallos, equipos independientes  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** Microservices divide aplicación en servicios pequeños e independientes. Ventajas: escalado independiente por servicio, tecnologías diferentes por servicio, despliegue independiente, aislamiento de fallos, equipos independientes. Cada servicio puede desarrollarse, desplegarse y escalarse independientemente.

---

### 53. ¿Cuáles son las desventajas de Microservices?

**A)** Complejidad operacional  
**B)** Latencia de red entre servicios  
**C)** Gestión de datos distribuidos, testing más complejo  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** Desventajas de Microservices: complejidad operacional (más servicios que gestionar), latencia de red entre servicios, gestión de datos distribuidos, testing más complejo (requiere integración), overhead de comunicación, necesita DevOps maduro. Trade-off entre beneficios y complejidad adicional.

---

### 54. ¿Qué es el antipatrón "Stovepipe System"?

**A)** Sistema aislado que no se comunica con otros  
**B)** Duplicación de datos, integración difícil  
**C)** Mantenimiento complejo, no comparte recursos  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** Stovepipe System es sistema aislado que no se comunica con otros. Problemas: duplicación de datos, integración difícil, mantenimiento complejo, no comparte recursos. Solución: APIs bien definidas, integración adecuada, arquitectura orientada a servicios. Es antipatrón común en organizaciones grandes.

---

### 55. ¿Qué es "Vendor Lock-In" y cómo prevenirlo?

**A)** Dependencia excesiva de proveedor específico  
**B)** Usar estándares abiertos, abstraer servicios  
**C)** Evitar features propietarias, tener plan de migración  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** Vendor Lock-In es dependencia excesiva de proveedor específico. Prevenir: usar estándares abiertos, abstraer servicios mediante interfaces, evitar features propietarias cuando sea posible, tener plan de migración, usar múltiples proveedores cuando sea posible. Importante para mantener flexibilidad y evitar costos altos de cambio.

---

## Front-end Web Development

### 56. ¿Qué es BEM y cómo funciona?

**A)** Metodología CSS: Block Element Modifier  
**B)** Block: componente, Element: parte del bloque, Modifier: variante  
**C)** Ejemplo: .card__header--highlighted  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** BEM (Block Element Modifier) es metodología CSS para organizar estilos. Estructura: Block (componente independiente como `button`), Element (parte del bloque como `button__icon`), Modifier (variante como `button--primary`). Ejemplo: `.card__header--highlighted`. Facilita mantenibilidad y evita conflictos de nombres.

---

### 57. ¿Cuál es la diferencia entre npm y yarn?

**A)** npm: package manager por defecto de Node.js  
**B)** yarn: alternativa más rápida, mejor resolución  
**C)** yarn: instalación más rápida, lock file más confiable  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** npm es package manager por defecto de Node.js. yarn es alternativa con ventajas: instalación más rápida, mejor resolución de dependencias, lock file más confiable, mejor manejo de dependencias, workspaces nativos. Ambos son válidos, yarn ofrece mejor experiencia en algunos casos.

---

### 58. ¿Qué es Webpack y para qué se usa?

**A)** Module bundler para JavaScript  
**B)** Empaquetar módulos, transpilar código, procesar CSS  
**C)** Optimizar assets, code splitting, hot module replacement  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** Webpack es module bundler. Usos: empaquetar módulos JavaScript, transpilar código (Babel), procesar CSS (Sass, Less), optimizar assets (minificación, tree-shaking), code splitting, hot module replacement. Es herramienta fundamental en desarrollo frontend moderno para gestionar y optimizar assets.

---

### 59. ¿Qué es TypeScript y cuáles son sus ventajas sobre JavaScript?

**A)** JavaScript con tipos estáticos  
**B)** Detección temprana de errores, mejor autocompletado  
**C)** Refactoring más seguro, documentación implícita  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** TypeScript es JavaScript con tipos estáticos. Ventajas: detección temprana de errores, mejor autocompletado en IDE, refactoring más seguro, documentación implícita mediante tipos, mejor para proyectos grandes, compatible con JavaScript existente. Añade seguridad de tipos sin cambiar runtime.

---

### 60. ¿Qué es Responsive Design y cómo se implementa?

**A)** Adapta layout a diferentes tamaños de pantalla  
**B)** Media queries, viewport meta tag, unidades relativas  
**C)** Flexbox/Grid, imágenes responsivas  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** Responsive Design adapta layout a diferentes tamaños de pantalla. Implementación: media queries (@media), viewport meta tag, unidades relativas (%, em, rem, vw, vh), Flexbox/Grid para layouts flexibles, imágenes responsivas (srcset, sizes). Esencial para aplicaciones web modernas que funcionan en múltiples dispositivos.

---

### 61. ¿Qué es ECMAScript 6+ y cuáles son sus características principales? (Selecciona todas las que apliquen)

**A)** Arrow functions, Classes, Modules  
**B)** Destructuring, Spread operator, Template literals  
**C)** Async/await, Promises  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** ES6+ añade características modernas: Arrow functions (() => {}), Classes (sintaxis de clases), Modules (import/export), Destructuring (const {name} = obj), Spread operator (...arr), Template literals (${var}), Async/await (manejo asíncrono), Promises. Estas características mejoran productividad y legibilidad del código.

---

## Back-end Web Development

### 62. ¿Qué es REST y cuáles son sus principios?

**A)** Representational State Transfer, estilo arquitectónico  
**B)** Stateless, Client-Server, Uniform Interface  
**C)** Resource-based URLs, Cacheable  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** REST (Representational State Transfer) es estilo arquitectónico para APIs. Principios: Stateless (cada request contiene toda la información), Client-Server (separación), Uniform Interface (métodos HTTP estándar), Resource-based (URLs representan recursos), Cacheable (respuestas pueden ser cacheadas). Estándar para diseño de APIs web.

---

### 63. ¿Cuáles son los métodos HTTP y cuándo usar cada uno?

**A)** GET: obtener (idempotente, seguro), POST: crear  
**B)** PUT: actualizar completo (idempotente), PATCH: actualizar parcial  
**C)** DELETE: eliminar (idempotente), OPTIONS: métodos permitidos  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** Métodos HTTP: GET (obtener recurso, idempotente y seguro), POST (crear recurso o enviar datos), PUT (actualizar recurso completo, idempotente), PATCH (actualizar parcialmente), DELETE (eliminar recurso, idempotente), OPTIONS (obtener métodos permitidos). Cada método tiene semántica específica en REST.

---

### 64. ¿Qué es JWT y cómo funciona?

**A)** JSON Web Token para autenticación  
**B)** Estructura: Header, Payload, Signature  
**C)** Flujo: autenticación → JWT → validación en requests  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** JWT (JSON Web Token) es estándar para autenticación. Estructura: Header (tipo y algoritmo), Payload (datos/claims), Signature (verificación). Flujo: usuario autentica → servidor genera JWT → cliente envía JWT en requests → servidor valida. Ventajas: stateless, escalable, funciona con APIs REST.

---

### 65. ¿Qué es OAuth2 y cuál es su flujo?

**A)** Protocolo de autorización  
**B)** Flujo: solicitud → autorización → código → token → acceso  
**C)** Roles: Resource Owner, Client, Authorization Server, Resource Server  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** OAuth2 es protocolo de autorización. Flujo: Cliente solicita autorización → Usuario autoriza → Servidor devuelve código → Cliente intercambia código por access token → Cliente usa token para acceder recursos. Roles: Resource Owner (usuario), Client (aplicación), Authorization Server, Resource Server. Estándar para autorización entre servicios.

---

### 66. ¿Qué es GraphQL y cuáles son sus ventajas sobre REST?

**A)** Query language para APIs  
**B)** Cliente especifica datos necesarios, un solo endpoint  
**C)** Menos over-fetching, type system fuerte, introspection  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** GraphQL es query language para APIs. Ventajas: cliente especifica exactamente qué datos necesita, un solo endpoint, menos over-fetching y under-fetching, type system fuerte, introspection (explorar schema), evolución de API sin versionado. Alternativa moderna a REST para casos específicos.

---

### 67. ¿Cuándo usarías GraphQL vs REST?

**A)** GraphQL: cliente necesita datos específicos, múltiples clientes  
**B)** REST: API simple, caching crítico, operaciones CRUD simples  
**C)** Depende de requisitos específicos del proyecto  
**D)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** GraphQL cuando: cliente necesita datos específicos, múltiples clientes con necesidades diferentes, reducción de requests importante, relaciones complejas. REST cuando: API simple y estándar, caching es crítico, operaciones CRUD simples, equipo familiarizado con REST. La elección depende de requisitos específicos del proyecto.

---

## Preguntas Mixtas y Prácticas

### 68. ¿Cómo optimizarías una consulta SQL lenta? (Selecciona todas las que apliquen)

**A)** Analizar execution plan (EXPLAIN)  
**B)** Crear índices apropiados  
**C)** Optimizar JOINs, evitar SELECT *  
**D)** Considerar particionamiento, reescribir consulta  
**E)** Todas las anteriores

**Respuesta correcta: E**

**Justificación:** Para optimizar consulta SQL: analizar execution plan (EXPLAIN), identificar table scans, crear índices apropiados, optimizar JOINs (orden, índices), evitar SELECT *, usar WHERE apropiado, considerar particionamiento, revisar estadísticas, reescribir consulta si es necesario. Proceso sistemático de análisis y mejora.

---

### 69. ¿Cómo manejarías un merge conflict complejo en Git?

**A)** Entender contexto del conflicto  
**B)** Comunicarse con otros desarrolladores  
**C)** Revisar cambios de ambas ramas, decidir qué mantener  
**D)** Probar después de resolver  
**E)** Todas las anteriores

**Respuesta correcta: E**

**Justificación:** Para merge conflict complejo: entender contexto, comunicarse con otros desarrolladores, revisar cambios de ambas ramas, decidir qué código mantener o combinar, probar después de resolver, usar herramientas visuales si es necesario, documentar decisión si es importante. Resolución colaborativa es clave.

---

### 70. ¿Qué estrategia usarías para refactorizar código legacy?

**A)** Escribir tests primero (si no existen)  
**B)** Identificar deuda técnica, priorizar áreas críticas  
**C)** Refactorizar incrementalmente, aplicar SOLID  
**D)** Usar design patterns, code reviews frecuentes  
**E)** Todas las anteriores

**Respuesta correcta: E**

**Justificación:** Estrategia para refactorizar legacy: escribir tests primero, identificar deuda técnica, priorizar áreas críticas, refactorizar incrementalmente, aplicar principios SOLID, usar design patterns apropiados, code reviews frecuentes, documentar cambios importantes. Enfoque gradual y seguro es esencial.

---

### 71. ¿Cómo diseñarías una API REST para un sistema de e-commerce?

**A)** Recursos: /products, /orders, /users, /cart  
**B)** Métodos: GET, POST, PUT, DELETE  
**C)** Versionado: /api/v1/, paginación, filtrado  
**D)** Autenticación JWT, códigos HTTP apropiados  
**E)** Todas las anteriores

**Respuesta correcta: E**

**Justificación:** API REST para e-commerce: recursos claros (/products, /orders, /users, /cart), métodos HTTP estándar, versionado (/api/v1/), paginación (?page=1&limit=20), filtrado (?category=electronics), autenticación JWT, códigos HTTP apropiados (200, 201, 400, 404, 500), documentación Swagger/OpenAPI. Diseño RESTful completo.

---

### 72. ¿Cómo implementarías autenticación en una aplicación web?

**A)** Elegir método (JWT, OAuth2, Session-based)  
**B)** Hash de passwords (bcrypt, argon2)  
**C)** Generar tokens seguros, validar en cada request  
**D)** Refresh tokens, manejar expiración, HTTPS obligatorio  
**E)** Todas las anteriores

**Respuesta correcta: E**

**Justificación:** Implementar autenticación: elegir método apropiado, hash de passwords (nunca en texto plano), generar tokens seguros, validar tokens en cada request, refresh tokens para renovación, manejar expiración, HTTPS obligatorio, protección contra CSRF. Seguridad es crítica en autenticación.

---

### 73. ¿Qué consideraciones tendrías al diseñar una base de datos? (Selecciona todas las que apliquen)

**A)** Normalización apropiada  
**B)** Índices en columnas frecuentemente consultadas  
**C)** Tipos de datos correctos, constraints para integridad  
**D)** Plan para escalabilidad, backup y recovery  
**E)** Todas las anteriores

**Respuesta correcta: E**

**Justificación:** Diseño de BD considera: normalización apropiada, índices en columnas consultadas frecuentemente, tipos de datos correctos, constraints (PK, FK, UNIQUE, NOT NULL) para integridad, claves primarias y foráneas, considerar particionamiento, plan para escalabilidad, backup y recovery, seguridad y permisos. Diseño cuidadoso es fundamental.

---

### 74. ¿Cómo escribirías tests para una función que depende de servicios externos?

**A)** Usar mocks/stubs para servicios externos  
**B)** Testear casos exitosos y de error  
**C)** Verificar llamadas a servicios externos  
**D)** Testear timeouts y fallos de red, aislar la función  
**E)** Todas las anteriores

**Respuesta correcta: E**

**Justificación:** Tests para función con dependencias externas: usar mocks/stubs para servicios externos, testear casos exitosos y de error, verificar llamadas a servicios externos, testear timeouts y fallos de red, aislar la función bajo prueba, usar test doubles apropiados, verificar manejo de errores. Aislamiento es clave.

---

### 75. ¿Qué factores considerarías al elegir entre SQL y NoSQL? (Selecciona todas las que apliquen)

**A)** SQL: datos estructurados, relaciones complejas, transacciones ACID  
**B)** NoSQL: datos no estructurados, escalabilidad horizontal masiva  
**C)** SQL: consultas complejas, equipo familiarizado  
**D)** NoSQL: alta velocidad de escritura, esquema flexible  
**E)** Todas las anteriores

**Respuesta correcta: E**

**Justificación:** Factores para elegir: SQL cuando datos estructurados, relaciones complejas, transacciones ACID necesarias, consultas complejas, equipo familiarizado. NoSQL cuando datos no estructurados, escalabilidad horizontal masiva, alta velocidad de escritura, esquema flexible. La elección depende de requisitos específicos del proyecto.

---

### 76. ¿Cómo manejarías la migración de una base de datos en producción?

**A)** Planificar migración detalladamente  
**B)** Backup completo antes de migrar  
**C)** Probar en staging, scripts versionados  
**D)** Migración incremental si es posible, rollback plan  
**E)** Todas las anteriores

**Respuesta correcta: E**

**Justificación:** Migración de BD en producción: planificar detalladamente, backup completo antes, probar en staging, scripts de migración versionados, migración incremental si es posible, rollback plan preparado, monitoreo durante migración, comunicar con equipo, documentar cambios. Preparación y cuidado son esenciales.

---

### 77. ¿Qué buenas prácticas seguirías al trabajar con Git en equipo?

**A)** Commits frecuentes y pequeños  
**B)** Mensajes de commit claros y descriptivos  
**C)** Pull antes de push, resolver conflictos rápidamente  
**D)** Usar branches para features, code reviews obligatorios  
**E)** Todas las anteriores

**Respuesta correcta: E**

**Justificación:** Buenas prácticas Git en equipo: commits frecuentes y pequeños, mensajes claros y descriptivos, pull antes de push, resolver conflictos rápidamente, usar branches para features, code reviews obligatorios, no hacer force push a main, mantener historia limpia. Colaboración efectiva requiere disciplina.

---

### 78. ¿Cómo optimizarías el rendimiento de una aplicación web? (Selecciona todas las que apliquen)

**A)** Frontend: minificar assets, lazy loading, code splitting  
**B)** Backend: caching de respuestas, optimizar consultas BD  
**C)** CDN para assets estáticos, compresión  
**D)** Connection pooling, load balancing  
**E)** Todas las anteriores

**Respuesta correcta: E**

**Justificación:** Optimización: Frontend (minificar y comprimir assets, lazy loading de imágenes, code splitting, caching de assets, CDN). Backend (caching de respuestas, optimizar consultas de BD, índices apropiados, connection pooling, load balancing). Enfoque multi-nivel para mejor rendimiento.

---

### 79. ¿Qué es el patrón Repository y cómo lo implementarías?

**A)** Abstrae acceso a datos  
**B)** Interfaz IRepository<T> con métodos CRUD  
**C)** Lógica de negocio usa interfaz, no implementación  
**D)** Facilita testing (mock repository), permite cambiar fuente de datos  
**E)** Todas las anteriores

**Respuesta correcta: E**

**Justificación:** Repository Pattern abstrae acceso a datos. Implementación: interfaz IRepository<T> con métodos CRUD, implementación concreta accede a BD, lógica de negocio usa interfaz (no implementación), facilita testing mediante mock repository, permite cambiar fuente de datos fácilmente. Patrón fundamental para desacoplamiento.

---

### 80. ¿Cómo manejarías errores en una API REST?

**A)** Códigos HTTP apropiados (400, 404, 500)  
**B)** Mensajes de error claros pero no expongan detalles internos  
**C)** Formato consistente de errores  
**D)** Logging de errores en servidor, manejo centralizado  
**E)** Todas las anteriores

**Respuesta correcta: E**

**Justificación:** Manejo de errores en API REST: códigos HTTP apropiados, mensajes claros pero seguros (no exponer detalles internos), formato consistente de errores, logging de errores en servidor, manejo centralizado de excepciones, validación de entrada, documentación de posibles errores. Experiencia de usuario y seguridad son importantes.

---

### 81. ¿Qué es el patrón Strategy y cómo lo usarías?

**A)** Define familia de algoritmos intercambiables  
**B)** Crear interfaz Strategy, implementaciones concretas  
**C)** Contexto usa estrategia, cambiar algoritmo en runtime  
**D)** Evitar condicionales múltiples (if/else o switch)  
**E)** Todas las anteriores

**Respuesta correcta: E**

**Justificación:** Strategy Pattern define familia de algoritmos intercambiables. Uso: crear interfaz Strategy, implementaciones concretas, contexto usa estrategia, cambiar algoritmo en runtime, evitar condicionales múltiples. Ejemplo: diferentes algoritmos de cálculo de descuento según tipo de cliente. Patrón útil para flexibilidad.

---

### 82. ¿Cómo implementarías logging en una aplicación?

**A)** Usar librería de logging (log4j, Winston, etc.)  
**B)** Niveles apropiados (DEBUG, INFO, WARN, ERROR)  
**C)** Contexto en logs (usuario, request ID)  
**D)** No loggear información sensible, rotación de logs  
**E)** Todas las anteriores

**Respuesta correcta: E**

**Justificación:** Implementar logging: usar librería apropiada, niveles apropiados según severidad, contexto en logs (usuario, request ID) para trazabilidad, no loggear información sensible, rotación de logs, centralización de logs (ELK stack), structured logging (JSON). Logging efectivo es esencial para debugging y monitoreo.

---

### 83. ¿Qué es el patrón Factory y cuándo usarlo?

**A)** Crea objetos sin especificar clase exacta  
**B)** Cuando no conoces tipo exacto hasta runtime  
**C)** Lógica compleja de creación, desacoplar creación de uso  
**D)** Centralizar creación de objetos  
**E)** Todas las anteriores

**Respuesta correcta: E**

**Justificación:** Factory Pattern crea objetos sin especificar clase exacta. Usar cuando: no conoces tipo exacto hasta runtime, lógica compleja de creación, quieres desacoplar creación de uso, centralizar creación de objetos. Ejemplo: PaymentFactory.create(type) retorna implementación apropiada. Patrón creacional común.

---

### 84. ¿Cómo manejarías la seguridad en una aplicación web?

**A)** HTTPS obligatorio  
**B)** Validación de entrada (sanitización)  
**C)** Autenticación segura (hash de passwords)  
**D)** Protección CSRF, headers de seguridad, actualizar dependencias  
**E)** Todas las anteriores

**Respuesta correcta: E**

**Justificación:** Seguridad en aplicación web: HTTPS obligatorio, validación de entrada (sanitización), autenticación segura (hash de passwords, nunca texto plano), autorización apropiada, protección CSRF, headers de seguridad (CORS, CSP), no exponer información sensible, actualizar dependencias regularmente, penetration testing. Seguridad es crítica.

---

### 85. ¿Qué es el patrón Observer y cuándo usarlo?

**A)** Permite que objetos se suscriban a eventos  
**B)** Cuando cambios en un objeto requieren actualizar múltiples objetos  
**C)** Desacoplamiento entre sujeto y observadores  
**D)** Event-driven architecture  
**E)** Todas las anteriores

**Respuesta correcta: D**

**Justificación:** Observer Pattern permite que objetos se suscriban a eventos. Usar cuando: cambios en un objeto requieren actualizar múltiples objetos, desacoplamiento entre sujeto y observadores, event-driven architecture. Ejemplo: sistema de notificaciones, Model-View en MVC. Patrón de comportamiento muy útil.

---

### 86. ¿Cómo diseñarías un sistema de caché?

**A)** Elegir tecnología (Redis, Memcached)  
**B)** Estrategia de cache (Cache-Aside, Write-Through)  
**C)** TTL apropiado, invalidación de cache  
**D)** Cache distribuido para escalabilidad, monitoreo de hit rate  
**E)** Todas las anteriores

**Respuesta correcta: E**

**Justificación:** Diseño de sistema de caché: elegir tecnología apropiada, estrategia de cache según necesidades, TTL (Time To Live) apropiado, invalidación de cache, cache distribuido para escalabilidad, monitoreo de hit rate, fallback si cache falla. Caché efectivo mejora significativamente el rendimiento.

---

### 87. ¿Cómo manejarías la escalabilidad de una aplicación?

**A)** Horizontal: agregar más servidores  
**B)** Vertical: mejorar servidor existente  
**C)** Estrategias: caching, CDN, database sharding  
**D)** Microservices, async processing  
**E)** Todas las anteriores

**Respuesta correcta: E**

**Justificación:** Escalabilidad: Horizontal (agregar servidores, load balancing, stateless application, BD distribuida) y Vertical (mejorar servidor, más CPU/RAM, limitado). Estrategias: caching, CDN, database sharding, microservices, async processing. Enfoque multi-nivel según necesidades específicas.

---

### 88. ¿Qué es el patrón Adapter y cuándo usarlo?

**A)** Permite que interfaces incompatibles trabajen juntas  
**B)** Integrar código legacy  
**C)** Usar librería con interfaz diferente, adaptar API externa  
**D)** Hacer compatible código incompatible  
**E)** Todas las anteriores

**Respuesta correcta: E**

**Justificación:** Adapter Pattern permite que interfaces incompatibles trabajen juntas. Usar cuando: integrar código legacy, usar librería externa con interfaz diferente, adaptar API externa, hacer compatible código incompatible. Ejemplo: adaptar API de pago antigua a nueva interfaz. Patrón estructural útil para integración.

---

### 89. ¿Cómo implementarías un sistema de notificaciones?

**A)** Usar Observer pattern o Event Bus  
**B)** Diferentes canales (email, SMS, Push, In-app)  
**C)** Queue para procesamiento asíncrono  
**D)** Templates, preferencias de usuario, retry logic  
**E)** Todas las anteriores

**Respuesta correcta: E**

**Justificación:** Sistema de notificaciones: usar Observer pattern o Event Bus, múltiples canales según necesidades, queue para procesamiento asíncrono, templates para reutilización, preferencias de usuario, retry logic para fallos, dead letter queue, analytics de entregas. Sistema robusto requiere múltiples componentes.

---

### 90. ¿Qué es el patrón Singleton y por qué puede ser problemático?

**A)** Asegura una sola instancia  
**B)** Dificulta testing (dependencias ocultas)  
**C)** Viola Single Responsibility Principle  
**D)** Puede causar acoplamiento fuerte, problemas multi-threaded  
**E)** Todas las anteriores

**Respuesta correcta: E**

**Justificación:** Singleton asegura una sola instancia pero puede ser problemático: dificulta testing (dependencias ocultas), viola SRP, puede causar acoplamiento fuerte, problemas en entornos multi-threaded, oculta dependencias. Alternativas: Dependency Injection, Factory. Usar con cuidado y solo cuando realmente necesario.

---

### 91. ¿Qué es el patrón Proxy y cuándo usarlo?

**A)** Proporciona sustituto o placeholder para otro objeto  
**B)** Lazy loading (cargar objeto cuando se necesita)  
**C)** Control de acceso, logging de requests  
**D)** Caching de resultados  
**E)** Todas las anteriores

**Respuesta correcta: E**

**Justificación:** Proxy Pattern proporciona sustituto o placeholder para otro objeto. Usar cuando: lazy loading (cargar cuando se necesita), control de acceso, logging de requests, caching de resultados. Ejemplo: proxy para objeto pesado que se carga bajo demanda. Patrón estructural útil para optimización y control.

---

### 92. ¿Qué es el patrón Chain of Responsibility?

**A)** Pasa request por cadena de handlers hasta que uno lo procese  
**B)** Cuando múltiples objetos pueden manejar request  
**C)** Desacoplar sender y receiver  
**D)** Especificar handlers dinámicamente  
**E)** Todas las anteriores

**Respuesta correcta: E**

**Justificación:** Chain of Responsibility pasa request por cadena de handlers hasta que uno lo procese. Usar cuando: múltiples objetos pueden manejar request, quieres desacoplar sender y receiver, especificar handlers dinámicamente. Ejemplo: middleware en Express.js, manejo de excepciones. Patrón de comportamiento útil.

---

### 93. ¿Qué es el patrón Template Method?

**A)** Define esqueleto de algoritmo en clase base  
**B)** Subclases implementan pasos específicos  
**C)** Cuando algoritmo tiene estructura fija pero pasos variables  
**D)** Reutilizar código común, controlar extensión  
**E)** Todas las anteriores

**Respuesta correcta: E**

**Justificación:** Template Method define esqueleto de algoritmo en clase base, subclases implementan pasos específicos. Usar cuando: algoritmo tiene estructura fija pero pasos variables, quieres reutilizar código común, controlar extensión de algoritmo. Ejemplo: algoritmo de procesamiento con pasos configurables. Patrón de comportamiento.

---

### 94. ¿Qué es el patrón State y cuándo usarlo?

**A)** Permite que objeto cambie comportamiento cuando cambia estado  
**B)** Cuando objeto tiene múltiples estados  
**C)** Comportamiento depende del estado  
**D)** Evitar condicionales múltiples basadas en estado  
**E)** Todas las anteriores

**Respuesta correcta: E**

**Justificación:** State Pattern permite que objeto cambie comportamiento cuando cambia estado interno. Usar cuando: objeto tiene múltiples estados, comportamiento depende del estado, quieres evitar condicionales múltiples basadas en estado. Ejemplo: máquina de estados, reproductor de música. Patrón de comportamiento útil para state machines.

---

### 95. ¿Qué es el patrón Mediator y cuándo usarlo?

**A)** Define cómo objetos interactúan sin referenciarse directamente  
**B)** Cuando muchos objetos se comunican entre sí  
**C)** Reducir acoplamiento  
**D)** Comunicación compleja entre objetos  
**E)** Todas las anteriores

**Respuesta correcta: E**

**Justificación:** Mediator Pattern define cómo objetos interactúan sin referenciarse directamente. Usar cuando: muchos objetos se comunican entre sí, quieres reducir acoplamiento, comunicación compleja entre objetos. Ejemplo: chat room donde usuarios no se conocen directamente, se comunican a través del mediator. Patrón de comportamiento.

---

### 96. ¿Qué es el patrón Memento y cuándo usarlo?

**A)** Captura y restaura estado interno de objeto sin violar encapsulación  
**B)** Cuando necesitas undo/redo  
**C)** Quieres guardar snapshots de estado  
**D)** No quieres exponer detalles internos  
**E)** Todas las anteriores

**Respuesta correcta: E**

**Justificación:** Memento Pattern captura y restaura estado interno de objeto sin violar encapsulación. Usar cuando: necesitas undo/redo, quieres guardar snapshots de estado, no quieres exponer detalles internos. Ejemplo: editor de texto con historial de cambios, juegos con guardado de estado. Patrón de comportamiento.

---

### 97. ¿Qué es el patrón Visitor y cuándo usarlo?

**A)** Separa algoritmo de estructura de objeto  
**B)** Cuando tienes estructura de objetos compleja  
**C)** Quieres añadir operaciones sin modificar clases  
**D)** Operaciones varían según tipo de objeto  
**E)** Todas las anteriores

**Respuesta correcta: E**

**Justificación:** Visitor Pattern separa algoritmo de estructura de objeto. Usar cuando: tienes estructura de objetos compleja, quieres añadir operaciones sin modificar clases, operaciones varían según tipo de objeto. Desventaja: añadir nuevos tipos de objetos es difícil. Patrón de comportamiento útil para operaciones sobre estructuras complejas.

---

### 98. ¿Qué es el patrón Flyweight y cuándo usarlo?

**A)** Minimiza uso de memoria compartiendo objetos similares  
**B)** Cuando tienes muchos objetos similares  
**C)** Costo de almacenamiento es alto  
**D)** Puedes compartir estado intrínseco, estado extrínseco se pasa como parámetros  
**E)** Todas las anteriores

**Respuesta correcta: E**

**Justificación:** Flyweight Pattern minimiza uso de memoria compartiendo objetos similares. Usar cuando: tienes muchos objetos similares, costo de almacenamiento es alto, puedes compartir estado intrínseco, estado extrínseco se pasa como parámetros. Ejemplo: renderizado de caracteres en editor de texto, árboles en juego. Patrón estructural para optimización.

---

### 99. ¿Cómo manejarías la integración con APIs externas?

**A)** Usar Adapter pattern  
**B)** Timeout apropiado, retry logic con exponential backoff  
**C)** Circuit breaker pattern  
**D)** Caching cuando sea posible, manejo de errores robusto  
**E)** Todas las anteriores

**Respuesta correcta: E**

**Justificación:** Integración con APIs externas: usar Adapter pattern, timeout apropiado, retry logic con exponential backoff, circuit breaker pattern (evitar cascading failures), caching cuando sea posible, manejo de errores robusto, logging de requests/responses, rate limiting, mock para testing. Resiliencia es clave.

---

### 100. ¿Qué consideraciones tendrías al diseñar un sistema de microservices?

**A)** Definir boundaries apropiados  
**B)** Comunicación entre servicios (REST, gRPC, message queue)  
**C)** Service discovery, API Gateway  
**D)** Distributed tracing, centralized logging, database per service  
**E)** Todas las anteriores

**Respuesta correcta: E**

**Justificación:** Diseño de microservices considera: definir boundaries apropiados (domain-driven design), comunicación entre servicios (REST, gRPC, message queues), service discovery, API Gateway, distributed tracing, centralized logging, database per service, deployment independiente, monitoring y observability, manejo de transacciones distribuidas (Saga pattern). Arquitectura compleja requiere múltiples consideraciones.

---

**Nota**: Estas 100 preguntas cubren todos los temas específicos de Software Engineer II con formato de opciones múltiples, permitiendo múltiples respuestas correctas cuando aplica, e incluyen justificaciones detalladas para cada respuesta. Estudia cada pregunta y su justificación para entender completamente los conceptos. ¡Éxito en tu examen!
