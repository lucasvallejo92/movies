import React from 'react';
import { connect } from 'react-redux';
import Card from '../../components/Card';

function Favourite(props) {
    const { favourites } = props;
    return (
        <div className="row">
            {
                favourites.map(value => (
                    <Card key={value.id} movie={value} />
                ))
            }
        </div>
    );
}

const mapStateToProps = (state) => ({
    favourites: state.favourites
});

export default connect(mapStateToProps)(Favourite);