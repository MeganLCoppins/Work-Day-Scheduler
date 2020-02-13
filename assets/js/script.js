// THEN the current day is displayed at the top of the calendar
//1. display current time on cal DONE

// THEN I am presented with timeblocks for standard business hours
//2. dynamically display textarea and associated btn.. make this a function to later go back and add class for color later
// var arrtime=[9,10,]
// function create planner(){
// 	//hour =9am arrtime[i]
// 	if(currentime-arrtime[i]==0){
// 		p.attr("class","ontimestyle");
// 	}
// }
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
//create a save function to store to local storage (would just change to each time as a var and set)
// THEN the text for that event is saved in local storage
//once we get the hour then we set it to the specific text area
// WHEN I refresh the page
// THEN the saved events persist

// var obj = {
//   name: "Tucker",
//   age: 55
// };

// console.log(obj["name"]);

// for (var key in obj) {
//   console.log(key, obj[key]);
// }

$(document).ready(function() {
  var $currentDay = $("#currentDay");
  var notes = getNotes();
  // setting interval to reload every second
  var interval = setInterval(setTime, 1000);


  updateBackground();
  renderNotes();

  // when save button is clicked input saved in local storage
  $(".saveBtn").on("click", function(e) {
    e.preventDefault();
    var val = $(this)
      .siblings(".col-10")
      .val();
    var hour = $(this)
      .siblings(".col-10")
      .attr("id");
    notes[hour] = val;

    localStorage.setItem("notes", JSON.stringify(notes));
    // var storedToDoList = localStorage.getItem("toDoList")
    // $("#9am").innerHTMl = localStorage.getItem("toDoList");
  });
// sets time in military time 
  function setTime() {
    var date = moment().format("dddd, MMMM Do YYYY, k:mm:ss");
    $currentDay.innerHTML = date;
    $("#currentDay").text(date);
  }

// retrieve stored data 
  function getNotes() {
    var notes = localStorage.getItem("notes");
    if (notes) {
      notes = JSON.parse(notes);
    } else {
      notes = {};
    }
    return notes;
  }

  function renderNotes() {
    // for loop for keys in object
    for (var key in notes) {
      $("#" + key).val(notes[key]);
    }
  }

  function updateBackground() {
    var currentHour = moment().hour();
    console.log(currentHour);

    $(".time-block").each(function() {
      var blockHour = parseInt($(this).children(".description").attr("id"));
      $(this)
      // remove classes
      .removeClass("present")
      .removeClass("past")
      .removeClass("future");
      //compare with if statements
      //$(this).addClass("present")
      if (blockHour === currentHour) {
        $(this).addClass("present");
      };
      if (blockHour < currentHour){
        $(this).addClass("past");
      };
      if (blockHour > currentHour){
        $(this).addClass("future");
      };
      console.log($(this));

    });
  }
});
