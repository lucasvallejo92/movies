import React, { useState } from 'react';
import store from '../../store/store';
import { SET_FAVOURITE, REMOVE_FAVOURITE } from '../../store/actions';

function Card({ movie }) {
    const [fav, setFav] = useState(movie.fav);
    const setAsFav = () => {
        setFav(true);
        store.dispatch({type: SET_FAVOURITE, payload: movie});
    };
    const removeOfFav = () => {
        setFav(false);
        store.dispatch({type: REMOVE_FAVOURITE, payload: movie});
    };
    return (
        <div className="col-md-4">
            <div className="card movie-card text-white bg-dark">
                <img className="card-img-top" src={movie.Poster} alt={movie.Title}></img>
                <div className="card-body">
                    <h5 className="card-title">{movie.Title}</h5>
                    <p className="card-text">{movie.Year}</p>
                    {
                        (fav && <button onClick={removeOfFav} className="btn btn-primary">Remove favourite</button>) ||
                        (!fav && <button onClick={setAsFav} className="btn btn-primary">Set as favourite</button>)
                    }
                </div>
            </div>
        </div>
    );
}

export default Card;



