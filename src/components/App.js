import React, { useState, useEffect } from "react";
import Title from "./Title";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

// ---------------------------- FOR DOCUMENTATION/NOTES LOOK OLD VERSION - CLASS BASED ----------------

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // same syntax like primitive hooks
  const [videos, search] = useVideos("World News");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    // not full width of div = margin left and right
    <div className="ui container ">
      <Title innerText={"MyTube"} />
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          {/* // 10/ 16 of the default available columns to render xyz */}
          <div className="ten wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="six wide column">
            {/* // passing state as props */}
            <VideoList
              videos={videos}
              // (video) => setSelectedVideo(video) = equivalent to below
              onVideoSelect={selectedVideo}
            />
          </div>
        </div>
      </div>
      <h4 style={{ textAlign: "center" }}>@Martin Mohammed</h4>
    </div>
  );
};

export default App;
