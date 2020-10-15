const sinterklaasIsGul = true;

// Promise maken (dit hoeven jullie dus niet te leren, dit is aan de API (back-end) kant)
const krijgIkEenNieuweiPhone = new Promise((resolve, reject) => {
  if (sinterklaasIsGul) {
    const smartphone = {
      merk: "Apple",
      type: "iPhone 11",
    };
    resolve(smartphone);
  } else {
    const metWelkeReden = new Error(
      "Je bent stout geweest, geen cadeaus voor jou"
    );
    reject(metWelkeReden);
  }
});

// Promise aanroepen, of "consumeren" (dit zullen je dus wel doen en moeten leren)
const vraagAanSinterklaas = () => {
  krijgIkEenNieuweiPhone
    .then(function (resolved) {
      // yay, je hebt een nieuwe smartphone
      console.log(resolved);
    })
    .catch(function (error) {
      // oeps, geen Sinterklaas cadeau dit jaar
      console.log(error.message);
    });
};

vraagAanSinterklaas();

/*
Exercise 1:
Write a function testNum that takes a number as an argument and returns a Promise that tests if the value is less than or greater than the value 10. Log the result to the console.
*/

const testNum = (number) => {
  return new Promise((resolve, reject) => {
    if (number > 10) {
      resolve(number + " is greater than 10.");
    } else {
      reject(number + " is not greater than 10.");
    }
  });
};

testNum(12)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

/*
Exercise 2:
Write two functions that use Promises that you can chain! The first function, makeAllCaps(), will take in an array of words and capitalize them, and then the second function, sortWords(), will sort the words in alphabetical order. If the array contains anything but strings, it should throw an error.
Then call these functions by *chaining* the promises
*/

const makeAllCaps = (array) => {
  return new Promise((resolve, reject) => {
    if (
      array.every((word) => {
        return typeof word === "string";
      })
    ) {
      resolve(
        sortWords(
          array.map((word) => {
            return word.toUpperCase();
          })
        )
      );
    } else {
      reject("Error: array contains other data than strings.");
    }
  });
};

const sortWords = (array) => {
  return new Promise((resolve, reject) => {
    if (array) {
      resolve(array.sort());
    } else {
      reject("Error: array contains other data than strings.");
    }
  });
};

const arrayOfWords = ["cucumber", "tomatos", "avocado"];
const complicatedArray = ["cucumber", 44, true];

// call both functions, chain them together and log the result to the console

makeAllCaps(arrayOfWords)
  .then(sortWords(arrayOfWords))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

makeAllCaps(complicatedArray)
  .then(sortWords(complicatedArray))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
