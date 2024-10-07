import { Priority } from "./priority";

export function createPriorityDropdown(task_priority,form) {

const list_container = document.createElement("div");
list_container.className = "dropdown";
list_container.style.display = "none";
const ul = document.createElement("ul");
list_container.appendChild(ul);

const prior = new Priority('Priority 1', 'Priority 2', 'Priority 3', 'Priority 4');

prior.priorities.forEach((prioritySelect) => {
    const li = document.createElement("li");
    li.textContent = prioritySelect;
    li.classList.add(`priority-${prioritySelect.replace(/\s+/g, '-').toLowerCase()}`);
    ul.appendChild(li);

    li.addEventListener("click", ()=>{
        task_priority.textContent = prioritySelect;
        list_container.style.display = 'none';
        prior.PickPriority(prioritySelect);
    });
});

form.appendChild(list_container);

task_priority.addEventListener("click",()=>{
    list_container.style.display = list_container.style.display == 'none' || list_container.style.display == '' ? 'block' : 'none';
});

}