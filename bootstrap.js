console.log("");

const os = require('os');
const fs = require('fs');
const path = require('path');
const package=require(path.join(__dirname, 'package.json'));
const vm = require('vm');
const bootstrapConfig=module.require('./bootstrap.json');
const appFilePath=path.join(__dirname,"./lib/app.js");

modules[budget]=[]; 
 modules["budget"].push("./lib/budget.js"); 
 modules["budget"].push("eventpublisher"); 
 modules["budget"].push("factory"); 
 modules["budget"].push("communication");

if (fs.existsSync(appFilePath)) {
	const section = process.argv.slice(2);
	cosnt app=require(appFilePath);
	if (section=="start"){
		app.start();
	}else if (section=="stop"){
		app.stop();
	}
}else{
	module.exports=modules;
}

