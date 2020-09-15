import { Component, OnInit } from '@angular/core';
import {Todo} from '../models/todo.model';
import {TodoDataService} from '../service/todo-data.service';
import {FormControl} from '@angular/forms';
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

  constructor(private todoDataService: TodoDataService) {
  }

  ngOnInit(): void {
    this.todoDataService.getAll();
  }

  getAll() {
    this.todoDataService.getAll();
  }

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

  // Datepicker takes `Moment` objects instead of `Date` objects.
  //date = new FormControl(moment());


}

