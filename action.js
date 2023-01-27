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
       showMovies(data.results)
    })


}

function showMovies(data){
    data.forEach(movie =>{
        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')
    })

}