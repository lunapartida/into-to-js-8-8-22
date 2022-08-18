// Ask for the user's first name
// Ask for the user's last name
// Log the user's first name to the console
// Alert the user's last name

// *BONUS*
// Ask for the user's birthday
// Ask the user to confirm their birthday input
// Alert the user's birthday

let firstName = prompt("What is your first name?");

let lastName = prompt("What is your last name?");

alert(lastName);

let birthday = prompt("What is your birthday?", "MM/DD/YEAR:");

let birthday2 = prompt("Please confirm your birthday:", "MM/DD/YEAR");

if (birthday === birthday2) {
  alert(birthday);
} else if (birthday != birthday2) {
  alert("Those do not match");
}
