import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StudentProvider } from '../../providers/student/student';
import { Student } from '../../models/Student';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  private currentStudent: Student;

  constructor(private studentProvider: StudentProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.currentStudent = this.studentProvider.getStudentInfo("asdf");
    console.log(this.currentStudent);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }



}
