@echo off
title Portfolio Preview
cd /d "%~dp0"
if not exist "dist\index.html" (
  echo Building site first...
  call npm install
  call npm run build
)
echo.
echo Opening built site at http://localhost:4173
echo Keep this window open. Press Ctrl+C to stop.
echo.
call npm run preview
pause
