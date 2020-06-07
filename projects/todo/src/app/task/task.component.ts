import { Component, OnInit } from '@angular/core';
import {Todo} from '../models/todo.model';
import {TodoDataService} from '../service/todo-data.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  providers: [TodoDataService]
})
export class TaskComponent implements OnInit {

  newTodo: Todo = new Todo();

  constructor(private todoDataService: TodoDataService) {
  }

  ngOnInit(): void {
    this.todoDataService.getAllTodos;
  }



  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  updateTodo(todo) {
    this.todoDataService.updateTodoById(todo.todo_task_id);
  }

  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.todo_task_id);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }

  disabled = true;

}

