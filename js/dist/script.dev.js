"use strict";

var numberOfFFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
console.log(numberOfFFilms);
var personalMovieDB = {
  count: numberOfFFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};
var a = prompt('Последний просмотренный фильм?', ''),
    b = prompt('Насколько из 10 его оцените?', ''),
    c = prompt('Последний просмотренный фильм?', ''),
    d = prompt('Насколько из 10 его оцените?', '');
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);