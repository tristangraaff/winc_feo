const superheroes =
    [
    {
    "name": "Batman",
    "publisher": "DC Comics",
    "alter_ego": "Bruce Wayne",
    "first_appearance": "Detective Comics #27",
    "weight": "210"
    },
    {
    "name": "Superman",
    "publisher": "DC Comics",
    "alter_ego": "Kal-El",
    "first_appearance": "Action Comics #1",
    "weight": "220"
    },
    {
    "name": "Flash",
    "publisher": "DC Comics",
    "alter_ego": "Jay Garrick",
    "first_appearance": "Flash Comics #1",
    "weight": "195"
    },
    {
    "name": "Green Lantern",
    "publisher": "DC Comics",
    "alter_ego": "Alan Scott",
    "first_appearance": "All-American Comics #16",
    "weight": "186"
    },
    {
    "name": "Green Arrow",
    "publisher": "DC Comics",
    "alter_ego": "Oliver Queen",
    "first_appearance": "All-American Comics #16",
    "weight": "195"
    },
    {
    "name": "Wonder Woman",
    "publisher": "DC Comics",
    "alter_ego": "Princess Diana",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "165"
    },
    {
    "name": "Blue Beetle",
    "publisher": "DC Comics",
    "alter_ego": "Dan Garret",
    "first_appearance": "Mystery Men Comics #1",
    "weight": "145"
    },
    {
    "name": "Spider Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Peter Parker",
    "first_appearance": "Amazing Fantasy #15",
    "weight": "167"
    },
    {
    "name": "Captain America",
    "publisher": "Marvel Comics",
    "alter_ego": "Steve Rogers",
    "first_appearance": "Captain America Comics #1",
    "weight": "220"
    },
    {
    "name": "Iron Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Tony Stark",
    "first_appearance": "Tales of Suspense #39",
    "weight": "250"
    },
    {
    "name": "Thor",
    "publisher": "Marvel Comics",
    "alter_ego": "Thor Odinson",
    "first_appearance": "Journey into Myster #83",
    "weight": "200"
    },
    {
    "name": "Hulk",
    "publisher": "Marvel Comics",
    "alter_ego": "Bruce Banner",
    "first_appearance": "The Incredible Hulk #1",
    "weight": "1400"
    },
    {
    "name": "Wolverine",
    "publisher": "Marvel Comics",
    "alter_ego": "James Howlett",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "200"
    },
    {
    "name": "Daredevil",
    "publisher": "Marvel Comics",
    "alter_ego": "Matthew Michael Murdock",
    "first_appearance": "Daredevil #1",
    "weight": "200"
    },
    {
    "name": "Silver Surfer",
    "publisher": "Marvel Comics",
    "alter_ego": "Norrin Radd",
    "first_appearance": "The Fantastic Four #48",
    "weight": "unknown"
    }
    ]

//1 Maak een array van alle superhelden namen

const superheroeNames = function (array) {
    return array.map(object => object.name); 
};

console.log(superheroeNames(superheroes));

//2 Maak een array van alle "lichte" superhelden (< 190 pounds)

const lightweightSuperheroes = function (array) {
    return array.filter (function (superhero) {
        return superhero.weight < 190;
    });
};

console.log(lightweightSuperheroes(superheroes));

//3 Maak een array met de namen van de superhelden die 200 pounds wegen

const midweightSuperheroeNames = function (array) {
    return array.filter(function (superhero) {
        return superhero.weight == 200;
    }).map(object => object.name);
};

console.log(midweightSuperheroeNames(superheroes));

//4 Maak een array met alle comics waar de superhelden hun "first appearances" hebben gehad

const superheroesFirstAppearances = function (array) {
    return array.map(superhero => superhero.first_appearance);
};

console.log(superheroesFirstAppearances(superheroes));

//5 Maak een array met alle superhelden van DC Comics. Is dat gelukt? Herhaal de bovenstaande functie 
// dan en maak ook een array met alle superhelden van Marvel Comics.

const containsDcComicsSuperheroes = function (array){
    return array.filter(function (superhero){
        return superhero.publisher === "DC Comics";
    }).map(superhero => superhero.name);
};

console.log(containsDcComicsSuperheroes(superheroes));

const containsMarvelComicsSuperheroes =  function (array){
    return array.filter(function (superhero){
        return superhero.publisher === "Marvel Comics";
    }).map(superhero => superhero.name);
};

console.log(containsMarvelComicsSuperheroes(superheroes));

// 6 Tel het gewicht van alle superhelden van DC Comics bij elkaar op. Let op! Conditionals to the rescue!
// Het gewicht dat je ziet in de movieDatabase, van welk datatype is dat? Een nummer? Of een string? 
// Oh ja, en hebben alle superhelden wel een gewicht?

const DcSuperheroesTotalWeight = function (array){
    return array.filter(function (superhero){
        return superhero.publisher === "DC Comics";
    }).map(function (superhero) {
        return parseInt(superhero.weight) ;
    }).reduce((acc, number) => acc + number);
};

console.log(DcSuperheroesTotalWeight(superheroes));

//7 Doe hetzelfde met alle superhelden van Marvel Comics

const MarvelSuperheroesTotalWeight = function (array){
    return array.filter(function (superhero){
        return superhero.publisher === "Marvel Comics";
    }).map(function (superhero) {
        if (superhero.weight !== "unknown") {
        return parseInt(superhero.weight);
        } else {
            return 0;
        }
    }).reduce((acc, number) => acc + number);
};

console.log(MarvelSuperheroesTotalWeight(superheroes));

//8 Bonus: zoek de zwaarste superheld!

const containsAllWeights = function (array) {
    return array.map(function (superhero) {
        if (superhero.weight !== "unknown") {
        return parseInt(superhero.weight);
        } else {
            return 0;
        };
    });    
};

console.log(containsAllWeights(superheroes));

const containsHeaviestWeight = containsAllWeights(superheroes).reduce(function (a,b) {
    return Math.max(a, b);
});

console.log(containsHeaviestWeight);

//console.log(Math.max(containsAllWeights(superheroes)));

//const containsHeaviestWeight = containsAllWeights.reduce(function(a, b){
    //return Math.max(a, b);
//})
//console.log(containsHeaviestWeight(superheroes));

//var arr = [1,2,3];
//var max = arr.reduce(function(a, b) {
//    return Math.max(a, b);
//});

//console.log(max);