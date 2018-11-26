import axios from 'axios';

const KEY = 'AIzaSyAi7RXEdj2dSaNiPB_MSpsEXyXEjgYUClM';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        key: KEY
        
    }
}); 



