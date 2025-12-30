# Guía Detallada de Escenarios Woven - Backend PHP

## Información General

**Tiempo total disponible:** 48 horas para completar todos los escenarios  
**Plataforma:** Qualified (editor online)  
**Code of Conduct:** No usar AI, no compartir soluciones, citar fuentes si usas código de otros

**⚠️ IMPORTANTE:** Configura una alarma a las 47 horas para recordar que tienes 1 hora restante.

---

## Escenario 1: Debugging a Problem with Limited Information

**⏱️ Tiempo límite: 35 minutos**  
**Tipo:** Análisis y debugging (no necesariamente código)

### ¿Qué están buscando?

1. **Cómo reúnes información sobre un problema en código**
   - ¿Qué pasos sigues para investigar?
   - ¿Qué herramientas usas?
   - ¿Cómo priorizas la información?

2. **Cómo investigas issues**
   - ¿Buscas en logs?
   - ¿Revisas documentación?
   - ¿Usas herramientas de debugging?
   - ¿Consultas con el equipo?

3. **Cómo documentas tu aprendizaje para que otros se beneficien**
   - ¿Escribes notas claras?
   - ¿Documentas el proceso de debugging?
   - ¿Creas documentación reutilizable?

4. **Cómo comunicas conceptos técnicos a otros ingenieros**
   - ¿Explicas el problema claramente?
   - ¿Proporcionas contexto técnico adecuado?
   - ¿Usas terminología apropiada?

5. **Cómo comunicas conceptos técnicos a no-ingenieros**
   - ¿Puedes explicar sin jerga técnica?
   - ¿Usas analogías cuando es apropiado?
   - ¿Te enfocas en el impacto del problema?

### Estrategia de Preparación

#### Conceptos a Revisar

**Debugging Techniques:**
- [ ] Logging y análisis de logs
- [ ] Uso de debuggers (Xdebug para PHP)
- [ ] Error tracking (Sentry, Bugsnag)
- [ ] Stack traces y cómo leerlos
- [ ] Reproducción de bugs

**Investigación de Problemas:**
- [ ] Cómo leer reportes de bugs de soporte
- [ ] Identificar información faltante
- [ ] Preguntas clave para hacer a usuarios/soporte
- [ ] Análisis de código legacy
- [ ] Revisión de historial de cambios (Git)

**Documentación:**
- [ ] Cómo escribir reportes de bugs claros
- [ ] Documentar pasos de debugging
- [ ] Crear runbooks para problemas comunes
- [ ] Escribir post-mortems

**Comunicación:**
- [ ] Explicar problemas técnicos a no-técnicos
- [ ] Estructurar explicaciones técnicas
- [ ] Usar diagramas cuando sea útil

#### Ejercicios de Práctica

1. **Práctica de Análisis de Bugs:**
   - Toma un bug report real o simulado
   - Identifica qué información falta
   - Lista las preguntas que harías
   - Documenta tu proceso de investigación

2. **Práctica de Comunicación:**
   - Explica un bug técnico a un desarrollador
   - Explica el mismo bug a alguien no técnico
   - Compara los dos enfoques

3. **Práctica de Documentación:**
   - Documenta un proceso de debugging que hayas hecho
   - Crea un runbook para un problema común
   - Escribe un post-mortem de un incidente

### Estrategia Durante el Escenario

**Minutos 0-5: Leer y entender**
- [ ] Leer el bug report completamente
- [ ] Identificar qué información tienes
- [ ] Identificar qué información falta
- [ ] Entender el contexto del problema

**Minutos 5-25: Investigar y analizar**
- [ ] Listar pasos de investigación
- [ ] Identificar herramientas y recursos a usar
- [ ] Documentar hipótesis
- [ ] Planear cómo reunir información faltante

**Minutos 25-30: Documentar**
- [ ] Documentar el proceso de debugging
- [ ] Crear documentación para otros
- [ ] Escribir explicaciones claras

