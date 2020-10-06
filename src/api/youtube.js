import axios from 'axios';

const KEY = 'AIzaSyB-cDZXch3FwWZwBddSRdFCtkKbG1l0HKM';


export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResult: 5,
    key: KEY,
  }
});
