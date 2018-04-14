import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HomePage } from '../home/home'; 

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  private registerForm: FormGroup;
  private submitAttempt: boolean = false;
  private user: any = {
    name: "",
    surname: "",
    year: "",
    department: "",
    group: "",
    subgroup: "",
    email: "",
    phoneNumber: "",
    password: "",
    id: ""
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      name: ['',  Validators.compose([Validators.pattern('[a-zA-Z]*'), Validators.required])],
      surname: ['',  Validators.compose([Validators.pattern('[a-zA-Z]*'), Validators.required])],
      password: ['',  Validators.compose([Validators.pattern('[a-zA-Z0-9]*'), Validators.required])],
      email: ['', Validators.compose([Validators.pattern('[a-zA-Z@.]*'), Validators.required])],
      year: [''],
      department: [''],
      group: ['', Validators.compose([Validators.pattern('[1-8]'), Validators.required])],
      subgroup: ['', Validators.compose([Validators.pattern('[1-5]*'), Validators.required])],
      phoneNumber: ['', Validators.compose([Validators.pattern('[0-9]*'), Validators.required])]
    });
  }

  ionViewDidLoad() {
  }

  doRegister(){
    this.navCtrl.setRoot(HomePage);
  }


}
