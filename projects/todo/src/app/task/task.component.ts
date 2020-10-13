import { Component, OnInit, Input} from '@angular/core';
import {Todo} from '../models/todo.model';
import {TodoDataService} from '../service/todo-data.service';
import {FormControl} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {MomentDateAdapter, MAT_MOMENT_DATE_FORMATS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
//import {default as _rollupMoment} from 'moment';
const moment =  _moment /* || _rollupMoment*/;
import { Subscription } from 'rxjs';

// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YY',
  },
  display: {
    dateInput: 'DD/MM/YY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'DD/MM/YY',
  },
};

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  providers: [
    TodoDataService,
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS}
  ]
})
export class TaskComponent implements OnInit {

  newTodo: Todo = new Todo();  
  readonly = true;
  today = moment().format("YYYY-MM-DD");
  private sub: any;
  dateFrom = null;
  subscription: Subscription;
  showCompleted: boolean = true ;
  //@Input() todos: Todo[] = [];

  constructor(private todoDataService: TodoDataService, private route: ActivatedRoute) {
    this.showCompleted = todoDataService.getShowCompletedFlag();
    console.log("tu sam",this.showCompleted,todoDataService.showCompleted)
     this.sub = this.route.paramMap.subscribe(params => {
      this.dateFrom = params.get('dateFrom'); 
      console.log("tu sam date param",this.dateFrom, params);
      if(this.dateFrom == null){
        this.todoDataService.getAll();
      }
      else{
        this.todoDataService.getByDates(this.dateFrom);
      } 
   });
   
  }
  

  ngOnInit(): void {
    //this.todoDataService.getAll();
    //console.log(this.dateFrom)
    /* if(this.dateFrom == null || this.dateFrom == ""){
      this.todoDataService.getAll();
    }
    else{
      this.todoDataService.getByDates(this.dateFrom);
    } */
  }

  getAll() {
    this.todoDataService.getAll();
  }

/*   getByDates(selectedDate){
    this.todoDataService.getByDates(selectedDate);
  } */

  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  updateTodo(todo) {
    this.todoDataService.updateTodo(todo);
  }

  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  toggleTodoDate(todo) {
    this.todoDataService.toggleTodoDate(todo);
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.todo_task_id);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }
  
  
}

