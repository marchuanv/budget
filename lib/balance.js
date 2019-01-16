function Balance() {
  let totalBalance=0;
  this.calculate=(availablebalance, dailyexpenditure)=>{
    throw new Error("Test");
    const newBalance = (availablebalance - dailyexpenditure);
    return {
        availablebalance: newBalance,
        dailyexpenditure: dailyexpenditure
    };
  }
  this.setBalance=(balance)=>{
    totalBalance=balance;
    console.log("Total Balance was set to ",totalBalance);
  }
}
