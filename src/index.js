document.addEventListener("DOMContentLoaded", () => {
  let task_form = document.querySelector("#create-task-form");
  let form_val = document.querySelector("#new-task-description");
  let tasks = document.querySelector("#tasks")
  task_form.addEventListener("submit", (e) => {
    e.preventDefault()
    let item = document.createElement("li");
    item.innerText = form_val.value;
    tasks.append(item);
    e.target.reset
  });
});
