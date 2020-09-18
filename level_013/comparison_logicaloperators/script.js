const age = 22;
const isFemale = false;
const driverStatus = "bob";
const name = "Sarah";
const totalAmount = 26;

if (age >= 18) {
  console.log("You're allowed to enter!");
} else {
  console.log("Please remove yourself from this location sir");
}

if (isFemale == true) {
  console.log("Enjoy the party, ladies!");
} else {
  console.log("Stop wasting my time dude");
}

if (driverStatus == "bob") {
  console.log("You're eligible to take your friends home");
} else {
  console.log("That's gonna be a long walk buddy");
}

if (age >= 18 && age <= 25) {
  console.log("You're getting a 50% discount !");
} else {
  console.log("You're paying the regular price");
}

if (name == "Bram" || name == "Sarah") {
  console.log("Congrats! Free beer!");
} else {
  console.log("Two euros and 20 cents please");
}

if (totalAmount >= 100) {
  console.log("Free champagne!");
} else if (totalAmount > 50) {
  console.log("Free nachos!")
} else if (totalAmount > 25) {
  console.log("Free bitterballen")
}



