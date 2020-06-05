import { Todo } from './todo.model';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let todo = new Todo({
      todo_task_name: 'hello',
      todo_task_complete_f: 1
    });
    expect(todo.todo_task_name).toEqual('hello');
    expect(todo.todo_task_complete_f).toEqual(1);
  });
});
