import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'daily-expense',
  templateUrl: 'daily-expense.html'
})
export class DailyExpenseComponent implements OnInit{

  @Input() expenses: Budget.DailyExpense[]

  constructor() {}

  ngOnInit() {
	console.log('expenses:', this.expenses)
  }

}
