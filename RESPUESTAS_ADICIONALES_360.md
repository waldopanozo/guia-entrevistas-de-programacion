# Respuestas Correctas - Preguntas Adicionales Examen 360

## CI/CD - Respuestas (101-120)

### 101. ¿Cuál es la diferencia principal entre Integración Continua (CI) y Entrega Continua (CD)?
**Respuestas correctas: A, B**
- A) CI se enfoca en automatizar pruebas, CD en automatizar despliegues ✓
- B) CI fusiona código frecuentemente, CD automatiza la entrega a producción ✓
- C) CI requiere aprobación manual (no necesariamente)
- D) CI solo aplica a desarrollo (aplica a todo el ciclo)
- E) Son términos sinónimos (no lo son)

### 102. En un pipeline de CI/CD, ¿qué etapa se encarga de ejecutar pruebas automatizadas para validar el código?
**Respuestas correctas: B, D**
- A) Build stage (compila, no ejecuta tests)
- B) Test stage ✓
- C) Deploy stage (despliega, no prueba)
- D) Integration stage ✓
- E) Validation stage (puede incluir tests)

### 103. ¿Cómo manejarías una falla en el pipeline de CI/CD en producción?
**Respuestas correctas: E (todas las anteriores)**
- A) Rollback automático a la versión anterior ✓
- B) Notificación inmediata al equipo ✓
- C) Análisis de logs para identificar la causa ✓
- D) Ejecución de health checks post-despliegue ✓
- E) Todas las anteriores ✓

### 104. ¿Qué estrategias emplearías para asegurar la idempotencia en scripts de despliegue?
**Respuestas correctas: E (todas las anteriores)**
- A) Verificar estado antes de aplicar cambios ✓
- B) Usar herramientas que garanticen idempotencia (Ansible, Terraform) ✓
- C) Implementar checksums para validar cambios ✓
- D) Ejecutar scripts múltiples veces sin efectos secundarios ✓
- E) Todas las anteriores ✓

### 105. ¿Cómo implementarías una pipeline de CI/CD para un sistema heredado (legacy)?
**Respuestas correctas: E (todas las anteriores)**
- A) Empezar con pruebas básicas y expandir gradualmente ✓
- B) Containerizar la aplicación para entornos consistentes ✓
- C) Implementar feature flags para control de releases ✓
- D) Crear documentación del proceso de despliegue actual ✓
- E) Todas las anteriores ✓

### 106. ¿Qué consideraciones tendrías al implementar CI/CD en una arquitectura de microservicios?
**Respuestas correctas: E (todas las anteriores)**
- A) Pipelines independientes por servicio ✓
- B) Coordinación de despliegues entre servicios ✓
- C) Versionado de APIs y compatibilidad hacia atrás ✓
- D) Testing de integración entre servicios ✓
- E) Todas las anteriores ✓

### 107. En el contexto de CI/CD, ¿qué es "shift-left security"?
**Respuestas correctas: E (todas las anteriores)**
- A) Integrar seguridad desde las primeras etapas del desarrollo ✓
- B) Mover herramientas de seguridad al inicio del pipeline ✓
- C) Detectar vulnerabilidades antes de producción ✓
- D) Escanear dependencias y código en cada commit ✓
- E) Todas las anteriores ✓

### 108. ¿Qué herramientas se utilizan comúnmente para scanning de seguridad en pipelines CI/CD?
**Respuestas correctas: E (todas las anteriores)**
- A) SonarQube para análisis estático ✓
- B) OWASP ZAP para análisis dinámico ✓
- C) Snyk para vulnerabilidades de dependencias ✓
- D) Trivy para scanning de contenedores ✓
- E) Todas las anteriores ✓

### 109. En CI/CD, ¿qué es "infrastructure as code" (IaC) y por qué es importante?
**Respuestas correctas: E (todas las anteriores)**
- A) Definir infraestructura mediante código versionado ✓
- B) Reproducibilidad de entornos ✓
- C) Reducción de errores manuales ✓
- D) Documentación automática de infraestructura ✓
- E) Todas las anteriores ✓

