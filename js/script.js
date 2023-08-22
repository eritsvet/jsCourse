let numberOfFilms;

function start() {
    do {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms));
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function detectPersonalLevel() {
    if (personalMovieDB.count > 0 && personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }
}

detectPersonalLevel();

function rememberMyFilms() {
    let movie, score;
    for (let i = 0; i <= 1; i++) {
        do {
            movie = prompt('Один из последних просмотренных фильмов?', '');
            if (movie == null || movie == '' || movie.length >= 50) alert('Попробуйте еще раз!');
        }
        while (movie == null || movie == '' || movie.length >= 50);
        do {
            score = prompt('На сколько оцените его?', '');
            if (score == null || score == '') alert('Попробуйте еще раз!');
        }
        while (score == null || score == '');
        personalMovieDB.movies[movie] = score;
    }
}

rememberMyFilms();

function showMyDB(hidden) {
    if (!hidden) console.log(personalMovieDB);
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 0; i <= 2; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`);
    }
}

writeYourGenres();

console.log(personalMovieDB);

