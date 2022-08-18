// CHALLENGE 1
// Prompt the user for their first name
// Store their input to a variable
// Reverse your user’s name
// alert the reversed string

let firstName = prompt("What is your first name?");
alert(firstName.split("").reverse().join(""));
// Challenge 2
// Prompt for a number value (provide a default of 10)
// Prompt for a second number value (provide a default of 10)
// Convert the prompted values into integers using parseInt()
// Add the numbers together and alert the user with the result
// store input numbers
//first question. const num1 = parseInt(prompt('Enter the first number '));
//if (num1 > 10 ) {
// alert("You must pick a number under 10");
//}
//const num2 = parseInt(prompt('Enter the second number '));

let numberValue = prompt("Give a value.", 10);
let numberValue2 = prompt("Give another number value.", 10);
let addResult = parseInt(numberValue) + parseInt(numberValue2);
alert(addResult);
