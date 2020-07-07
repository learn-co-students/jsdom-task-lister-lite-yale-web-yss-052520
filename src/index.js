document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector('form#create-task-form')

  form.addEventListener("submit", function(){
    event.preventDefault()

    const taskPriority = document.querySelector("select#new-task-priority")
    switch (taskPriority.value) {
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
    const pTag = document.createElement('p') 
    pTag.style.color = color 
    const inputValue = event.target.querySelector("#new-task-description").value 
    pTag.textContent = inputValue 
    const list = document.querySelector("#tasks") 
    list.appendChild(pTag) 
    document.forms['create-task-form'].reset() 

    deleteButton = document.createElement('button')
    deleteButton.className = "delete-button"
    deleteButton.innerText = "x"
    list.appendChild(deleteButton)
    deleteButton.addEventListener("click", function() {
      event.target.parentElement.remove()
    })
  })
})
