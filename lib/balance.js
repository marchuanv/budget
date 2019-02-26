function Balance() {
  this.balance=0;
  this.dailyexpenditure=0;
  this.remainingdays=0;
  this.lastCalculated=0;

  this.getDailyExpenditure=()=>{
    const today = (new Date()).getDate();
    if (this.lastCalculated < today) { //can only happen once a day
	    this.balance = (this.balance - this.dailyexpenditure);
    }
		this.lastCalculated = today;
    this.dailyexpenditure = (this.balance / this.remainingdays);
    return this.dailyexpenditure;
  }
  this.reset=(balance)=>{
    this.balance=balance;
    this.dailyexpenditure = 0;
    this.remainingdays = 0;
    this.lastCalculated = 0;
  }
  this.getBalance=()=>{
    return this.balance;
  }
  this.setRemainingDays=(remainingdays)=>{
  	this.remainingdays = remainingdays;
  }
}