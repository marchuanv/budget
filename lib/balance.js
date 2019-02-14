function Balance() {
  this.balance=0;
  this.dailyexpenditure=0;
  this.remainingdays=0;
  this.dayCalculated=0;
  this.calculate=()=>{
  	const currentDay = (new Date()).getDate();
  	if (currentDay > this.dayCalculated){
	    this.balance = (this.balance - this.dailyexpenditure);
	    this.dailyexpenditure = (this.balance / this.remainingdays);
  		this.dayCalculated = (new Date()).getDate();
  	}
  }
  this.setBalance=(balance)=>{
    this.balance=balance;
  }
  this.setRemainingDays=(remainingdays)=>{
  	this.remainingdays = remainingdays;
  }
}