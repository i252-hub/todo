
export default function taskpage(){

const main = document.querySelector('#main');
main.textContent = '';

const inbox = document.createElement('h1');
inbox.textContent = 'Inbox';

const addIcon = document.createElementNS('http://www.w3.org/2000/svg','svg');
addIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
addIcon.setAttribute('viewBox', '0 0 24 24');
addIcon.id = 'addIcon';
const title = document.createElementNS('http://www.w3.org/2000/svg','title');
title.textContent = 'plus';
const path = document.createElementNS('http://www.w3.org/2000/svg','path');
path.setAttribute('d', 'M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z');
addIcon.appendChild(title);
addIcon.appendChild(path);

const task_containertwo = document.createElement('div');
task_containertwo.classList.add('task_containertwo');
main.appendChild(inbox);
main.appendChild(task_containertwo);

const task_containerdisplay = document.createElement('div');
task_containerdisplay.classList.add('task_containerdisplay');
main.appendChild(task_containerdisplay);


const task_text = document.createElement('p');
task_text.classList.add('task_text');
task_text.textContent = 'Add Task';

task_containertwo.appendChild(addIcon);
task_containertwo.appendChild(task_text);

return main;

}
