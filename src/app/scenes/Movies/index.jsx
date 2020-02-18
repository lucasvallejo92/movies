import React from 'react';
import SearchBar from '../../components/SearchBar';
import { connect } from 'react-redux';
import Card from '../../components/Card';

function Movies(props) {
    const { movies } = props;
    return (
        <div>
            <div className="row">
                <div className="col-md-12 align-self-center pt-4 pb-4">
                    <h4 className="pb-2">Search by movie name:</h4>
                    <SearchBar/>
                </div>
            </div>
            <div className="row">
                {
                    movies.map(value => (
                        <Card key={value.id} movie={value} />
                    ))
                }
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    movies: state.movies
});

export default connect(mapStateToProps)(Movies);