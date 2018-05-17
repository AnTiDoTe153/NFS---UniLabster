import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CourseProvider } from '../../providers/course/course';
import { Course } from '../../models/Course';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  private courseList: Array<Course>

  constructor(private courseProvider: CourseProvider, public navCtrl: NavController, public navParams: NavParams) {
  
    this.courseList = this.courseProvider.getCoursesForYear(23, "asdf");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  getItemBackground(course){
    var index = this.courseList.indexOf(course);
    if(index % 2 == 0){
      return "#eaf6ff";
    }else{
      return "#ffffff";
    }
  }



}