### 110. ¿Cómo optimizarías el tiempo de ejecución de una pipeline de CI/CD?
**Respuestas correctas: E (todas las anteriores)**
- A) Paralelizar jobs independientes ✓
- B) Caché de dependencias y artefactos ✓
- C) Ejecutar tests solo en archivos modificados ✓
- D) Usar runners más potentes ✓
- E) Todas las anteriores ✓

### 111. ¿Qué es "blue-green deployment" y cuáles son sus ventajas?
**Respuestas correctas: E (todas las anteriores)**
- A) Mantener dos entornos idénticos (blue y green) ✓
- B) Desplegar en un entorno mientras el otro sirve tráfico ✓
- C) Rollback instantáneo cambiando el tráfico ✓
- D) Testing en producción antes de cambiar tráfico ✓
- E) Todas las anteriores ✓

### 112. ¿Qué es "canary deployment" y cuándo se utiliza?
**Respuestas correctas: E (todas las anteriores)**
- A) Desplegar cambios a un pequeño porcentaje de usuarios ✓
- B) Monitorear métricas antes de despliegue completo ✓
- C) Reducir riesgo de cambios en producción ✓
- D) Validar cambios con usuarios reales ✓
- E) Todas las anteriores ✓

### 113. En CI/CD, ¿qué es "feature flag" y para qué se usa?
**Respuestas correctas: E (todas las anteriores)**
- A) Habilitar/deshabilitar features sin redeploy ✓
- B) A/B testing de nuevas funcionalidades ✓
- C) Rollback rápido de features problemáticas ✓
- D) Testing en producción de forma segura ✓
- E) Todas las anteriores ✓

### 114. ¿Qué prácticas mejoran la seguridad de credenciales en pipelines CI/CD?
**Respuestas correctas: E (todas las anteriores)**
- A) Usar secret management tools (Vault, AWS Secrets Manager) ✓
- B) Nunca hardcodear credenciales en código ✓
- C) Rotación automática de credenciales ✓
- D) Acceso basado en roles (RBAC) ✓
- E) Todas las anteriores ✓

### 115. ¿Qué es "continuous monitoring" en el contexto de CI/CD?
**Respuestas correctas: E (todas las anteriores)**
- A) Monitoreo de métricas post-despliegue ✓
- B) Alertas automáticas ante fallos ✓
- C) Dashboards de salud de aplicaciones ✓
- D) Métricas de performance del pipeline ✓
- E) Todas las anteriores ✓

### 116. En Jenkins, ¿qué es un "Jenkinsfile" y qué sintaxis soporta?
**Respuestas correctas: E (todas las anteriores)**
- A) Pipeline as code para Jenkins ✓
- B) Declarative Pipeline syntax ✓
- C) Scripted Pipeline syntax ✓
- D) Versionado de configuración de pipeline ✓
- E) Todas las anteriores ✓

### 117. ¿Qué es "GitOps" y cómo se relaciona con CI/CD?
**Respuestas correctas: E (todas las anteriores)**
- A) Usar Git como fuente de verdad para infraestructura ✓
- B) Automatización de despliegues basada en cambios en Git ✓
- C) Pull-based deployment model ✓
- D) Auditoría completa de cambios ✓
- E) Todas las anteriores ✓

### 118. ¿Qué consideraciones hay al implementar CI/CD para aplicaciones móviles?
**Respuestas correctas: E (todas las anteriores)**
- A) Testing en múltiples dispositivos y OS ✓
- B) Distribución a testers y stores ✓
- C) Code signing y certificados ✓
- D) Versionado de apps y compatibilidad ✓
- E) Todas las anteriores ✓

