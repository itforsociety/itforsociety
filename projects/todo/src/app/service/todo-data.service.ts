import { Injectable } from '@angular/core';
import {Todo} from '../models/todo.model';


@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  // Placeholder for last todo_task_id so we can simulate
  // automatic incrementing of ids
  lastId: number = 0;

  // Placeholder for todos
  todos: Todo[] = [];

  constructor() {
  }

  // Simulate POST /todos
  addTodo(todo: Todo): TodoDataService {
    if (!todo.todo_task_id) {
      todo.todo_task_id = ++this.lastId;
    }
    this.todos.push(todo);
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