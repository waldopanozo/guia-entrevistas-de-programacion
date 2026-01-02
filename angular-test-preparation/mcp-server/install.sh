#!/bin/bash

echo "🔧 Instalando servidor MCP para Angular Test Preparation..."

# Verificar Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js no está instalado. Por favor instálalo primero."
    exit 1
fi

echo "✅ Node.js encontrado: $(node --version)"

# Instalar dependencias
echo "📦 Instalando dependencias..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencias instaladas correctamente"
else
    echo "❌ Error al instalar dependencias"
    exit 1
fi

# Verificar que los archivos JSON existen
echo "🔍 Verificando archivos JSON..."
ASSETS_PATH="../src/assets"
FILES=("exam-config.json" "questions.json" "examen-360.json" "assure-senior.json" "vanhack.json" "woven.json")

for file in "${FILES[@]}"; do
    if [ -f "$ASSETS_PATH/$file" ]; then
        echo "✅ $file encontrado"
    else
        echo "⚠️  $file no encontrado (puede ser normal si no existe)"
    fi
done

echo ""
echo "✅ Instalación completada!"
echo ""
echo "📝 Próximos pasos:"
echo "1. Configura el servidor MCP en Cursor (ver README.md)"
echo "2. Reinicia Cursor"
echo "3. Prueba preguntando: '¿Qué exámenes están disponibles?'"
echo ""
