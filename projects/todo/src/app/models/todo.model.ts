export class Todo {
    todo_task_id: number;
    todo_task_name: string = '';
    todo_task_complete_f: number = 0;
    todo_task_due_date: Date = null;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}