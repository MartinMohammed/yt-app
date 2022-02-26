import React from "react";

const VideoDetail = ({ video }) => {
  // because our state start value of selectedVideo = null there is no video --> error
  if (!video) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {/* embed = very special semantic ui class name that tells --> we're about to put a embedded 
    video player inside the div  */}
      <div className="ui embed">
        <iframe
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          alt={video.snippet.title}
          title="video player"
          frameBorder="0"
          allowFullScreen="allowfullscreen"
        />
      </div>
      <div className="ui segment">
        <h4 className="ui header"> {video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
