function Balance() {
  this.calculate=()=>{
    const newBalance = (data.availablebalance - data.dailyexpenditure);
    return {
        availablebalance: newBalance,
        dailyexpenditure: data.dailyexpenditure
    };
  }
}
function Schedule(){
  this.classname = "Balance",
  this.functionname = "calculate"
}
