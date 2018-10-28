import React, { Component } from 'react';
import './App.css';
import YouTube from 'react-youtube';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyDsozPGaHyth1dGXfm0B01_5Iz5kAd2Q4A';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      videos: []
    };

    this.videoSearch('Guru Randhawa');


  }

  videoSearch(term){
    YTSearch({key: API_KEY, term:term},(data) =>{
        this.setState({
          videos: data
        });
    });
  }

  render() {
    console.log(this.state.videos);
    return (
      <div>
        YouTube App
        <SearchBar />
        <VideoList videos={this.state.videos} />
        
      </div>
    );
  }
}

export default App;
