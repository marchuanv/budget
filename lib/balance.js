function Balance(data){
  this.calculate=()=>{
    const newBalance = (data.availablebalance - data.dailyexpenditure);
    return {
        availablebalance: newBalance,
        data.dailyexpenditure
    };
  }
}
