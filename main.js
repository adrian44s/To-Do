window.addEventListener("load", () => {
  const form = document.querySelector(".newtask");
  const input = document.querySelector(".newtaskinp");
  const listElements = document.querySelector("#tasks");

  form.addEventListener("submit", (submit) => {
    submit.preventDefault();
    const task = input.value;

    if (!task) {
      alert("Please fill the task input");
      return;
    }

    const taskEl = document.createElement("div");
    taskEl.classList.add("tasks");

    const taskContentElement = document.createElement("div");
    taskContentElement.classList.add("content");
    // taskContentElement.innerText = task;

    taskEl.appendChild(taskContentElement);

    const taskInputElement = document.createElement("input");
    taskInputElement.classList.add("text");
    taskInputElement.type = "text";
    taskInputElement.value = task;
    taskInputElement.setAttribute("readonly", "readonly");

    taskContentElement.appendChild(taskInputElement);

    const taskActionElement = document.createElement("div");
    taskActionElement.classList.add("actions");

    const taskEditElement = document.createElement("button");
    taskEditElement.classList.add("edit");
    taskEditElement.innerHTML = "Edit";

    const taskDeleteElement = document.createElement("button");
    taskDeleteElement.classList.add("delete");
    taskDeleteElement.innerHTML = "Delete";

    taskActionElement.appendChild(taskDeleteElement);
    taskActionElement.appendChild(taskEditElement);

    taskEl.appendChild(taskActionElement);

    listElements.appendChild(taskEl);

    input.value = "";

    taskEditElement.addEventListener("click", () => {
      if (taskEditElement.innerText.toLowerCase() == "edit") {
        taskInputElement.removeAttribute("readonly");
        taskInputElement.focus();
        taskEditElement.innerText = "Save";
      } else {
        taskInputElement.setAttribute("readonly", "readonly");
        taskEditElement.innerText = "Edit";
      }
    });

    taskDeleteElement.addEventListener('click', ()=>{
        listElements.removeChild(taskEl)
    })

  });
});
