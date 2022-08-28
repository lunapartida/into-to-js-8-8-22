// ------------ DAILY CHALLENGE ------------
// Prompt the user for two different numbers
function comparison() {
  const numOne = parseInt(prompt("Provide a number."));
  const numTwo = parseInt(prompt("Provide another number."));
  // Convert the values to integers

  // Store the two integers as variables
  // Compare the two numbers
  if (!Number.isNaN(numOne) && !Number.isNaN(numTwo)) {
    if (numOne > numTwo) {
      alert(numOne);
    } else {
      alert(numTwo);
    }
  } else {
    alert("Did not provide a valid number.");
    comparison();
  }
}
comparison();

// Alert the larger number

// ------------ TAKE HOME CHALLENGE ------------
// Add an edge case to your daily challenge code
// Check if the user input anything other than a number
// If so, prompt the user again to input a number
