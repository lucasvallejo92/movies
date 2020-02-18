import { CHANGE_SECTION, GET_MOVIES, GET_FAVOURITES, REMOVE_FAVOURITE, SET_FAVOURITE, GET_DETAIL_REQUESTED, GET_DETAIL_SUCCESS, GET_DETAIL_FAIL, GET_BACK } from './actions';
import { moviesResponseHandler } from '../utils/handlers/moviesResponseHandler';
import { getFavourites, setFavourite, removeFavourite, favHandler } from '../utils/handlers/favouritesHandler';

const initialState = {
  section: 'HOME',
  prevSection: 'HOME',
  movies: [],
  favourites: [],
  detail: null
};

function reducer(state = initialState, action) {
switch(action.type) {
  case CHANGE_SECTION:
    return {
      ...state,
      section: action.payload
    };
  case GET_MOVIES:
    return {
      ...state,
      movies: moviesResponseHandler(action.payload, state.favourites)
    };
  case GET_FAVOURITES:
    return {
      ...state,
      favourites: getFavourites()
    };
  case SET_FAVOURITE:
    return {
      ...state,
      favourites: setFavourite(action.payload, state.favourites),
      movies: favHandler(state.movies, state.favourites)
    };
  case REMOVE_FAVOURITE:
    return {
      ...state,
      favourites: removeFavourite(action.payload, state.favourites),
      movies: favHandler(state.movies, state.favourites)
    };
  case GET_DETAIL_REQUESTED:
    return {
      ...state,
      detail: null,
      prevSection: state.section
    };
  case GET_DETAIL_SUCCESS:
    return {
      ...state,
      detail: action.payload
    };
  case GET_DETAIL_FAIL:
    return {
      ...state,
      detail: action.payload
    };
  case GET_BACK:
    return {
      ...state,
      section: state.prevSection
    };
  default:
    return state;
  }
}
export default reducer;