### 119. ¿Qué es "chaos engineering" en el contexto de CI/CD?
**Respuestas correctas: E (todas las anteriores)**
- A) Introducir fallos intencionales para probar resiliencia ✓
- B) Validar que sistemas se recuperan correctamente ✓
- C) Mejorar confiabilidad de sistemas ✓
- D) Testing de disaster recovery ✓
- E) Todas las anteriores ✓

### 120. ¿Cómo manejarías versionado de artefactos en CI/CD?
**Respuestas correctas: E (todas son válidas)**
- A) Semantic versioning (semver) ✓
- B) Tags de Git como versiones ✓
- C) Timestamps en nombres de artefactos ✓
- D) Hash de commit como versión ✓
- E) Todas las anteriores son válidas ✓

---

## GraphQL - Respuestas (121-140)

### 121. ¿Cuáles son las principales diferencias entre REST y GraphQL en términos de eficiencia de datos?
**Respuestas correctas: A, B, D**
- A) GraphQL evita over-fetching (traer más datos de los necesarios) ✓
- B) GraphQL evita under-fetching (necesitar múltiples requests) ✓
- C) REST siempre requiere múltiples endpoints (no siempre)
- D) GraphQL permite consultas anidadas en una sola request ✓
- E) Todas las anteriores (C no es siempre cierta)

### 122. ¿Cómo manejarías la paginación en una API GraphQL?
**Respuestas correctas: E (todas son válidas)**
- A) Cursor-based pagination (recomendado) ✓
- B) Offset-based pagination ✓
- C) Connection pattern (edges, nodes, pageInfo) ✓
- D) Limit y offset como argumentos ✓
- E) Todas las anteriores son válidas ✓

### 123. ¿Qué son las "subscriptions" en GraphQL y cómo se implementan?
**Respuestas correctas: E (todas las anteriores)**
- A) Operaciones en tiempo real ✓
- B) Usan WebSockets o Server-Sent Events ✓
- C) Útiles para notificaciones y actualizaciones en vivo ✓
- D) Requieren configuración adicional del servidor ✓
- E) Todas las anteriores ✓

### 124. ¿Cómo gestionarías errores en una API GraphQL?
**Respuestas correctas: E (todas las anteriores)**
- A) Array `errors` en la respuesta ✓
- B) Union types para errores tipados ✓
- C) Extensions para metadata de errores ✓
- D) Errores no detienen ejecución completa ✓
- E) Todas las anteriores ✓

### 125. ¿Qué medidas tomarías para asegurar la seguridad en una API GraphQL?
**Respuestas correctas: E (todas las anteriores)**
- A) Rate limiting por IP/usuario ✓
- B) Query complexity analysis ✓
- C) Depth limiting para prevenir queries recursivas ✓
- D) Autenticación y autorización en resolvers ✓
- E) Todas las anteriores ✓

### 126. ¿Qué es "GraphQL Federation" y cuándo se utiliza?
**Respuestas correctas: E (todas las anteriores)**
- A) Arquitectura para múltiples GraphQL services ✓
- B) Cada servicio mantiene su propio schema ✓
- C) Gateway unifica los schemas ✓
- D) Escalar GraphQL a microservicios ✓
- E) Todas las anteriores ✓

### 127. ¿Cómo manejarías problemas de rendimiento en GraphQL con grandes volúmenes de datos?
**Respuestas correctas: E (todas las anteriores)**
- A) Implementar DataLoader para batching ✓
- B) Query complexity limiting ✓
- C) Caché de queries frecuentes ✓
- D) Paginación apropiada ✓
- E) Todas las anteriores ✓

### 128. ¿Qué es "schema stitching" en GraphQL?
**Respuestas correctas: E (todas las anteriores)**
- A) Combinar múltiples schemas GraphQL ✓
- B) Unificar APIs de diferentes servicios ✓
- C) Crear un gateway GraphQL ✓
- D) Delegar queries a diferentes servicios ✓
- E) Todas las anteriores ✓

