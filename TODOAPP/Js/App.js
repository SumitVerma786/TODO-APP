const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
var tasksForMonday = [];
var tasksForTuesday = [];
var tasksForWednesday = [];
var tasksForThursday = [];
var tasksForFriday = [];
var tasksForSaturday = [];
var tasksForSunday = [];

 function addTask() {
  var task = document.getElementById("task").value;
  var day = document.getElementById("day").value;
  
  if (day === days[0]) {
    tasksForMonday = JSON.parse(localStorage.getItem("Monday")) || [];
    tasksForMonday.push(task);
    localStorage.setItem(
      "Monday",
      JSON.stringify(tasksForMonday)
    );
    
  } else if (day === days[1]) {
    tasksForTuesday = JSON.parse(localStorage.getItem("Tuesday")) || [];
    tasksForTuesday.push(task);
    localStorage.setItem(
      "Tuesday",
      JSON.stringify(tasksForTuesday)
    );
    
  } else if (day === days[2]) {
    tasksForWednesday = JSON.parse(localStorage.getItem("Wednesday")) || [];
    tasksForWednesday.push(task);
    localStorage.setItem(
      "Wednesday",
      JSON.stringify(tasksForWednesday)
    );
   
  } else if (day === days[3]) {
    tasksForThursday = JSON.parse(localStorage.getItem("Thursday")) || [];
    tasksForThursday.push(task);
    localStorage.setItem(
      "Thursday",
      JSON.stringify(tasksForThursday)
    );
    
  } else if (day === days[4]) {
    tasksForFriday = JSON.parse(localStorage.getItem("Friday")) || [];
    tasksForFriday.push(task);
    localStorage.setItem(
      "Friday",
      JSON.stringify(tasksForFriday)
    );
    
  } else if (day === days[5]) {
    tasksForSaturday = JSON.parse(localStorage.getItem("Saturday")) || [];
    tasksForSaturday.push(task);
    localStorage.setItem(
      "Saturday",
      JSON.stringify(tasksForSaturday)
    );
    
  } else if (day === days[6]) {
    tasksForSunday = JSON.parse(localStorage.getItem("Sunday")) || [];
    tasksForSunday.push(task);
    localStorage.setItem(
      "Sunday",
      JSON.stringify(tasksForSunday)
    );
   
  }
}

var form = document.getElementById("taskForm");
form.addEventListener("submit",
function(event){
  addTask();
  event.preventDefault();
})