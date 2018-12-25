import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';

import { DailyExpenseComponent } from './daily-expense/daily-expense';
import { BudgetOverviewComponent } from './budget-overview/budget-overview';

@NgModule({
	declarations: [DailyExpenseComponent,
    BudgetOverviewComponent],
	imports: [
		CommonModule,
		IonicModule
	],
	exports: [DailyExpenseComponent,
	BudgetOverviewComponent],
	// schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {}
