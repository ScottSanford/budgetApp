import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BudgetTrackerService } from '../services/budget-tracker.service';

@Component({
  selector: 'page-tracker',
  templateUrl: 'tracker.html'
})
export class TrackerPage implements OnInit {
  protected budgetName: string
  protected expenseName: string
  protected expenseValue: number
  protected incomeValue: number
  protected remainingBudgetTotal: number = 0
  protected showIncomeNumber: boolean

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private budgetTrackerService: BudgetTrackerService
  ) {}

  ngOnInit() {
    this.showIncomeNumber = false
    this.budgetName = this.navParams.data.budget.name
  }

  protected convertToNumber(event):number {
    return +event
  }

  onEnterIncome() {
    // Save income value to reusable service
    this.budgetTrackerService.budgetIncome = this.incomeValue
    this.showIncomeNumber = true
  }

  onAddExpense(expenses: Budget.Expense) {
    console.log('expense', expenses)
  }

}
