function Budget() {
  
  this.allowance = 0;
  this.expenses = [];
  this.date = new Date();

  this.addExpense=(name, amount)=>{
    this.expenses.push({name, amount: Number(amount)});
    this.allowance = this.expenses.map(x=> x.amount).reduce((total, amount) => (total - amount));
  };

  this.getAllowance=()=>{
    return this.allowance;
  };

  this.reset = (incomeAfterTax) =>{
    this.allowance = 0;
    this.expenses = [];
    this.date = new Date();
    this.addExpense("openingbalance", incomeAfterTax);
  };

  this.getDate=()=>{
    return this.date;
  }

}