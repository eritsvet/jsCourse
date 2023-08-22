const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
	count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count > 0 && personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}

let a, b;
for (let i = 0; i <= 1; i++) {
    do {
        a = prompt('Один из последних просмотренных фильмов?', '');
        if (a == null || a == '' || a.length >= 50) alert('Попробуйте еще раз!');
    }
    while (a == null || a == '' || a.length >= 50);
    do {
        b = prompt('На сколько оцените его?','');
        if (b == null || b == '') alert('Попробуйте еще раз!');
    }
    while (b == null || b == '');
    b = prompt('На сколько оцените его?','');
    personalMovieDB.movies[a] = b;
}
// personalMovieDB.movies[prompt('Один из последних просмотренных фильмов?', '')] = prompt('На сколько оцените его?','');

console.log(personalMovieDB);




