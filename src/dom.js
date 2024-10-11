import taskpage from "./taskpage";
import showForm  from "./taskForm";
import { addProject } from "./addProject";


export default function initializeDom(){
const task_con = document.querySelector('.task_container');


    if(task_con){
        task_con.addEventListener("click", ()=>{
            taskpage();
        })
    }

    const main = document.querySelector('#main');
        
    if (main) {
        main.addEventListener('click', (event) => {
            if (event.target.closest('#addIcon')) {
                console.log('Add Task button clicked'); 
                showForm(); 
                addIcon.style.display = 'none';
                const selectTasktext = document.querySelector('.task_text');
                selectTasktext.style.display = 'none';
            }
        });
    }   

    const aside = document.querySelector('aside');
    if (aside) {
        aside.addEventListener('click', (event) => {
            if (event.target.closest('#addp')) {
                  addProject();               
            }
        });
    }   

   


}