import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HomePage } from '../home/home'; 
import { AlertController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

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
  @ViewChild(Slides) slides: Slides;
  private registerForm1: FormGroup;
  private registerForm2: FormGroup;
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

  constructor(public alertController: AlertController, public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
    
    this.registerForm1 = this.formBuilder.group({
      name: ['',  Validators.compose([Validators.pattern('[a-zA-Z]*'), Validators.required])],
      surname: ['',  Validators.compose([Validators.pattern('[a-zA-Z]*'), Validators.required])],
      password: ['',  Validators.compose([Validators.pattern('[a-zA-Z0-9]*'), Validators.required])]
    });

    this.registerForm2 = this.formBuilder.group({
      year: [''],
      department: [''],
      email: ['', Validators.compose([Validators.pattern('[a-zA-Z@.]*'), Validators.required])],
      phoneNumber: ['', Validators.compose([Validators.pattern('[0-9]*'), Validators.required])],
      group: ['', Validators.compose([Validators.pattern('[1-8]'), Validators.required])],
      subgroup: ['', Validators.compose([Validators.pattern('[1-5]*'), Validators.required])],
    });
  }

  ionViewDidLoad() {
    this.slides.lockSwipes(true);
  }

  goToNextSlide(){
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
  }


  doRegister(){
    this.navCtrl.setRoot(HomePage);
  }

  showYearAlert(){
    var alert = this.alertController.create();

    alert.addInput({
      type: 'radio',
      label: 'First year',
      value: 'First year'
    });

    alert.addInput({
      type: 'radio',
      label: 'Second year',
      value: 'Second year'
    });

    alert.addInput({
      type: 'radio',
      label: 'Third year',
      value: 'Thid year'
    });

    alert.addInput({
      type: 'radio',
      label: 'Fourth year',
      value: 'Fourth year'
    });

    alert.addButton({text: "Ok", handler:(data) =>{
      this.user.year = data;
    }})

    alert.addButton("Dismiss");
  }


}
