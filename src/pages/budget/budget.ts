import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TrackerPage } from '../tracker/tracker';
import moment from 'moment'

@Component({
	selector: 'page-budgets',
	templateUrl: 'budget.html',
})
export class BudgetPage implements OnInit {
	protected status: boolean = false
	protected expenses: Budget.Expense[]
	public dailyExpenses: Budget.DailyExpense[]

	constructor(
		private navCtrl: NavController,
		private navParams: NavParams
	) {}

	ngOnInit() {
		this.dailyExpenses = [
			{
				date: moment().subtract(1, 'days').toString(),
				expenses: [
					{
						amount: 19.99,
						category: 'expense',
						categoryType: 'food',
						categoryIcon: 'pizza',
						date: moment().subtract(1, 'days').toString(),
						name: 'Sweet Green'
					},
					{
						amount: 2500,
						category: 'income',
						categoryType: 'salary',
						categoryIcon: 'cash',
						date: moment().subtract(1, 'days').toString(),
						name: 'Mediafly Salary'
					}
				],
				sum: 100
			},
			{
				date: moment().toString(),
				expenses: [
					{
						amount: 19.99,
						category: 'expense',
						categoryType: 'food',
						categoryIcon: 'pizza',
						date: moment().toString(),
						name: 'Sweet Green'
					},
					{
						amount: 2500,
						category: 'income',
						categoryType: 'salary',
						categoryIcon: 'cash',
						date: moment().toString(),
						name: 'Mediafly Salary'
					}
				],
				sum: 500
			}
		]
	}

	onGoToTracker(budgetName: string) {
		this.navCtrl.push(TrackerPage, {budgetName})
	}

	getBudgetListType(type) {
		if (type === 'list') {
		this.status = true
		} else {
		this.status = false
		}
	}

}
