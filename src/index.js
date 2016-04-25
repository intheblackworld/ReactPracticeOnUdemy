import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyAwEmB8_hVGY93y2XVOUiF7AMvineybxVU';


//create a new components. This componenet should produce
// some HTML

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };


  }
  videoSearch(term){
    YTSearch({key:API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render (){
    return (
    <div>
      <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
      <VideoDetail video={this.state.selectedVideo} />
      <VideoList
      onVideoSelect = {selectedVideo => this.setState({selectedVideo: selectedVideo})}
      videos= {this.state.videos} />


    </div>
  );
}
  }

ReactDOM.render(<App />, document.querySelector('.container'));
