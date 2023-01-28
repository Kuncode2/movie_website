const API_KEY = 'api_key=37a93be98c32e5755b1995b519568b5a';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?'+API_KEY

getMovie(API_URL)

function getMovie(url) {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data.results)
     showMovies(data.results)
    })


}

function showMovies(data){
    data.forEach(movie => {
        const {title, poster_path, vote_average, overview} =movie 
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `<img src="${IMG_URL+poster_path}" 
        alt="${title}" style="background-size: cover;">
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getcolor(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
        <h3>overview</h3>
        ${overview}
        </div>`
    })

}


const main = document.getElementById('main');
const form =  document.getElementById('form');
const search = document.getElementById('search');
const tagsEl = document.getElementById('tags');

const prev = document.getElementById('prev')
const next = document.getElementById('next')
const current = document.getElementById('current')

var currentPage = 1;
var nextPage = 2;
var prevPage = 3;
var lastUrl = '';
var totalPages = 100;
