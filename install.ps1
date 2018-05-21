$package=Load-NodePackage
$moduleName=$package.name
cls
Write-Host ""
Write-Host "INSTALLING $moduleName"
<<<<<<< HEAD
npm install .
cls
Write-Host "UPDATING $moduleName"
npm update .
=======
npm install
cls
Write-Host "UPDATING $moduleName"
npm update
>>>>>>> c1c5eecf94946dc677f992f93d34ee2701587ff1
$LASTEXITCODE=$true