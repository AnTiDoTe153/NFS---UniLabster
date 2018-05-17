import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NativeKeyboard } from '@ionic-native/native-keyboard';
import { RegisterPage } from '../register/register';
import { DashboardPage } from '../dashboard/dashboard';
import { LoginProvider } from '../../providers/login/login';
import { AlertController } from 'ionic-angular';

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
  private username: string;
  private password: string;

  constructor(private alertController: AlertController, private loginProvider: LoginProvider, public navCtrl: NavController, public navParams: NavParams) {
    
  }

  registerButtonPress(){
    this.navCtrl.setRoot(RegisterPage);

  }

  doLogin(){
    var result = this.loginProvider.login(this.username, this.password);
    if(result == true){
      this.navCtrl.setRoot(DashboardPage);
    }else{
      var alert = this.alertController.create();
      alert.setTitle("Invalid credentials")
      alert.setMessage("If you do not have an account, sign up now!");
      alert.addButton({text: "Sign up", handler:()=>{ this.registerButtonPress() }});
      alert.addButton("Cancel");
      alert.present();
    }
  }


}
