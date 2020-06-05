import {TestBed, async, inject} from '@angular/core/testing';
import {Todo} from '../models/todo.model';
import {TodoDataService} from './todo-data.service';

describe('TodoDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoDataService]
    });
  });

  it('should ...', inject([TodoDataService], (service: TodoDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllTodos()', () => {

    it('should return an empty array by default', inject([TodoDataService], (service: TodoDataService) => {
      expect(service.getAllTodos()).toEqual([]);
    }));

    it('should return all todos', inject([TodoDataService], (service: TodoDataService) => {
      let todo1 = new Todo({todo_task_name: 'Hello 1', todo_task_complete_f: 0});
      let todo2 = new Todo({todo_task_name: 'Hello 2', todo_task_complete_f: 1});
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
    }));

  });

  describe('#save(todo)', () => {

    it('should automatically assign an incrementing id', inject([TodoDataService], (service: TodoDataService) => {
      let todo1 = new Todo({todo_task_name: 'Hello 1', todo_task_complete_f: 0});
      let todo2 = new Todo({todo_task_name: 'Hello 2', todo_task_complete_f: 1});
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getTodoById(1)).toEqual(todo1);
      expect(service.getTodoById(2)).toEqual(todo2);
    }));

  });

  describe('#deleteTodoById(id)', () => {

    it('should remove todo with the corresponding id', inject([TodoDataService], (service: TodoDataService) => {
      let todo1 = new Todo({todo_task_name: 'Hello 1', todo_task_complete_f: 0});
      let todo2 = new Todo({todo_task_name: 'Hello 2', todo_task_complete_f: 1});
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
      service.deleteTodoById(1);
      expect(service.getAllTodos()).toEqual([todo2]);
      service.deleteTodoById(2);
      expect(service.getAllTodos()).toEqual([]);
    }));

    it('should not removing anything if todo with corresponding id is not found', inject([TodoDataService], (service: TodoDataService) => {
      let todo1 = new Todo({todo_task_name: 'Hello 1', todo_task_complete_f: 0});
      let todo2 = new Todo({todo_task_name: 'Hello 2', todo_task_complete_f: 1});
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
      service.deleteTodoById(3);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
    }));

  });

  describe('#updateTodoById(id, values)', () => {

    it('should return todo with the corresponding id and updated data', inject([TodoDataService], (service: TodoDataService) => {
      let todo = new Todo({todo_task_name: 'Hello 1', todo_task_complete_f: 0});
      service.addTodo(todo);
      let updatedTodo = service.updateTodoById(1, {
        todo_task_name: 'new todo_task_name'
      });
      expect(updatedTodo.todo_task_name).toEqual('new todo_task_name');
    }));

    it('should return null if todo is not found', inject([TodoDataService], (service: TodoDataService) => {
      let todo = new Todo({todo_task_name: 'Hello 1', todo_task_complete_f: 0});
      service.addTodo(todo);
      let updatedTodo = service.updateTodoById(2, {
        todo_task_name: 'new todo_task_name'
      });
      expect(updatedTodo).toEqual(null);
    }));

  });

  describe('#toggleTodoComplete(todo)', () => {

    it('should return the updated todo with inverse todo_task_complete_f status', inject([TodoDataService], (service: TodoDataService) => {
      let todo = new Todo({todo_task_name: 'Hello 1', todo_task_complete_f: 0});
      service.addTodo(todo);
      let updatedTodo = service.toggleTodoComplete(todo);
      expect(updatedTodo.todo_task_complete_f).toEqual(1);
      service.toggleTodoComplete(todo);
      expect(updatedTodo.todo_task_complete_f).toEqual(0);
    }));

  });

});