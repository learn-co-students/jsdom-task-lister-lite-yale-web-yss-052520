document.addEventListener("DOMContentLoaded", () => {
  // your code here

  function qs(selector){
    return document.querySelector(selector)
  }

  function ce(element){
    return document.createElement(element)
  }

  let form = qs("form#create-task-form")

  form.addEventListener("submit", function(){
    event.preventDefault()
    let li = ce("li")
    let btn = ce("button")
    btn.innerText = "x"
    li.innerText = qs("input#new-task-description").value
    
    btn.addEventListener("click", function(){
      // console.log("event", event)
      // console.log("eventtarget", event.target.id)
      li.remove()
    })
    li.append(btn)


    let taskDiv = qs("ul#tasks")
    taskDiv.append(li)



    event.target.reset()
  })

});
