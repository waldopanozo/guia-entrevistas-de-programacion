# Instrucciones de Configuración y Uso

## Problema con fnm en WSL

Si tienes problemas con `fnm use 22` debido a permisos, aquí está la solución:

## Solución Rápida

### Opción 1: Usar el script de configuración

```bash
cd angular-test-preparation
source setup-env.sh
npm start
```

### Opción 2: Configurar manualmente en cada sesión

```bash
export PATH="$HOME/.local/share/fnm:$HOME/.local/share/fnm/node-versions/v22.16.0/installation/bin:$PATH"
cd angular-test-preparation
npm start
```

### Opción 3: Actualizar .bashrc permanentemente

Edita tu `~/.bashrc` y reemplaza la sección de fnm con:

```bash
# fnm - Configuración mejorada
export FNM_DIR="$HOME/.local/share/fnm"
if [ -d "$FNM_DIR" ]; then
  export PATH="$FNM_DIR:$PATH"
  # Usar Node.js default directamente
  if [ -d "$FNM_DIR/node-versions/v22.16.0/installation/bin" ]; then
    export PATH="$FNM_DIR/node-versions/v22.16.0/installation/bin:$PATH"
  fi
fi
```

Luego ejecuta:
```bash
source ~/.bashrc
```

## Verificar Instalación

```bash
node --version  # Debería mostrar v22.16.0
npm --version   # Debería mostrar 10.9.2 o superior
```

## Iniciar la Aplicación

Una vez configurado el entorno:

```bash
cd angular-test-preparation
npm start
```

La aplicación estará disponible en `http://localhost:4200`

## Nota sobre el Error de fnm

El error de permisos con `/run/user/1000/fnm_multishells/` es un problema conocido en WSL. La solución es usar directamente el PATH al binario de Node.js instalado por fnm, evitando el sistema de multishells.
