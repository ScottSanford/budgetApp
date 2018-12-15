import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BudgetPage } from '../pages/budget/budget';
import { TrackerPage } from '../pages/tracker/tracker';
import { BudgetTrackerService } from '../pages/services/budget-tracker.service';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    BudgetPage,
    TrackerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    BudgetPage,
    TrackerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BudgetTrackerService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
