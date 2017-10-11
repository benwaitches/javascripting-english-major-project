let userArray, arrayDoubled;
userArray = [1, 4, 8];
arrayDoubled = userArray.map(function(userArray){
  return userArray * 2;
}).join(", ");
$("#response").html(arrayDoubled);