### 129. ¿Cómo evolucionarías un schema GraphQL sin breaking changes?
**Respuestas correctas: E (todas las anteriores)**
- A) Agregar campos opcionales en lugar de requeridos ✓
- B) Usar @deprecated para campos obsoletos ✓
- C) Mantener versiones antiguas temporalmente ✓
- D) Comunicar cambios a clientes ✓
- E) Todas las anteriores ✓

### 130. ¿Qué es "query batching" en GraphQL y cuáles son sus beneficios?
**Respuestas correctas: E (todas las anteriores)**
- A) Enviar múltiples queries en una sola request ✓
- B) Reducir round-trips al servidor ✓
- C) Mejorar performance de la aplicación ✓
- D) Requiere soporte del cliente ✓
- E) Todas las anteriores ✓

### 131. ¿Cómo implementarías autenticación en una API GraphQL?
**Respuestas correctas: E (todas las anteriores)**
- A) Headers HTTP (Authorization) ✓
- B) Context object con información del usuario ✓
- C) Middleware para validar tokens ✓
- D) Resolvers acceden al contexto ✓
- E) Todas las anteriores ✓

### 132. ¿Qué es "N+1 problem" en GraphQL y cómo se resuelve?
**Respuestas correctas: E (todas las anteriores)**
- A) Múltiples queries a DB para resolver relaciones ✓
- B) DataLoader para batching de requests ✓
- C) Eager loading de relaciones ✓
- D) Problema común de performance ✓
- E) Todas las anteriores ✓

### 133. ¿Cómo manejarías versionado de schema en GraphQL?
**Respuestas correctas: E (todas las anteriores)**
- A) Evolución del schema sin versiones explícitas ✓
- B) @deprecated para campos obsoletos ✓
- C) Agregar campos sin eliminar existentes ✓
- D) Documentar cambios breaking ✓
- E) Todas las anteriores ✓

### 134. ¿Qué son "directives" en GraphQL y para qué se usan?
**Respuestas correctas: E (todas las anteriores)**
- A) Instrucciones que modifican ejecución de queries ✓
- B) @skip, @include son built-in ✓
- C) @deprecated marca campos obsoletos ✓
- D) Se pueden crear custom directives ✓
- E) Todas las anteriores ✓

### 135. ¿Cómo optimizarías queries GraphQL complejas?
**Respuestas correctas: E (todas las anteriores)**
- A) Query complexity analysis ✓
- B) Depth limiting ✓
- C) Timeout en queries ✓
- D) Caché de resultados ✓
- E) Todas las anteriores ✓

### 136. ¿Qué es "introspection" en GraphQL y por qué es importante?
**Respuestas correctas: E (todas las anteriores)**
- A) Capacidad de consultar el schema mismo ✓
- B) Documentación automática del API ✓
- C) Exploración del schema disponible ✓
- D) Herramientas como GraphQL Playground ✓
- E) Todas las anteriores ✓

### 137. ¿Cómo manejarías relaciones complejas en GraphQL?
**Respuestas correctas: E (todas las anteriores)**
- A) Resolvers anidados para relaciones ✓
- B) DataLoader para optimizar cargas ✓
- C) Fragments para reutilizar campos ✓
- D) Aliases para múltiples consultas del mismo tipo ✓
- E) Todas las anteriores ✓

### 138. ¿Qué es "query complexity" y cómo se calcula?
**Respuestas correctas: E (todas las anteriores)**
- A) Métrica que mide complejidad de una query ✓
- B) Depende de profundidad y número de campos ✓
- C) Se usa para prevenir queries costosas ✓
- D) Configurable en el servidor ✓
- E) Todas las anteriores ✓

### 139. ¿Cómo implementarías rate limiting en GraphQL?
**Respuestas correctas: E (todas son válidas)**
- A) Por IP address ✓
- B) Por usuario autenticado ✓
- C) Basado en query complexity ✓
- D) Sliding window o fixed window ✓
- E) Todas las anteriores son válidas ✓

