Param(
  [string]$serverModuleName
)
. .\shared.ps1
$startFilePath="node_modules\$serverModuleName\$serverModuleName.start.js"
[bool]$exists=Test-Path $startFilePath
if ($exists -eq $true){
<<<<<<< HEAD
=======
    $startFilePath = Convert-Path $startFilePath
>>>>>>> c1c5eecf94946dc677f992f93d34ee2701587ff1
    node $startFilePath
    $LASTEXITCODE=$true
}else{
    $LASTEXITCODE=$false
}