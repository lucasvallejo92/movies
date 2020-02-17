import React from 'react';
import './App.css';
import Menu from './components/Menu';
import Movies from './scenes/Movies';
import { connect } from 'react-redux';
import Favourite from './scenes/Favourite';

function App(props) {
  const { section } = props;
  const homeSection = () => section == 'HOME';
  return (
    <div className="App">
      <Menu/>
      {
        (section == 'HOME' && <Movies/>) || <Favourite/>
      }
    </div>
  );
}


const mapStateToProps = (state) => ({
  section: state.section
});

export default connect(mapStateToProps)(App);
