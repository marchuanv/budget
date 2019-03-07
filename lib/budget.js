function Budget() {
  
  this.allowance = 0;
  this.expenses = [];

  this.addExpense=(name, amount)=>{
    this.expenses.push({name, amount: Number(amount)});
    const expensesAmounts = this.expenses.map(x=> x.amount);
    this.allowance = expensesAmounts.reduce((total, amount) => (total - amount));
  };

  this.getAllowance=()=>{
    return this.allowance;
  };

  this.startNewMonth=()=>{
    this.expenses = expensesAmounts.reduce((total))
  }

  this.reset = (incomeAfterTax) =>{
    this.allowance = 0;
    this.expenses = [];
    this.addExpense("open",incomeAfterTax);
  };

}