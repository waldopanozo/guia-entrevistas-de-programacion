@echo off
REM Script para ejecutar el servidor MCP desde Windows (usando WSL)
REM Este script permite que Cursor en Windows ejecute el servidor MCP que está en WSL

wsl bash -c "cd /mnt/d/Personal/waldo.panozo/guia-entrevistas-de-programacion/angular-test-preparation && bash mcp-server/run-mcp.sh"
