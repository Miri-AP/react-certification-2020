import { useState, useEffect } from 'react';
import youtubeVideoList from '../mock/youtube-videos-mock.json';
import { fetchSearchVideos } from '../endpoints';

export function useVideList() {
  const [videoList, setVideoList] = useState([]);
  const [error, setError] = useState(null);

  function updateVideoList(videos) {
    setVideoList(videos);
  }

  function setErrorMsg(errorMsg) {
    setError(errorMsg);
  }

  useEffect(() => {
    const getList = async () => {
      let listItems = [];

      try {
        const initalSearch = await fetchSearchVideos('wizeline');
        listItems = initalSearch.items;
      } catch (e) {
        console.info('Error getting inital video search... setting youtubeVideoList');
        listItems = await youtubeVideoList.items;
        setErrorMsg(e);
      }
      updateVideoList(listItems);
    };
    getList();
  }, []);

  return { videoList, error, setErrorMsg, updateVideoList };
}

export function useVideoInfo() {
  const [video, setVideo] = useState({});

  function updateVideoInfo(data) {
    setVideo(data);
  }

  return { video, updateVideoInfo };
}
