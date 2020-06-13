import { Injectable } from '@angular/core';
import {Todo} from '../models/todo.model';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  // Placeholder for last todo_task_id so we can simulate
  // automatic incrementing of ids
  lastId: number = 0;
  add_todo_task = false;
  todo_task_created = false;
  serviceErrors:any = {};

  // Placeholder for todos
  todos: Todo[] = [];

  constructor(private formBuilder: FormBuilder,private http: HttpClient, private router:Router) {
  }

  // Simulate POST /todos
  addTodo(todo: Todo): TodoDataService {
    if (!todo.todo_task_complete_f) {
      todo.todo_task_complete_f = 0;
    }

    this.add_todo_task = true;
    console.log("tu sam todo service",todo,this)

      //let data: any= Object.assign({todo_task_name: this.todo_task_name}, this.userForm.value);
      this.http.post('/api/v1/todo_task', todo).subscribe((todo) =>{
        
        let path = '/todo';
        this.router.navigate([path]);
      }, error =>
      {
        this.serviceErrors = error.error.error;
      });
      this.todo_task_created = true;
  	
    console.log("tu sam todo service",todo,this)
    //this.todos.push(todo);
    return this;
  }

  // Simulate DELETE /todos/:todo_task_id
  deleteTodoById(todo_task_id: number): TodoDataService {
    this.todos = this.todos
      .filter(todo => todo.todo_task_id !== todo_task_id);
    return this;
  }

  // Simulate PUT /todos/:todo_task_id
  updateTodoById(todo_task_id: number, values: Object = {}): Todo {
    let todo = this.getTodoById(todo_task_id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  // Simulate GET /todos
  getAllTodos(): Todo[] {
    return this.todos;
  }

  // Simulate GET /todos/:todo_task_id
  getTodoById(todo_task_id: number): Todo {
    return this.todos
      .filter(todo => todo.todo_task_id === todo_task_id)
      .pop();
  }

  // Toggle todo complete
  toggleTodoComplete(todo: Todo){
    let updatedTodo = this.updateTodoById(todo.todo_task_id, {
      todo_task_complete_f: (todo.todo_task_complete_f == 1) ? 0 : 1
    });
    return updatedTodo;
  }

}