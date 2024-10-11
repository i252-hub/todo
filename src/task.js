
export class Task{
    constructor(id = null,task_name, task_desc, task_priority, due){
        this.id = id || Date.now();
        this.task_name = task_name;
        this.task_desc = task_desc;
        this.task_priority = task_priority;
        this.due = due;
     
    }

}






