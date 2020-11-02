const API_KEY = "7e6448bae16b299a6d1edd72397b46d5"; 

const getMovieGenres = async function () {
    try{
        const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
        const res = await fetch (apiUrl, {method: "GET"});
        const convertedRes = await res.json();
        return convertedRes;
    } catch (error) {
        console.log(error);
    }
};

const getSingleMovie = async function () {
    try{
        const apiSingleMovieUrl = `https://api.themoviedb.org/3/find/tt0119217?api_key=${API_KEY}&external_source=imdb_id`;
        const result = await fetch (apiSingleMovieUrl, {method: "GET"});
        const convertedResult = await result.json();
        console.log(convertedResult);
        return convertedResult;
    } catch (error) {
        console.log(error);
    }
};

const getTopRatedMovies = async function () {
    try{
        const apiTopRatedUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=7e6448bae16b299a6d1edd72397b46d5`;
        const result = await fetch (apiTopRatedUrl, {method: "GET"});
        const convertedResult = await result.json();
        return convertedResult
    } catch (error) {
        console.log(error);
    }
};

const getTopfromAction = async function () {
    try{
        const apiTopFromActionUrl = `https://api.themoviedb.org/3/discover/movie?api_key=7e6448bae16b299a6d1edd72397b46d5&sort_by=vote_count.desc&page=1&with_genres=28`;
        const result = await fetch (apiTopFromActionUrl, {method: "GET"});
        console.log(result);
        const convertedResult = await result.json();
        console.log(convertedResult);
        return convertedResult
    } catch (error) {
        console.log(error);
    }
};

const getMoviesfromYear = async year => {
    try{
        const apiYearUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&page=1&primary_release_year=${year}`;
        const result = await fetch (apiYearUrl, {method: "GET"});
        const convertedResult = await result.json();
        return convertedResult
    } catch (error) {
        console.log(error);
    }  
};