document.addEventListener("DOMContentLoaded", function() {

  function getRating(){
    return document.querySelector("select#new-task-rating").value
  }

  /* Generally works - only issue is that repeated ToDos will get 
  deleted when one is deleted. Should enforce some sort of uniqueness
  requirement */
  function reply_click(clicked_class) {
    let itemsToDelete = document.getElementsByClassName(clicked_class)
    for (let i = itemsToDelete.length - 1; i >= 0; i--) {
      itemsToDelete[i].remove()
    }
  }

  let dropdown = document.getElementById("new-task-rating")
  //Add some options to the dropdown menu
  for (let i = 1; i <= 10; i++){
    let option = document.createElement("option")
    dropdown.options.add(option)
    option.text = i 
    option.value = i 
  }
  
  let form = document.querySelector("form#create-task-form")
  form.addEventListener("submit", function() {
    event.preventDefault()
    let newItem = document.createElement('li')
    newItem.innerHTML = `${document.querySelector("input#new-task-description").value} - Priority: ${getRating()}  ` 
    let newDeleteButton = document.createElement("button")
    newDeleteButton.innerText = "DELETE"
    newDeleteButton.className = document.querySelector("input#new-task-description").value 
    newDeleteButton.onclick = function() { reply_click(newDeleteButton.className) }
    newItem.className = document.querySelector("input#new-task-description").value 
    if (getRating() < 3) {
      newItem.style.color = "lightgreen"
    }
    else if (getRating() < 7) {
      newItem.style.color = "orange"
    }
    else {
      newItem.style.color = "red"
    }
    
    let listToAddTo = document.querySelector("ul#tasks")
    listToAddTo.append(newItem, newDeleteButton)
    event.target.reset()
  })
});
