document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("form#create-task-form")
  const colors = ["green", "yellow", "red"]
  form.addEventListener("submit", function addTask() {
    // debugger
    event.preventDefault()
    const color = colors[document.querySelector('select').value]
    let listItem = document.createElement('li')
    let listItemSpan = document.createElement('span')
    listItemSpan.innerText = event.target.querySelector("input#new-task-description").value
    listItem.style = `color:${color}`
    delButton = document.createElement('button')
    delButton.className = "delete-button"
    delButton.value = "x"
    editButton = document.createElement('button')
    editButton.className = "edit-button"
    editButton.value = "edit"
    listItem.appendChild(listItemSpan)
    listItem.appendChild(delButton)
    listItem.appendChild(editButton)
    delButton.addEventListener("click", function delTask() {
      event.target.parentElement.remove()
      event.target.remove()
    })
    editButton.addEventListener("click", function editTask() {
      event.target.parentElement.querySelector('span').innerText = document.querySelector("input#new-task-description").value
    })
    document.querySelector(`ul#tasks #${color}`).append(listItem)
    form.reset()
  })
});
