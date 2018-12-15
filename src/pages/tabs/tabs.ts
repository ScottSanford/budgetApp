import { Component } from '@angular/core';

import { BudgetPage } from '../budget/budget';
import { TrackerPage } from '../tracker/tracker';
// import { UserPage } from '../user/user';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = BudgetPage;
  tab2Root = TrackerPage;
  tab3Root = TrackerPage;

  constructor() {

  }
}
