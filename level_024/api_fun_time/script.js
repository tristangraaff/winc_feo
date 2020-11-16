window.alert("Klik op de knop op het scherm voor een leuke API verrassing!")

const showAbilities = data => {
    data.forEach(element => {
        console.log("hoi");
    });
};

const showDataWhenReady = async function () {
    const data = await fetchBulbasaur();
    console.log("The data is ready ", data);
    let pokeData = [];
    pokeData.push(data);
    console.log(pokeData);
    showAbilities(pokeData);
};

const createPokeImage = () => {
    const pokeImage = document.createElement('img');
    const main = document.getElementById("main");
    pokeImage.srcset = `https://pokeres.bastionbot.org/images/pokemon/1.png`;
    main.appendChild(pokeImage);  
  };



const button = document.getElementById("button");
button.addEventListener("click", () => {
    showDataWhenReady();
    createPokeImage();
});

