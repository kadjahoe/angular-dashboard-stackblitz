import { Injectable } from "@angular/core";
import { from } from "rxjs";
import { filter, map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import Data from "../assets/data/students.json";
@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor() {}
  // get data to aggregate
  getdata() {
    return Data;
  }
  // find all grades
  getGrades() {
    let grades = {};
    this.getdata().forEach(element => (grades[element.grade] = true));
    return Object.keys(grades).map(grade => parseInt(grade));
  }
  // find all counselors
  getCounselors() {
    let counselors = {};
    this.getdata().forEach(
      element => (counselors[element.guidanceCounselor] = true)
    );
    return Object.keys(counselors);
  }
  // find students by counselor
  studentsByCounselor = () => {
    let counselorList = {};
    this.getCounselors().forEach(counselor => {
      let searchByCounselor = this.getdata().filter(
        student => student.guidanceCounselor === counselor
      );
      counselorList[counselor] = searchByCounselor;
    });
    return counselorList;
  };
  // find students by grade
  studentsByGrade = () => {
    let studentsList = {};
    this.getGrades().forEach(grade => {
      let searchGrade = this.getdata().filter(
        student => student.grade === grade
      );
      studentsList[grade] = searchGrade;
    });
    return studentsList;
  };
  // find students by grade & by counselor
  // filter by grade {"grade":{"counselor":[{student},{student},...etc]}}
  searchStudents = () => {
    let grade = {};
    this.getdata().forEach(student => {
      let outerKey = student.grade;
      if (!grade[outerKey]) {
        grade[outerKey] = {};
      }
      let innerKey = student.guidanceCounselor;
      if (!grade[outerKey][innerKey]) {
        grade[outerKey][innerKey] = [];
      }
      grade[outerKey][innerKey].push(student);
    });
    return grade;
  };

  // overall attendance stats per grade
  processGradeAttendanceStats = () => {
    // create and object to store the grades stats
    // let gradeAttendanceStats = {};
    // let average = {};
    // let min = {};
    // let max = {};
    let allStats = [];
    // iterate over each grade in the data file
    this.getGrades().forEach(grade => {
      // search for all students in the given grade
      let studentsByGrade = this.getdata().filter(
        student => student.grade === grade
      );
      // find the total attendancePercentage in the given grade
      let sumOfAttendancePercentage = studentsByGrade.reduce(
        (total, percent) => {
          return total + percent.attendancePercentage;
        },
        0
      );
      // find the average attendance(Percentage in the given grade
      let averagePercentage =
        sumOfAttendancePercentage / studentsByGrade.length;
      // average[grade] = averagePercentage.toFixed(2);
      // find the min and max attendancePercentage per grade
      let min = Math.min(
        ...studentsByGrade.map(attenPer => attenPer.attendancePercentage)
      );
      let max = Math.max(
        ...studentsByGrade.map(attenPer => attenPer.attendancePercentage)
      );
      let average = parseInt(averagePercentage.toFixed(2));
      allStats.push({ grade: grade, min: min, max: max, average: average });
    });
    // return the attendance stats per grade
    return allStats;
  };
}
