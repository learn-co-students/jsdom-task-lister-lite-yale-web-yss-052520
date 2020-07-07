document.addEventListener("DOMContentLoaded", function () {
  const taskForm = document.getElementById("create-task-form") 
  taskForm.addEventListener('submit', function(event) {
    event.preventDefault() //stop form from POSTING
    const userInputField = event.target.querySelector("#new-task-description")  //gets user input field
    //OR document.querySelector("#new-task-description")
    const todoList = document.querySelector("#tasks") //fetches the task box
    const todoPTag = document.createElement('p') //creates a new p-tag
    todoPTag.textContent = userInputField.value //saves the value of the input field as the p-tag content
    todoList.appendChild(todoPTag) //appends p-tag to the todo list
    document.forms['create-task-form'].reset() // resets the input field after pressing submit
  })
});
