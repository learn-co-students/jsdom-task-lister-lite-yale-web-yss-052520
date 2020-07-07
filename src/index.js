document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById('create-task-form')
  form.addEventListener("submit", submitForm)
})

function getTasks() {
  return document.getElementById('tasks')
}

function submitForm(event) {
  event.preventDefault()

  let newTaskDesc = document.getElementById('new-task-description');
  
  let taskList = document.createElement('li');
  taskList.innerText = newTaskDesc.Value;
  
  getTasks().appendChild(taskList)
  event.target.reset();
}
