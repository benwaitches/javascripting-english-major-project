let leonardo, donatello, raphael, michelangelo, turtles, weapons, arrayLength, addAnd;
leonardo = {name: "Leonardo", color: "blue", weapon: "katana"};
donatello = {name: "Donatello", color: "purple", weapon: "bo"};
raphael = {name: "Raphael", color: "red", weapon: "sai"};
michelangelo = {name: "Michelangelo", color: "blue", weapon: "nunchaku"};
turtles = [leonardo, donatello, raphael, michelangelo];
weapons = turtles.map(function(turtle){
  arrayLength = weapons.length;
  //my goal here is to somehow show the program exactly where to put the "and"
  addAnd = weapons.length - 1;
  //I thought that maybe by finding the length and then subtracting one, the program would know which spot I was after
  weapons.join("and");
  //This obviously didn't work because I don't think i've actually identified the spot, and selected it in the array.
  return turtle.weapon;
}).sort().join(", ");
$("#response").html(weapons);
