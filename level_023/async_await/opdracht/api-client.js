const API_KEY = "7e6448bae16b299a6d1edd72397b46d5" 

const getData = async function () {
    const apiUrl = "https://api.themoviedb.org/3/genre/movie/list"
    try {
        const res = await fetch (apiUrl).then(response => response.json())
    } catch (err) {
        console.log(err);
    }
};