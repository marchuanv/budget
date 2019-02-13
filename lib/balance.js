function Balance() {
  this.balance=0;
  this.dailyexpenditure=0;
  this.calculate=(remainingdays)=>{
    this.dailyexpenditure = (this.balance / remainingdays);
    this.balance = (this.balance - this.dailyexpenditure);
  }
  this.setBalance=(balance)=>{
    this.balance=balance;
  }
}