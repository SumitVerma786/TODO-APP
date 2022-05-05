const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
var selectedDay;

var form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  selectedDay = document.getElementById("day").value;
  showTask(selectedDay);
  event.preventDefault();
});
var task = [];
var ul = document.getElementById("list");
var body = document.getElementsByTagName("body");
const addElement = () => {
  if (task == null) {
    alert("Add todo");
  } else {
    body[0].innerHTML = "";
    let ul = document.createElement("ul");
    ul.classList.add("list");
    task.forEach((element) => {
      let li = document.createElement("li");
      let taskName = document.createTextNode(element);
      li.appendChild(taskName);
      ul.appendChild(li);
    });
    body[0].appendChild(ul);
  }
}
 function showTask (selectedDay) {
  if (selectedDay == days[0]) {
    task = JSON.parse(localStorage.getItem("Monday"));
    addElement.apply(this, task);
  } else if (selectedDay == days[1]) {
    task = JSON.parse(localStorage.getItem("Tuesday"));
    addElement.apply(this, task);
  } else if (selectedDay == days[2]) {
    task = JSON.parse(localStorage.getItem("Wednesday"));
    addElement.apply(this, task);
  } else if (selectedDay == days[3]) {
    task = JSON.parse(localStorage.getItem("Thursday"));
    addElement.apply(this, task);
  } else if (selectedDay == days[4]) {
    task = JSON.parse(localStorage.getItem("Friday"));
    addElement.apply(this, task);
  } else if (selectedDay == days[5]) {
    task = JSON.parse(localStorage.getItem("Saturday"));
    addElement.apply(this, task);
  } else if (selectedDay == days[6]) {
    task = JSON.parse(localStorage.getItem("Sunday"));
    addElement.apply(this, task);
  }
}