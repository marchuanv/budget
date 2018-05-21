Param(
  [string]$serverModuleName
)
. .\shared.ps1
$stopFilePath="node_modules\$serverModuleName\$serverModuleName.stop.js"
[bool]$exists=Test-Path $stopFilePath
if ($exists -eq $true){
<<<<<<< HEAD
=======
    $stopFilePath = Convert-Path $stopFilePath
>>>>>>> c1c5eecf94946dc677f992f93d34ee2701587ff1
    node $stopFilePath
    $LASTEXITCODE=$true
}else{
    $LASTEXITCODE=$false
}