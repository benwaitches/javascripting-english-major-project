let userInput;
userInput = prompt("Type a number here!");
Number.isInteger(userInput);{
  if (userInput.isInteger){
    alert("This is an integer.");
  } else{
    alert("This is not an integer.");
  }
}
$("#response").html(userInput);
