function Budget(require){
	this.expenses=[];
	this.savings=[];
	this.require=require;
}

Budget.prototype.calculate=function(){
}

Budget.prototype.load=function(){
	const records=this.require('./records.json');
}