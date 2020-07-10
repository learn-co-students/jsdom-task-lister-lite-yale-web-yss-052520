document.addEventListener("DOMContentLoaded", () => {
  
  let form = document.querySelector("#create-task-form")
  let tasks = document.querySelector("#tasks")
  
  form.addEventListener('submit', function(e){
    e.preventDefault()
    let input = document.querySelector("#new-task-description").value  
    let newTask = document.createElement('li')
    newTask.innerText = input
    tasks.appendChild(newTask)
    // debugger
  })
});
