import { Component } from '@angular/core';

import { BudgetPage } from '../budget/budget';
import { NewTransactionPage } from '../new-transaction/new-transaction';
import { ProfilePage } from '../profile/profile';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = BudgetPage;
  tab2Root = NewTransactionPage;
  tab3Root = ProfilePage;

  constructor(
    private navCtrl: NavController,
  ) {

  }

  goToNewTransactionPage() {

    const navOptions = {
      animate: true,
      animation: 'ios-transition',
      direction: 'forward',
      duration: 750
    }

    this.navCtrl.push(NewTransactionPage)
  }
}
