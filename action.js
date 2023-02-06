const API_KEY = 'api_key=37a93be98c32e5755b1995b519568b5a';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?'+API_KEY

const main = document.getElementById('main');

getMovie(API_URL)

function getMovie(url) {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data.results)
     showMovies(data.results);
    })


}

function showMovies(data){
    main.innerHTML = '' ;
    
    data.forEach(movie => {
        const {title, poster_path, vote_average, overview} = movie 
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
        <img src="${IMG_URL+poster_path}" alt="${title}" >
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getcolor(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
        <h3>overview</h3>
        ${overview}
        </div>

        `
        main.appendChild(movieEl);
    })

}

function getcolor(vote) {
    if(vote>=8){
        return 'green'
    }else if(vote >= 5){
        return "orange"
    }else{
        return 'red'
    }
}

const overlayContent = document.getElementById('overlay-content');
/* Open when someone clicks on the span element */
function openNav(movie) 
  let id = movie.id;
  fetch(BASE_URL + '/movie/'+id+'/videos?'+API_KEY).then(res => res.json()).then(videoData => {
    console.log(videoData);
    if(videoData)
      document.getElementById("myNav").style.width = "100%";
      if(videoData.results.length > 0)
        var embed = [];
        var dots = [];
        videoData.results.forEach((video, idx) => {
          let {name, key, site} = video

          if(site == 'YouTube'){
              
            embed.push(`
              <iframe width="560" height="315" src="https://www.youtube.com/embed/${key}" title="${name}" class="embed hide" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          
          `)

            dots.push(`
              <span class="dot">${idx + 1}</span>
            `)
          }
        })
      }
