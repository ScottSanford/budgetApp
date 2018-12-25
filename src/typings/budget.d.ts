declare namespace Budget {
  export interface Expense {
	amount: number
	category: Category
	categoryType: string
	categoryIcon: string
	date: string
    name: string
  }

  export interface DailyExpense {
	date: string
	expenses: Budget.Expense[],
	sum: number
  }

  type Category = 'income' | 'expense' | 'savings'
}
