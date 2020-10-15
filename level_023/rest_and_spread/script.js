const sum = (...numbers) => {
  return numbers.reduce((previous, current) => {
    return previous + current;
  });
};

console.log(sum(1, 2, 3, 4, 5, 6));

const otherSum = (x, y, z) => {
    return x + y + z;
}

const numbers = [1, 2, 3];
console.log(otherSum(...numbers));