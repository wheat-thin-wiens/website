// document.addEventListener("DOMContentLoaded", function() { alert('loaded') });

const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const dateSelect = document.getElementById("dateSelect");
const taskList = document.getElementById("taskList");

addButton.onclick = function() { addTask() };
taskInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    addTask();
  };
})

function addTask() {
  let taskName = taskInput.value;
  let taskDate = dateSelect.value;

  let para = document.createElement("p");

  if (!taskDate) {
    para.innerHTML = `${taskName}`;
  } else {
    para.innerHTML = `${taskName} - ${taskDate}`;
  }

  taskList.appendChild(para);
}

