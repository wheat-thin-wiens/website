// document.addEventListener("DOMContentLoaded", function() { alert('loaded') });

const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const dateSelect = document.getElementById("dateSelect");
const taskList = document.getElementById("taskList");

class Task {
  constructor(name, date) {
    this.name = name;
    this.date = date;
    this.para = document.createElement("li");
    this.paraDate = document.createElement("p");
    this.completeBtn = document.createElement("button", {});
    this.deleteBtn = document.createElement("button", {});

    this.task = document.createElement("div");
    this.task.classList.add("task");
    taskList.appendChild(this.task);
  }

  newTask() {
    if (!this.date) {
      this.para.innerHTML = this.name;
    } else {
      this.para.innerHTML = `${this.name} - ${this.date}`
    }

    // this.para.innerHTML = this.name;
    // this.paraDate.innerHTML = this.date;
    this.completeBtn.classList.add("taskBtn");
    this.deleteBtn.classList.add("taskBtn");

    // this.para.classList.add("task");
    // this.completeBtn.innerHTML = '<img src="assets/check.png" height="50"/>';
    // this.deleteBtn.innerHTML = '<img src="assets/delete.png" height="50"/>';
    this.completeBtn.innerHTML = '<i class="fa fa-check"></i>'
    this.deleteBtn.innerHTML = '<i class="fa fa-bomb"></i>'

    this.task.appendChild(this.para);
    this.task.appendChild(this.paraDate);
    this.task.appendChild(this.completeBtn);
    this.task.appendChild(this.deleteBtn);
  }

  deleteTask() {
    this.task.remove(this.para);
    this.task.remove(this.completeBtn);
    this.task.remove(this.deleteBtn);
  }

  completeTask() {
    this.para.innerHTML = this.para.innerHTML.strike();
    // this.paraDate.innerHTML = this.date.strike();
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

  let task = new Task(taskName, taskDate);
  task.newTask();

  task.completeBtn.addEventListener('click', function() {
    task.completeTask();
  })

  task.deleteBtn.addEventListener('click', function() {
    task.deleteTask();
  })
}

