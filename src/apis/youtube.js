import axios from "axios";


// const KEY = 'AIzaSyDTGjU1-7bZDSid-sReIQx62YsHU5bVXxo';
const KEY = 'AIzaSyCVb1l_-_Utnd8FtdkPX1PzsppVczM-OQM'
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
