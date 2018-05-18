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

  getStudentsAttendingCourse(courseId: string){
    var studentList: Array<Student>;
    if(courseId == "Algebra"){
    studentList =[{
      name: "Calin",
      surname: "Sulea",
      department: "CTI-RO",
      email: "calin.g.sulea@gmail.com",
      phone: "0745048848",
      year: 3,
      group: 6,
      subgroup: 1
    },{
      name: "Rares",
      surname: "Neamu",
      department: "CTI-RO",
      email: "rares.neamu@gmail.com",
      phone: "0745048848",
      year: 3,
      group: 5,
      subgroup: 1
    },{
      name: "Attila",
      surname: "Bodis",
      department: "CTI-RO",
      email: "attile.bodis@gmail.com",
      phone: "0745048848",
      year: 3,
      group: 4,
      subgroup: 2
    },{
      name: "Marius",
      surname: "Feier",
      department: "CTI-RO",
      email: "marius.feier@gmail.com",
      phone: "0745048848",
      year: 3,
      group: 2,
      subgroup: 1
    }];
  }

  return studentList;
}


}
