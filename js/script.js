'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        do {
            this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
        while (this.count == '' || this.count == null || isNaN(this.count));
    },
    detectPersonalLevel: function() {
        if (this.count > 0 && this.count < 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (this.count >= 10 && this.count <= 30) {
            alert('Вы классический зритель');
        } else if (this.count >= 30) {
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка');
        }
    },
    rememberMyFilms: function() {
        let movie, score;
        for (let i = 0; i <= 1; i++) {
        do {
            movie = prompt('Один из последних просмотренных фильмов?', '').trim();
            if (movie == null || movie == '' || movie.length >= 50) alert('Произошла ошибка. Попробуйте еще раз.');
        }
        while (movie == null || movie == '' || movie.length >= 50);
        do {
            score = prompt('На сколько оцените его?', '').trim();
            if (score == null || score == '') alert('Произошла ошибка. Попробуйте еще раз.');
        }
        while (score == null || score == '');
        this.movies[movie] = score;
        }
    },
    showMyDB: function() {
        if (!this.privat) console.log(this);
    },
    writeYourGenres: function() {
        let genre;
        // for (let i = 0; i <= k; i++) {
        //     do {
        //         this.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`);
        //         if (this.genres[i] == '' || this.genres[i] == null) alert('Произошла ошибка. Попробуйте еще раз!');
        //     }
        //     while (this.genres[i] == '' || this.genres[i] == null);
        // }
        do {
            genre = prompt('Введите ваши любимые жанры через запятую');
                if (genre == '' || genre == null) alert('Произошла ошибка. Попробуйте еще раз.');
        }
        while (genre == '' || genre == null);
        this.genres = genre.split(', ');

        this.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function() {
        this.privat = !this.privat;
    }
};

// function start() {
//     do {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms));
// }

personalMovieDB.start();


// function detectPersonalLevel() {
//     if (personalMovieDB.count > 0 && personalMovieDB.count < 10) {
//         alert('Просмотрено довольно мало фильмов');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
//         alert('Вы классический зритель');
//     } else if (personalMovieDB.count >= 30) {
//         alert('Вы киноман');
//     } else {
//         alert('Произошла ошибка');
//     }
// }

personalMovieDB.detectPersonalLevel();

// function rememberMyFilms() {
//     let movie, score;
//     for (let i = 0; i <= 1; i++) {
//         do {
//             movie = prompt('Один из последних просмотренных фильмов?', '').trim();
//             if (movie == null || movie == '' || movie.length >= 50) alert('Попробуйте еще раз!');
//         }
//         while (movie == null || movie == '' || movie.length >= 50);
//         do {
//             score = prompt('На сколько оцените его?', '').trim();
//             if (score == null || score == '') alert('Попробуйте еще раз!');
//         }
//         while (score == null || score == '');
//         personalMovieDB.movies[movie] = score;
//     }
// }

personalMovieDB.rememberMyFilms();

// function showMyDB(hidden) {
//     if (!hidden) console.log(personalMovieDB);
// }

personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();

// function writeYourGenres() {
//     for (let i = 0; i <= 2; i++) {
//         personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`);
//     }
// }

personalMovieDB.writeYourGenres();

console.log(personalMovieDB);