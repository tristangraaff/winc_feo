const sumFunction = (...numbers) => {
  return numbers.reduce((acc, currentV) => acc + currentV)
};


console.log(sumFunction(1, 2, 3, 4));

const sumFunction2 = (num1, num2, num3) => {
  return num1 + num2 + num3
};

const cijfers = [2, 3, 4]

console.log(sumFunction2(...cijfers));

const sumFunction3 = (...numbers) => {
  return numbers.reduce((acc, currentV) => acc + currentV)
};

console.log(sumFunction3(...cijfers))


