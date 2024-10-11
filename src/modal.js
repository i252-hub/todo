import showForm from "./taskForm";

export function showTaskModal(task) {
    
    const modal = document.createElement('dialog');
    modal.classList.add('modal');

    document.body.appendChild(modal);
    modal.showModal();

    const form = showForm(task); 
    modal.appendChild(form);
}