### 140. ¿Qué consideraciones hay al diseñar un schema GraphQL escalable?
**Respuestas correctas: E (todas las anteriores)**
- A) Evitar anidamiento excesivo ✓
- B) Usar paginación para listas ✓
- C) Nombres descriptivos y consistentes ✓
- D) Separar concerns en diferentes tipos ✓
- E) Todas las anteriores ✓

---

## SQL - Respuestas (141-160)

### 141. ¿Cómo optimizarías una consulta SQL que tiene un rendimiento deficiente?
**Respuestas correctas: E (todas las anteriores)**
- A) Analizar execution plan con EXPLAIN ✓
- B) Crear índices apropiados ✓
- C) Evitar funciones en WHERE clause ✓
- D) Optimizar JOINs y subconsultas ✓
- E) Todas las anteriores ✓

### 142. ¿Qué es la normalización en bases de datos y cuáles son sus niveles?
**Respuestas correctas: E (todas las anteriores)**
- A) Proceso de organizar datos para reducir redundancia ✓
- B) 1NF: Atomic values ✓
- C) 2NF: Eliminar dependencias parciales ✓
- D) 3NF: Eliminar dependencias transitivas ✓
- E) Todas las anteriores ✓

### 143. ¿Cómo manejarías una situación de deadlock en una base de datos?
**Respuestas correctas: E (todas las anteriores)**
- A) DBMS detecta y aborta una transacción ✓
- B) Mismo orden de locks en todas las transacciones ✓
- C) Timeouts en transacciones ✓
- D) Evitar transacciones largas ✓
- E) Todas las anteriores ✓

### 144. ¿Qué son las "vistas materializadas" y cuándo las utilizarías?
**Respuestas correctas: E (todas las anteriores)**
- A) Vistas que almacenan resultados físicamente ✓
- B) Mejoran performance de queries complejas ✓
- C) Requieren refresco periódico ✓
- D) Trade-off entre storage y performance ✓
- E) Todas las anteriores ✓

### 145. ¿Cómo implementarías la replicación en una base de datos SQL?
**Respuestas correctas: E (todas son válidas)**
- A) Master-slave replication ✓
- B) Master-master replication ✓
- C) Read replicas para distribuir carga ✓
- D) Sincronización de datos ✓
- E) Todas las anteriores son válidas ✓

### 146. ¿Qué es "denormalization" y cuándo se justifica?
**Respuestas correctas: E (todas las anteriores)**
- A) Agregar redundancia intencional ✓
- B) Mejorar performance de reads ✓
- C) Trade-off: redundancia vs performance ✓
- D) Puede complicar mantenimiento ✓
- E) Todas las anteriores ✓

### 147. ¿Cómo manejarías la migración de una base de datos en producción?
**Respuestas correctas: E (todas las anteriores)**
- A) Scripts de migración versionados ✓
- B) Backups antes de migraciones ✓
- C) Migraciones reversibles ✓
- D) Testing en staging primero ✓
- E) Todas las anteriores ✓

### 148. ¿Qué es "sharding" en bases de datos y cuándo se utiliza?
**Respuestas correctas: E (todas las anteriores)**
- A) Dividir datos horizontalmente en múltiples DBs ✓
- B) Escalar horizontalmente ✓
- C) Cada shard contiene subconjunto de datos ✓
- D) Requiere lógica de routing ✓
- E) Todas las anteriores ✓

### 149. ¿Cómo implementarías backup y recovery de una base de datos?
**Respuestas correctas: E (todas las anteriores)**
- A) Backups incrementales y completos ✓
- B) Point-in-time recovery ✓
- C) Testing regular de restauración ✓
- D) Almacenamiento fuera del sitio ✓
- E) Todas las anteriores ✓

### 150. ¿Qué es "connection pooling" y por qué es importante?
**Respuestas correctas: E (todas las anteriores)**
- A) Reutilizar conexiones a la base de datos ✓
- B) Reducir overhead de crear/cerrar conexiones ✓
- C) Mejorar performance de aplicaciones ✓
- D) Limitar número de conexiones simultáneas ✓
- E) Todas las anteriores ✓

