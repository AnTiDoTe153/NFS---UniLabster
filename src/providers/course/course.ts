import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Course } from '../../models/Course';

/*
  Generated class for the CourseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CourseProvider {

  constructor(public http: Http) {
    console.log('Hello CourseProvider Provider');
  }

  getCoursesForYear(year: number, department: string){
    var courseList: Array<Course>;

    courseList = [{
      teacher: "Marius Minea",
      name: "Logica si Structuri Discrete",
      year: 1,
      description: "Logica aplicata folosind ocaml",
      department: "CTI"
    },
    {
      teacher: "Horia Ciocarlie",
      name: "Programarea calculatoarelor",
      year: 1,
      description: "Bazele programarii in C",
      department: "CTI"
    },
    {
      teacher: "Emilia Petrisor",
      name: "Algebra",
      year: 1,
      description: "Elemente de algebra si geometrie",
      department: "CTI"
    }];

    return courseList;

  }

  getCourseAttendanceForStudent(userId: string){
    var courseList: Array<Course>;

    courseList = [{
      teacher: "Marius Minea",
      name: "Logica si Structuri Discrete",
      year: 1,
      description: "Logica aplicata folosind ocaml",
      department: "CTI"
    },
    {
      teacher: "Emilia Petrisor",
      name: "Algebra",
      year: 1,
      description: "Elemente de algebra si geometrie",
      department: "CTI"
    }];

    return courseList;
  }

  addCourseToAttentding(course: Course){
    //TO DO
    return true;
  }

  removeCourseFromAttending(course: Course){
    //TO DO
    return true;
  }

}
