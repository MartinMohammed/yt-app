import axios from "axios";

// constant value - this is a public api key
// it is meant to be made publicly available
// meant to be allowed to be shipped down to a user's
// broswer and accessed  from the user's browser - add restricitions
// (only for specific scenerarios (http referer))
const KEY = "AIzaSyBf6V7_8LqBYDdy_CNzuPQ9kAz3-S7ZXVg";

// pre configured instance of axios ->  default values
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    // fix 'Warning: Each child in a list should have a unique "key" prop"'
    // axios config object --> only search for videos and not playlists
    type: "video",
  },
});
