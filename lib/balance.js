function Balance() {
  this.calculate=(availablebalance, dailyexpenditure)=>{
    throw new Error("Test");
    const newBalance = (availablebalance - dailyexpenditure);
    return {
        availablebalance: newBalance,
        dailyexpenditure: dailyexpenditure
    };
  }
}
