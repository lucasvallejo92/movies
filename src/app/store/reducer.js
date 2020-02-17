import { CHANGE_SECTION, GET_MOVIES, GET_FAVOURITES } from './actions';

const initialState = {
  section: 'HOME',
  movies: [],
  favourites: []
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
      movies: action.payload
    };
  case GET_FAVOURITES:
    return {
      ...state,
      favourites: action.payload
    };
  default:
    return state;
  }
}
export default reducer;