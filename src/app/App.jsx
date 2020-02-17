import React from 'react';
import './App.css';
import Menu from './components/Menu';
import Movies from './scenes/Movies';
import { connect } from 'react-redux';
import Favourite from './scenes/Favourite';

function App(props) {
  const { section } = props;
  return (
    <div className="App">
      <Menu/>
      <div className="container">
        {
          (section == 'HOME' && <Movies/>) || <Favourite/>
        }
      </div>
    </div>
  );
}


const mapStateToProps = (state) => ({
  section: state.section
});

export default connect(mapStateToProps)(App);
