document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form#create-task-form")
  const tasks = document.querySelector("ul#tasks")

  form.addEventListener("submit", (event) => {
    let newTask = form.elements["new-task-description"].value
    let li = document.createElement("li")
    li.innerText = newTask
    tasks.appendChild(li)

    event.preventDefault()
  })
})
