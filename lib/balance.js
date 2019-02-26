function Balance() {
  this.balance=0;
  this.dailyexpenditure=0;
  this.remainingdays=0;
  this.balanceReducedDay=0;

  this.getDailyExpenditure=()=>{
    const today = (new Date()).getDate();
    if (this.balanceReducedDay < today) { //can only happen once a day
	    this.balance = (this.balance - this.dailyexpenditure);
		  this.balanceReducedDay = today;
    }
    this.dailyexpenditure = (this.balance / this.remainingdays);
    return this.dailyexpenditure;
  }
  this.reset=(balance)=>{
    this.balance=balance;
    this.dailyexpenditure = 0;
    this.remainingdays = 0;
    this.balanceReducedDay = 0;
  }
  this.getBalance=()=>{
    return this.balance;
  }
  this.setRemainingDays=(remainingdays)=>{
  	this.remainingdays = remainingdays;
  }
}