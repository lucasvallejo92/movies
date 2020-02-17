import React, { useEffect, useState } from 'react';
import ENVIRONMENT from '../../../environments/environment';
import { from, BehaviorSubject } from 'rxjs';
import { map, filter, delay, mergeMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

const getMoviesByName = async name => {
    const { Search: response } =  await fetch(
        `${ENVIRONMENT.SERVICE_URL}?s=${name}&plot=full&apikey=${ENVIRONMENT.API_KEY}`
    ).then(res => res.json());
    return response;
}

let searchSubject = new BehaviorSubject('');
let searchResultObservable = searchSubject.pipe(
    filter(val => val.length > 1),
    debounceTime(750),
    distinctUntilChanged(),
    mergeMap(val => from(getMoviesByName(val)))
);


const useObservable = (observable, setter) => {
    useEffect(() => {
        let subscription = observable.subscribe(result => {
            setter(result);
        })

        return () => subscription.unsubscribe();
    }, [observable, setter]);
};

function SearchBar() {
    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);

    useObservable(searchResultObservable, setResults);

    const handleSearchChange = e => {
        const newValue = e.target.value;
        setSearch(newValue);
        searchSubject.next(newValue);
    }
    return (
        <div>
            <input
                type="text"
                placeholder="Search movie"
                value={search}
                onChange={handleSearchChange}
            />
            <div>{JSON.stringify(results, null, 2)}</div>
        </div>
    );
}

export default SearchBar;