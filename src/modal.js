import showForm from "./taskForm";
import {updateTaskInStorage} from "./updateTaskInStorage";
import taskpage from "./taskpage";
export function showTaskModal(task){

const modalContainer = document.createElement('div');
modalContainer.classList.add('modal-container');
const modal = document.createElement('dialog');
modal.classList.add('modal');

document.body.appendChild(modalContainer);
modalContainer.appendChild(modal);
modal.showModal();

const form = showForm(task);
modal.appendChild(form);

const task_name = document.getElementById('titleInput').value;
const task_desc = document.getElementById('descInput').value;
const task_priority_value = document.getElementById('taskPriority').textContent;
const task_dueDate = document.getElementById('dueDateInput').value;

task.task_name = task_name;
task.task_desc = task_desc;
task.task_priority = task_priority_value;
task.due.due_task = task_dueDate;

updateTaskInStorage(task);



}
