@echo off
echo Starting Wayne Enterprises BI Dashboard...
echo.

echo Starting Backend Server...
cd backend
start cmd /k ".\venv\Scripts\Activate.ps1 && python main.py"

echo Waiting for backend to start...
timeout /t 5 /nobreak > nul

echo Starting Frontend Server...
cd ..\frontend
start cmd /k "npm run dev"

echo.
echo Dashboard is starting up...
echo Backend: http://localhost:8000
echo Frontend: http://localhost:3000
echo.
echo Press any key to exit...
pause > nul
