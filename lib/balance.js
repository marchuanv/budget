function Balance(data){
  this.calculate=()=>{
    const newBalance = (data.availablebalance - data.dailyexpenditure);
    return {
        availablebalance: newBalance,
        dailyexpenditure: data.dailyexpenditure
    };
  }
}
