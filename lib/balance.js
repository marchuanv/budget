function Balance() {
  
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
    this.month = Number(month) + 1;
  	this.remainingdays = remainingdays;
    this.year = Number(year);

    this.dailyexpenditure = 0;
    this.balanceReducedDay = 0;
  }

  this.getBalance=()=>{
    return this.balance;
  }

  this.getDate=()=>{
    return `${year}-${month}`;
  }

}