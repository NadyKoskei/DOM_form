console.log(document.getElementById("name"));

console.log(document.getElementById("email"));

console.log(document.getElementById("message"));

var myform = document.getElementById("myForm");
// i have assigned the form element with the id of myForm to the variable myform

var mybutton = document.getElementById("submit");
// i hav assigned the button with the id of submit to the variable mybutton

// mybutton.addEventListener('click', function() {
//    alert('Form submitted!');
// });

// i have added an event listener to the button that listens for a click event and then displays an alert message when the button is clicked
// in this case, i have used an anonymous function to display the alert message when the button is clicked

//i can also use a named function instead of an anonymous function to display the alert message when the button is clicked

// function submited (){
// mybutton.textContent = 'Submitted!';
// }
// mybutton.addEventListener('click', submited);

// i have created a named function called submited that changes the text content of the button to 'Submitted!' when the button is clicked
//NB - When you click a <button type="submit"> inside a form, the browser automatically tries to submit the form.
//- Submitting usually reloads the page (unless you prevent it).
//- Your event listener runs, changes the text, but then the reload resets everything back to the original state.

var newSub = document.createElement("div");
newSub.textContent = "Form submitted successfully!";
// i have created a new div element and assigned it to the variable newSub, then i have set the text content of the new div to 'Form submitted successfully!' but it is not yet added to the DOM

function submited2(event) {
  event.preventDefault(); // this will prevent the default behavior of the form submission, which is to reload the page, so that we can see the message when the button is clicked

  myform.parentNode.insertBefore(newSub, myform);
  //this function inserts the newSub div before the myform element in the DOM when the button is clicked. We have targeted the parent node of the form which is the form-div and used the insertBefore method to insert the newSub div before the form element in the DOM.

  var inputSub =
    "name: " +
    document.getElementById("name").value +
    "\n" +
    "email: " +
    document.getElementById("email").value +
    "\n" +
    "message: " +
    document.getElementById("message").value;
  // i have created a variable called inputSub that concatenates the values of the name, email and message input fields together with a space in between each value. I have used the value property preceeded by a dot ., to get the values of the input fields and then concatenated them together using the + operator.

  var infoSub = document.createElement("div");
  infoSub.id = "submitted-info"; // this will set the id of the new div to "submitted-info" so that we can check if it already exists in the DOM before inserting it again.
  infoSub.textContent = inputSub;
  // i have created a new div element and assigned it to the variable infoSub, then i have set the text content of the new div to the value of the inputSub variable.

  var existingInfo = document.getElementById("submitted-info");
  // i have created a variable called existingInfo that checks if there is already a div with the id of "submitted-info" in the DOM. If there is, it will return that element, otherwise it will return null.

  if (existingInfo) {
    existingInfo.textContent = inputSub; // update instead of creating new
    return;
  }
  // if there is already a div with the id of "submitted-info" in the DOM, it will update the text content of that div with the new value of inputSub and then return from the function to prevent inserting a new div again.

  myform.parentNode.insertBefore(infoSub, myform.nextSibling);
  // this will insert the infoSub div, We have targeted the parent node of the form which is the form-div and used the insertBefore method to insert the infoSub div right after the form element in the DOM by using myform.nextSibling as the reference node for the insertion point.
}

//NB - A page reload means the browser discards the current DOM state (all the elements you added dynamically with JavaScript) and rebuilds it from the original HTML file

//- insertBefore(newElement, referenceElement) → Inserts newElement into the DOM, right before the referenceElement.

mybutton.addEventListener("click", submited2);