**Minutos 30-35: Comunicar**
- [ ] Escribir comunicación para ingenieros
- [ ] Escribir comunicación para no-ingenieros
- [ ] Revisar y pulir

### Ejemplo de Estructura de Respuesta

```
1. ANÁLISIS DEL PROBLEMA
   - Información disponible
   - Información faltante
   - Hipótesis iniciales

2. PROCESO DE INVESTIGACIÓN
   - Pasos que seguiría
   - Herramientas a usar
   - Preguntas a hacer

3. DOCUMENTACIÓN
   - Notas del debugging
   - Runbook o guía
   - Lecciones aprendidas

4. COMUNICACIÓN
   - Para ingenieros: [explicación técnica]
   - Para no-ingenieros: [explicación simple]
```

---

## Escenario 2: Check Which Pages Users Are Authorized to Access

**⏱️ Tiempo límite: 45 minutos**  
**Tipo:** Escenario de código (puedes elegir el lenguaje)

### ¿Qué están buscando?

1. **¿Tu código aborda los requisitos principales?**
   - ¿Resuelve el problema planteado?
   - ¿Implementa la funcionalidad requerida?

2. **¿Manejaste casos edge?**
   - ¿Qué pasa con usuarios sin permisos?
   - ¿Qué pasa con páginas que no existen?
   - ¿Qué pasa con datos inválidos?

3. **¿Son claros los nombres de variables y funciones?**
   - ¿Los nombres son descriptivos?
   - ¿El código es auto-documentado?

4. **¿Qué tan buena es la estructura general del código?**
   - ¿Las funciones tienen el tamaño adecuado?
   - ¿Hay código hardcodeado que debería ser configurable?
   - ¿El código es modular y reutilizable?

5. **¿Agregaste tests útiles más allá de los proporcionados?**
   - ¿Tests para casos edge?
   - ¿Tests para casos de error?
   - ¿Tests para casos límite?

6. **¿Dejaste comentarios útiles explicando tradeoffs o patrones poco claros?**
   - ¿Explicas decisiones de diseño?
   - ¿Documentas por qué elegiste un enfoque?
   - ¿Mencionas alternativas consideradas?

### Conceptos de Programación a Revisar

#### Fundamentos (si necesitas repasar)

**Iteración:**
```php
// For loops
for ($i = 0; $i < count($array); $i++) { }

// Foreach
foreach ($array as $item) { }
foreach ($array as $key => $value) { }

// Funcional
array_map(function($item) { }, $array);
array_filter($array, function($item) { });
```

**Inspección de variables:**
```php
var_dump($variable);
print_r($variable);
error_log(print_r($variable, true));
```

**Clases y Objetos:**
```php
// Inicializar objeto
$user = new User();

// Obtener propiedades
$name = $user->name;
$name = $user->getName();

// Establecer propiedades
$user->name = 'John';
$user->setName('John');

// Llamar métodos
$user->save();
```

**Estructuras de Datos:**
```php
// Arrays
$array = [1, 2, 3];
$array = ['key' => 'value'];

// Acceso
$value = $array[0];
$value = $array['key'];

// Agregar
$array[] = 'new';
$array['new_key'] = 'value';
```

**Conversión de Tipos:**
```php
// String a integer
$int = (int) $string;
$int = intval($string);

// Obtener propiedades de objeto
$value = $object->property;
$value = $object->getProperty();

// Array a string (para debugging)
$string = print_r($array, true);
```

### Estrategia de Preparación

#### Conceptos Específicos para Autorización

**Sistemas de Permisos:**
- [ ] Role-Based Access Control (RBAC)
- [ ] Permission-based systems
- [ ] Hierarchical permissions
- [ ] Resource-level permissions

