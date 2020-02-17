import React, { useState } from 'react';
import store from '../../store/store';
import { from, BehaviorSubject } from 'rxjs';
import { getMoviesByName } from '../../services/getMoviesByName';
import { useObservable } from '../../utils/handlers/userObservable';
import { GET_MOVIES } from '../../store/actions';
import { filter, mergeMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

let searchSubject = new BehaviorSubject('');
let searchResultObservable = searchSubject.pipe(
    filter(val => val.length > 1),
    debounceTime(750),
    distinctUntilChanged(),
    mergeMap(val => from(getMoviesByName(val)))
);

function SearchBar() {
    const [search, setSearch] = useState('');
    const setResults = (results) => {
        console.log(results);
        store.dispatch({type: GET_MOVIES, payload: results});
    };

    useObservable(searchResultObservable, setResults);

    const handleSearchChange = e => {
        const newValue = e.target.value;
        setSearch(newValue);
        searchSubject.next(newValue);
    }
    return (
        <input
            type="text"
            placeholder="Search movie"
            value={search}
            onChange={handleSearchChange}
        />
    );
}

export default SearchBar;