import { Component, OnInit } from '@angular/core';
import * as _moment from 'moment';
import { TodoDataService } from '../service/todo-data.service';
import { TaskComponent} from '../task/task.component';

const moment =  _moment;

@Component({
  selector: 'app-filters-menu',
  templateUrl: './filters-menu.component.html',
  styleUrls: ['./filters-menu.component.scss'],
  providers: [
    TodoDataService,TaskComponent
  ]
})
export class FiltersMenuComponent implements OnInit {
  today = moment().format('dddd');
  daysOfTheWeek: string[] = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday'];

  constructor(private todoDataService : TodoDataService, private taskComponent: TaskComponent) {
    
   }
  
  getByDate(day){
    let selectedDate = moment().day(day).format("YYYY-MM-DD");
    console.log("tu sam",day, selectedDate)
    //this.taskComponent.getByDates(selectedDate);
    this.todoDataService.getByDates(selectedDate);
   }
  
  
  ngOnInit(): void {
    console.log(moment().day(this.today))
  }

}
