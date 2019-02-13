function Balance() {
  this._balance=0;
  this.calculate=(remainingdays)=>{
    const dailyexpenditure = (this._balance / remainingdays);
    this._balance = (this._balance - dailyexpenditure);
    return {
        balance: this._balance,
        dailyexpenditure
    };
  }
  this.setBalance=(balance)=>{
    this._balance=balance;
  }
  this.getBalance=()=>{
    return this._balance;
  }
}
