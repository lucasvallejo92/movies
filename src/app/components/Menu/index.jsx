import React from 'react';
import { connect } from 'react-redux';
import store from '../../store/store';
import { actionTypes } from '../../store/actions';


function Menu(props) {
    const { section } = props;
    const goToSection = (section) => {
        store.dispatch({type: actionTypes.CHANGE_SECTION, payload: section});
    };
    const toHome = () => {
        goToSection('HOME');
    }
    const toFav = () => {
        goToSection('FAVOURITE');
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand">React Movies</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className={`nav-item ${section == 'HOME' ? 'active' : ''}`}>
                        <a className="nav-link" onClick={toHome}>Home</a>
                    </li>
                    <li className={`nav-item ${section == 'FAVOURITE' ? 'active' : ''}`}>
                        <a className="nav-link" onClick={toFav}>Favourites</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

const mapStateToProps = (state) => ({
    section: state.section
});

export default connect(mapStateToProps)(Menu);