document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("form#create-task-form")
  let ul = document.querySelector("#tasks")

  form.addEventListener("submit", function() {
      let li = document.createElement("li")
      li.innerText = document.querySelector("#new-task-description").value
      ul.append(li)

      event.preventDefault()
  })
});
