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
  this.setBalance=(balance)=>{
    totalBalance=balance;
    console.log("Total Balance was set to ",totalBalance);
  }
  this.getBalance=()=>{
    return balance;
  }
}