**Implementación en PHP:**
```php
// Ejemplo básico de verificación
function canAccessPage(User $user, Page $page): bool {
    // Verificar roles
    if (in_array('admin', $user->roles)) {
        return true;
    }
    
    // Verificar permisos específicos
    return in_array($page->id, $user->allowedPages);
}

// Con cache
function canAccessPage(User $user, Page $page): bool {
    $cacheKey = "access:{$user->id}:{$page->id}";
    
    if ($cached = Cache::get($cacheKey)) {
        return $cached;
    }
    
    $allowed = checkPermissions($user, $page);
    Cache::put($cacheKey, $allowed, 3600);
    
    return $allowed;
}
```

**Casos Edge a Considerar:**
- [ ] Usuario sin roles/permissions
- [ ] Página que no existe
- [ ] Usuario deshabilitado
- [ ] Permisos heredados
- [ ] Cache inválido
- [ ] Múltiples roles con conflictos
- [ ] Permisos temporales (expiran)

**Testing:**
```php
// Tests básicos
public function test_admin_can_access_all_pages() { }
public function test_user_can_only_access_authorized_pages() { }
public function test_unauthorized_user_cannot_access_page() { }
public function test_nonexistent_page_returns_false() { }
public function test_user_without_roles_cannot_access() { }
```

#### Ejercicios de Práctica

1. **Implementar sistema de autorización básico:**
   - Crear función que verifica acceso
   - Manejar diferentes tipos de usuarios
   - Incluir casos edge

2. **Escribir tests completos:**
   - Tests para casos felices
   - Tests para casos edge
   - Tests para casos de error

3. **Refactorizar código:**
   - Mejorar nombres de variables/funciones
   - Extraer funciones reutilizables
   - Eliminar código hardcodeado

### Estrategia Durante el Escenario

**Minutos 0-5: Entender el problema**
- [ ] Leer el escenario completamente
- [ ] Identificar requisitos principales
- [ ] Identificar casos edge
- [ ] Entender la estructura de datos proporcionada

**Minutos 5-10: Planear la solución**
- [ ] Diseñar la estructura del código
- [ ] Identificar funciones necesarias
- [ ] Planear manejo de casos edge
- [ ] Pensar en tests adicionales

**Minutos 10-35: Implementar**
- [ ] Escribir código limpio y claro
- [ ] Implementar funcionalidad principal
- [ ] Manejar casos edge
- [ ] Agregar comentarios donde sea necesario
- [ ] Escribir tests adicionales

**Minutos 35-40: Revisar y refactorizar**
- [ ] Revisar nombres de variables/funciones
- [ ] Verificar que no hay código hardcodeado
- [ ] Asegurar que funciones tienen tamaño adecuado
- [ ] Verificar estructura general

**Minutos 40-45: Pulir y documentar**
- [ ] Agregar comentarios explicando decisiones
- [ ] Documentar tradeoffs
- [ ] Revisar tests
- [ ] Verificar que todo funciona

### Estructura de Código Recomendada

```php
<?php

/**
 * Verifica si un usuario tiene autorización para acceder a una página
 * 
 * @param User $user El usuario a verificar
 * @param string $pageId El ID de la página
 * @return bool True si el usuario tiene acceso, false en caso contrario
 */
function isUserAuthorizedForPage(User $user, string $pageId): bool {
    // Casos edge primero
    if (empty($pageId)) {
        return false;
    }
    
    if (!$user || !$user->isActive()) {
        return false;
    }
    
    // Lógica principal
    // ...
    
    return $hasAccess;
}

// Tests
class AuthorizationTest {
    public function testAdminCanAccessAllPages() { }
    public function testUserCanAccessAuthorizedPages() { }
    public function testUnauthorizedUserCannotAccess() { }
    // ... más tests
}
```

---

## Escenario 3: Describe Basic Steps in Deploying a Single Page App with Cloud Service

**⏱️ Tiempo límite: 20 minutos**  
**Tipo:** Escritura/planificación (no código)

### ¿Qué están buscando?

1. **¿Qué tan bien conoces varias partes de un servicio cloud básico?**
   - ¿Conoces diferentes servicios disponibles?
   - ¿Entiendes cómo se integran?

