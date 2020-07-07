document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const newForm = document.getElementById("create-task-form")
  const taskDescription = document.getElementById("new-task-description")
  newForm.addEventListener("submit", createTask)
  
  const newExercise = document.getElementById("create-new-exercise")
  const exerciseDescription = document.getElementById("new-exercise-description")
  newExercise.addEventListener("submit", newExercise)

});

const createTask = event => {
  event.preventDefault()
  const taskDescription = document.getElementById("new-task-description")
  const newTask = document.createElement("li")
  newTask.innerHTML = taskDescription.value 
  document.getElementById("tasks").appendChild(newTask);
  alert("New Task!")
}

// still trying to figure out how to implement this event
const deleteTask = event => {
  event.preventDefault()
  const taskDescription = document.getElementById("new-task-description")
  taskDescription.remove()
  alert("You have deleted a task.")
}

const newExercise = event => {
  event.preventDefault()
  const exerciseDescription = document.getElementById("new-exercise-description")
  const newActivity = document.createElement("li")
  newActivity.innerHTML = exerciseDescription.value
  document.getElementById("exercise").appendChild(newActivity)
}