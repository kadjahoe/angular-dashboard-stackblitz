import { Component, OnInit } from '@angular/core';
import { DataService } from '../../app/data.service';
@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
  providers: [DataService]
})
export class StatisticsComponent implements OnInit {

  constructor(private dataService: DataService) { 
    console.log(this.overallStats)
  }
  ngOnInit() {
  }

  

  grades = this.dataService.getGrades();
  overallStats = this.dataService.processGradeAttendanceStats();
  // min = Object.values(this.overallStats['min']);
  
}
