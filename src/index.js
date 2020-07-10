document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form")
  const todo = document.querySelector("ul")
  form.addEventListener("submit",function(){
    const li = document.createElement("li")
    const btn = document.createElement("button")
    btn.innerText = "X"
    btn.addEventListener("click",function(){
      let del = event.target.parentNode 
      del.parentNode.removeChild(del)
    })
    const description = document.querySelector("input#new-task-description").value
    li.innerText = description
    console.log(li)
    li.append(btn)
    form.reset()
    todo.append(li)
    event.preventDefault()
  })
});
