const checkAge = age => {
  if (age => 18) {
    return true
  } else {
    return false
  }
}

const greet = age => {
  const adultAge = checkAge(age);
  if (adultAge === true) {
    return "Hello there"
  } 
  if (adultAge === false) {
    return "Hey kiddo"
  }
} 

console.log(greet(15));