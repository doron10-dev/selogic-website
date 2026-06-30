$ErrorActionPreference = "Stop"
$projectPath = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$driveLetter = "S:"

# Map UNC path to drive letter (Windows doesn't support UNC as cwd for npm/cmd)
if (-not (Test-Path "${driveLetter}\")) {
    subst $driveLetter $projectPath | Out-Null
}

Set-Location "${driveLetter}\"
$env:WATCHPACK_POLLING = "true"
$env:CHOKIDAR_USEPOLLING = "true"
node node_modules/next/dist/bin/next dev
