import React from 'react';
import store from './store/store';
import { connect } from 'react-redux';
import './App.css';
import Menu from './components/Menu';
import Movies from './scenes/Movies';
import Favourite from './scenes/Favourite';
import Detail from './scenes/Detail';
import { GET_FAVOURITES } from './store/actions';

function App(props) {
  const { section } = props;
  store.dispatch({type: GET_FAVOURITES});
  return (
    <div className="App">
      <Menu/>
      <div className="container">
        {
          (section === 'HOME' && <Movies/>) ||
          (section === 'FAVOURITE' && <Favourite/>) ||
          (section === 'DETAIL' && <Detail />)
        }
      </div>
    </div>
  );
}


const mapStateToProps = (state) => ({
  section: state.section
});

export default connect(mapStateToProps)(App);
