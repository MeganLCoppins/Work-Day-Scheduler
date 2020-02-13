var $currentDay = $("#currentDay");


setTime();
var interval = setInterval(setTime, 1000);
function setTime(){
    var date = moment().format("dddd, MMMM Do YYYY, k:mm:ss");
    $currentDay.innerHTML = date;
}
// store event inputs

$(".saveBtn").on("click", function(e){
    e.preventDefault();
    var toDoList = $(this).siblings(".col-10").val();
    console.log(toDoList);
    localStorage.setItem("toDoList", toDoList);
    // var storedToDoList = localStorage.getItem("toDoList")
    $("#textArea").innerHTMl = localStorage.getItem("toDoList");

});

