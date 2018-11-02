import React, { Component } from 'react';
import './App.css';
import YouTube from 'react-youtube';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDsozPGaHyth1dGXfm0B01_5Iz5kAd2Q4A';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('coke studio playlist');


  }

  videoSearch(term){
    YTSearch({key: API_KEY, term:term},(data) =>{
        this.setState({
          videos: data,
          selectedVideo: data[0]
        });
    });
  }

  render() {
    return (
      <div>
        YouTube App
        <SearchBar onSearchTermChange={searchTerm => this.videoSearch(searchTerm)}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
          onVideoSelect={userSelected => this.setState({selectedVideo: userSelected})}
          videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
