function Balance() {
  this.balance=0;
  this.dailyexpenditure=0;
  this.remainingdays=0;
  this.calculate=()=>{
    this.balance = (this.balance - this.dailyexpenditure);
    this.dailyexpenditure = (this.balance / this.remainingdays);
  }
  this.setBalance=(balance)=>{
    this.balance=balance;
  }
  this.setRemainingDays=(remainingdays)=>{
  	this.remainingdays = remainingdays;
  }
}