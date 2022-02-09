const main = document.querySelector('.main');

fetch(genres_list_http + new URLSearchParams({
    api_key: api_key
}))
.then(res => res.json())
.then(data => {
    data.genres.forEach(item => {
        fetchMoviesListByGenres(item.id, item.name);
    })
});

/* Here, we are using the fetch method on genres_list_http, which we 
have declared in the api.js file. Then, we are using new URLSearchParams for 
adding api_key parameters to the link. 

/* As we have an array of genres, we are looping through each and 
every genre using the forEach method. And inside that, we are calling 
fetchMoviesListByGenres(id, genres), which we'll create next.*/

/* Now, we fetch movies by genre */

const fetchMoviesListByGenres = (id, genres) => {
    fetch(movie_genres_http + new URLSearchParams({
        api_key: api_key,
        with_genres: id,
        page: Math.floor(Math.random() * 3) + 1
    }))
    .then(res => res.json())
    .then(data => {
        makeCategoryElement(`${genres}_movies`, data.results);
    })
    .catch(err =>  console.log(err));
}

/* Here we are fetching data, but in this case, we 
are making a request to movie_genres_http and adding some more parameters.
with_genres param will give us movies with only that genre.
page param will give use what of the result we want and in this case we 
are using Math.random() to fetch some random page of movie result.

After getting the data, we are performing the same res.json() to covert 
it into JSON. And calling makeCategoryElement(category, data) which will 
create our movie categories. Same if you want you can console log the 
data structure.

Now we will create the movie categories. But before that select our main element 
from HTML.
*/

const makeCategoryElement = (category, data) => {
    main.innerHTML += `
    <div class="movie-list">
        <button class="pre-btn"><img src="img/pre.png" alt=""></button>
        <h1 class="movie-category">${category.split("_").join(" ")}</h1>
        <div class="movie-container" id="${category}">
        </div>
        <button class="nxt-btn"><img src="img/nxt.png" alt=""></button>
    </div>
    `;
    makeCards(category, data);
}

const makeCards = (id, data) => {
    const movieContainer = document.getElementById(id);
    data.forEach((item, i) => {
        if(item.backdrop_path == null){
            item.backdrop_path = item.poster_path;
            if(item.backdrop_path == null){
                return;
            }
        }

        movieContainer.innerHTML += `
        <div class="movie" onclick="location.href = '/${item.id}'">
            <img src="${img_url}${item.backdrop_path}" alt="">
            <p class="movie-title">${item.title}</p>
        </div>
        `;

        if(i == data.length - 1){
            setTimeout(() => {
                setupScrolling();
            }, 100);
        }
    })
}

/* Inside the above function, we are selecting the movie container element 
using the id we got from the above function. Then we loop through data 
using the forEach method, inside which we check the condition */

/* Here, we are using the innerHTML method to append the card HTML 
structure that we already made at the start. And again here also we 
are using template strings. If you see we have onclick event to 
movie-card element which, in that event we are using location.href to 
redirect user to movie page that we'll create next. */