function random(limit) {
  return Math.floor(Math.random() * limit);
}

function getReadableDate(timeStamp) {
  const date = new Date(timeStamp);
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return date.toLocaleDateString(undefined, options);
}

function getUsefullData(videoData) {
  const { videoId } = videoData.id;
  const {
    publishedAt,
    title,
    channelTitle,
    description,
    thumbnails,
    channelId,
  } = videoData.snippet;
  return {
    uploadDate: getReadableDate(publishedAt),
    thumbnail: thumbnails.medium.url,
    title,
    description,
    channel: channelTitle,
    channelId,
    videoId,
    link: `https://www.youtube.com/embed/${videoId}?autoplay=1&color=white`,
  };
}

export { random, getReadableDate, getUsefullData };
