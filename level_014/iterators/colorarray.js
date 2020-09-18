let colors = ["yellow", "blue", "red", "orange"];
index = 0;

while (index < colors.length){
    console.log(colors[index]);
    index++;
}

for (i = 0; i < colors.length; i++){
    console.log(colors[i]);
}

colors.forEach(element => console.log(element));

/* 
1. Hoeveel regels neemt mijn for loop en mijn while loop in beslag?
   De while loop neemt er 5 in beslag en de for loop neemt er 4 in beslag.
2. Hoeveel regels neemt mijn forEach method in beslag?
   1 regel.
3. Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop? Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom?
   Het is minder werk om te schrijven of lezen en heeft minder kans op fouten.
4. Kun je een array method gebruiken op een object? Het antwoord is nee.
   Stel je hebt een object met 45 properties. Probeer eens uit te zoeken (gebruik Google) hoe je tóch die 45 properties kunt console.loggen met een loop: Looping through the properties of an object.
   Probeer dit stukje code uit en gebruik hier een object met 5 properties voor. Ben je nu aan het itereren?
*/

const fruits = {
    apple: 28,
    orange: 17,
    pear: 54,
  }
  
  const keys = Object.keys(fruits)
  console.log(keys) 

  const values = Object.values(fruits)
  console.log(values)

  const myColors = {
    colorWall: "blue",
    colorFruit: "orange",
    colorCar: "red",
    colorHair: "white",
    colorGras: "green",
  };
  
  for (x in myColors) {
    console.log(myColors[x]);
  }