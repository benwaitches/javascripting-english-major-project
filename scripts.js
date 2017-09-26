let tipCalculator;
tipCalculator = function(total, tipRate){
  let tipAmount;
  if (tipRate === 0.2)
  console.log(tipAmount = tipRate * total);
  if (tipRate === 20)
  console.log(tipAmount = total * (tipRate/100));
  $("#response").html("Your tip is $" + tipAmount);
};
tipCalculator(50.00, 0.2);
