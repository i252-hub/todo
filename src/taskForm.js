import {Due} from "./due";
import {Task} from './task';
import { addTask } from "./taskStorage";
import { createPriorityDropdown } from './prioritylist';
import taskpage from "./taskpage";
import flatpickr from "flatpickr";
import {showTaskModal} from "./modal";

export default function showForm(task = null) {
    console.log('hello');
const main = document.querySelector('#main');

const form = document.createElement('form');
form.classList.add('form');
form.id = 'form';
main.appendChild(form);

const minicontainer = document.createElement('div');
minicontainer.classList.add('minicontainer');
form.appendChild(minicontainer);

const titleInput = document.createElement('input');
titleInput.type = 'text';
titleInput.id = 'titleInput';
titleInput.placeholder = 'Task Name';
titleInput.required = true;
titleInput.value = task ? task.task_name : '';
minicontainer.appendChild(titleInput);

const descInput = document.createElement('input');
descInput.type = 'text';
descInput.id = 'descInput';
descInput.placeholder = 'Task Description';
descInput.required = true;
descInput.value = task ? task.task_desc : '';
minicontainer.appendChild(descInput);

const minicontainertwo = document.createElement('div');
minicontainertwo.classList.add('minicontainertwo');
form.appendChild(minicontainertwo);

const dueButton = document.createElement('button');
    dueButton.id = 'dueButton';
    dueButton.type = 'button';
    dueButton.textContent = 'Due';
    dueButton.required = true;
    minicontainertwo.appendChild(dueButton);

    const dueDateInput = document.createElement('input');
    dueDateInput.id = 'dueDateInput';
    dueDateInput.type = 'hidden';
    dueDateInput.value = task ? task.due.due_task : '';
    minicontainertwo.appendChild(dueDateInput);

    const flatpickrInstance = flatpickr(dueDateInput, {
        enableTime: true, 
        dateFormat: "m-d", 
        minDate: "today", 
        defaultDate: task ? task.due.due_task : null,
        onChange: function(selectedDates, dateStr, instance) {
           
            if (selectedDates.length > 0) {
                dueButton.textContent = `Due: ${dateStr}`; 
            }
        }
       
    });

    dueButton.addEventListener("click", ()=>{
        flatpickrInstance.open();
    })

const task_priority = document.createElement('button');
task_priority.textContent = task ? task.task_priority : 'Priority';
task_priority.id = 'taskPriority';
task_priority.type = 'button';

minicontainertwo.appendChild(task_priority);
createPriorityDropdown(task_priority, form);

const btnContainer = document.createElement('div');
btnContainer.classList.add('btn-container');
form.appendChild(btnContainer);
const cancel = document.createElement('button');
cancel.textContent = 'Cancel';
cancel.id = 'cancel';
cancel.type = 'button';
const submit = document.createElement('button');
submit.id = 'submit';
submit.textContent = 'Add Task';
submit.type = 'submit';
submit.textContent = task ? 'Update Task' : 'Add Task';
btnContainer.appendChild(cancel);
btnContainer.appendChild(submit);


cancel.addEventListener("click", ()=>{
    form.style.display = 'none';
    console.log('cancel button clicked');
    addIcon.style.display = 'block';
    const selectTasktext = document.querySelector('.task_text');
    selectTasktext.style.display = 'block';
    const removeModal = document.querySelector('.modal');
    if (removeModal) {
        removeModal.close();
    }
    const removecon = document.querySelector('.modal-container');
    if (removecon) {
        removecon.remove();
    }

    
    flatpickrInstance.clear(); 


});

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    form.classList.add('moved');

   

    const task_name = document.getElementById('titleInput').value;
    const task_desc = document.getElementById('descInput').value;
    const task_priority_value = task_priority.textContent !== 'Priority' ? task_priority.textContent : null;
    const task_dueDate = document.getElementById('dueDateInput').value;

    if(!task_priority_value){
        alert("Please prioritize.");
        return;
    }
    let dueDate;
        if (task_dueDate) {
            const dateParts = task_dueDate.split('-'); 
            const currentYear = new Date().getFullYear(); 
            const formattedDate = `${currentYear}-${dateParts[0].padStart(2, '0')}-${dateParts[1].padStart(2, '0')}`; // Format as YYYY-MM-DD
            dueDate = new Date(formattedDate); 
        }

        else{
                alert("Please select a due date.");
                return; 
            
        }

    const due = new Due(dueDate);
    const task = new Task(task_name, task_desc, task_priority_value, due);
    addTask(task);
    displayTask(task);
    event.target.reset();
    flatpickrInstance.clear();
    taskpage.style.display = 'none';
    console.log('taskpage element:', taskpage);

});

function displayTask(task) {
    const choosetask_container = document.querySelector('.task_containerdisplay');

    const taskElement = document.createElement('div');
    taskElement.classList.add('task');

    const taskcheckcontainer = document.createElement('div');
    taskcheckcontainer.classList.add('checker');
    taskElement.appendChild(taskcheckcontainer);

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    taskcheckcontainer.appendChild(checkBox);

    checkBox.addEventListener("click", (event)=>{
        event.stopPropagation();
        if(checkBox.checked){
            choosetask_container.removeChild(taskElement);
        }
    })

    const taskName = document.createElement('p');
    taskName.classList.add('taskName');
    taskName.textContent = `${task.task_name}`;
    taskcheckcontainer.appendChild(taskName);

    const taskDesc = document.createElement('p');
    taskDesc.classList.add('taskDesc');
    taskDesc.textContent = `${task.task_desc}`;
    taskElement.appendChild(taskDesc);

    const taskBottom = document.createElement('div');
    taskBottom.classList.add('taskBottom');
    taskElement.appendChild(taskBottom);
    const taskPriority = document.createElement('button');
    taskPriority.classList.add('taskPriority');
    taskPriority.textContent = `Priority: ${task.task_priority}`
    taskBottom.appendChild(taskPriority);


    const taskDue = document.createElement('button');
    taskDue.classList.add('taskDue');
    taskDue.textContent = `Due: ${new Date(task.due.due_task).toLocaleDateString()}`;
    taskBottom.appendChild(taskDue);

    taskElement.addEventListener("click", ()=>{
        showTaskModal(task);
    });

    choosetask_container.appendChild(taskElement);
}


return form;
}
