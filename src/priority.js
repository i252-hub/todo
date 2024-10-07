
export class Priority{
    constructor(...priorities){
       this.priorities = priorities;
    }

    PickPriority(priority){
        this.priorities.push(priority);
    }
}

