import axios from "axios";

const KEY = "AIzaSyD32gSYvXRO0qJ5eNDapBXQMW2O_UN5Xkw";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY,
    },
});