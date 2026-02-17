// this is a program that will collect an users name and the year they were born. then it will calculate 
// 1) how old they are 2) leap year or not 3) the name of theit generation 4)even or odd year of birth
//and give them a message with all the information when they click the submit button
//also if the year submitted is in the future, it will give them a message saying that they are not born yet, and the year of birth is invalid. Also the year must be a number and not a string, if the user submits a string instead of a number, it will give them a message saying that the year of birth is invalid. Also the name must not be empty, if the user submits an empty name, it will give them a message saying that the name is invalid.

var userForm = document.getElementById("userForm");
var nameInput = document.getElementById("name");
var yearInput = document.getElementById("year");
var resultDiv = document.getElementById("result");


//adding a submit event listener to the form element that will trigger a function when the form is submitted. The function will prevent the default behavior of the form submission, which is to reload the page, and then it will collect the values of the name and year input fields, trim any whitespace from the name, and convert the year to a number. It will also get the current year using the Date object.
userForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var name = nameInput.value.trim();
  var year = Number(yearInput.value);
  var currentYear = new Date().getFullYear(); // this will get the current year using the Date object and the getFullYear method, which returns the year of the specified date according to local time.

  resultDiv.innerHTML = ""; // this will clear the result div before displaying the new results

  // this will check if the name is empty, if it is, it will display a message saying that the name is invalid and return from the function to prevent further execution
  if (name === "") {
    resultDiv.innerHTML = "Invalid name. Please enter a valid name.";
    return;
  }

  //validating if year is a number
  if (isNaN(year)) {
    resultDiv.innerHTML = "Invalid year of birth. Please enter a valid number.";
    return;
  }

//checking if the year is in the future
  if (year > currentYear) {
    resultDiv.innerHTML =
      "You are not born yet. Please enter a valid year of birth.";
    return;
  }

  
});





