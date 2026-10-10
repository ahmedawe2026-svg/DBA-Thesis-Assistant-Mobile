#!/bin/sh
# يشغّل Ollama مع السماح لصفحة التطبيق بالاتصال به، ثم يفتح التطبيق.
export OLLAMA_ORIGINS="*"
(ollama serve >/dev/null 2>&1 &)
sleep 3
DIR="$(cd "$(dirname "$0")" && pwd)"
(xdg-open "$DIR/standalone/thesis-desk-v3.html" 2>/dev/null || open "$DIR/standalone/thesis-desk-v3.html")
