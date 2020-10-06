import React from 'react';


const VideoItem = ({ video, selectedVideo }) => {
  return (
    <div onClick={() => selectedVideo(video) } className="card">
      <img src={video.snippet.thumbnails.high.url} className="card-img-top" alt={video.snippet.thumbnails.high.url} />
      <div className="card-body">
        <h5 className="card-title">{video.snippet.title}</h5>
      </div>
      <div className="card-footer">
        {video.snippet.channelTitle}
      </div>
    </div>
  );
}
export default VideoItem;
