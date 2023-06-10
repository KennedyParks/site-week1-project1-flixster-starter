
 // Global constants
    const API_KEY = 'api_key=391129973639c0483bf6dc77f30c617b';
    const BASE_URL = 'https://api.themoviedb.org/3';
    const API_URL = BASE_URL + '/discover/movie?now_playing&'+API_KEY;
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';
    const searchURL = BASE_URL + '/search/movie?'+API_KEY;

// HTML element references
    const main = document.getElementById('main');
    const form = document.getElementById('form');
    const search = document.getElementById('search');
    const loadMoreButton = document.getElementById('loadMoreButton');

// Variable initializes the start page as page 1
    let currentPage = 1;


// Calls the TMDB API to load movie data
    getMovies(API_URL);

// Fetches the movie data and populates main element
    function getMovies(url) {
        const pageUrl = url + '&page=' + currentPage;
    
        fetch(pageUrl)
        .then(response => response.json())
        .then(data => {
            main.innerHTML = '';
            showMovies(data.results);
            if (data.page < data.total_pages) {
                loadMoreButton.style.display = 'block';
            } else {
                loadMoreButton.style.display = 'none';
            }
        });
    }

// Function that is called when the load more button is clicked and displays 20 more movies
    function loadMoreMovies(url) {
        const pageUrl = url + '&page=' + currentPage;
    
        fetch(pageUrl)
        .then(response => response.json())
        .then(data => {
             // Clears the main element
            showMovies(data.results);
            if (data.page < data.total_pages) {
                loadMoreButton.style.display = 'block';
            } else {
                loadMoreButton.style.display = 'none';
            }
        });
    }
    
// Dynamically creates HTML elements from the JSON data to populate movie cards
    function showMovies(data) {
        data.forEach(movie => {
            const { title, poster_path, vote_average, overview } = movie;
            const movieEl = document.createElement('div');
            movieEl.classList.add('movie');
    
            // Checks if poster_path is null or undefined
            if (poster_path) {
                movieEl.innerHTML = `
                    <img src="${IMG_URL + poster_path}" alt="${title}">
                `;
            } else {
                movieEl.innerHTML = `
                    <img src="https://p1.pxfuel.com/preview/552/714/457/cinema-theater-movie-theater-sit-chair-cozy.jpg" alt="${title}">
                `;
            }
    
            movieEl.innerHTML += `
                <div class="movie-info">
                    <h3>${title}</h3>
                    <span class="${getColor(vote_average)}">⭐️ ${vote_average}</span>
                </div>
            `;
    
            main.appendChild(movieEl);
        });
    }

// Clears the main element before populating more movie data
    main.innerHTML = '';

// Takes a vote average and returns a color depending on the value of the int
    function getColor(vote) {
        if(vote>= 8){
            return 'green'
        }else if(vote >= 5){
            return "orange"
        }else{
            return 'red'
        }
    }

// Uses an event listener to prevent the page from reloading when query is submitted
    form.addEventListener('submit', event => {
        event.preventDefault();
    
        const searchTerm = search.value; 
    
        if (searchTerm) {
            currentPage = 1; 
            getMovies(searchURL + '&query=' + searchTerm); 
        }
    });
    
   
// Uses an event listener to increment the current page and loads more movies
    loadMoreButton.addEventListener('click', () => {
        currentPage++;
        loadMoreMovies(API_URL);
    });

// Uses an event listener to reload the page when clear button is clicked
    clearButton.addEventListener('click',  () => {
        location.reload();
    });