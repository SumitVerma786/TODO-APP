var taskList = [];

const deleteTask = () => {
  var task = document.getElementById("task").value;
  if (taskList == null) {
    alert("Todo List is empty");
  } else {
    let index = taskList.indexOf(task);
    if(index === -1){
      alert("Element does not exists in this list");
    }
    else{
    taskList.splice(index, 1);
    }
  }
};

function collectTask() {
  var day = document.getElementById("day").value;
  if (day === "Monday" || day === "monday") {
    taskList = JSON.parse(localStorage.getItem("Monday")) || [];
    deleteTask.apply(this, taskList);
    localStorage.setItem("Monday", JSON.stringify(taskList));
  } else if (day === "Tuesday" || day === "tuesday") {
    taskList = JSON.parse(localStorage.getItem("Tuesday")) || [];
    deleteTask.apply(this, taskList);
    localStorage.setItem("Tuesday", JSON.stringify(taskList));
  } else if (day === "Wednesday" || day === "wednesday") {
    taskList = JSON.parse(localStorage.getItem("Wednesday")) || [];
    deleteTask.apply(this, taskList);
    localStorage.setItem("Wednesday", JSON.stringify(taskList));
  } else if (day === "Thursday" || day === "thursday") {
    taskList = JSON.parse(localStorage.getItem("Thursday")) || [];
    deleteTask.apply(this, taskList);
    localStorage.setItem("Thursday", JSON.stringify(taskList));
  } else if (day === "Friday" || day === "friday") {
    taskList = JSON.parse(localStorage.getItem("Friday")) || [];
    deleteTask.apply(this, taskList);
    localStorage.setItem("Friday", JSON.stringify(taskList));
  } else if (day === "Saturday" || day === "saturday") {
    taskList = JSON.parse(localStorage.getItem("Saturday")) || [];
    deleteTask.apply(this, taskList);
    localStorage.setItem("Saturday", JSON.stringify(taskList));
  } else if (day === "Sunday" || day === "sunday") {
    taskList = JSON.parse(localStorage.getItem("Sunday")) || [];
    deleteTask.apply(this, taskList);
    localStorage.setItem("Sunday", JSON.stringify(taskList));
  }
  else{
    alert("Please enter a valid day");
  }
}

var form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  collectTask();
  event.preventDefault();
});
