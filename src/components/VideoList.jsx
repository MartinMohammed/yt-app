import React from "react";
import VideoItem from "./VideoItem";

// destructuring props.videos
// callback from app component
const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        onVideoSelect={onVideoSelect}
        key={video.id.videoId}
        video={video}
      />
    );
  });

  return (
    <div className="ui relaxed divided list">
      {/* rendering list of videoItems  */}
      {renderedList}
    </div>
  );
};

export default VideoList;
