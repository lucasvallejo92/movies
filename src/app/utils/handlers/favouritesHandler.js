export const getFavourites = () => {
    const favs = localStorage.getItem('favourites');
    return favs ? JSON.parse(favs) : [];
}

export const setFavourite = (favourite, favourites = []) => {
    let duplicated = false;
    favourites.forEach(item => {
        if (item.imdbID === favourite.imdbID) {
            duplicated = true;
        }
    });
    if (!duplicated) {
        favourites.push(favourite);
        localStorage.setItem('favourites', JSON.stringify(favourites));
        return favourites;
    }
    return favourites;
}

export const removeFavourite = (favourite, favourites = []) => {
    const result = favourites.filter(item => item.imdbID !== favourite.imdbID);
    localStorage.setItem('favourites', JSON.stringify(result));
    return result;
}

export const favHandler = (movies = [], favourites = []) => {
    movies.forEach(movie => {
        movie.fav = isFavourite(movie, favourites);
    });
    return movies;
}

export const isFavourite = (movie, favourites) => {
    let result = false;
    if (favourites.length) {
        favourites.forEach(el => {
            if (el.imdbID === movie.imdbID) {
                result = true;
            }
        });
        return result
    }
    return result;
}