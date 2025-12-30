# Guía de Estudio para Evaluación Woven - Backend PHP

## Plan de Estudio Recomendado

### Opción 1: Preparación Intensiva (1 semana)
- **Día 1-2:** PHP Core y Fundamentos
- **Día 3:** Bases de Datos y ORM
- **Día 4:** APIs REST y Autenticación
- **Día 5:** Arquitectura y Patrones
- **Día 6:** Seguridad y Performance
- **Día 7:** Práctica y Repaso

### Opción 2: Preparación Extendida (2-3 semanas)
- **Semana 1:** Fundamentos (PHP Core, Bases de Datos, APIs)
- **Semana 2:** Avanzado (Arquitectura, Patrones, Frameworks)
- **Semana 3:** Práctica y Refinamiento

---

## 1. PHP Core y Fundamentos

### 1.1 PHP Moderno (7.4+)

#### Conceptos Clave a Estudiar

**Typed Properties (PHP 7.4+)**
```php
class User {
    public string $name;
    public int $age;
    private ?string $email = null; // nullable
}
```

**Arrow Functions (PHP 7.4+)**
```php
$numbers = [1, 2, 3, 4];
$doubled = array_map(fn($n) => $n * 2, $numbers);
```

**Spread Operator en Arrays**
```php
$array1 = [1, 2, 3];
$array2 = [4, 5, 6];
$merged = [...$array1, ...$array2];
```

**Null Coalescing Assignment Operator (??=)**
```php
$data['key'] ??= 'default';
```

