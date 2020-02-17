import { actionTypes } from './actions';

const initialState = {
  section: 'HOME'
};

function reducer(state = initialState, action) {
switch(action.type) {
  case actionTypes.CHANGE_SECTION:
    return {
      section: action.payload
    };
  default:
    return state;
  }
}
export default reducer;