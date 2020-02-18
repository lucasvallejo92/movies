import React from 'react';
import { connect } from 'react-redux';
import store from '../../store/store';
import './style.css';
import { GET_BACK } from '../../store/actions';

function Detail(props) {
    const { detail } = props;
    const back = () => {
        store.dispatch({type: GET_BACK});
    };
    return (
        <div className="movie-detail">
            { !detail ? 'loading...' : 
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 align-self-center pb-4">
                            <img className="card-img-top poster" src={detail.Poster} alt={detail.Title}></img>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 align-self-center pb-2">
                            <h2>{detail.Title} ({detail.Year})</h2>
                            <p>Duration: {detail.Runtime}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 align-self-center pb-4">
                            <p>{detail.Plot}</p>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-12 align-self-center">
                            <h4>Ratings:</h4>
                        </div>
                            {
                                detail.Ratings.map(rating => (
                                    <div className="col-md-4 pb-2 pt-2">
                                        <p><b>{rating.Source}:</b></p>
                                        <p>{rating.Value}</p>
                                    </div>
                                ))
                            }
                    </div>
                    <div className="row">
                        <div className="col-md-12 align-self-center pt-4">
                            <button onClick={back} className="btn btn-primary">Back</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}


const mapStateToProps = (state) => ({
    detail: state.detail
});

export default connect(mapStateToProps)(Detail);