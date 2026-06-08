@echo off
title Dhileepan Portfolio
cd /d "%~dp0"
echo Installing dependencies if needed...
call npm install
echo.
echo Starting portfolio at http://localhost:5173
echo Keep this window open. Press Ctrl+C to stop.
echo.
call npm run dev
pause
