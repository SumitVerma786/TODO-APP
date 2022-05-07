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
    tasksForTuesday = JSON.parse(localStorage.getItem("Tuesday")) || [];
    tasksForTuesday.push(task);
    window.localStorage.setItem("Tuesday", JSON.stringify(tasksForTuesday));
  } else if (day === "Wednesday" || day === "wednesday") {
    tasksForWednesday = JSON.parse(localStorage.getItem("Wednesday")) || [];
    tasksForWednesday.push(task);
    window.localStorage.setItem("Wednesday", JSON.stringify(tasksForWednesday));
  } else if (day === "Thursday" || day === "thursday") {
    tasksForThursday = JSON.parse(localStorage.getItem("Thursday")) || [];
    tasksForThursday.push(task);
    window.localStorage.setItem("Thursday", JSON.stringify(tasksForThursday));
  } else if (day === "Friday" || day === "friday") {
    tasksForFriday = JSON.parse(localStorage.getItem("Friday")) || [];
    tasksForFriday.push(task);
    window.localStorage.setItem("Friday", JSON.stringify(tasksForFriday));
  } else if (day === "Saturday" || day === "saturday") {
    tasksForSaturday = JSON.parse(localStorage.getItem("Saturday")) || [];
    tasksForSaturday.push(task);
    window.localStorage.setItem("Saturday", JSON.stringify(tasksForSaturday));
  } else if (day === "Sunday" || day === "sunday") {
    tasksForSunday = JSON.parse(localStorage.getItem("Sunday")) || [];
    tasksForSunday.push(task);
    window.localStorage.setItem("Sunday", JSON.stringify(tasksForSunday));
  } else {
    alert("Please enter a valid day");
  }
};

form.addEventListener("submit", function (event) {
  addTask();
  event.preventDefault();
});
