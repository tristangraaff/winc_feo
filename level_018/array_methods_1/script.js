//A

const addTheWordCool = function (array) {
  array.push("cool");
  return array;
};
console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));

//B

const amountOfElementsInArray = function (array) {
      return array.length;
};

console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen'])); 

//C

const selectBelgiumFromBenelux = function (array) {
      return array.slice(0,1);
};

console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"])); 
// resultaat: "Belgie" 

const selectBelgiumFromBenelux2 = function (array) {
      return array[0];
};

console.log(selectBelgiumFromBenelux2(["Belgie", "Nederland", "Luxemburg"])); 
// resultaat: "Belgie" 


//D

const lastElementInArray = function (array) {
      return array[array.length - 1];
}; 

console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"])); 
// resultaat: "Schildpad"

const lastElementInArray2 = function (array) {
      return array.pop();
}

console.log(lastElementInArray2(["Haas", "Cavia", "Kip", "Schildpad"])); 

//E

const presidents = ["Trump", "Obama", "Bush", "Clinton"] 
  
const impeachTrumpSlice = function(array) {
      return array.slice(1,4);
}
const impeachTrumpSplice = function(array) {
      let removedElement = array.splice(0, 1);
      return array;
}

console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]

//F

const stringsTogether = function(array) {
      return array.join(' ');
}

console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}'])) 
//resultaat: "Winc Academy is leuk ;-}"

//G

const combineArrays = function(array, secondArray) {
      return array.concat(secondArray);
}

console.log(combineArrays([1,2,3], [4,5,6])); 
// resultaat: [1,2,3,4,5,6]