function Schedule(data) {
  this.run=async()=>{
    if (data.balance >== 0){
      console.log("Running total.");
    } else {
      data.balance = 0;
    }
  }
}
