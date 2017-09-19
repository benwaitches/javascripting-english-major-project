let userInput;
userInput = prompt("Pick a number, any number...", "Type your answer here.");
for (let i=1; i<=userInput; i = i + 1 ) {
  $("#response").append("<br />" + i);
}
if (userInput%2){
  $(userInput).append(" is even");
} else {
  $(userInput).append(" is odd");
}
