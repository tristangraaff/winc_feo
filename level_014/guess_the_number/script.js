let name = prompt(`What's your name?`, `Insert your name here`);

alert(`Hey ${name}!`);

let pickRandomNumber = function (min, max) {
  return Math.random() * (max - min) + min;
};

roundedNumber = Math.round(pickRandomNumber(0, 25));
console.log(roundedNumber);

let number = prompt(`Enter a number`, `From 0 up to 25`);
let numberAsInt = parseInt(number);
console.log(numberAsInt);

if (numberAsInt == roundedNumber) {
  alert(`Congrats! You have guessed the correct number!`);
  alert(`Bye ${name}`);
} else {
  alert(`Too bad.. That's not correct.`);
  let again = confirm(`Would you like to play again?`);
  while (again === true) {
    let pickRandomNumber = function (min, max) {
      return Math.random() * (max - min) + min;
    };

    roundedNumber = Math.round(pickRandomNumber(0, 25));
    console.log(roundedNumber);

    let number = prompt(`Enter a number`, `From 0 up to 25`);
    let numberAsInt = parseInt(number);
    console.log(numberAsInt);

    if (numberAsInt == roundedNumber) {
      again = !again;
      console.log(again);  
      alert(`Congrats! You have guessed the correct number!`);
      alert(`Bye ${name}`);
      
    } else {
      alert(`Too bad.. That's not correct.`);
        if (again = confirm(`Would you like to play again?`)){
            again = true;
        } else {
            alert(`Bye ${name}`);
            again != true;
        }
    }
  }
}
