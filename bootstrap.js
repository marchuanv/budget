var section = process.argv.slice(2);
console.log("");
module.exports={ budget : require("./lib/budget.js"), eventpublisher : require("eventpublisher"), factory : require("factory"), communication : require("communication"),}
if (section=="start"){
	console.log("STARTING");
	
}else if (section=="stop"){
	console.log("STOPPING");
	
}

