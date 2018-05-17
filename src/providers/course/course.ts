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
      teacher: "Minea",
      name: "Logica si Structuri Discrete",
      year: 1,
      description: "Aici se studiaza logica",
      department: "CTI"
    },
    {
      teacher: "Ciocarlie",
      name: "Programarea calculatoarelor",
      year: 1,
      description: "Inveti sa conduci trenu",
      department: "CTI"
    },
    {
      teacher: "Petrisor",
      name: "Matematica lu peste",
      year: 1,
      description: "Aici faci mancare de peste",
      department: "CTI"
    }];

    return courseList;

  }

}
