#!/bin/bash

# Script para detener el Bridge Server

echo "🛑 Deteniendo Bridge Server..."

# Buscar procesos en los puertos 3001 y 3002
PORT_3001=$(lsof -ti:3001 2>/dev/null)
PORT_3002=$(lsof -ti:3002 2>/dev/null)

# Buscar procesos de node index.js
NODE_PROCESSES=$(ps aux | grep "node.*index.js" | grep -v grep | awk '{print $2}')

if [ ! -z "$PORT_3001" ] || [ ! -z "$PORT_3002" ] || [ ! -z "$NODE_PROCESSES" ]; then
    echo "Encontrados procesos en ejecución..."
    
    # Matar procesos en puertos
    if [ ! -z "$PORT_3001" ]; then
        echo "Cerrando proceso en puerto 3001 (PID: $PORT_3001)..."
        kill -9 $PORT_3001 2>/dev/null
    fi
    
    if [ ! -z "$PORT_3002" ]; then
        echo "Cerrando proceso en puerto 3002 (PID: $PORT_3002)..."
        kill -9 $PORT_3002 2>/dev/null
    fi
    
    # Matar procesos de node
    if [ ! -z "$NODE_PROCESSES" ]; then
        echo "Cerrando procesos de node index.js..."
        echo "$NODE_PROCESSES" | xargs kill -9 2>/dev/null
    fi
    
    sleep 1
    echo "✅ Servidor detenido"
else
    echo "ℹ️  No hay procesos en ejecución"
fi
