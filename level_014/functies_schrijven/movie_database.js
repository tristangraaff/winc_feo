let favouriteMovie = {
  title: "Good Will Hunting",
  duration: 92,
  stars: ["Robin Williams", "Matt Damon"],
};

const printMovieInfo = function (movie) {
  console.log(
    movie.title +
      " lasts for " +
      movie.duration +
      " minutes. It stars: " +
      movie.stars.join(", ") + "."
  );
};

printMovieInfo(favouriteMovie);
