function Balance() {
  
  this.balance = 0.0;
  this.month = 0;
  this.year = 0;
  this.remainingdays = 0;
  this.dailyexpenditure = 0;
  this.yesterday = null;

  this.getDailyExpenditure=()=>{
    const today = new Date();
    if (this.yesterday){
      if (today.getTime() > this.yesterday.getTime()) { //can only happen once a day
        this.remainingdays = (this.remainingdays - 1);
        this.yesterday = today;
        this.balance = (this.balance - this.dailyexpenditure);
        this.dailyexpenditure = (this.balance / this.remainingdays);
      }
    } else {
      this.yesterday = today;
    }
    this.dailyexpenditure = (this.balance / this.remainingdays);
    return this.dailyexpenditure;
  }

  this.reset=(remainingdays, balance, year, month)=>{
    if (!remainingdays || !balance || !month || !year){
      throw new Error(`missing remainingdays | balance | month | year argument(s).`);
    }
    this.balance=parseFloat(balance);
    this.month = Number(month);
    this.year = Number(year);
    this.remainingdays = Number(remainingdays);
    this.dailyexpenditure = 0;
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