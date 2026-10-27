@echo off
echo Starting Community Emergency Response Platform (Milestone 2)...
start "CERP Django Backend (Port 8001)" cmd /k "%~dp0start_backend.bat"
start "CERP React Frontend (Port 5173)" cmd /k "%~dp0start_frontend.bat"
echo Both servers launched.
echo Frontend: http://localhost:5173/
echo Backend:  http://localhost:8001/
