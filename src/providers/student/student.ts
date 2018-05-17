import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Student } from '../../models/Student';

/*
  Generated class for the StudentProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StudentProvider {

  constructor(public http: Http) {
    console.log('Hello StudentProvider Provider');
  }

  getStudentInfo(studentId: string){
    var student: Student = {
      name: "Calin",
      surname: "Sulea",
      department: "CTI-RO",
      email: "calin.g.sulea@gmail.com",
      phone: "0745048848",
      year: 1,
      group: 6,
      subgroup: 1
    }
    return student;
  }
}
