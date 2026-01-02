#!/bin/bash
# Script para configurar el entorno de Node.js con fnm

# Configurar PATH para fnm y Node.js
export PATH="$HOME/.local/share/fnm:$HOME/.local/share/fnm/node-versions/v22.16.0/installation/bin:$PATH"

# Verificar que Node.js funciona
echo "Node.js version: $(node --version)"
echo "npm version: $(npm --version)"

# Si estás en el directorio del proyecto, puedes ejecutar directamente
if [ -f "package.json" ]; then
    echo ""
    echo "✅ Entorno configurado correctamente!"
    echo "Para iniciar la aplicación, ejecuta: npm start"
fi
