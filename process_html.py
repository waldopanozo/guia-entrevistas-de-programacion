#!/usr/bin/env python3
import re
import sys

# Leer todo el HTML desde stdin
html_content = sys.stdin.read()

# Patrón para extraer el texto de los divs con class="wyBDIb"
pattern = r'<div class="wyBDIb" data-timestamp="\d+">([^<]+)</div>'
matches = re.findall(pattern, html_content)

# Unir todos los textos con espacios
transcription = ' '.join(matches)

print(transcription)
