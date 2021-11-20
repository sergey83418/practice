"use sctrict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '1');

    while (numberOfFilms=='' || numberOfFilms == null || isNaN(numberOfFilms))  {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '1');
    }
}

start ();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
        const a = prompt ('Один из последних просмотренных фильмов?', ''),
              b = prompt ('На сколько оцените его?', '');
    
              if (
                  a != null  && b != null && a != "" && b != '' && a.length < 50)
                  {
              personalMovieDB.movies[a] = b;
              console.log('ok!');
                  } else {
                      console.log('error');
                      i--;
                  }
    }
}

rememberMyFilms ();

function detectPersonnalLevel () {
    if (personalMovieDB.count < 10) {
        console.log('мало фильмов посмотрели');
    } else if (personalMovieDB.count >= 10 &&  personalMovieDB.count < 30) {
        console.log('много фильмов посмотрели');
    } else if (personalMovieDB.count >= 30) {
        console.log('дохуя фильмов посмотрели');
    } else {
        console.log('error');
    }
}

detectPersonnalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log (personalMovieDB);
    }
}

showMyDB(personalMovieDB);


function writeYourGenres () {
    for (let i=1; i<=4; i++) {
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres ();

console.log (personalMovieDB);