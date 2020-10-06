import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import Video from './Video';
import youtube from '../api/youtube';

class App extends React.Component {

  componentDidMount() {
    this.onTermSubmit('LLUNI - MENIME');
  }
  state = { videos: [], selectedVideo: null };
  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  }

  onVideoSelect = (video) =>{
    this.setState({ selectedVideo: video });
  }

  render() {
    return (
      <div>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="row">
          <Video video={this.state.selectedVideo} />
          <VideoList selectedVideo={this.onVideoSelect} videos={this.state.videos}/>
        </div>
      </div>

    );
  }
}
 export default App;
