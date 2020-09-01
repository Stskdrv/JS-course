"use strict";

var numberOfFFilms;

function start() {
  numberOfFFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFFilms == '' || numberOfFFilms == null || isNaN(numberOfFFilms)) {
    numberOfFFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}

start();
console.log(numberOfFFilms);
var personalMovieDB = {
  count: numberOfFFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function writeYourGemres() {
  for (var i = 1; i <= 3; i++) {
    var genre = prompt("\u0412\u0430\u0448 \u043B\u044E\u0431\u0438\u043C\u044B\u0439 \u0436\u0430\u043D\u0440 \u043F\u043E\u0434 \u043D\u043E\u043C\u0435\u0440\u043E\u043C ".concat(i));
    personalMovieDB.genres[i - 1] = genre;
  }
}

writeYourGemres();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    alert('Просмотрено слишкм мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert('Вы классический зритель');
  } else if (personalMovieDB.count > 30) {
    alert('Вы киноман');
  } else {
    alert('ошибка');
  }
} //  detectPersonalLevel();


function rememberMyFilms() {
  var i = 0;

  while (i < 2) {
    // выводит 0, затем 1, затем 2
    var a = prompt('Последний просмотренный фильм?', ''),
        b = prompt('Насколько из 10 его оцените?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('done');
    } else {
      console.log('error');
      i--;
    }

    i++;
  }
} // rememberMyFilms ();


function showMyDB() {
  if (personalMovieDB.privat == false) {
    console.log(personalMovieDB);
  }
}

showMyDB();