let api_key = "ceb488e5ad2ef33619e435ed1555431e";

let img_url = "https://image.tmdb.org/t/p/w500";
let original_img_url = "https://image.tmdb.org/t/p/original";
let genres_list_http = "https://api.themoviedb.org/3/genre/movie/list?";
let movie_genres_http = "https://api.themoviedb.org/3/discover/movie?";
let movie_detail_http = "https://api.themoviedb.org/3/movie";

/* 
img_url - is to fetch the array of movie images. 
For example, if the image id is 123 then the image url will be https://image.tmdb.org/t/p/w500/123
genres_list_http - is to fetch the movie genre list so that we don't have to fetch different genres manually.
movie_genres_http - is to fetch the array of movies having the same genre.*/ 
