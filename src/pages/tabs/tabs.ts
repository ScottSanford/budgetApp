import { Component } from '@angular/core';

import { SummaryPage } from '../summary/summary';
import { TransactionsPage } from '../transactions/transactions';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = SummaryPage;
  tab2Root = TransactionsPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
