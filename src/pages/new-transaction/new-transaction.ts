import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-new-transaction',
  templateUrl: 'new-transaction.html',
})
export class NewTransactionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goBackPage() {
    this.navCtrl.pop()
  }

}
