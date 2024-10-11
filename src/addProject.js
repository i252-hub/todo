import taskForm from "./taskForm"; 
import taskpage from "./taskpage";

export function addProject() {
    const co = document.querySelector('aside');

    // Creating input for project name
    const projname = document.createElement('input');
    projname.type = 'text';
    projname.id = 'projname';
    projname.placeholder = 'Project Name';

    // Creating add button
    const addbtn = document.createElement('button');
    addbtn.type = 'button';
    addbtn.classList.add('addbtn');
    addbtn.textContent = 'Add Project';

    // Creating modal for adding project
    const modalProj = document.createElement('dialog');
    modalProj.classList.add('modalProj');
    document.body.appendChild(modalProj);

    // Add input and button to modal
    modalProj.appendChild(projname);
    modalProj.appendChild(addbtn);

    // Creating container to display project names
    const projContainer = document.createElement('div');
    projContainer.classList.add('projContainer');
    co.appendChild(projContainer);

    // Function to create display project with an add icon
    function createDisplayProject(projectName) {
        const main = document.querySelector('#main');
        if (main) {
            // Clear any previous content in the main container
            main.innerHTML = '';

            const displayProject = document.createElement('div');
            displayProject.classList.add('displayproject');
            displayProject.setAttribute('data-project-name', projectName);
            main.appendChild(displayProject);

            const title = document.createElement('h1');
            title.textContent = projectName;
            displayProject.appendChild(title);

            // Create add icon
            const addIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            addIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
            addIcon.setAttribute('viewBox', '0 0 24 24');
            addIcon.id = 'addIcon';

            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', 'M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z');
            addIcon.appendChild(path);

            // Create task container
            const taskContainer = document.createElement('div');
            taskContainer.classList.add('task_containertwo');

            const taskText = document.createElement('p');
            taskText.classList.add('task_text');
            taskText.textContent = 'Add Task';

            taskContainer.appendChild(addIcon);
            taskContainer.appendChild(taskText);
            main.appendChild(taskContainer);

            // Add event listener for the add icon
            addIcon.addEventListener('click', () => {
                
              showForm();
                taskpage.style.display = 'none';
            });
        } else {
            console.error("Main container not found.");
        }
    }

    // Function to display project name
    function displayProjectName() {
        const projectName = projname.value.trim();
        if (projectName) {
            const projElement = document.createElement('p');
            projElement.textContent = projectName;
            projContainer.appendChild(projElement);
            projname.value = '';

            // Add event listener to the new project element
            projElement.addEventListener('click', () => {
                createDisplayProject(projectName);
            });
        } else {
            alert("Please enter a project name.");
        }
    }

    // Event listener for the add button
    addbtn.addEventListener('click', () => {
        displayProjectName();
        modalProj.close();
    });

    // Show modal when the add project button is clicked
    const addProjectButton = document.querySelector('#addp');
    addProjectButton.addEventListener('click', () => {
        modalProj.showModal();
    });
}
