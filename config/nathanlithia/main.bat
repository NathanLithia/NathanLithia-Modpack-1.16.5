@echo off
echo 
setlocal
call :setESC
set user=%1
set UUID=%2
set version=%3
set forge=%4
set loadedmods=%5
:SOF
title [Modpack Utility] by NathanLithia
CLS
echo Welcome %ESC%[31m%user%%ESC%[0m!
echo.
echo Your UUID is [%ESC%[31m%UUID%%ESC%[0m].
echo Playing Forge [%ESC%[31m%forge%%ESC%[0m] on Minecraft [%ESC%[31m%version%%ESC%[0m] with [%ESC%[31m%loadedmods%%ESC%[0m] mods loaded.
echo.
echo.
:start
set /p input=%ESC%[36m%user%%ESC%[0m: 
if %input%==cd echo %cd% & goto start
if %input%==cls goto SOF
if %input%==clear goto SOF
if %input%==commands dir /b config\nathanlithia\commands & goto start
if %input%==ls dir /b & goto start
goto start

:setESC
for /F "tokens=1,2 delims=#" %%a in ('"prompt #$H#$E# & echo on & for %%b in (1) do rem"') do (
  set ESC=%%b
  exit /B 0
)
exit /B 0