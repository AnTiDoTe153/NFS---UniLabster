import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { HttpModule } from '@angular/http';
import { ModalController } from 'ionic-angular';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RequestProvider } from '../providers/request/request';
import { NativeKeyboard } from '@ionic-native/native-keyboard';
import { AlertController } from 'ionic-angular';
import { CourseProvider } from '../providers/course/course';
import { DetailsPage } from '../pages/details/details';
import { StudentProvider } from '../providers/student/student';
import { LoginProvider } from '../providers/login/login';
import { StudentModalPage } from '../pages/student-modal/student-modal';


@NgModule({
  declarations: [
    MyApp,
    DashboardPage,
    LoginPage,
    RegisterPage,
    DetailsPage,
    StudentModalPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, { scrollAssist: false, autoFocusAssist: false }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DashboardPage,
    LoginPage,
    RegisterPage,
    DetailsPage,
    StudentModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RequestProvider,
    NativeKeyboard,
    AlertController,
    CourseProvider,
    StudentProvider,
    LoginProvider,
    StudentModalPage,
    ModalController
  ]
})
export class AppModule {}
