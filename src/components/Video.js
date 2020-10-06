import React from 'react';


const Video = ({ video }) =>{
  if (!video) {
    return <div>Loading...</div>
  }

  const src = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div className="col">
      <div className="card">
        <div className="card-body">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe title={video.snippet.channelTitle} src={src} allowFullScreen/>
          </div>
          <h5 className="card-title">{video.snippet.title}</h5>
          <p>{video.snippet.channelTitle}</p>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    </div>
  );
};


export default Video
