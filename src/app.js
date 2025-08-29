// src/app.js

import monitor from './system-monitor.js';
import cli from './cli-tool.js';
import registro from './registro-sistema.js';

console.log("=== Bienvenido a System Analitics ===");

// Ejecuta cada módulo
monitor();
cli();
registro();