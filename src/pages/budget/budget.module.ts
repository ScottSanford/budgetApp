import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BudgetPage } from './budget';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
	BudgetPage
  ],
  imports: [
	  ComponentsModule,
	  IonicPageModule.forChild(BudgetPage)
  ],
})
export class BudgetPageModule {}
