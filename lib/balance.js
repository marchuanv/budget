function Balance() {






  this.balance = 0.0;
  this.month = 0;
  this.year = 0;
  this.remainingdays = 0;
  this.dailyAllowance = 0;
  this.yesterday = null;
  this.date = null;

  this.getDailyAllowance=() => {
    const today = new Date();
    if (this.yesterday){
      if (today.getDate() > this.yesterday.getDate()) { //can only happen once a day
        const days = (today.getDate() - this.yesterday.getDate());
        this.remainingdays = (this.remainingdays - days);
        this.yesterday = today;
        this.balance = (this.balance - this.dailyAllowance);
        this.dailyAllowance = (this.balance / this.remainingdays);
      }
    } else {
      this.yesterday = today;
      this.yesterday.setDate(today.getDate()-1);
    }
    this.dailyAllowance = (this.balance / this.remainingdays);
    return this.dailyAllowance;
  }

  this.reset=(remainingdays, balance)=>{
    if (!remainingdays || !balance){
      throw new Error(`missing remainingdays | balance | argument(s).`);
    }
    this.remainingdays = Number(remainingdays);
    this.dailyAllowance = 0;
    this.yesterday = null;
    this.balance=parseFloat(balance);
    this.date = new Date();
  }

  this.getBalance=()=>{
    return this.balance;
  }

  this.getDate=()=>{
    return this.date;
  }

}