### 151. ¿Cómo manejarías consistencia de datos en un sistema de base de datos distribuida?
**Respuestas correctas: E (todas son válidas)**
- A) Transacciones distribuidas (2PC, 3PC) ✓
- B) Eventual consistency ✓
- C) Conflict resolution strategies ✓
- D) Vector clocks para ordenamiento ✓
- E) Todas las anteriores son válidas ✓

### 152. ¿Qué es "query hint" en SQL y cuándo se usa?
**Respuestas correctas: E (todas las anteriores)**
- A) Instrucción al optimizador sobre ejecución ✓
- B) Forzar uso de índice específico ✓
- C) Debe usarse con precaución ✓
- D) Puede mejorar o empeorar performance ✓
- E) Todas las anteriores ✓

### 153. ¿Cómo implementarías auditoría en una base de datos?
**Respuestas correctas: E (todas son válidas)**
- A) Triggers para registrar cambios ✓
- B) Temporal tables para historial ✓
- C) Audit logs separados ✓
- D) Timestamps y usuarios en tablas ✓
- E) Todas las anteriores son válidas ✓

### 154. ¿Qué es "index selectivity" y cómo afecta el performance?
**Respuestas correctas: E (todas las anteriores)**
- A) Medida de qué tan único es un índice ✓
- B) Índices con alta selectividad son más útiles ✓
- C) Afecta decisión del optimizador ✓
- D) Columnas con muchos valores únicos tienen alta selectividad ✓
- E) Todas las anteriores ✓

### 155. ¿Cómo manejarías grandes volúmenes de datos (Big Data) en SQL?
**Respuestas correctas: E (todas las anteriores)**
- A) Partitioning de tablas ✓
- B) Archiving de datos antiguos ✓
- C) Data warehousing ✓
- D) Compression de datos ✓
- E) Todas las anteriores ✓

### 156. ¿Qué es "full-text search" en SQL y cómo se implementa?
**Respuestas correctas: E (todas las anteriores)**
- A) Búsqueda de texto completo en columnas ✓
- B) Más potente que LIKE ✓
- C) Usa índices especiales (full-text indexes) ✓
- D) Soporta ranking de resultados ✓
- E) Todas las anteriores ✓

### 157. ¿Cómo optimizarías JOINs en SQL?
**Respuestas correctas: E (todas las anteriores)**
- A) Índices en columnas de JOIN ✓
- B) Orden apropiado de tablas en JOIN ✓
- C) Usar INNER JOIN cuando sea posible ✓
- D) Evitar CROSS JOINs innecesarios ✓
- E) Todas las anteriores ✓

### 158. ¿Qué es "composite key" y cuándo se usa?
**Respuestas correctas: E (todas las anteriores)**
- A) Clave primaria de múltiples columnas ✓
- B) Útil cuando una columna no es suficiente ✓
- C) Todas las columnas juntas forman la clave ✓
- D) Puede afectar performance de JOINs ✓
- E) Todas las anteriores ✓

### 159. ¿Cómo manejarías transacciones largas en SQL?
**Respuestas correctas: E (todas las anteriores)**
- A) Dividir en transacciones más pequeñas ✓
- B) Usar savepoints ✓
- C) Optimistic locking cuando sea posible ✓
- D) Evitar locks de larga duración ✓
- E) Todas las anteriores ✓

### 160. ¿Qué es "temporal table" en SQL y para qué se usa?
**Respuestas correctas: E (todas las anteriores)**
- A) Tabla que mantiene historial de cambios ✓
- B) Sistema versionado de filas ✓
- C) Consultar datos en punto en el tiempo ✓
- D) Útil para auditoría y compliance ✓
- E) Todas las anteriores ✓

---

## Preguntas Generales - Respuestas (161-180)

