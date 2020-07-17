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

  getAll(): TodoDataService {
      //let data: any= Object.assign({todo_task_name: this.todo_task_name}, this.userForm.value);
      this.http.get('/api/v1/todo_task').subscribe((data:any) =>{
        let path = '/todo';
        this.router.navigate([path]);
        this.todos= data.todos;
      }, error =>
      {
        this.serviceErrors = error.error.error;
      });
  	
    //this.todos.push(todo);
    return this;
  }

  // Simulate POST /todos
  addTodo(todo: Todo): TodoDataService {
    if (!todo.todo_task_complete_f) {
      todo.todo_task_complete_f = 0;
    }

    this.add_todo_task = true;
      //let data: any= Object.assign({todo_task_name: this.todo_task_name}, this.userForm.value);
      this.http.post('/api/v1/todo_task', todo).subscribe((data:any) =>{
        
        let path = '/todo';
        this.router.navigate([path]);
        this.todos.push(data.todo_task);
      }, error =>
      {
        this.serviceErrors = error.error.error;
      });
      this.todo_task_created = true;
  	
    //this.todos.push(todo);
    return this;
  }

  // Simulate DELETE /todos/:todo_task_id
  deleteTodoById(todo_task_id: number): TodoDataService {
    
    this.http.delete('/api/v1/todo_task/' + todo_task_id).subscribe((data:any) =>{
      this.todos = this.todos
        .filter(todo => todo.todo_task_id !== todo_task_id);
      let path = '/todo';
      this.router.navigate([path]);
      //values = data.todo_task;
      //Object.assign(todo, values);
    }, error =>
    {
      this.serviceErrors = error.error.error;
    });
    return this;
  }

  // Simulate PUT /todos/:todo_task_id
  updateTodo(todo, values: Object = {}): Todo {
    //let todo = this.getTodoById(todo_task_id);
    if (!todo) {
      return null;
    }
    console.log('tu sam update' + todo)

    if (!todo.todo_task_complete_f) {
      todo.todo_task_complete_f = 0;
    }

      //let data: any= Object.assign({todo_task_name: this.todo_task_name}, this.userForm.value);
    this.http.put('/api/v1/todo_task', todo).subscribe((data:any) =>{
      
      let path = '/todo';
      this.router.navigate([path]);
      values = data.todo_task;
      Object.assign(todo, values);
    }, error =>
    {
      this.serviceErrors = error.error.error;
    });
  	
    //this.todos.push(todo);
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
  toggleTodoComplete(todo, values: Object = {}): Todo {
    //let todo = this.getTodoById(todo_task_id);
    if (!todo) {
      return null;
    }    
    todo.todo_task_complete_f = (todo.todo_task_complete_f == 1) ? 0 : 1;
    
    this.updateTodo(todo);

    return todo;
  }

  // Toggle todo date
  toggleTodoDate(todo): Todo {
    //let todo = this.getTodoById(todo_task_id);
    console.log("tu samm", todo, todo.todo_task_due_date)
    if (!todo) {
      return null;
    }    
    
    this.updateTodo(todo);

    return todo;
  }

}