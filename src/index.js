document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("form#create-task-form")
  const taskList = document.querySelector("ul#tasks")
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    newTask = document.createElement("li")
    newTask.innerHTML = e.target[0].value
    taskList.appendChild(newTask)
  })
});
