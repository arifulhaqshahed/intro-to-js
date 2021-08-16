// Assignment operator is (=)

// addition in JavaScript
var onionPrice = 50;
var eggPrice = 10;

console.log(onionPrice)
console.log(eggPrice)

// you have normally two options to show the sum of the two variables given in the above.

// first one is that.you can directly set the variables name by additon operator to show the sum of the variables.
console.log(onionPrice + eggPrice)

// and the second way is, you can declare another variable and set the sum of variable's addition in that variable.
var totalPrice = onionPrice + eggPrice;
console.log(totalPrice)


// Subtraction in Javascript
var priceDifference = onionPrice - eggPrice;
console.log(priceDifference)

// Multiplication in JavaScript
var eggQuantity = 12;
var eggTotalPrice = eggPrice * eggQuantity;
console.log(eggTotalPrice)

// Division in JavaScript
var moneyAvailable = 120;
var people = 12;
var perPeopleGetMoney = moneyAvailable / people;
console.log(perPeopleGetMoney)

// special addition
var firstNumber = 0.1;
var secondNumber = 0.2;
var total = (firstNumber + secondNumber);
console.log(parseFloat(total.toFixed(1)))
// console.log(typeof parseFloat(total.toFixed(1)))


// modulus operator
var mangoes = 21;
var person = 5;
var remaining = mangoes % person;
console.log(remaining)

console.log(17%5)

// swap
// var first = 5;
// var second = 7;
// console.log(first, second);
// // first approach
// // var temp = first;
// // first = second;
// // second = temp;
// // console.log(first, second);

// // destructuring
// [first, second] = [second, first];
// console.log(first, second);


var first = 23;
var second = 45;
// console.log(first, second)

[first, second] = [second, first];
console.log(first, second)