#### Recursos de Estudio
- [ ] [PHP Manual - Type Declarations](https://www.php.net/manual/en/language.types.declarations.php)
- [ ] [PHP The Right Way - Type Declarations](https://phptherightway.com/#type_declarations)
- [ ] [PHP 7.4 Release Notes](https://www.php.net/releases/7.4/en.php)

#### Ejercicios Prácticos
- [ ] Crear una clase con typed properties
- [ ] Refactorizar código antiguo usando arrow functions
- [ ] Practicar con spread operator y null coalescing

---

### 1.2 Programación Orientada a Objetos (OOP)

#### Conceptos Clave

**Clases, Interfaces, Traits**
```php
// Interface
interface PaymentInterface {
    public function process(float $amount): bool;
}

// Trait
trait Loggable {
    public function log(string $message): void {
        // logging logic
    }
}

// Clase
class CreditCardPayment implements PaymentInterface {
    use Loggable;
    
    public function process(float $amount): bool {
        $this->log("Processing payment: $amount");
        // payment logic
        return true;
    }
}
```

**Namespaces y Autoloading (PSR-4)**
```php
namespace App\Services;

class UserService {
    // ...
}
```

**composer.json para PSR-4:**
```json
{
    "autoload": {
        "psr-4": {
            "App\\": "src/"
        }
    }
}
```

#### Recursos de Estudio
- [ ] [PHP Manual - Classes and Objects](https://www.php.net/manual/en/language.oop5.php)
- [ ] [PHP Manual - Namespaces](https://www.php.net/manual/en/language.namespaces.php)
- [ ] [PSR-4 Autoloading Standard](https://www.php-fig.org/psr/psr-4/)
- [ ] [PHP The Right Way - OOP](https://phptherightway.com/#object_oriented_programming)

#### Ejercicios Prácticos
- [ ] Crear una jerarquía de clases con herencia
- [ ] Implementar interfaces y traits
- [ ] Configurar autoloading PSR-4 con Composer
- [ ] Crear un sistema de namespaces bien organizado

---

### 1.3 Manejo de Errores y Excepciones

#### Conceptos Clave

**Try-Catch-Finally**
```php
try {
    $result = riskyOperation();
} catch (SpecificException $e) {
    // handle specific exception
    logError($e->getMessage());
} catch (Exception $e) {
    // handle general exception
    logError($e->getMessage());
} finally {
    // cleanup code
    cleanup();
}
```

**Custom Exceptions**
```php
class ValidationException extends Exception {
    private array $errors;
    
    public function __construct(array $errors, string $message = "Validation failed") {
        $this->errors = $errors;
        parent::__construct($message);
    }
    
    public function getErrors(): array {
        return $this->errors;
    }
}
```

#### Recursos de Estudio
- [ ] [PHP Manual - Exceptions](https://www.php.net/manual/en/language.exceptions.php)
- [ ] [PHP The Right Way - Error Handling](https://phptherightway.com/#error_handling)

#### Ejercicios Prácticos
- [ ] Crear excepciones personalizadas
- [ ] Implementar manejo de errores en una API
- [ ] Practicar con try-catch-finally

---

### 1.4 Generators e Iterators

#### Conceptos Clave

**Generators para Memoria Eficiente**
```php
function readLargeFile(string $filename): Generator {
    $handle = fopen($filename, 'r');
    while (($line = fgets($handle)) !== false) {
        yield trim($line);
    }
    fclose($handle);
}

// Uso
foreach (readLargeFile('large.txt') as $line) {
    processLine($line);
}
```

#### Recursos de Estudio
- [ ] [PHP Manual - Generators](https://www.php.net/manual/en/language.generators.php)
- [ ] [PHP Manual - Iterators](https://www.php.net/manual/en/class.iterator.php)

#### Ejercicios Prácticos
- [ ] Crear un generator para procesar archivos grandes
- [ ] Implementar un Iterator personalizado

---

## 2. Bases de Datos y ORM

### 2.1 MySQL/MariaDB - Queries Avanzadas

#### Conceptos Clave a Estudiar

**JOINs**
```sql
-- INNER JOIN
SELECT u.name, o.total
FROM users u
INNER JOIN orders o ON u.id = o.user_id;

-- LEFT JOIN
SELECT u.name, COUNT(o.id) as order_count
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id;

-- RIGHT JOIN y FULL OUTER JOIN (si aplica)
```

**Subqueries y CTEs**
```sql
-- Subquery
SELECT * FROM users
WHERE id IN (SELECT user_id FROM orders WHERE total > 1000);

-- CTE (Common Table Expression)
WITH high_value_orders AS (
    SELECT user_id, SUM(total) as total_spent
    FROM orders
    GROUP BY user_id
    HAVING SUM(total) > 1000
)
SELECT u.name, hvo.total_spent
FROM users u
INNER JOIN high_value_orders hvo ON u.id = hvo.user_id;
```

**Índices y Optimización**
```sql
-- Crear índices
CREATE INDEX idx_user_email ON users(email);
CREATE INDEX idx_order_user_date ON orders(user_id, created_at);

-- EXPLAIN para analizar queries
EXPLAIN SELECT * FROM users WHERE email = 'test@example.com';
```

**Transacciones ACID**
```sql
START TRANSACTION;

INSERT INTO orders (user_id, total) VALUES (1, 100.00);
UPDATE users SET balance = balance - 100.00 WHERE id = 1;

COMMIT; -- o ROLLBACK si hay error
```

#### Recursos de Estudio
- [ ] [MySQL JOIN Tutorial](https://www.mysqltutorial.org/mysql-join/)
- [ ] [MySQL Index Tutorial](https://www.mysqltutorial.org/mysql-indexes/)
- [ ] [MySQL Transactions](https://www.mysqltutorial.org/mysql-transaction.aspx)
- [ ] [SQL Performance Explained](https://use-the-index-luke.com/)

#### Ejercicios Prácticos
- [ ] Escribir queries complejas con múltiples JOINs
- [ ] Optimizar queries lentas usando índices
- [ ] Implementar transacciones en código PHP
- [ ] Analizar queries con EXPLAIN

---

### 2.2 PDO y Prepared Statements

#### Conceptos Clave

**Conexión y Queries Seguras**
```php
// Conexión
$pdo = new PDO(
    'mysql:host=localhost;dbname=mydb',
    'username',
    'password',
    [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
);

// Prepared Statement - SELECT
$stmt = $pdo->prepare('SELECT * FROM users WHERE email = :email');
$stmt->execute(['email' => $email]);
$user = $stmt->fetch(PDO::FETCH_ASSOC);

// Prepared Statement - INSERT
$stmt = $pdo->prepare('INSERT INTO users (name, email) VALUES (:name, :email)');
$stmt->execute([
    'name' => $name,
    'email' => $email
]);

// Transacciones
$pdo->beginTransaction();
try {
    $pdo->exec('INSERT INTO orders ...');
    $pdo->exec('UPDATE users ...');
    $pdo->commit();
} catch (Exception $e) {
    $pdo->rollBack();
    throw $e;
}
```

#### Recursos de Estudio
- [ ] [PHP Manual - PDO](https://www.php.net/manual/en/book.pdo.php)
- [ ] [PHP The Right Way - Databases](https://phptherightway.com/#databases)

#### Ejercicios Prácticos
- [ ] Crear una clase Database con PDO
- [ ] Implementar métodos para CRUD operations
- [ ] Practicar con transacciones
- [ ] Crear queries parametrizadas para prevenir SQL injection

---

### 2.3 ORM - Eloquent (Laravel)

#### Conceptos Clave

**Modelos y Relaciones**
```php
// Model
class User extends Model {
    protected $fillable = ['name', 'email'];
    
    // Relación uno a muchos
    public function orders() {
        return $this->hasMany(Order::class);
    }
    
    // Relación muchos a muchos
    public function roles() {
        return $this->belongsToMany(Role::class);
    }
}

// Uso
$user = User::find(1);
$orders = $user->orders()->where('status', 'completed')->get();

// Eager Loading para evitar N+1
$users = User::with('orders')->get();
```

**Query Builder**
```php
// Consultas complejas
$users = User::where('active', true)
    ->whereHas('orders', function($query) {
        $query->where('total', '>', 1000);
    })
    ->orderBy('created_at', 'desc')
    ->limit(10)
    ->get();

// Agregaciones
$total = Order::where('user_id', $userId)
    ->sum('total');

$average = Order::avg('total');
```

**Migrations**
```php
// Crear tabla
Schema::create('users', function (Blueprint $table) {
    $table->id();
    $table->string('name');
    $table->string('email')->unique();
    $table->timestamps();
});

// Modificar tabla
Schema::table('users', function (Blueprint $table) {
    $table->string('phone')->nullable();
});
```

#### Recursos de Estudio
- [ ] [Laravel Eloquent Documentation](https://laravel.com/docs/eloquent)
- [ ] [Laravel Migrations](https://laravel.com/docs/migrations)
- [ ] [Eloquent Relationships](https://laravel.com/docs/eloquent-relationships)

#### Ejercicios Prácticos
- [ ] Crear modelos con relaciones
- [ ] Escribir queries complejas con Eloquent
- [ ] Crear y ejecutar migrations
- [ ] Optimizar queries con eager loading

---

## 3. APIs REST y Autenticación

### 3.1 Diseño de APIs RESTful

#### Conceptos Clave

**Rutas RESTful**
```
GET    /api/users          - Listar usuarios
GET    /api/users/{id}     - Obtener usuario
POST   /api/users          - Crear usuario
PUT    /api/users/{id}     - Actualizar usuario completo
PATCH  /api/users/{id}     - Actualizar usuario parcial
DELETE /api/users/{id}     - Eliminar usuario
```

**Códigos de Estado HTTP**
- `200 OK` - Éxito
- `201 Created` - Recurso creado
- `204 No Content` - Éxito sin contenido
- `400 Bad Request` - Solicitud inválida
- `401 Unauthorized` - No autenticado
- `403 Forbidden` - No autorizado
- `404 Not Found` - Recurso no encontrado
- `422 Unprocessable Entity` - Validación fallida
- `500 Internal Server Error` - Error del servidor

**Estructura de Respuesta**
```php
// Éxito
return response()->json([
    'data' => $user,
    'message' => 'User retrieved successfully'
], 200);

// Error
return response()->json([
    'error' => 'Validation failed',
    'errors' => $validationErrors
], 422);
```

#### Recursos de Estudio
- [ ] [REST API Tutorial](https://restfulapi.net/)
- [ ] [HTTP Status Codes](https://httpstatuses.com/)
- [ ] [RESTful API Design Best Practices](https://restfulapi.net/)

#### Ejercicios Prácticos
- [ ] Diseñar rutas RESTful para un sistema de e-commerce
- [ ] Implementar endpoints con códigos de estado apropiados
- [ ] Crear estructura de respuestas consistente

---

### 3.2 Validación de Datos

#### Conceptos Clave

**Validación Manual**
```php
function validateUserData(array $data): array {
    $errors = [];
    
    if (empty($data['name'])) {
        $errors['name'] = 'Name is required';
    }
    
    if (empty($data['email']) || !filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
        $errors['email'] = 'Valid email is required';
    }
    
    return $errors;
}
```

**Validación con Laravel**
```php
$validated = $request->validate([
    'name' => 'required|string|max:255',
    'email' => 'required|email|unique:users,email',
    'age' => 'required|integer|min:18|max:100',
    'password' => 'required|string|min:8|confirmed'
]);
```

#### Recursos de Estudio
- [ ] [Laravel Validation](https://laravel.com/docs/validation)
- [ ] [PHP Filter Functions](https://www.php.net/manual/en/book.filter.php)

#### Ejercicios Prácticos
- [ ] Crear validadores personalizados
- [ ] Implementar validación en endpoints de API
- [ ] Manejar mensajes de error apropiados

---

### 3.3 Autenticación y Autorización

#### Conceptos Clave

**JWT (JSON Web Tokens)**
```php
// Generar token
use Firebase\JWT\JWT;

$payload = [
    'user_id' => $user->id,
    'email' => $user->email,
    'exp' => time() + 3600 // 1 hora
];

$token = JWT::encode($payload, $secretKey, 'HS256');

// Validar token
try {
    $decoded = JWT::decode($token, $secretKey, ['HS256']);
    $userId = $decoded->user_id;
} catch (Exception $e) {
    // Token inválido
}
```

**API Keys**
```php
// Middleware para API Key
class ApiKeyMiddleware {
    public function handle($request, $next) {
        $apiKey = $request->header('X-API-Key');
        
        if (!$apiKey || !$this->isValidApiKey($apiKey)) {
            return response()->json(['error' => 'Invalid API key'], 401);
        }
        
        return $next($request);
    }
}
```

**OAuth 2.0 (Conceptos)**
- Authorization Code Flow
- Client Credentials Flow
- Resource Owner Password Credentials (no recomendado)

#### Recursos de Estudio
- [ ] [JWT.io](https://jwt.io/) - Para entender JWT
- [ ] [Laravel Sanctum](https://laravel.com/docs/sanctum) - Autenticación API
- [ ] [OAuth 2.0 Simplified](https://www.oauth.com/)

#### Ejercicios Prácticos
- [ ] Implementar autenticación JWT
- [ ] Crear middleware de autenticación
- [ ] Implementar sistema de API keys
- [ ] Crear sistema de roles y permisos

---

### 3.4 Rate Limiting

#### Conceptos Clave

**Implementación Básica**
```php
class RateLimiter {
    private Redis $redis;
    
    public function check(string $key, int $maxRequests, int $windowSeconds): bool {
        $current = $this->redis->incr($key);
        
        if ($current === 1) {
            $this->redis->expire($key, $windowSeconds);
        }
        
        return $current <= $maxRequests;
    }
}

// Uso
$limiter = new RateLimiter();
if (!$limiter->check("api:user:{$userId}", 100, 3600)) {
    return response()->json(['error' => 'Rate limit exceeded'], 429);
}
```

#### Recursos de Estudio
- [ ] [Laravel Rate Limiting](https://laravel.com/docs/routing#rate-limiting)
- [ ] [Redis Documentation](https://redis.io/docs/)

#### Ejercicios Prácticos
- [ ] Implementar rate limiting básico
- [ ] Crear rate limiting por usuario/IP
- [ ] Implementar diferentes límites por endpoint

---

## 4. Arquitectura y Patrones de Diseño

### 4.1 Patrones Arquitectónicos

#### MVC (Model-View-Controller)
```
Model: Lógica de negocio y datos
View: Presentación (en APIs, respuestas JSON)
Controller: Coordina entre Model y View
```

#### Repository Pattern
```php
interface UserRepositoryInterface {
    public function find(int $id): ?User;
    public function findAll(): array;
    public function save(User $user): void;
    public function delete(int $id): void;
}

class UserRepository implements UserRepositoryInterface {
    public function find(int $id): ?User {
        return User::find($id);
    }
    // ...
}
```

#### Service Layer Pattern
```php
class UserService {
    private UserRepositoryInterface $repository;
    
    public function __construct(UserRepositoryInterface $repository) {
        $this->repository = $repository;
    }
    
    public function createUser(array $data): User {
        // Validación
        // Lógica de negocio
        // Crear usuario
        return $this->repository->save($user);
    }
}
```

#### Recursos de Estudio
- [ ] [Repository Pattern in PHP](https://designpatternsphp.readthedocs.io/en/latest/More/Repository/README.html)
- [ ] [Service Layer Pattern](https://martinfowler.com/eaaCatalog/serviceLayer.html)

#### Ejercicios Prácticos
- [ ] Implementar Repository Pattern
- [ ] Crear Service Layer para lógica de negocio
- [ ] Refactorizar código existente usando estos patrones

---

### 4.2 SOLID Principles

#### Single Responsibility Principle (SRP)
```php
// ❌ Mal
class User {
    public function save() { }
    public function sendEmail() { }
    public function generateReport() { }
}

// ✅ Bien
class User {
    public function save() { }
}

class EmailService {
    public function sendToUser(User $user) { }
}

class ReportGenerator {
    public function generateForUser(User $user) { }
}
```

#### Open/Closed Principle (OCP)
```php
// Abierto para extensión, cerrado para modificación
interface PaymentMethod {
    public function process(float $amount): bool;
}

class CreditCardPayment implements PaymentMethod { }
class PayPalPayment implements PaymentMethod { }
class BankTransferPayment implements PaymentMethod { }
```

#### Dependency Inversion Principle (DIP)
```php
// Depender de abstracciones, no de concreciones
class UserService {
    public function __construct(
        private UserRepositoryInterface $repository
    ) {}
}
```

#### Recursos de Estudio
- [ ] [SOLID Principles in PHP](https://www.php.net/manual/en/language.oop5.solid.php)
- [ ] [SOLID Principles Explained](https://www.digitalocean.com/community/conceptual_articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design)

#### Ejercicios Prácticos
- [ ] Refactorizar código violando SRP
- [ ] Implementar OCP con interfaces
- [ ] Aplicar Dependency Injection

---

### 4.3 Design Patterns Comunes

#### Factory Pattern
```php
class PaymentFactory {
    public static function create(string $type): PaymentMethod {
        return match($type) {
            'credit_card' => new CreditCardPayment(),
            'paypal' => new PayPalPayment(),
            default => throw new InvalidArgumentException("Unknown payment type: $type")
        };
    }
}
```

#### Strategy Pattern
```php
interface SortingStrategy {
    public function sort(array $data): array;
}

class QuickSortStrategy implements SortingStrategy { }
class MergeSortStrategy implements SortingStrategy { }

class Sorter {
    public function __construct(private SortingStrategy $strategy) {}
    
    public function sort(array $data): array {
        return $this->strategy->sort($data);
    }
}
```

#### Observer Pattern
```php
interface Observer {
    public function update(string $event, $data): void;
}

class UserCreatedObserver implements Observer {
    public function update(string $event, $data): void {
        if ($event === 'user.created') {
            // Send welcome email
        }
    }
}
```

#### Recursos de Estudio
- [ ] [Design Patterns PHP](https://designpatternsphp.readthedocs.io/)
- [ ] [Refactoring Guru - Design Patterns](https://refactoring.guru/design-patterns)

#### Ejercicios Prácticos
- [ ] Implementar Factory Pattern
- [ ] Crear Strategy Pattern para diferentes algoritmos
- [ ] Implementar Observer Pattern para eventos

---

## 5. Seguridad

### 5.1 Prevención de Vulnerabilidades Comunes

#### SQL Injection
```php
// ❌ Vulnerable
$query = "SELECT * FROM users WHERE email = '$email'";

// ✅ Seguro - Prepared Statements
$stmt = $pdo->prepare('SELECT * FROM users WHERE email = :email');
$stmt->execute(['email' => $email]);
```

#### XSS (Cross-Site Scripting)
```php
// ✅ Escapar output
echo htmlspecialchars($userInput, ENT_QUOTES, 'UTF-8');

// En Laravel
{{ $userInput }} // Automáticamente escapado
{!! $userInput !!} // Sin escapar (solo si confías)
```

#### CSRF Protection
```php
// En formularios
<form method="POST">
    @csrf
    <!-- campos -->
</form>

// En APIs con tokens
$token = $request->header('X-CSRF-Token');
if (!hash_equals($sessionToken, $token)) {
    abort(403);
}
```

#### Input Validation y Sanitization
```php
// Validar
$email = filter_var($input, FILTER_VALIDATE_EMAIL);
$int = filter_var($input, FILTER_VALIDATE_INT);

// Sanitizar
$clean = filter_var($input, FILTER_SANITIZE_STRING);
$clean = htmlspecialchars($input, ENT_QUOTES, 'UTF-8');
```

#### Password Hashing
```php
// ✅ Usar password_hash
$hash = password_hash($password, PASSWORD_BCRYPT);
// o
$hash = password_hash($password, PASSWORD_ARGON2ID);

// Verificar
if (password_verify($password, $hash)) {
    // Password correcto
}
```

#### Recursos de Estudio
- [ ] [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [ ] [PHP Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/PHP_Configuration_Cheat_Sheet.html)
- [ ] [Laravel Security](https://laravel.com/docs/security)

#### Ejercicios Prácticos
- [ ] Refactorizar código vulnerable a SQL injection
- [ ] Implementar validación y sanitización de inputs
- [ ] Crear sistema de hash de passwords seguro
- [ ] Implementar protección CSRF

---

## 6. Performance y Optimización

### 6.1 Caching Strategies

#### Redis Caching
```php
// Cache simple
$redis->setex("user:$userId", 3600, json_encode($userData));
$userData = json_decode($redis->get("user:$userId"), true);

// Cache con tags (Laravel)
Cache::tags(['users', 'profile'])->put("user:$userId", $user, 3600);
```

#### Query Result Caching
```php
// Cachear resultados de queries costosas
$users = Cache::remember('active_users', 3600, function() {
    return User::where('active', true)->get();
});
```

#### Opcache Configuration
```ini
; php.ini
opcache.enable=1
opcache.memory_consumption=128
opcache.max_accelerated_files=10000
opcache.validate_timestamps=0 ; En producción
```

#### Recursos de Estudio
- [ ] [Redis Documentation](https://redis.io/docs/)
- [ ] [Laravel Caching](https://laravel.com/docs/cache)
- [ ] [PHP Opcache](https://www.php.net/manual/en/book.opcache.php)

#### Ejercicios Prácticos
- [ ] Implementar caching de queries
- [ ] Configurar Redis para caching
- [ ] Optimizar con Opcache

---

### 6.2 Query Optimization

#### Eager Loading (N+1 Problem)
```php
// ❌ N+1 Problem
$users = User::all();
foreach ($users as $user) {
    $orders = $user->orders; // Query por cada usuario
}

// ✅ Eager Loading
$users = User::with('orders')->get();
```

#### Query Optimization
```php
// Seleccionar solo columnas necesarias
$users = User::select('id', 'name', 'email')->get();

// Usar índices
// Asegúrate de tener índices en columnas usadas en WHERE, JOIN, ORDER BY

// Paginación
$users = User::paginate(20);
```

#### Recursos de Estudio
- [ ] [Laravel Query Optimization](https://laravel.com/docs/eloquent-relationships#eager-loading)
- [ ] [Database Indexing Explained](https://use-the-index-luke.com/)

#### Ejercicios Prácticos
- [ ] Identificar y resolver problemas N+1
- [ ] Optimizar queries lentas
- [ ] Crear índices apropiados

---

## 7. Testing

### 7.1 PHPUnit

#### Unit Tests
```php
class UserServiceTest extends TestCase {
    public function test_can_create_user() {
        $service = new UserService();
        $user = $service->createUser([
            'name' => 'John',
            'email' => 'john@example.com'
        ]);
        
        $this->assertInstanceOf(User::class, $user);
        $this->assertEquals('John', $user->name);
    }
    
    public function test_throws_exception_on_invalid_email() {
        $this->expectException(ValidationException::class);
        
        $service = new UserService();
        $service->createUser(['email' => 'invalid-email']);
    }
}
```

#### Mocking
```php
$mockRepository = $this->createMock(UserRepositoryInterface::class);
$mockRepository->expects($this->once())
    ->method('save')
    ->willReturn(true);

$service = new UserService($mockRepository);
```

#### Recursos de Estudio
- [ ] [PHPUnit Documentation](https://phpunit.de/documentation.html)
- [ ] [Laravel Testing](https://laravel.com/docs/testing)

#### Ejercicios Prácticos
- [ ] Escribir unit tests para servicios
- [ ] Crear tests con mocks
- [ ] Implementar integration tests

---

## 8. PSR Standards

### 8.1 PSR-1 y PSR-12 (Coding Standards)

#### Reglas Clave
- Usar `<?php` o `<?=` tags
- Usar UTF-8 sin BOM
- Nombres de clases en `StudlyCaps`
- Nombres de métodos en `camelCase`
- Constantes en `UPPER_SNAKE_CASE`
- 4 espacios para indentación (no tabs)
- Línea final en blanco al final del archivo

#### Ejemplo
```php
<?php

declare(strict_types=1);

namespace App\Services;

class UserService
{
    private const MAX_RETRIES = 3;
    
    public function createUser(array $data): User
    {
        // implementation
    }
}
```

#### Recursos de Estudio
- [ ] [PSR-1: Basic Coding Standard](https://www.php-fig.org/psr/psr-1/)
- [ ] [PSR-12: Extended Coding Style Guide](https://www.php-fig.org/psr/psr-12/)

#### Ejercicios Prácticos
- [ ] Refactorizar código para cumplir PSR-12
- [ ] Configurar PHP_CodeSniffer o PHP CS Fixer

---

## 9. Plan de Práctica

### Semana de Práctica Intensiva

#### Día 1: Fundamentos PHP
- [ ] Repasar typed properties y arrow functions
- [ ] Practicar OOP (clases, interfaces, traits)
- [ ] Ejercicios de manejo de excepciones
- [ ] **Proyecto:** Crear un sistema de clases con herencia y polimorfismo

#### Día 2: Bases de Datos
- [ ] Escribir queries complejas con JOINs
- [ ] Practicar con PDO y prepared statements
- [ ] Optimizar queries con índices
- [ ] **Proyecto:** Crear un sistema CRUD completo con transacciones

#### Día 3: APIs REST
- [ ] Diseñar rutas RESTful
- [ ] Implementar validación de datos
- [ ] Crear sistema de autenticación JWT
- [ ] **Proyecto:** Crear una API REST completa con autenticación

#### Día 4: Arquitectura
- [ ] Implementar Repository Pattern
- [ ] Crear Service Layer
- [ ] Aplicar SOLID principles
- [ ] **Proyecto:** Refactorizar código usando patrones

#### Día 5: Seguridad y Performance
- [ ] Implementar medidas de seguridad
- [ ] Optimizar queries y código
- [ ] Implementar caching
- [ ] **Proyecto:** Aplicar seguridad y optimizaciones a proyecto existente

#### Día 6: Testing
- [ ] Escribir unit tests
- [ ] Crear integration tests
- [ ] Practicar mocking
- [ ] **Proyecto:** Agregar tests a proyectos anteriores

#### Día 7: Repaso y Práctica Final
- [ ] Repasar conceptos clave
- [ ] Resolver problemas de práctica
- [ ] Revisar código de proyectos anteriores
- [ ] **Proyecto:** Crear un proyecto completo combinando todo

---

## 10. Recursos Adicionales de Estudio

### Documentación Oficial
- [PHP Manual](https://www.php.net/manual/en/)
- [Laravel Documentation](https://laravel.com/docs)
- [Symfony Documentation](https://symfony.com/doc/current/index.html)
- [Composer Documentation](https://getcomposer.org/doc/)

### Guías y Tutoriales
- [PHP The Right Way](https://phptherightway.com/)
- [Laracasts](https://laracasts.com/) - Videos tutoriales
- [Laravel Daily](https://laraveldaily.com/) - Tips y tutoriales

### Práctica de Algoritmos
- [LeetCode](https://leetcode.com) - Problemas de algoritmos
- [HackerRank](https://www.hackerrank.com) - Challenges técnicos
- [Codewars](https://www.codewars.com) - Kata de programación
- [Exercism PHP Track](https://exercism.org/tracks/php)

### Comunidades
- [PHP Reddit](https://www.reddit.com/r/PHP/)
- [Laravel Reddit](https://www.reddit.com/r/laravel/)
- [Stack Overflow - PHP](https://stackoverflow.com/questions/tagged/php)

---

## 11. Checklist Final de Estudio

### Antes de la Evaluación

#### Conceptos Fundamentales
- [ ] PHP 7.4+ features dominadas
- [ ] OOP en PHP completamente entendido
- [ ] Manejo de errores y excepciones
- [ ] Generators e iterators comprendidos

#### Bases de Datos
- [ ] Queries complejas con JOINs
- [ ] PDO y prepared statements
- [ ] ORM (Eloquent) dominado
- [ ] Optimización de queries

#### APIs
- [ ] Diseño RESTful
- [ ] Validación de datos
- [ ] Autenticación (JWT, API keys)
- [ ] Rate limiting

#### Arquitectura
- [ ] Patrones de diseño implementados
- [ ] SOLID principles aplicados
- [ ] Repository y Service patterns
- [ ] Dependency Injection

#### Seguridad
- [ ] Prevención de SQL injection
- [ ] Prevención de XSS
- [ ] CSRF protection
- [ ] Password hashing seguro

#### Performance
- [ ] Caching strategies
- [ ] Query optimization
- [ ] Eager loading (N+1 problem)

#### Estándares
- [ ] PSR-1 y PSR-12 seguidos
- [ ] Código limpio y mantenible

---

## 12. Ejercicios de Práctica Recomendados

### Proyecto 1: Sistema de Usuarios
- CRUD de usuarios
- Autenticación JWT
- Validación de datos
- Tests unitarios

### Proyecto 2: API de E-commerce
- Productos, categorías, órdenes
- Relaciones complejas
- Paginación y filtros
- Rate limiting

### Proyecto 3: Sistema de Notificaciones
- Eventos y observers
- Queue system (conceptos)
- Integración con servicios externos

### Proyecto 4: Optimización de Performance
- Identificar cuellos de botella
- Implementar caching
- Optimizar queries
- Profiling

---

**¡Éxito en tu preparación y evaluación!**

---

*Última actualización: 2025*

