import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-tracker',
  templateUrl: 'tracker.html',
})
export class TrackerPage implements OnInit {
  budgetName: string

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams
  ) {}

  ngOnInit() {
    console.log(this.navParams)
    this.budgetName = this.navParams.data.budget.name
  }

}
