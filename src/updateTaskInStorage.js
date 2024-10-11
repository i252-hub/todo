export function updateTaskInStorage(updatedTask) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.map(task => (task.id === updatedTask.id ? updatedTask : task));
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
