import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';
import { AccordionComponent } from '../accordion/accordion.component';

@Component({
  selector: 'app-child-accordion',
  templateUrl: './child-accordion.component.html',
  styleUrls: ['./child-accordion.component.scss'],
  providers:[ DataService]
})

export class ChildAccordionComponent {
  @Input() students: Array<any>; 

  constructor(private dataService: DataService) {
  }
  
  // @Input() students: loadStudents;
  getKeys(obj) {
  return Object.keys(obj)
  }
  getValues(obj) {
    return Object.values(obj)
  }
}
