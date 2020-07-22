document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('#create-task-form')
  const taskList = document.querySelector('#tasks')

  form.addEventListener('submit', event => {
    event.preventDefault()

    const taskInput = document.getElementById('new-task-description')
    const li = document.createElement('li')
    li.innerText = taskInput.value

    const btn = document.createElement('button')
    btn.innerText = "X"
    btn.addEventListener('click', e => {
      li.remove()
    })
    li.appendChild(btn)

    taskList.appendChild(li)
    event.target.reset()
  })
})
