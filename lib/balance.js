function Balance() {
  let _balance=0;
  this.calculate=(remainingdays)=>{
    const dailyexpenditure = (_balance / remainingdays);
    _balance = (_balance - dailyexpenditure);
    return {
        balance: _balance,
        dailyexpenditure
    };
  }
  this.setBalance=(balance)=>{
    _balance=balance;
  }
  this.getBalance=()=>{
    return _balance;
  }
}
