function Balance() {
  this.calculate=(availablebalance, dailyexpenditure)=>{
    const newBalance = (availablebalance - dailyexpenditure);
    return {
        availablebalance: newBalance,
        dailyexpenditure: dailyexpenditure
    };
  }
}
