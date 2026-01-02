#!/bin/bash

# Script para ejecutar el Bridge Server con fnm

# Cargar fnm si no está ya en el PATH
if ! command -v fnm &> /dev/null
then
    export FNM_DIR="/home/wpanozo/.local/share/fnm"
    export PATH="/home/wpanozo/.local/share/fnm:$PATH"
    eval "$(fnm env --use-on-cd 2>/dev/null || fnm env 2>/dev/null)"
fi

# Asegurarse de que Node.js v22 esté en uso
fnm use 22 > /dev/null 2>&1

# Cambiar al directorio del bridge server
cd "$(dirname "$0")"

# Ejecutar el servidor
echo "🚀 Iniciando Bridge Server..."
echo "📡 API REST: http://localhost:3001"
echo "🔌 WebSocket: ws://localhost:3002"
echo ""

node index.js
