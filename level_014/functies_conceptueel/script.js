/* 
    makeCheeseSandwich
        Get one slice of bread.
        Add cheese.
        Put a slice of bread on top.
*/
/*    function makeCheeseSandwich() {
        Get one slice of bread;
        Add cheese;
        Put a slice of bread on top; 
    }

*/

// de funtie makeSandwich wordt hhier bovenaan gedeclared

function makeCheeseSandwich() {
  console.log([
    "Get one slice of bread",
    "Add cheese ",
    "Put a slice of bread on top",
  ]);
}

makeCheeseSandwich();

function makeSandwich(topping) {
    console.log("There you go, a sandwich with", topping) ;
}

// de functie makeSandwich wordt hier opgeroepen
makeSandwich('meatballs') 

makeSandwich('turkey')

function calculateDiscountedPrice(totalAmount, discount){
    return totalAmount - discount;
}

let newAmount = calculateDiscountedPrice(10, 6.3);
console.log(newAmount);
console.log(Math.round(newAmount))

function calculateOtherDiscountedPrice(totalAmount, discount){
    if (totalAmount > 25){
        return totalAmount - discount;
    }
    else {
        return totalAmount;
    }    
}

let newOtherAmount = calculateOtherDiscountedPrice(55, 22.4);
console.log(newOtherAmount);
