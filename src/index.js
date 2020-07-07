document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const tForm = document.getElementById("create-task-form")
  const taskList = document.getElementById("tasks")
  addPrioritySelector(tForm)
  
  
  tForm.addEventListener('submit', function () {
    event.preventDefault()
    const userInput = getNewTask(tForm)
    printNewTask(userInput[0], userInput[1], taskList)
  })

  
});

function getNewTask(form) {
  let userInput = []
  let taskDescription = form.querySelector('#new-task-description').value
  let taskPriority = document.getElementById('priority-select').value
  userInput.push(taskDescription, taskPriority)
  return userInput
}

function printNewTask(userInputString, userInputColor, taskList) {
  const newTaskLiTag = document.createElement('li')
  newTaskLiTag.className = 'task-item'
  newTaskLiTag.textContent = userInputString
  newTaskLiTag.style = `color: ${userInputColor}`
  makeTaskDeleteButton(newTaskLiTag)
  
  taskList.appendChild(newTaskLiTag)
  return newTaskLiTag
}

function makeTaskDeleteButton(listItem) {
  let deleteButton = document.createElement('button')
  deleteButton.textContent = 'X'
  deleteButton.className = 'task-delete-button'
  deleteButtonClicked(deleteButton)
  listItem.appendChild(deleteButton)
  // return deleteButton
}

function deleteButtonClicked(deleteButton) {
  deleteButton.addEventListener('click', function() {
    deleteButton.parentElement.remove()
  })
}

function addPrioritySelector(form) {
  let prioritySelector = document.createElement('select')
  prioritySelector.id = 'priority-select'
  let priorityLabel = document.createElement('label')
  priorityLabel.id = "priority-label"
  priorityLabel.innerText = "Priority: "
  let options = []
  options.push(prioritySelectorOption("red", "High"), prioritySelectorOption("orange", "Medium"), prioritySelectorOption("blue", "Low"))
  for (let i = 0; i < options.length; i++) {
    prioritySelector.appendChild(options[i])
  }
  form.appendChild(priorityLabel)
  form.appendChild(prioritySelector)
  
}

function prioritySelectorOption(color, text) {
  let option = document.createElement('option')
  option.value = color
  option.innerText = text
  return option
}



