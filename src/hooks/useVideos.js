// ---------------------- EXTRACTING VIDEO LOGIC --------------------

// import the primitive hooks that we need in our custom hook
import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

// get input and return output
const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  // search for new videos
  const search = async (term) => {
    const { data } = await youtube.get("/search", {
      // params by the api specification -> not overriding the default props, just adding
      params: {
        q: term,
      },
    });
    // the new videos from api
    setVideos(data.items);
  };

  // useState returns an array of output (properties/functions)
  // or use an object with properties
  return [videos, search];
};

export default useVideos;
