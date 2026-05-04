@echo off
REM Setup script for Next.js migration
REM This script reorganizes files into proper Next.js structure

cd /d %CD%

REM Check if Node.js is installed
where node >nul 2>nul
if errorlevel 1 (
    echo Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

REM Run the Node setup script
node setup.js

