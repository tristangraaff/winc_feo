const API_KEY = "7e6448bae16b299a6d1edd72397b46d5"; 

const getData = async function () {
    try{
        const apiUrl = `https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`;
        const res = await fetch (apiUrl, {method: "GET"});
        const convertedRes = await res.json();
        console.log("Dit is de data ", convertedRes);
        return convertedRes;
    } catch (error) {
        console.log(error);
    }
};