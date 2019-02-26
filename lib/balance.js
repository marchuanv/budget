function Balance() {
  this.balance=0;
  this.dailyexpenditure=0;
  this.remainingdays=0;
  this.dayCalculated=0;

  this.getDailyExpenditure=()=>{
    const currentDay = (new Date()).getDate();
    if (currentDay > this.dayCalculated) { //can only happen once a day
	    this.balance = (this.balance - this.dailyexpenditure);
		  this.dayCalculated = currentDay;
    }
    this.dailyexpenditure = (this.balance / this.remainingdays);
    return this.dailyexpenditure;
  }
  this.setBalance=(balance)=>{
    this.balance=balance;
  }
  this.getBalance=()=>{
    return this.balance;
  }
  this.setRemainingDays=(remainingdays)=>{
  	this.remainingdays = remainingdays;
  }
}