//Write a function that accepts a number as an argument
//Alert the user whether the given number is even or odd
//Call your function

function num () {
  
    const number = parseInt(prompt("Type in a number", 10));
    console.log(typeof number);
    if(!isNaN(number)) {
        if(number % 2 == 0) {
            alert(`${number} is a even number!`);
        } else
        alert(` ${number} is a odd number!`);
    } else if(isNaN(number)) {
        alert("Please enter a valid number!");
        num();
    }

    
  }
  
  num();