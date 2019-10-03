import { Component } from '@angular/core';
import { from, BehaviorSubject } from 'rxjs';
import { filter, map, } from 'rxjs/operators';
import { DataService } from '../app/data.service';

class Range {
  constructor(public range:number) {}
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DataService]
})

  
export class AppComponent {


  
  counselor;
  range = new BehaviorSubject<number>(0);

  constructor(private dataService: DataService) {
    
  }
  setCounselor = (counselor) => {
    this.counselor = counselor;
    //this.range = range;
    console.log(counselor);
  }
  setStudentAttenRange = (range) => {
    this.range.next(range);
    //this.range = range;
    console.log(range);
  }
  
  model = new Range(0);
  
  title = 'dashboard';
  counselors = this.dataService.getCounselors();
}
