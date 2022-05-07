var form = document.getElementById("taskForm");
var taskList = [];

const addTask = () => {
  var task = document.getElementById("task").value;
  var day = document.getElementById("day").value;
  if (day === "Monday" || day === "monday") {
    taskList = JSON.parse(localStorage.getItem("Monday")) || [];
    taskList.push(task);
    localStorage.setItem("Monday", JSON.stringify(taskList));
  } else if (day === "Tuesday" || day === "tuesday") {
    taskList = JSON.parse(localStorage.getItem("Tuesday")) || [];
    taskList.push(task);
    window.localStorage.setItem("Tuesday", JSON.stringify(taskList));
  } else if (day === "Wednesday" || day === "wednesday") {
    taskList = JSON.parse(localStorage.getItem("Wednesday")) || [];
    taskList.push(task);
    window.localStorage.setItem("Wednesday", JSON.stringify(taskList));
  } else if (day === "Thursday" || day === "thursday") {
    taskList = JSON.parse(localStorage.getItem("Thursday")) || [];
    taskList.push(task);
    window.localStorage.setItem("Thursday", JSON.stringify(taskList));
  } else if (day === "Friday" || day === "friday") {
    taskList = JSON.parse(localStorage.getItem("Friday")) || [];
    taskList.push(task);
    window.localStorage.setItem("Friday", JSON.stringify(taskList));
  } else if (day === "Saturday" || day === "saturday") {
    taskList = JSON.parse(localStorage.getItem("Saturday")) || [];
    taskList.push(task);
    window.localStorage.setItem("Saturday", JSON.stringify(taskList));
  } else if (day === "Sunday" || day === "sunday") {
    taskList = JSON.parse(localStorage.getItem("Sunday")) || [];
    taskList.push(task);
    window.localStorage.setItem("Sunday", JSON.stringify(taskList));
  } else {
    alert("Please enter a valid day");
  }
};

form.addEventListener("submit", function (event) {
  addTask();
  event.preventDefault();
});