### 161. ¿Cuál es la diferencia entre programación orientada a objetos y programación funcional?
**Respuestas correctas: E (A, B, C son correctas)**
- A) OOP usa clases y objetos, FP usa funciones puras ✓
- B) OOP enfatiza estado mutable, FP inmutabilidad ✓
- C) OOP: herencia y polimorfismo, FP: composición ✓
- D) Ambos paradigmas son mutuamente excluyentes (no lo son)
- E) A, B y C son correctas ✓

### 162. ¿Qué es inyección de dependencias y por qué es importante?
**Respuestas correctas: E (todas las anteriores)**
- A) Patrón de diseño para desacoplar componentes ✓
- B) Facilita testing y mantenibilidad ✓
- C) Permite cambiar implementaciones fácilmente ✓
- D) Reduce acoplamiento entre módulos ✓
- E) Todas las anteriores ✓

### 163. ¿Qué son los principios SOLID y cuáles son?
**Respuestas correctas: A, B, C, D, E (todos)**
- A) S: Single Responsibility ✓
- B) O: Open/Closed ✓
- C) L: Liskov Substitution ✓
- D) I: Interface Segregation ✓
- E) D: Dependency Inversion ✓

### 164. ¿Qué es la arquitectura de microservicios y cuáles son sus ventajas?
**Respuestas correctas: E (todas las anteriores)**
- A) Aplicación como conjunto de servicios independientes ✓
- B) Escalabilidad independiente por servicio ✓
- C) Tecnologías diferentes por servicio ✓
- D) Deployment independiente ✓
- E) Todas las anteriores ✓

### 165. ¿Cuáles son las desventajas de arquitectura de microservicios?
**Respuestas correctas: E (todas las anteriores)**
- A) Complejidad operacional aumentada ✓
- B) Network latency entre servicios ✓
- C) Manejo de transacciones distribuidas ✓
- D) Debugging más complejo ✓
- E) Todas las anteriores ✓

### 166. ¿Qué es TDD (Test-Driven Development) y cuáles son sus beneficios?
**Respuestas correctas: E (todas las anteriores)**
- A) Escribir tests antes del código ✓
- B) Mejor diseño de código ✓
- C) Cobertura de tests garantizada ✓
- D) Refactoring más seguro ✓
- E) Todas las anteriores ✓

### 167. ¿Cuál es la diferencia entre pruebas unitarias, de integración y de sistema?
**Respuestas correctas: E (todas las anteriores)**
- A) Unitarias: componentes aislados ✓
- B) Integración: componentes trabajando juntos ✓
- C) Sistema: aplicación completa ✓
- D) Diferentes niveles de granularidad ✓
- E) Todas las anteriores ✓

### 168. ¿Cómo manejarías la deuda técnica en un proyecto?
**Respuestas correctas: E (todas las anteriores)**
- A) Identificar y priorizar deuda crítica ✓
- B) Asignar tiempo regular para refactoring ✓
- C) Documentar deuda conocida ✓
- D) Prevenir nueva deuda con code reviews ✓
- E) Todas las anteriores ✓

### 169. ¿Cuáles son las vulnerabilidades más comunes en aplicaciones web?
**Respuestas correctas: E (todas las anteriores - OWASP Top 10)**
- A) SQL Injection ✓
- B) Cross-Site Scripting (XSS) ✓
- C) Cross-Site Request Forgery (CSRF) ✓
- D) Insecure Direct Object References ✓
- E) Todas las anteriores (OWASP Top 10) ✓

### 170. ¿Cómo preveniría inyección SQL en una aplicación?
**Respuestas correctas: E (todas las anteriores)**
- A) Usar prepared statements ✓
- B) Parameterized queries ✓
- C) Validar y sanitizar input ✓
- D) Least privilege en DB users ✓
- E) Todas las anteriores ✓

### 171. ¿Cómo implementaría autenticación multifactor (MFA)?
**Respuestas correctas: E (todas las anteriores)**
- A) Algo que sabes (password) ✓
- B) Algo que tienes (token, SMS) ✓
- C) Algo que eres (biometría) ✓
- D) Combinación de al menos dos factores ✓
- E) Todas las anteriores ✓

