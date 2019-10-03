import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
  providers: [DataService]
})
export class SidemenuComponent implements OnInit {
  @Output() counselorSelected = new EventEmitter<string>();
  
  counselors = this.dataService.getCounselors();
  selectCounselor = (counselor: string) => {
    this.counselorSelected.emit(counselor);
  }
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }
  
}
