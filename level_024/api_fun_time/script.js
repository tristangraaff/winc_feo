window.alert("Klik op de knop op het scherm voor een leuke API verrassing!")

let pokeData = [];

const showDataWhenReady = async function () {
    const data = await fetchBulbasaur();
    console.log("The data is ready ", data);
    pokeData.push(data);
    console.log(pokeData);
};

const createPokeImage = () => {
    const pokeImage = document.createElement('img');
    const main = document.getElementById("main");
    pokeImage.srcset = `https://pokeres.bastionbot.org/images/pokemon/1.png`;
    main.appendChild(pokeImage);  
  };

const showAbilities = () => {
        pokeData.forEach(element => {
            console.log("hoi");
        });
  };

const button = document.getElementById("button");
button.addEventListener("click", () => {
    showDataWhenReady();
    createPokeImage();
    showAbilities();
});

