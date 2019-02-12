function Balance() {
  let balance=0;
  this.calculate=(remainingdays)=>{
    const dailyexpenditure = (balance / remainingdays);
    balance = (balance - dailyexpenditure);
    return {
        balance,
        dailyexpenditure
    };
  }
  this.setBalance=(_balance)=>{
    balance=_balance;
  }
  this.getBalance=()=>{
    return balance;
  }
}
