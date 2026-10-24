@echo off
cd /d "%~dp0"
echo ========================================================
echo   RAMZAN MEMON — FIREBASE HOSTING DEPLOYMENT
echo ========================================================
echo.

where firebase >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
  echo [!] Google Firebase CLI was not found in your system PATH.
  echo.
  echo To deploy your portfolio to Google Firebase Hosting:
  echo   1. Install Firebase CLI via PowerShell:
  echo      npm install -g firebase-tools
  echo      (or download standalone binary from: https://firebase.tools/bin/win/instant/latest)
  echo   2. Authenticate with your Google account:
  echo      firebase login
  echo   3. Initialize or link your project:
  echo      firebase use --add
  echo   4. Deploy your website:
  echo      firebase deploy --only hosting
  echo.
  pause
  exit /b 1
)

echo [*] Checking Firebase authentication...
call firebase login --interactive
if %ERRORLEVEL% NEQ 0 (
  echo [X] Authentication incomplete. Please run 'firebase login' in your terminal.
  pause
  exit /b 1
)

echo.
echo [*] Deploying website assets to Firebase Hosting...
call firebase deploy --only hosting

if %ERRORLEVEL% EQU 0 (
  echo.
  echo ========================================================
  echo   [SUCCESS] Portfolio is now publicly deployed on Firebase!
  echo ========================================================
) else (
  echo.
  echo [!] Deployment encountered an issue. Please verify your Firebase project permissions.
)

pause
