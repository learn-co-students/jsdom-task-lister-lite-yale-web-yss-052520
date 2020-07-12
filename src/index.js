document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.getElementById('create-task-form')
  form.addEventListener('submit', () => {
    event.preventDefault()

    let tasks = document.querySelector('ul#tasks')
    let getTask = document.querySelector('input#new-task-description')
    let listItem = document.createElement('li')
    listItem.innerText = getTask.value 
    tasks.appendChild(listItem)
    event.target.reset()
  })
});