2. **¿Puedes escribir un plan para desplegar un SPA usando herramientas de un proveedor cloud?**
   - ¿El plan es claro y ejecutable?
   - ¿Cubre todos los pasos necesarios?

3. **Breadth (Amplitud) y Depth (Profundidad)**
   - **Breadth:** ¿Cubres múltiples áreas/tools?
   - **Depth:** ¿Profundizas adecuadamente en cada área?
   - **Valor:** Cubrir 3 áreas con detalle adecuado > 1 área muy detallada

### Notas Importantes

- **Puedes elegir cualquier proveedor:** AWS, GCP, Azure, etc.
- **No hay requisitos específicos:** Puedes hacer suposiciones razonables
- **Debes declarar tus suposiciones:** Menciona claramente qué asumes
- **Es un escenario rápido:** Gestiona tu tiempo bien

### Estrategia de Preparación

#### Conceptos de Cloud Services

**Para AWS:**
- [ ] S3 (Static website hosting)
- [ ] CloudFront (CDN)
- [ ] Route 53 (DNS)
- [ ] IAM (Permisos y seguridad)
- [ ] CloudFormation / Terraform (Infraestructura como código)

**Para GCP:**
- [ ] Cloud Storage (Static hosting)
- [ ] Cloud CDN
- [ ] Cloud Load Balancing
- [ ] IAM
- [ ] Deployment Manager

**Para Azure:**
- [ ] Azure Blob Storage (Static websites)
- [ ] Azure CDN
- [ ] Azure DNS
- [ ] Azure RBAC
- [ ] ARM Templates

#### Conceptos de Deployment de SPA

**Build Process:**
- [ ] Compilación (npm run build, etc.)
- [ ] Optimización de assets
- [ ] Minificación
- [ ] Generación de archivos estáticos

**Hosting:**
- [ ] Static website hosting
- [ ] CDN para distribución
- [ ] Configuración de rutas (SPA routing)
- [ ] HTTPS/SSL

**CI/CD:**
- [ ] Pipeline de build
- [ ] Testing automatizado
- [ ] Deployment automatizado
- [ ] Rollback strategy

**Monitoring y Logging:**
- [ ] Error tracking
- [ ] Analytics
- [ ] Performance monitoring

### Estrategia Durante el Escenario

**Minutos 0-2: Planear**
- [ ] Elegir proveedor cloud
- [ ] Listar áreas a cubrir (3-4 áreas)
- [ ] Hacer suposiciones claras
- [ ] Estructurar el plan

**Minutos 2-15: Escribir**
- [ ] Cubrir cada área con detalle adecuado
- [ ] Incluir pasos específicos
- [ ] Mencionar herramientas específicas
- [ ] Explicar decisiones

**Minutos 15-18: Revisar amplitud**
- [ ] Verificar que cubres múltiples áreas
- [ ] Asegurar profundidad adecuada en cada una
- [ ] Balancear breadth y depth

**Minutos 18-20: Pulir**
- [ ] Verificar que suposiciones están claras
- [ ] Revisar claridad del plan
- [ ] Asegurar que es ejecutable

### Estructura de Respuesta Recomendada

```
ASUNCIONES:
- [Listar suposiciones claramente]

PROVEEDOR ELEGIDO: [AWS/GCP/Azure]

PLAN DE DEPLOYMENT:

1. PREPARACIÓN Y BUILD
   - Pasos específicos
   - Herramientas usadas
   - Configuración necesaria

2. HOSTING ESTÁTICO
   - Servicio usado (S3/Cloud Storage/Blob Storage)
   - Configuración
   - Permisos y seguridad

3. CDN Y DISTRIBUCIÓN
   - Servicio usado (CloudFront/Cloud CDN/Azure CDN)
   - Configuración de caché
   - Optimizaciones

4. DNS Y RUTING
   - Configuración de DNS
   - Manejo de rutas SPA
   - Redirecciones

5. CI/CD (Opcional pero valorado)
   - Pipeline de build
   - Automatización
   - Testing

6. MONITORING Y SEGURIDAD
   - Herramientas de monitoreo
   - SSL/HTTPS
   - Seguridad adicional

CONSIDERACIONES ADICIONALES:
- Rollback strategy
- Costos
- Escalabilidad
```

