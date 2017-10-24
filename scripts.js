let turtlesWithSplinter, turtlesWithoutSplinter, reversedTurtlesWithoutSplinter;
turtlesWithSplinter = ["Leonardo", "Donatello", "Raphael", "Michelangelo", "Splinter"];
reversedTurtlesWithoutSplinter = turtlesWithSplinter.filter(function(turtle){
  console.log(turtle);
  return turtle !== "Splinter";
}).reverse();
//$("#response").html(reversedTurtlesWithoutSplinter);
//reversedTurtlesWithoutSplinter = turtlesWithSplinter.pop().reverse();
//$("#response").html(reversedTurtlesWithoutSplinter);
