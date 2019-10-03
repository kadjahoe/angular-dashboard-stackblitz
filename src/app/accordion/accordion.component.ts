import { Component, OnInit, Input} from '@angular/core';
import { DataService } from '../../app/data.service';
import { BehaviorSubject} from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  providers: [DataService]
})
export class AccordionComponent implements OnInit {
  @Input() counselor: string;
  @Input() range: BehaviorSubject<number>;
  attendance = [];
  _range : number;


  studentsByCounselor = this.dataService.searchStudents();
  
  studentsByGrade = this.dataService.studentsByGrade();
  grades = this.dataService.getGrades();
  
  filterStudents = (students) => {
    let message = [{"Error":"There are no students with that attendance percentage. Please try a higher percentage."}];

    if (this._range !== 0) {
      let studentsCheck =students.filter(
        student => student.attendancePercentage <= this._range
      )
      if (studentsCheck.length > 0) {
        return studentsCheck
        }
      else {
        return message
      }
    }
    else {
      return students
    }

    
    
  }

  // range func
  
  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    console.log(this.range)
    this.range.pipe(debounceTime(500)).subscribe(value => this._range = value)

  }

}
