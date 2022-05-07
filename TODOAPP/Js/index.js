var selectedDay;

var form = document.getElementById("form");

var task = [];
var ul = document.getElementById("list");
var body = document.getElementsByTagName("body");

const addElement = () => {
  if (task == null) {
    alert("Add a todo");
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
};

const showTask = () => {
  if (selectedDay === "Monday" || selectedDay === "monday") {
    task = JSON.parse(localStorage.getItem("Monday"));
    addElement.apply(this, task);
  } else if (selectedDay === "Tuesday" || selectedDay === "tuesday") {
    task = JSON.parse(window.localStorage.getItem("Tuesday"));
    addElement.apply(this, task);
  } else if (selectedDay === "Wednesday" || selectedDay === "wednesday") {
    task = JSON.parse(window.localStorage.getItem("Wednesday"));
    addElement.apply(this, task);
  } else if (selectedDay === "Thursday" || selectedDay === "thursday") {
    task = JSON.parse(window.localStorage.getItem("Thursday"));
    addElement.apply(this, task);
  } else if (selectedDay === "Friday" || selectedDay === "friday") {
    task = JSON.parse(window.localStorage.getItem("Friday"));
    addElement.apply(this, task);
  } else if (selectedDay === "Saturday" || selectedDay === "saturday") {
    task = JSON.parse(window.localStorage.getItem("Saturday"));
    addElement.apply(this, task);
  } else if (selectedDay === "Sunday" || selectedDay === "sunday") {
    task = JSON.parse(window.localStorage.getItem("Sunday"));
    addElement.apply(this, task);
  } else {
    alert("Please enter a valid day");
  }
};

form.addEventListener("submit", function (event) {
  (selectedDay = document.getElementById("day").value), showTask(selectedDay);
  event.preventDefault();
});
