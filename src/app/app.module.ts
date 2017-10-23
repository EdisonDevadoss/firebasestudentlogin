import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StudentProvider } from '../providers/student/student';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2'; 
import { AngularFireDatabaseModule } from 'angularfire2/database';

const firebaseConfig = {
  apiKey: "AIzaSyCTyPY5pNG-lj2d7MGbL4wAOkzy8xN7ohQ",
  authDomain: "student-602b8.firebaseapp.com",
  databaseURL: "https://student-602b8.firebaseio.com",
  projectId: "student-602b8",
  storageBucket: "",
  messagingSenderId: "720749413852"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StudentProvider
  ]
})
export class AppModule {}
