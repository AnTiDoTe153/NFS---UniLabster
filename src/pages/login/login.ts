import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NativeKeyboard } from '@ionic-native/native-keyboard';
import { RegisterPage } from '../register/register';
import { DashboardPage } from '../dashboard/dashboard';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  registerButtonPress(){
    this.navCtrl.setRoot(RegisterPage);

  }

  doLogin(){
    this.navCtrl.setRoot(DashboardPage);
  }


}
