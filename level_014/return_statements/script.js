const isBiggerThan100 = number => {
  if (number > 100) {
    return true
  } 
  if (number < 100) {
    return false
  }
}

console.log(isBiggerThan100(99));

const enterClub = (number, age) => {
  if (number > 100) {
    return "It's too busy, come back later."
  }
  if (age < 18) {
    return "This is a club for adults"
  }
  if (number < 100 && age > 17) {
    return "Come in"
  }
};

console.log(enterClub(80, 18))