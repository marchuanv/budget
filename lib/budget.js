function Budget(require, path){
	this.expenses=[];
	this.savings=[];
	this.require=require;
	this.path=path;
}

Budget.prototype.calculate=function(){
}

Budget.prototype.load=function(){
	const dataFile=this.path.join(__dirname,'/lib/records.json');
	console.log("loading data file from ",dataFile);
	const records=this.require(dataFile);
	console.log('records: ',records);
}