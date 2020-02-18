import { isFavourite } from './favouritesHandler';

export const moviesResponseHandler = (movies, favourites = []) => {
    let counter = 1;
    movies.forEach(movie => {
        movie.id = counter;
        movie.fav = isFavourite(movie, favourites)
        counter++;
    });
    return movies;
};