import "./VideoItem.css";
import React from "react";

// onVideoSelect passed as callback to VideoList and passed on VideoItem
// it will execute a callback in the app component with the video of VideoItem
// in order to identify the clicked video
const VideoItem = ({ video, onVideoSelect }) => {
  return (
    // make onClick argument a callback because we want to invoke onVideoSelect with the
    // actual video
    <div className="item video-item" onClick={() => onVideoSelect(video)}>
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <div className="header" style={{ color: "white" }}>
          {video.snippet.title}
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