### Ejemplo de Respuesta (AWS)

```
ASUNCIONES:
- SPA construida con React/Vue/Angular
- Build process genera archivos estáticos
- Dominio propio disponible
- Requiere HTTPS
- Esperamos tráfico moderado inicialmente

PROVEEDOR: AWS

PLAN DE DEPLOYMENT:

1. BUILD Y PREPARACIÓN
   - Ejecutar `npm run build` localmente o en CI/CD
   - Generar archivos optimizados en carpeta `dist/`
   - Verificar que todos los assets están incluidos

2. HOSTING EN S3
   - Crear bucket S3 para hosting estático
   - Habilitar "Static website hosting"
   - Subir archivos de build a S3
   - Configurar index.html como documento índice
   - Configurar error.html para manejar rutas SPA (redirigir a index.html)

3. CLOUDFRONT (CDN)
   - Crear distribución CloudFront apuntando al bucket S3
   - Configurar origen como S3 bucket
   - Habilitar compresión (gzip/brotli)
   - Configurar caché:
     * HTML: Cache-Control: no-cache (para actualizaciones rápidas)
     * JS/CSS: Cache-Control: max-age=31536000 (1 año)
     * Assets estáticos: Cache-Control: max-age=86400 (1 día)
   - Configurar error pages: 404 y 403 redirigen a index.html (para SPA routing)

4. ROUTE 53 (DNS)
   - Crear hosted zone para el dominio
   - Crear registro A alias apuntando a CloudFront
   - Configurar registro CNAME si es necesario

5. SSL/HTTPS
   - Solicitar certificado SSL en AWS Certificate Manager (ACM)
   - Asociar certificado a CloudFront
   - Forzar HTTPS en CloudFront

6. CI/CD (Opcional pero recomendado)
   - Usar GitHub Actions / GitLab CI / AWS CodePipeline
   - Pipeline:
     a. Checkout código
     b. Instalar dependencias (npm install)
     c. Ejecutar tests
     d. Build (npm run build)
     e. Sincronizar con S3 (aws s3 sync)
     f. Invalidar caché de CloudFront

CONSIDERACIONES:
- Costos: S3 storage + CloudFront data transfer
- Escalabilidad: CloudFront escala automáticamente
- Rollback: Mantener versiones anteriores en S3, cambiar origen si es necesario
- Monitoring: Usar CloudWatch para monitorear requests y errores
```

---

## Checklist Final Pre-Evaluación

### Preparación General
- [ ] Leído completamente la guía de preparación de Woven
- [ ] Probado el editor Qualified (30-60 minutos)
- [ ] Revisado conceptos clave (30-60 minutos)
- [ ] Configurado alarma a las 47 horas

### Escenario 1: Debugging
- [ ] Revisado técnicas de debugging
- [ ] Practicado análisis de bug reports
- [ ] Practicado comunicación técnica y no-técnica
- [ ] Revisado cómo documentar procesos de debugging

### Escenario 2: Autorización
- [ ] Revisado conceptos de RBAC y permisos
- [ ] Practicado implementación de sistemas de autorización
- [ ] Revisado manejo de casos edge
- [ ] Practicado escritura de tests
- [ ] Revisado conceptos básicos de programación si es necesario

### Escenario 3: Deployment
- [ ] Elegido proveedor cloud (AWS/GCP/Azure)
- [ ] Revisado servicios principales del proveedor elegido
- [ ] Revisado conceptos de deployment de SPAs
- [ ] Practicado escribir planes de deployment

### Code of Conduct
- [ ] Entendido que NO se puede usar AI
- [ ] Entendido que se debe citar fuentes si se usa código de otros
- [ ] Entendido que NO se puede compartir escenarios o soluciones

---

**¡Éxito en tu evaluación!**

---

*Última actualización: 2025*

