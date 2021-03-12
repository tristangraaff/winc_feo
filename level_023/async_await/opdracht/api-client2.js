const API_KEY = "7e6448bae16b299a6d1edd72397b46d5";

const getData = async () => {
  try {
    const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=7e6448bae16b299a6d1edd72397b46d5`;
    const res = await fetch(apiUrl, {method: "GET"});
    const convertedRes = await res.json();
  } catch(err) {
    console.log(err);
  }
};