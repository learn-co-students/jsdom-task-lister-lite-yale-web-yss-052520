document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('create-task-form')
  form.addEventListener("submit", createTask)



});

function createTask(event) {
  event.preventDefault()
  const description = document.getElementById('new-task-description')
  const newTask = document.createElement('li')
  newTask.innerText = description.value
  document.getElementById("tasks").appendChild(newTask)
  event.target.reset()
}

