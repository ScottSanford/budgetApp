import { Component } from '@angular/core';

import { BudgetPage } from '../budget/budget';
import { NewTransactionPage } from '../new-transaction/new-transaction';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = BudgetPage;
  tab2Root = NewTransactionPage;
  tab3Root = ProfilePage;

  constructor() {

  }
}
