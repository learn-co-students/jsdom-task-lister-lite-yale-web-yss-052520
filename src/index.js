document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form")
  const taskList = document.getElementById("tasks")
  const taskDesc = document.getElementById("new-task-description")

  taskForm.addEventListener("submit", function(){
    event.preventDefault()

    // must be created inside page for taskList to list all instead of replacing value
    const newTask = document.createElement("li")
    newTask.innerHTML = taskDesc.value 

    // create delete button everytime a li is created
    const deleteBtn = document.createElement('button')
    deleteBtn.innerText = "x" //what appears inside of button
    deleteBtn.addEventListener("click", function(){  // add functionality to button
      document.getElementById('tasks').removeChild(newTask)
    })
    newTask.append(deleteBtn)
    taskList.append(newTask)
    taskForm.reset()
  })
});