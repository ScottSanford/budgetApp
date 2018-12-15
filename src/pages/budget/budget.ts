import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TrackerPage } from '../tracker/tracker';

@Component({
  selector: 'page-budgets',
  templateUrl: 'budget.html',
})
export class BudgetPage {
  budgets: any = [
    {name: 'December Budget'},
    {name: 'Janurary Budget'},
    {name: 'Big Debt Payoff'}
  ]

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams) {
  }

  addBudget() {
    this.budgets.push({name: 'My New Budget'})
  }

  onGoToTracker(budgetName: string) {
    this.navCtrl.push(TrackerPage, {budgetName})
  }

  budgetSelected(budget) {
    this.navCtrl.push(TrackerPage, {budget})
  }

}
