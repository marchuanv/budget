var section = process.argv.slice(2);
console.log("");
if (section=="start"){
	console.log("STARTING");
	
}else if (section=="stop"){
	console.log("STOPPING");
	
}else{
	module.exports={ budget : require("./lib/budget.js"),}
}

