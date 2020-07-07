

document.addEventListener("DOMContentLoaded", () => {

  let form = document.querySelector('form#create-task-form')

  form.addEventListener("submit", function(){
    event.preventDefault()

    const li = document.createElement('li')
    let task = document.querySelector('input#new-task-description').value
    let user = document.querySelector('input#user').value
    li.innerHTML = `${task} (${user})`

    const butt1 = document.createElement('button') 
    butt1.innerText = "delete" 
    butt1.className = "delete" 
    const butt2 = document.createElement('button') 
    butt2.innerText = "edit"
    butt2.className = "edit" 

    li.append(butt1)  
    li.append(butt2)

    switch(document.querySelector('select#priority').value){
      case "1": 
        li.style.color = "red" 
        li.setAttribute("class", "0")
        break
      case "2": 
        li.style.color = "orange"
        li.setAttribute("class", "1")
        break
      case "3":
        li.style.color = "green"
        li.setAttribute("class", "2")
        break
      default: 
        li.style.color = "black"
        li.setAttribute("class", "3")
    }

    let taskList = document.querySelector('ul#tasks')
    taskList.prepend(li) 
    const newTaskList = sort(taskList) 
    taskList.parentNode.append(newTaskList) 
    taskList.parentNode.removeChild(taskList)

    event.target.reset()
  })

  let press = document.querySelector('div#list')

  press.addEventListener("click", function(){
    switch(event.target.className){
      case 'edit':
        let taskEdit = event.target.parentNode 
        let description = event.target.parentNode.innerText.split("(")[0]
        let user = event.target.parentNode.innerText.split("(")[1].split(")")[0]
        let priority = event.target.parentNode.className
        taskEdit.parentNode.removeChild(taskEdit)
        document.querySelector('input#new-task-description').value = description
        document.querySelector('input#user').value = user 
        document.querySelector('select#priority').value = priority
        break 
      case 'delete':
        let taskGone = event.target.parentNode 
        taskGone.parentNode.removeChild(taskGone)
        break 
      default: 
        console.log('hi!')
    }
  })

  function sort(list){
    const elements = list.getElementsByTagName("li")
    priorities = [[],[],[],[]] 
    for (let element of elements) { 
      let index = parseInt(element.className)
      priorities[index].push(element) 
    }
    let newList = document.createElement('ul')
  newList.id = "tasks" 
  for (let priority of priorities) {
    for (let task of priority){
      newList.appendChild(task) 
    }
  }
  return newList 
  }
  

});
