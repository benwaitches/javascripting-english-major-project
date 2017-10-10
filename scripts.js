let userString, upperCaseMinusE, upperCasedString;
userString = prompt("What do you want to UPPeRCASe?");
upperCaseMinusE = function(string){
  let result, stringArray;
  result = " ";
  stringArray = string.split("");
  stringArray.forEach(function(letter){
    if(letter ==="e"){
      result = result + letter;
    } else {
      result = result + letter.toUpperCase();
    }
  });
  return result;
};
upperCasedString = upperCaseMinusE(userString);
$("#response").html(upperCasedString);
