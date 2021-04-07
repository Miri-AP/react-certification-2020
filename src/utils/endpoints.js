import { API_KEY, API_URL } from './constants';

async function fetchSearchVideos(serach = 'wizeline', videoId) {
  try {
    let queryParams = '?part=snippet&maxResults=20';
    queryParams = videoId
      ? `${queryParams}&relatedToVideoId=${videoId}&type=video`
      : `${queryParams}&q=${serach}`;

    const response = await fetch(`${API_URL}search${queryParams}&key=${API_KEY}`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}

export { fetchSearchVideos };
