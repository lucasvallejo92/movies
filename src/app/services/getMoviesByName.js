import ENVIRONMENT from '../../environments/environment';

export const getMoviesByName = async name => {
    const { Search: response, Response: ok } =  await fetch(
        `${ENVIRONMENT.SERVICE_URL}?s=${name}&plot=full&apikey=${ENVIRONMENT.API_KEY}`
    ).then(res => res.json());
    return ok == 'True' ? response : [];
}