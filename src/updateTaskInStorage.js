export function updateTaskInStorage(updatedTask) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    
    const taskIndex = tasks.findIndex((task) => task.id === updatedTask.id); 
    if (taskIndex !== -1) {
        tasks[taskIndex] = updatedTask; 
        localStorage.setItem('tasks', JSON.stringify(tasks)); 
    }
}
