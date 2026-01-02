# Solución para Problema de Permisos con fnm en WSL

## El Problema

fnm intenta crear symlinks en `/run/user/1000/fnm_multishells/` pero no tiene permisos en WSL. El comando `fnm use 22` falla con error de permisos.

## ✅ Solución Definitiva (Recomendada)

Se ha creado un script alternativo `fnm-use` que evita el problema de permisos:

```bash
# Usar Node.js 22 (o cualquier versión)
fnm-use 22

# Ver versiones disponibles
fnm-use
```

Este script está en `~/.local/bin/fnm-use` y ya está configurado para funcionar.

## Solución: Comandos a Ejecutar

### Opción 1: Solución Rápida (Cada vez que abras una terminal nueva)

Ejecuta estos comandos en orden:

```bash
# 1. Crear directorio alternativo
mkdir -p ~/.fnm_multishells
chmod 755 ~/.fnm_multishells

# 2. Configurar variable de entorno
export FNM_MULTISHELLS_PATH="$HOME/.fnm_multishells"

# 3. Configurar PATH de fnm
export FNM_DIR="$HOME/.local/share/fnm"
export PATH="$FNM_DIR:$PATH"

# 4. Evaluar fnm env (esto puede dar error pero es normal)
eval "$(fnm env)" 2>/dev/null || true

# 5. Usar Node.js directamente desde donde fnm lo instaló
export PATH="$HOME/.local/share/fnm/node-versions/v22.16.0/installation/bin:$PATH"

# 6. Verificar
node --version
npm --version
fnm use 22
```

### Opción 2: Solución Permanente (Actualizar .bashrc)

**IMPORTANTE**: Hacer backup primero:
```bash
cp ~/.bashrc ~/.bashrc.backup
```

Luego edita `~/.bashrc` y reemplaza la sección de fnm (alrededor de la línea 119-143) con esto:

```bash
# fnm - Configuración con solución de permisos WSL
export FNM_DIR="$HOME/.local/share/fnm"
if [ -d "$FNM_DIR" ]; then
  export PATH="$FNM_DIR:$PATH"
  # Crear directorio alternativo para multishells
  export FNM_MULTISHELLS_PATH="$HOME/.fnm_multishells"
  mkdir -p "$FNM_MULTISHELLS_PATH" 2>/dev/null
  chmod 755 "$FNM_MULTISHELLS_PATH" 2>/dev/null
  
  # Intentar evaluar fnm env (puede fallar pero no importa)
  eval "$(fnm env 2>/dev/null)" || true
  
  # Usar Node.js directamente desde la instalación de fnm (workaround)
  if [ -d "$FNM_DIR/node-versions/v22.16.0/installation/bin" ]; then
    export PATH="$FNM_DIR/node-versions/v22.16.0/installation/bin:$PATH"
  fi
  
  # Activar versión default si existe
  fnm use default 2>/dev/null || true
fi
```

Después de editar, recarga:
```bash
source ~/.bashrc
```

### Opción 3: Usar Script de Configuración

Copia y pega esto en tu terminal:

```bash
cat > ~/fix-fnm.sh << 'SCRIPT'
#!/bin/bash
mkdir -p ~/.fnm_multishells
chmod 755 ~/.fnm_multishells
export FNM_MULTISHELLS_PATH="$HOME/.fnm_multishells"
export FNM_DIR="$HOME/.local/share/fnm"
export PATH="$FNM_DIR:$PATH"
export PATH="$HOME/.local/share/fnm/node-versions/v22.16.0/installation/bin:$PATH"
eval "$(fnm env 2>/dev/null)" || true
fnm use 22 2>/dev/null || true
echo "✅ fnm configurado. Node.js: $(node --version)"
SCRIPT

chmod +x ~/fix-fnm.sh
source ~/fix-fnm.sh
```

Luego cada vez que necesites configurar fnm, ejecuta:
```bash
source ~/fix-fnm.sh
```

## Verificar que Funciona

```bash
node --version  # Debe mostrar v22.16.0 o similar
npm --version   # Debe mostrar versión de npm
fnm list        # Debe mostrar las versiones instaladas
fnm use 22      # Debe cambiar a Node.js 22
```

## Nota Importante

El error de permisos con `/run/user/1000/fnm_multishells/` es un problema conocido en WSL. La solución es usar directamente el PATH al binario de Node.js instalado por fnm, evitando el sistema de multishells que causa el problema.

## Si Nada Funciona

Como último recurso, puedes usar Node.js directamente sin fnm:

```bash
export PATH="$HOME/.local/share/fnm/node-versions/v22.16.0/installation/bin:$PATH"
```

Esto te permitirá usar Node.js y npm sin necesidad de `fnm use`.
