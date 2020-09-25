// 6 Tel het gewicht van alle superhelden van DC Comics bij elkaar op. Let op! Conditionals to the rescue!
// Het gewicht dat je ziet in de movieDatabase, van welk datatype is dat? Een nummer? Of een string? 
// Oh ja, en hebben alle superhelden wel een gewicht?

const DcSuperheroesAllWeights = function (array){
    return array.filter(function (superhero){
        return superhero.publisher === "DC Comics";
    }).map(function (superhero) {
        return parseInt(superhero.weight) ;
    }).reduce((weight1, weight2) => weight1 + weight2);
};

console.log(DcSuperheroesAllWeights(superheroes));

//const DcSuperheroesTotalWeight = DcSuperheroesAllWeights(superheroes).reduce((acc, number) => {
    //return weight1 + weight2;
//});

//console.log(DcSuperheroesTotalWeight(superheroes));