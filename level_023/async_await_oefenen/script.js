
const addMovieGenresToDom = async function () {
    const data = await getMovieGenres();
    console.log("The data is ready ", data);
    data.genres.forEach(genre => {
        const li = document.createElement("li");
        const liContent = document.createTextNode(`genre naam: ${genre.name}, id: ${genre.id}`);
        li.appendChild(liContent);
        const movieGenresList = document.getElementById("movie-genre-list");
        movieGenresList.appendChild(li);
    });
};

addMovieGenresToDom();

const addFavMovieToDom = async function () {
    const data = await getSingleMovie();
    const movie = data.movie_results[0];
    const favMovie = document.getElementById("my-favourite-movie");
    const p = document.createElement("p");
    const pContent = document.createTextNode(`${movie.title}`);
    p.appendChild(pContent);
    favMovie.appendChild(p);
    };
    
addFavMovieToDom();

const addTopRatedMoviesToDom = async function () {
    const data = await getTopRatedMovies();
    data.results.forEach(result => {
        const li = document.createElement("li");
        const liContent = document.createTextNode(`${result.title}`);
        li.appendChild(liContent);
        const topRatedMoviesList = document.getElementById("top-rated-movies");
        topRatedMoviesList.appendChild(li);
    })
};

addTopRatedMoviesToDom();

const addTopRatedActionMoviesToDom = async function () {
    const data = await getTopfromAction();
    data.results.forEach(result => {
        const li = document.createElement("li");
        const liContent = document.createTextNode(`${result.title}`);
        li.appendChild(liContent);
        const topRatedActionMoviesList = document.getElementById("top-rated-action-movies");
        topRatedActionMoviesList.appendChild(li);
    })
};

addTopRatedActionMoviesToDom();

const addMoviesFromYearToDom = async year => {
    const data = await getMoviesfromYear(year);
    data.results.forEach(result => {
        const li = document.createElement("li");
        const liContent = document.createTextNode(`${result.title}`);
        li.appendChild(liContent);
        const moviesFrom1975List = document.getElementById("movies-from-1975");
        moviesFrom1975List.appendChild(li);
    })
};

addMoviesFromYearToDom(1975);