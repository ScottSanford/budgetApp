import { Component, OnInit } from '@angular/core'

@Component({
  	selector: 'budget-overview',
	templateUrl: 'budget-overview.html'
})
export class BudgetOverviewComponent implements OnInit {

  	constructor() {}

	ngOnInit() {
		console.log('Hello BudgetOverviewComponent Component')
  	}

}
