import React from 'react';
import { VideoList, HomeTitle } from './Home.styles';
// import youtubeVideoList from '../../utils/mock/youtube-videos-mock.json';
import VideoCard from '../../components/VideoCard';
import { getUsefullData } from '../../utils/fns';

function HomePage({ videoList, selectCard }) {
  const cardClick = (video) => {
    selectCard(video);
  };

  return (
    <section data-testid="yt-videocard">
      <HomeTitle>Welcome y&#8217;all!</HomeTitle>
      <VideoList>
        {videoList.map((video) => (
          <VideoCard
            key={video.etag}
            videoData={getUsefullData(video)}
            cardClick={cardClick}
          />
        ))}
      </VideoList>
    </section>
  );
}

export default HomePage;
