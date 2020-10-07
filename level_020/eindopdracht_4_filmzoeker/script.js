/* Requirements 
Aan deze eisen moet jouw project voldoen:

Als gebruiker wil ik een lijst kunnen zien van de beschikbare films met de poster van de film.
Check de data: elke film in de database heeft een link naar de juiste poster.
Als gebruiker wil ik bovenaan de pagina kunnen klikken op 5 verschillende filters in de vorm van radio-buttons. De filter functionaliteit wordt hieronder verder toegelicht.
Als gebruiker kan ik maar 1 filter tegelijk gebruiken.
Als ik een ander filter aanklik gaat het andere filter dus weer uit. (Hence de radiobutton (1 antwoord mogelijk), in tegenstelling tot een checkbox (meerdere antwoorden mogelijk).
Categorie 1: Als gebruiker wil ik kunnen filteren op de categorie nieuwste films: van de laatste jaren, dat betekent 2014 of nieuwer.
Categorie 2: Als gebruiker wil ik kunnen filters op films met "Avengers" in de titel.
Categorie 3: Als gebruiker wil ik kunnen filteren op films met "X-Men" in de titel.
Categorie 4: Als gebruiker wil ik kunnen filteren op films met "Princess" in de titel.
Categorie 5: Als gebruiker wil ik kunnen filteren op films met "Batman" in de titel.
Gebruik arraymethods voor je filters
Check of een gedeelte van een string in een andere string aanwezig is met de .includes() method.
De laatste 4 filters lijken heel veel op elkaar. Heb je daar meerdere functies voor nodig? Kan het ook in 1?
Als gebruiker kan ik op de poster van de film klikken, waardoor ik naar de juiste IMDB pagina wordt gebracht.
IMDB werkt met een id per film/serie in de URL. Deze ids vind je ook weer terug in onze filmdatabase. Zie bijvoorbeeld: https://www.imdb.com/title/tt0944947/ Pas de URL van IMDB aan en plak het juiste ID erachter.*/

console.log(movies);

const listOfMovies = document.getElementById("list-of-movies");

const addMoviesToDom = (selectionOfMovies) => {
  listOfMovies.innerHTML = "";
  const arrayOfMovieListItems = selectionOfMovies.map((movie) => {
    const listItem = document.createElement("li");
    const movieTitle = document.createTextNode(movie.Title);
    const titleP = document.createElement("p");
    titleP.appendChild(movieTitle);
    listItem.appendChild(titleP);
    const movieLink = document.createElement("a");
    movieLink.href = "https://www.imdb.com/title/" + movie.imdbID;
    listItem.appendChild(movieLink);
    const moviePic = document.createElement("img");
    moviePic.src = movie.Poster;
    movieLink.appendChild(moviePic);
    return (movie = listItem);
  });
  arrayOfMovieListItems.forEach((movie) => {
    listOfMovies.appendChild(movie);
  });
};

addMoviesToDom(movies);

const radioButtons = document.getElementsByName("filter");

const addEventListeners = (list) => {
  list.forEach((item) => {
    item.addEventListener("change", function (e) {
      handleOnChangeEvent(e);
    });
  });
};

addEventListeners(radioButtons);

const handleOnChangeEvent = (e) => {
  switch (e.target.value) {
    case "newest":
      filterLatestMovies();
      break;
    case "avengers":
      filterMovies("Avengers");
      break;
    case "x-men":
      filterMovies("X-Men");
      break;
    case "princess":
      filterMovies("Princess");
      break;
    case "batman":
      filterMovies("Batman");
      break;
    default:
      console.log("je hebt nog niet op een button geklikt");
      break;
  }
};

const filterMovies = (wordInMovieTitle) => {
  const filteredMovies = movies.filter((movie) => {
    return movie.Title.includes(wordInMovieTitle);
  });
  addMoviesToDom(filteredMovies);
};

const filterLatestMovies = () => {
  const filteredMovies = movies.filter((movie) => {
    return parseInt(movie.Year) > 2013;
  });
  addMoviesToDom(filteredMovies);
};

/* console.log(movies);

const listOfMovies = document.getElementById("list-of-movies");

const addMoviesToDom = (selectionOfMovies) => {
  const listItem = document.createElement("li");
  const createArrayOfListItems = selectionOfMovies.map((movie) => {
    const movieTitle = document.createTextNode(movie.Title);
    listItem.appendChild(movieTitle);
    const moviePic = document.createElement("img");
    moviePic.src = movie.Poster;
    listItem.appendChild(moviePic);
  });
  selectionOfMovies.forEach(() => {
    listOfMovies.appendChild(listItem);
  });
};

addMoviesToDom(movies); */
