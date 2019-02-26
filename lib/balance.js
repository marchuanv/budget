function Balance() {
  this.balance=0;
  this.month = -1;
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
  this.reset=(balance, month)=>{
    if (!balance || !month){
      throw new Error(`missing balance or month argument(s).`);
    }

    this.balance=balance;
    this.month = (month + 1);

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