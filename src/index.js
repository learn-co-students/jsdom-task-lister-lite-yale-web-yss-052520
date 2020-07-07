document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const todoForm = document.getElementById('create-task-form')
  const taskContainer = document.getElementById('tasks')

  todoForm.addEventListener('submit', function(event) {
    event.preventDefault()
    let task = event.target.querySelector("#new-task-description").value

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
