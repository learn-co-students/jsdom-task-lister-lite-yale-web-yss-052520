document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById('create-task-form')
  form.addEventListener("submit", submitTasks)
})

function getTasks() {
  return document.getElementById('tasks')
}

function submitTasks(event) {
  event.preventDefault()

  let newTaskDesc = document.getElementById('new-task-description');
  
  let taskList = document.createElement('li');
  taskList.innerText = newTaskDesc.Value;
  
  let dlte = document.createElement('button')
  dlte.innerText = "x"
  dlte.onclick = function(event) {
    getTasks().removeChild(taskList)
  }

  getTasks().appendChild(taskList);
  taskList.appendChild(dlte);
  event.target.reset();
}

