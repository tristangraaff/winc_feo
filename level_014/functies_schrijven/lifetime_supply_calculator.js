const calculateSupply = function(age, amountPerDay){
    let neededAmount = 85 * 365 * amountPerDay - age; 
    console.log( "You will need " + neededAmount + " kilos to last untill the ripe old age of 85.");
}

calculateSupply(22, 0.2);

const calculateSupply2 = function(age, amountPerDay){
    const maxAge = 100;
    const neededAmount = amountPerDay * 365 * (maxAge - age);
    let message = "You will need " +
        neededAmount + 
        " kilos to last untill the ripe age of " +
        maxAge;
    console.log(message);
}

calculateSupply2(84, 0.3);

