# Comandos para Usar fnm (Solución de Permisos)

## ⚠️ IMPORTANTE: Primero recarga tu .bashrc

```bash
source ~/.bashrc
```

Esto carga la función `fnm-use` en tu shell actual.

## ✅ Solución Rápida - Usa este comando:

```bash
fnm-use 22
```

La función `fnm-use` está definida en tu `~/.bashrc` y funciona igual que `fnm use 22` pero sin problemas de permisos.

## Para usar fnm normalmente:

### Ver versiones instaladas:
```bash
fnm list
```

### Cambiar a una versión específica:
```bash
fnm-use 22        # Usa la versión más reciente de Node.js 22
fnm-use 22.16.0   # Usa una versión específica
fnm-use 20        # Cambia a Node.js 20
```

### Verificar versión actual:
```bash
node --version
npm --version
```

## Si `fnm-use` no funciona después de `source ~/.bashrc`:

Verifica que la función esté definida:

```bash
type fnm-use
```

Debería mostrar: `fnm-use is a function`

Si no aparece, verifica que tu `.bashrc` tenga la función:

```bash
grep "fnm-use()" ~/.bashrc
```

Si no está, el problema es que el `.bashrc` no se actualizó correctamente.

## Solución Permanente en .bashrc:

Agrega esto al final de tu `~/.bashrc`:

```bash
# fnm - Solución de permisos WSL
export FNM_DIR="$HOME/.local/share/fnm"
if [ -d "$FNM_DIR" ]; then
  export PATH="$FNM_DIR:$PATH"
  export PATH="$HOME/.local/bin:$PATH"
  # Usar Node.js default directamente
  if [ -d "$FNM_DIR/node-versions/v22.16.0/installation/bin" ]; then
    export PATH="$FNM_DIR/node-versions/v22.16.0/installation/bin:$PATH"
  fi
fi
```

Luego recarga:
```bash
source ~/.bashrc
```

## Resumen

- ✅ **Usa `fnm-use 22`** en lugar de `fnm use 22`
- ✅ Node.js y npm funcionan correctamente
- ✅ El problema es solo con el comando `fnm use`, no con Node.js en sí
