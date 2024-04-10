//array to store tasks
let tasks = [];

const renderTasks = () => {
    let tasklist = document.getElementById('tasklist');
    tasklist.innerHTML = ''

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task.name;
        const btn = document.createElement('button');
        btn.innerHTML = '<div>Delete</div>';
        btn.className = 'Delete-Button';
        btn.onclick=()=>deleteTask(index);

        li.appendChild(btn)
        tasklist.appendChild(li);
        
    });


}

const addTask = () => {
    const name = document.getElementById('taskInput');
    if (name !== '') {
        const task = {
            name: name.value,
            date: new Date()
        }
    tasks.push(task);
    renderTasks();

    }
}


const deleteTask=(index)=>{
    tasks.splice(index,1);
    renderTasks();
}

const clearAllTasks=()=>{
    tasks=[];
    renderTasks();
}

const countTasks=()=>{
    alert("total number of tasks is:" +tasks.length)
}





























