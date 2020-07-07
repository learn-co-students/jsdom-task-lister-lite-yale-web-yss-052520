document.addEventListener("DOMContentLoaded", function () {
  const taskForm = document.getElementById("create-task-form") 
  
  taskForm.addEventListener('submit', function(event) {
    event.preventDefault() //stop form from POSTING
    const userInputField = event.target.querySelector("#new-task-description")  //gets user input field
    //OR document.querySelector("#new-task-description")

    const todoList = document.querySelector("#tasks") //fetches the task box
    const listElements = document.createElement('li') //creates a new list
    listElements.textContent = userInputField.value //saves the value of the input field as the p-tag content
    todoList.appendChild(listElements) //appends p-tag to the todo list

    const deleteButton = document.createElement('button') //creates a delete button 
    deleteButton.innerText = "x" 
    deleteButton.className = "delete"
    todoList.appendChild(deleteButton)

    deleteButton.onclick = function(event) { //function for delete button
      todoList.removeChild(listElements)
      todoList.removeChild(deleteButton)
    }

    taskForm.reset() // resets the input field after pressing submit
   
  })
});
