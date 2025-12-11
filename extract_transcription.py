#!/usr/bin/env python3
import re
import sys

# Leer el HTML del archivo o stdin
html_content = sys.stdin.read()

# Patrón para extraer timestamp y texto
pattern = r'<div class="QvmvOc" data-timestamp="(\d+)">([^<]+)</div><div class="wyBDIb" data-timestamp="\d+">([^<]+)</div>'

matches = re.findall(pattern, html_content)

# Organizar por timestamp
transcription_lines = []
for timestamp, time_str, text in matches:
    transcription_lines.append(f"[{time_str}] {text}")

# Unir todas las líneas
transcription = '\n'.join(transcription_lines)

print(transcription)
