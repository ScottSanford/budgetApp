import { Injectable } from "@angular/core"

@Injectable()
export class BudgetTrackerService {
  // Save Budget Income
  public budgetIncome: number = 0
  public budgetExpenses: Budget.Expense[] = []

  addIncome() {

  }
}
