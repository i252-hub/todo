import {Task} from 'task.js';

class Checklist extends Task{
    constructor(task_name, task_desc, task_priority, task_due, checklist){
        super(task_name, task_desc, task_priority, task_due);
        this.checklist = checklist;
    }
}