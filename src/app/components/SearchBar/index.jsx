import React, { useState } from 'react';
import store from '../../store/store';
import { from, BehaviorSubject } from 'rxjs';
import { getMoviesByName } from '../../services/getMoviesByName';
import { useObservable } from '../../utils/handlers/userObservable';
import { GET_MOVIES } from '../../store/actions';
import { filter, mergeMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

let previousVal = '';
let searchSubject = new BehaviorSubject('');
let searchResultObservable = searchSubject.pipe(
    filter(val => val.length > 1),
    debounceTime(750),
    distinctUntilChanged(),
    mergeMap(val => {
        if (previousVal !== val) {
            previousVal = val;
            return from(getMoviesByName(val));
        } else {
            return from([]);
        }
    })
);

function SearchBar() {
    const [search, setSearch] = useState('');
    const setResults = (results) => {
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
            className="searchBar"
            type="text"
            placeholder="Search movie"
            value={search}
            onChange={handleSearchChange}
        />
    );
}

export default SearchBar;