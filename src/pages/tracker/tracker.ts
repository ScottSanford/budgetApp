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
	protected remainingBudgetTotal: number
	protected remainingDailyBalance: number
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
		this.budgetTrackerService.getIncome(this.incomeValue)
		this.remainingBudgetTotal = this.budgetTrackerService.getRemainingBudgetBalance()
		this.showIncomeNumber = true
	}

	onAddExpense(expense: Budget.Expense) {
		this.budgetTrackerService.addExpenseToBudget(expense)
		this.budgetTrackerService.getRemainingBudgetBalance()
    this.remainingBudgetTotal = this.budgetTrackerService.getRemainingBudgetBalance()

    // Daily Time Balances
    this.remainingDailyBalance = this.budgetTrackerService.getRemainingTimeBalance().daily
	}

}
