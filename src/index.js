//document.addEventListener("DOMContentLoaded", () => {
  //document.getElementById('create-task-form').innerHTML +="Sorry! <code>preventDefault()</code> won't let you check this!<br>";
  //event.preventDefault();
//});
document.querySelector("#create-task-form").addEventListener("click", function(event) {
  document.getElementById("list").innerHTML += "Sorry! <code>preventDefault()</code> won't let you check this!<br>";
  event.preventDefault();
}, false);

