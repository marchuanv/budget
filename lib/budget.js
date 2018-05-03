function Budget(){
	this.expenses=[];
	this.savings=[];
}

Budget.prototype.calculate=function(){
}

Budget.prototype.load=function(){
	const records=require('./records.json');
}