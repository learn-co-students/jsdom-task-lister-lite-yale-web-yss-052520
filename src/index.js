document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("create-task-form")
  const inputBox = document.getElementById("new-task-description")
  const todoList = document.getElementById("tasks")
  const prioritySelect = document.getElementById("new-task-priority")
  

  form.addEventListener("submit", function() {
    event.preventDefault()

    switch (prioritySelect.value) {
      case "High":
        color = "red"
        break;

      case "Medium":
        color = "orange"
        break;

      case "Low":
        color = "green"
        break;

    
      default:
        break;
    }

    const newTask = document.createElement("li")
    newTask.style.color = color
    newTask.innerHTML = `${inputBox.value} <button class="x">x</button>`


    todoList.append(newTask)

    const btns = document.querySelectorAll(`button.x`)

    for (let btn of btns) {
  
      btn.addEventListener("click", function() {
        let task = btn.parentElement
        task.parentNode.removeChild(task)
      })
  
    }



    form.reset()
  })





  
});
