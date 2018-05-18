import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CourseProvider } from '../../providers/course/course';
import { Course } from '../../models/Course';
import { AlertController } from 'ionic-angular';
import { StudentModalPage } from '../../pages/student-modal/student-modal';
import { ModalController } from "ionic-angular";

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
  private attendingList: Array<Course>
  private selectedCourse: Course;

  constructor(private modalController: ModalController, private alertController: AlertController, private courseProvider: CourseProvider, public navCtrl: NavController, public navParams: NavParams) {
  
  }

  ionViewDidLoad() {
    this.attendingList = this.courseProvider.getCourseAttendanceForStudent(sessionStorage.getItem("studentId"));
    this.courseList = this.courseProvider.getCoursesForYear(23, "asdf");
  }

  isAttending(item){
    for(let course of this.attendingList){
      if(course.name == item.name){
        return true;
      }
    }

    return false;
  }



  attendCourse(item){
    if(this.isAttending(item)){
      if(this.courseProvider.removeCourseFromAttending(item)){
        for(let course of this.attendingList){
          if(course.name == item.name){
            var index = this.attendingList.indexOf(course);
            this.attendingList.splice(index, 1);
          }
        }
      }
    }else{
      if(this.courseProvider.addCourseToAttentding(item)){
        this.attendingList.push(item);
      }
    }
  }
  getAttendButtonText(item){
    if(this.isAttending(item)){
      return "unattend";
    }else{
      return "attend";
    }
  }
  getAttendButtonBackground(item){
    if(this.isAttending(item)){
      return "#ff1111";
    }else{
      return "#1c7a17";
    }
  }

  getItemBackground(course){
    var index = this.courseList.indexOf(course);
    if(index % 2 == 0){
      return "#eaf6ff";
    }else{
      return "#ffffff";
    }
  }

  itemIsSelected(item){
    return this.selectedCourse == item;
  }


  selectItem(item){
    if(this.selectedCourse == item){
      this.selectedCourse = null;
    }else{
      this.selectedCourse = item;
    }
  }

  showAttendingStudents(course){
    let modal = this.modalController.create(StudentModalPage, {data: course});
    modal.present();
  }




}
