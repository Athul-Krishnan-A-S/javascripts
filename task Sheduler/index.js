function addTask(event){
    event.preventDefault();

    var taskName = document.getElementById('task').value;
    var readPriority = document.getElementById('select_box').value;
    var readDate = document.getElementById('date').value;

    var tasksContainer = document.querySelector('.tasks');

    var container = document.createElement('div');
    container.classList.add('tasks-div');
    
    var title = document.createElement('p');
    title.textContent = "Task: " + taskName;
    container.appendChild(title);
    
    var priority = document.createElement('p');
    priority.textContent = "Priority: " + readPriority;
    container.appendChild(priority);
    
    var date = document.createElement('p');
    date.textContent = "Date: " + readDate;
    container.appendChild(date);

    tasksContainer.appendChild(container);
}