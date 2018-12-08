import { Injectable } from '@angular/core'
import _ from 'lodash'
import moment from 'moment'

@Injectable()
export class BudgetTrackerService {
	// Save Budget Income
	public budgetIncome: number = 0
	// Store budget expenses in an array
  	public budgetExpenses: Budget.Expense[] = []

	getIncome(amount) {
		this.budgetIncome = amount
	}

	addExpenseToBudget(expense: Budget.Expense) {
		this.budgetExpenses.push(expense)
	}

	getRemainingBudgetBalance(): number {
		if (this.budgetExpenses.length >= 1) {
			const expenseAmounts = _.map(this.budgetExpenses, expense => expense.amount)
			const expenseTotal = _.sum(expenseAmounts)
      const remainingBalance = this.budgetIncome - expenseTotal
			return remainingBalance
		}
		// If just the income is entered, show this in the total
		else {
			return this.budgetIncome
		}
	}

  getRemainingTimeBalance() {
    const todayDate: any = moment().date()
    const numDaysInMonth: any = moment().daysInMonth()
    const remainingDaysInMonth: number = numDaysInMonth - todayDate

    return {
      daily: this.getRemainingDailyBalance(remainingDaysInMonth),
      weekly: 'weekly'
    }
  }

  getRemainingDailyBalance(remainingDays) {
    const remainingBalance = this.getRemainingBudgetBalance() / remainingDays
    return parseFloat(remainingBalance.toFixed(2))
  }
}
