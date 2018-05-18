import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { StudentProvider } from '../../providers/student/student';
import { Student } from '../../models/Student';

/**
 * Generated class for the StudentModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-student-modal',
  templateUrl: 'student-modal.html',
})
export class StudentModalPage {

  private studentList: Array<Student>;

  constructor(private studentProvider: StudentProvider, public navCtrl: NavController, public navParams: NavParams, private viewController: ViewController) {
    var course = this.navParams.get("data");
    this.studentList = this.studentProvider.getStudentsAttendingCourse(course.name);
  }

  dismiss(){
    this.viewController.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentModalPage');
  }

}