### 172. ¿Qué es el patrón de diseño Singleton y cuándo se usa?
**Respuestas correctas: E (todas las anteriores)**
- A) Garantiza una sola instancia de una clase ✓
- B) Útil para recursos compartidos (DB connection, logger) ✓
- C) Puede dificultar testing ✓
- D) Debe usarse con precaución ✓
- E) Todas las anteriores ✓

### 173. ¿Qué es el patrón Repository y para qué se usa?
**Respuestas correctas: E (todas las anteriores)**
- A) Abstrae acceso a datos ✓
- B) Facilita testing con mocks ✓
- C) Centraliza lógica de acceso a datos ✓
- D) Desacopla lógica de negocio de persistencia ✓
- E) Todas las anteriores ✓

### 174. ¿Cómo implementaría logging y monitoreo en producción?
**Respuestas correctas: E (todas las anteriores)**
- A) Logs estructurados (JSON) ✓
- B) Niveles apropiados (DEBUG, INFO, WARN, ERROR) ✓
- C) Centralización de logs (ELK, Splunk) ✓
- D) Métricas y alertas ✓
- E) Todas las anteriores ✓

### 175. ¿Qué es "event-driven architecture" y cuándo se usa?
**Respuestas correctas: E (todas las anteriores)**
- A) Arquitectura basada en eventos y mensajes ✓
- B) Desacoplamiento de componentes ✓
- C) Escalabilidad horizontal ✓
- D) Eventual consistency ✓
- E) Todas las anteriores ✓

### 176. ¿Cómo manejaría conflictos en un equipo de desarrollo?
**Respuestas correctas: E (todas las anteriores)**
- A) Comunicación abierta y transparente ✓
- B) Enfocarse en el problema, no en personas ✓
- C) Buscar soluciones colaborativas ✓
- D) Documentar decisiones importantes ✓
- E) Todas las anteriores ✓

### 177. ¿Qué métricas utilizaría para evaluar rendimiento de un equipo ágil?
**Respuestas correctas: E (todas las anteriores)**
- A) Velocity (story points por sprint) ✓
- B) Cycle time ✓
- C) Lead time ✓
- D) Burndown charts ✓
- E) Todas las anteriores ✓

### 178. ¿Cómo priorizaría tareas con múltiples proyectos y plazos ajustados?
**Respuestas correctas: E (todas las anteriores)**
- A) Matriz de priorización (urgente/importante) ✓
- B) Considerar impacto y esfuerzo ✓
- C) Comunicar con stakeholders ✓
- D) Delegar cuando sea apropiado ✓
- E) Todas las anteriores ✓

### 179. ¿Cómo mentorizaría a desarrolladores junior?
**Respuestas correctas: E (todas las anteriores)**
- A) Code reviews constructivos ✓
- B) Pair programming ✓
- C) Compartir conocimiento y recursos ✓
- D) Establecer objetivos de crecimiento ✓
- E) Todas las anteriores ✓

### 180. ¿Qué consideraciones tendrías al diseñar una API RESTful?
**Respuestas correctas: E (todas las anteriores)**
- A) Usar verbos HTTP apropiados (GET, POST, PUT, DELETE) ✓
- B) URLs semánticas y consistentes ✓
- C) Versionado de API ✓
- D) Documentación clara (OpenAPI/Swagger) ✓
- E) Todas las anteriores ✓

---

## Resumen

- **Total de preguntas adicionales: 80**
- **Todas las preguntas tienen al menos una respuesta correcta**
- **Muchas preguntas tienen múltiples respuestas correctas (marcadas con "Todas las anteriores")**

Estas respuestas complementan las 100 preguntas principales y te ayudarán a verificar tu conocimiento en todos los temas relevantes para el examen 360.

---

*Buena suerte en tu preparación!*

