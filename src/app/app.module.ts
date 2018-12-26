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
import { ProfilePage } from '../pages/profile/profile';
import { NewTransactionPage } from '../pages/new-transaction/new-transaction';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import { ComponentsModule } from '../components/components.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { firebaseConfig } from './credentials';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    BudgetPage,
    TrackerPage,
    ProfilePage,
	NewTransactionPage
  ],
  imports: [
	BrowserModule,
	ComponentsModule,
	IonicModule.forRoot(MyApp),
	AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    BudgetPage,
    TrackerPage,
    ProfilePage,
	NewTransactionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BudgetTrackerService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NativePageTransitions
  ]
})
export class AppModule {}
