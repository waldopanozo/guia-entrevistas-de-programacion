#!/bin/bash
# Script wrapper para ejecutar el servidor MCP con Node.js desde fnm

# Configurar fnm y Node.js
export FNM_DIR="$HOME/.local/share/fnm"
if [ -d "$FNM_DIR" ]; then
  export PATH="$FNM_DIR:$PATH"
  # Usar Node.js 22 (o la versión más reciente disponible)
  if [ -d "$FNM_DIR/node-versions/v22.21.1/installation/bin" ]; then
    export PATH="$FNM_DIR/node-versions/v22.21.1/installation/bin:$PATH"
  elif [ -d "$FNM_DIR/node-versions/v22.16.0/installation/bin" ]; then
    export PATH="$FNM_DIR/node-versions/v22.16.0/installation/bin:$PATH"
  else
    # Buscar cualquier versión de Node.js 22
    NODE_PATH=$(find "$FNM_DIR/node-versions" -name "node" -path "*/v22.*/installation/bin/node" 2>/dev/null | head -1)
    if [ -n "$NODE_PATH" ]; then
      export PATH="$(dirname $NODE_PATH):$PATH"
    fi
  fi
fi

# Ejecutar el servidor MCP
cd "$(dirname "$0")"
exec node index.js
