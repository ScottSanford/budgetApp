import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';

import { DailyExpenseComponent } from './daily-expense/daily-expense';

@NgModule({
	declarations: [DailyExpenseComponent],
	imports: [
		CommonModule,
		IonicModule
	],
	exports: [DailyExpenseComponent]
})
export class ComponentsModule {}
