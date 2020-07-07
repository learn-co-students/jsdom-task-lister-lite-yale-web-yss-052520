document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const todoForm = document.getElementById('create-task-form')
  const taskContainer = document.getElementById('tasks')

  todoForm.addEventListener('submit', function(event) {
    event.preventDefault()
    const input = event.target.querySelector("#new-task-description")
    let task = input.value
    input.value = ""
    const taskLiTag = document.createElement('li')
    taskLiTag.textContent = task + " "
    const buttonTag = document.createElement('button')
    buttonTag.textContent = "X"
    buttonTag.className = "delete_button"
    buttonTag.addEventListener('click', function(){
      buttonTag.parentElement.remove()
    })
    taskLiTag.appendChild(buttonTag)
    taskContainer.appendChild(taskLiTag)
    

  })


});
