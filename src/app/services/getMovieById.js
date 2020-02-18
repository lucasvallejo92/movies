import ENVIRONMENT from '../../environments/environment';
import store from '../store/store';
import { GET_DETAIL_REQUESTED, GET_DETAIL_SUCCESS, GET_DETAIL_FAIL } from '../store/actions';

export const getMoviesById = async (id) => {
    store.dispatch({type: GET_DETAIL_REQUESTED});

    const data =  await fetch(
        `${ENVIRONMENT.SERVICE_URL}?i=${id}&plot=full&apikey=${ENVIRONMENT.API_KEY}`
    )
    .then(res => res.json())
    .catch(() => ({Response: 'False'}));

    if (data.Response === 'True') {
        store.dispatch({type: GET_DETAIL_SUCCESS, payload: data});
    } else {
        store.dispatch({type: GET_DETAIL_FAIL, payload: data});
    }
};