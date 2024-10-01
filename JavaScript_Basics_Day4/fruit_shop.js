let applePrice = 20;
let bananaPrice = 10;
let mangoPrice = 15;
let shopName = "Arun's Fruit Shop";
//let isOpen = true;
console.log("Welcome to " + shopName);
//console.log("Are we open? " + isOpen);

function calculateTotalCost(apples, bananas, mangoes) {
  return apples * applePrice + bananas * bananaPrice + mangoes * mangoPrice;
}

function applyDiscount(totalCost) {
  var finalCost = totalCost;
  if (totalCost > 100) {
    finalCost = finalCost * 0.9; // 10% discount
    return "You're eligible for a 10% discount! " + finalCost;
  } else {
    return "No discount available. " + finalCost;
  }
}
let customerCost = calculateTotalCost(4, 2, 1);
console.log("Actual price: " + customerCost);
var finalPrice = applyDiscount(customerCost);
console.log("The customer 1 needs to pay: " + finalPrice + " Rs.");

customerCost = calculateTotalCost(4, 0, 0);
console.log("Actual price: " + customerCost);
finalPrice = applyDiscount(customerCost);
console.log("The customer 2 needs to pay: " + finalPrice + " Rs.");
