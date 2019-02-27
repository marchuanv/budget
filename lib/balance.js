function Balance() {
  
  this.balance = 0;
  this.month = 0;
  this.year = 0;
  this.remainingdays = 0;
  this.dailyexpenditure = 0;
  this.balanceReducedDay = 0;

  this.getDailyExpenditure=()=>{
    const today = (new Date()).getDate();
    if (this.balanceReducedDay < today) { //can only happen once a day
	    this.balance = (this.balance - this.dailyexpenditure);
		  this.balanceReducedDay = today;
      this.remainingdays = (this.remainingdays - 1);
    }
    this.dailyexpenditure = (this.balance / this.remainingdays);
    return this.dailyexpenditure;
  }

  this.reset=(remainingdays, balance, month, year)=>{

    if (!remainingdays || !balance || !month || !year){
      throw new Error(`missing remainingdays | balance | month | year argument(s).`);
    }

    this.balance=balance;
    this.month = Number(month);
    this.year = Number(year);
    this.remainingdays = remainingdays;

    this.dailyexpenditure = 0;
    this.balanceReducedDay = 0;
  }

  this.getBalance=()=>{
    return this.balance;
  }

  this.getYear=()=>{
    return this.year;
  }

  this.getMonth=()=>{
    return this.month;
  }

}