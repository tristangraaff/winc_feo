const fetchBulbasaur = async function () {
    try{
        const apiUrl = `https://pokeapi.co/api/v2/pokemon/1`;
        const res = await fetch (apiUrl, {method: "GET"});
        const convertedRes = await res.json();
        return convertedRes;
    } catch (error) {
        console.log(error);
    };
};