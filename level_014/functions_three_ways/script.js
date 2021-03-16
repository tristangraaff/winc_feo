function squareDeclaration(number1, number2) {
  const processed = (number1 * number1 + number2 * number2);
  return Math.pow(processed, 2);
}

const squareExpression = function(number1, number2) {
  const processed = (number1 * number1 + number2 * number2);
  return Math.pow(processed, 2);
}

const suqareArrow = (number1, number2) => {
  const processed = (number1 * number1 + number2 * number2);
  return Math.pow(processed, 2);
}

console.log(squareDeclaration(1, 2));
console.log(squareExpression(1, 2));
console.log(suqareArrow(1, 2));