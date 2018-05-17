import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HomePage } from '../home/home'; 
import { AlertController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { Course } from '../../models/Course';
import { CourseProvider } from '../../providers/course/course';

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
  private maxNumberOfCourses: number = 2;
  private secondPassword: string;
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

  private courseList: Array<Course>;
  private selectedCourses: Array<Course> = [];

  constructor(private courseProvider: CourseProvider, public alertController: AlertController, public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
    
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

  highlightItem(item){
    return this.selectedCourses.indexOf(item) > -1;
  }

  goToCourseList(){
    if(this.user.year == "" || this.user.department == "" || this.user.group == "" || this.user.subgroup == "" || this.user.email == "" || this.user.number == ""){
      this.showErrorAlert("You must fill in all fields");
    }else{
      this.courseList = this.courseProvider.getCoursesForYear(this.user.year, this.user.department);
      this.goToNextSlide();
    }
  }

  goToUniversitySlide(){
    if(this.user.name == "" || this.user.surname == "" || this.user.password == ""){
      this.showErrorAlert("You must fill in all fields");
    }else if(this.user.password != this.secondPassword){
      this.showErrorAlert("Passwords don't match");
    }else{
      this.goToNextSlide();
    }
  }

  showErrorAlert(errorMessage: string){
    var alert = this.alertController.create();
    alert.setTitle("Error");
    alert.setMessage(errorMessage);
    alert.addButton("Ok");
    alert.present();
  }

  selectCourse(item){
    var index = this.selectedCourses.indexOf(item)
    if(index > -1){
      this.selectedCourses.splice(index, 1);
    }else{
      if(this.selectedCourses.length < this.maxNumberOfCourses){
        this.selectedCourses.push(item);
      }
    }
  }


  doRegister(){
    if(this.selectedCourses.length < this.maxNumberOfCourses){
      var alert = this.alertController.create();
      alert.setTitle("Error");
      alert.setMessage("You must choose at exactly " + this.maxNumberOfCourses + " courses in order to register the account");
      alert.addButton("Ok");

      alert.present();
    }else{
      this.navCtrl.setRoot(HomePage);
    }
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
