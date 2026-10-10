@echo off
chcp 65001 >nul
REM يشغّل Ollama مع السماح لصفحة التطبيق بالاتصال به، ثم يفتح التطبيق.
REM ملاحظة: إن كان Ollama يعمل مسبقاً (أيقونة بجانب الساعة) فأغلقه أولاً ثم شغّل هذا الملف.
set OLLAMA_ORIGINS=*
start "Ollama" /min ollama serve
timeout /t 4 >nul
start "" "%~dp0standalone\thesis-desk-v3.html"
echo تم التشغيل. يمكنك إغلاق هذه النافذة.
