// document.addEventListener("DOMContentLoaded", function() { alert('loaded') });

const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const dateSelect = document.getElementById("dateSelect");
const taskList = document.getElementById("taskList");

class Task {
  constructor(name) {
    this.name = name;
    this.para = document.createElement("p");
    this.completeBtn = document.createElement("button", {});
    this.deleteBtn = document.createElement("button", {});
  }

  newTask() {
    let task = document.createElement("div");
    task.classList.add("task");
    taskList.appendChild(task);

    this.para.innerHTML = this.name;
    this.completeBtn.classList.add("taskBtn");
    this.deleteBtn.classList.add("taskBtn");

    // this.para.classList.add("task");
    // this.completeBtn.innerHTML = '<img src="assets/check.png" height="50"/>';
    // this.deleteBtn.innerHTML = '<img src="assets/delete.png" height="50"/>';
    this.completeBtn.innerHTML = '<i class="fa fa-check"></i>'
    this.deleteBtn.innerHTML = '<i class="fa fa-bomb"></i>'

    task.appendChild(this.para);
    task.appendChild(this.completeBtn);
    task.appendChild(this.deleteBtn);
    // taskList.append(document.createElement("br"));
  }

  deleteTask() {
    taskList.remove(this.para);
    taskList.remove(this.completeBtn);
    taskList.remove(this.deleteBtn);
  }

}

addButton.onclick = function() { addTask() };
taskInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    addTask();
  };
})

function addTask() {
  let taskName = taskInput.value;
  let taskDate = dateSelect.value;

  // let para = document.createElement("p");
  // para.innerHTML = taskName;
  // taskList.appendChild(para);

  let task = new Task(taskName);
  task.newTask();
}
