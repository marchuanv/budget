function Balance() {
  
  this.balance;
  this.month;
  this.year;
  this.remainingdays;
  this.dailyexpenditure;
  this.yesterday;

  this.getDailyExpenditure=()=>{
    if (this.yesterday){
      const today = new Date();
      if (today.getTime() > this.yesterday.getTime()) { //can only happen once a day
        this.remainingdays = (this.remainingdays - 1);
        this.yesterday = today;
        this.balance = (this.balance - this.dailyexpenditure);
        this.dailyexpenditure = (this.balance / this.remainingdays);
      }
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