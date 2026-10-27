@echo off
set "BACKEND_DIR=%~dp0..\Web-Based-Community-Emergency-Response-System-clean -82"
set "PYTHON=%~dp0backend\.venv\Scripts\python.exe"
if not exist "%BACKEND_DIR%\manage.py" (
  echo Current Community Emergency backend not found:
  echo %BACKEND_DIR%
  pause
  exit /b 1
)
if not exist "%PYTHON%" (
  echo Python environment not found: %PYTHON%
  pause
  exit /b 1
)
echo Starting the current Community Emergency backend on http://localhost:8001...
pushd "%BACKEND_DIR%"
"%PYTHON%" manage.py runserver 0.0.0.0:8001
popd
pause
