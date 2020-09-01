"use strict";


let numberOfFFilms ;

function start() {
  numberOfFFilms = +prompt ('Сколько фильмов вы уже посмотрели?', '');
  while (numberOfFFilms == ''|| numberOfFFilms == null || isNaN(numberOfFFilms)) {
    numberOfFFilms = +prompt ('Сколько фильмов вы уже посмотрели?', '');
  }

}

start();

console.log(numberOfFFilms);

const personalMovieDB ={
    count : numberOfFFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false,

};



function writeYourGemres() {
  for (let i=1; i<= 3; i++) {
    const genre = prompt(`Ваш любимый жанр под номером ${i}`);
    personalMovieDB.genres[i-1] = genre;

  }
}

writeYourGemres();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    alert('Просмотрено слишкм мало фильмов');
    } else if (personalMovieDB.count >= 10  && personalMovieDB.count <= 30){
      alert('Вы классический зритель');
      } else if (personalMovieDB.count > 30){
        alert('Вы киноман');
        } else {
          alert('ошибка');
        }
  
}
//  detectPersonalLevel();
      
function rememberMyFilms () {
    let i = 0;
  while (i < 2) { // выводит 0, затем 1, затем 2
    const a = prompt ('Последний просмотренный фильм?', ''),
          b = prompt ('Насколько из 10 его оцените?', '');
    

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('done');
    } else {
      console.log('error');
      i--;
    }
    i++;
  }
}     
  
// rememberMyFilms ();

function showMyDB(){
  if (personalMovieDB.privat == false) {
    console.log(personalMovieDB);
  }
 
 }
 
 showMyDB(); 







