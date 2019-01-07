function Schedule(data) {
  this.run=async()=>{
    if (isNaN(data.balance)) {
      data.balance = 0;
    }
  }
}
