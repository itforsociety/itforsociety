import { Component, OnInit } from '@angular/core';
import * as _moment from 'moment';

const moment =  _moment;

@Component({
  selector: 'app-filters-menu',
  templateUrl: './filters-menu.component.html',
  styleUrls: ['./filters-menu.component.scss']
})
export class FiltersMenuComponent implements OnInit {

  constructor() {
   }
  
  today = moment().format('dddd');
   //console.log(day);
  selectDay(event: Event) {
    this.today = (event.target as HTMLSelectElement).value;
  }

  daysOfTheWeek: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday','Sunday'];

  ngOnInit(): void {
  }

}
