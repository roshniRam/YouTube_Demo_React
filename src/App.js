import React, { Component } from 'react';
import './App.css';
import YouTube from 'react-youtube';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDsozPGaHyth1dGXfm0B01_5Iz5kAd2Q4A';

class App extends Component {

  render() {
    return (
      <div>
        YouTube App
        <SearchBar />
      </div>
    );
  }
}

export default App;
