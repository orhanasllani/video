import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, selectedVideo }) => {

  const renderList = videos.map((video) => {
      return (
        <div key={video.id.videoId} className="p-2">
          <VideoItem  selectedVideo={selectedVideo}  video={video}/>
        </div>
      );
  });

  return (
    <div className="col-4">
      {renderList}
    </div>
  );
}
export default VideoList;
