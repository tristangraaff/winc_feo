//Deel 1

const buttons = document.querySelectorAll('.big-five-button');

for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (e){
      console.log(e.target);
      console.log(e.target.textContent);
      const clickedAnimal = document.createTextNode(e.target.textContent);
      const newListItem = document.createElement("li");
      const spottedAnimals = document.getElementById("spotted-animals-list");
      spottedAnimals.appendChild(newListItem);
      newListItem.appendChild(clickedAnimal);
    });
};

//Deel 2

const removeFirstItemButton = document.getElementById("remove-first-item-button");
const spottedAnimals = document.getElementById("spotted-animals-list");

const removeFirstItem = removeFirstItemButton.addEventListener("click", function (){
    spottedAnimals.removeChild(spottedAnimals.childNodes[0]);
});

//Deel 3

const removeAllItemsButton = document.getElementById("remove-all-button");
const removeAllItems = removeAllItemsButton.addEventListener("click", function (){
    spottedAnimals.innerHTML = "";
})

/*
Minder handige manier

const buttons = document.querySelectorAll('.big-five-button');

for (i = 0; i < buttons.length; i++) {
    if (buttons[i].textContent === "Lion"){ 
    buttons[i].addEventListener("click", function (){
      console.log("Lion");
    });
    };
    if (buttons[i].textContent === "Leopard"){ 
    buttons[i].addEventListener("click", function (){
      console.log("Leopard");
    });
    };
    if (buttons[i].textContent === "Elephant"){ 
    buttons[i].addEventListener("click", function (){
      console.log("Elephant");
    });
    };
    if (buttons[i].textContent === "Rhino"){ 
    buttons[i].addEventListener("click", function (){
      console.log("Rhino");
    });
    };
    if (buttons[i].textContent === "Buffalo"){ 
    buttons[i].addEventListener("click", function (){
      console.log("Buffalo");
    });
    };
}; */