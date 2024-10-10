import showForm from "./taskForm";
import { updateTaskInStorage } from "./updateTaskInStorage";

export function showTaskModal(task) {
    
    const modal = document.createElement('dialog');
    modal.classList.add('modal');

    document.body.appendChild(modal);
    modal.showModal();

    const form = showForm(task); // Pass the task to showForm
    modal.appendChild(form);
}
