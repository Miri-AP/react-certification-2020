import React from 'react';

import {
  VideoCardWrapper,
  Thumbnail,
  VideoTitle,
  VideoChannel,
  UploadDate,
  VideoCardInfo,
  VideoDescription,
} from './VideoCard.styles';

function VideoCard({ videoData, cardClick, isRelatedView = false }) {
  return (
    <VideoCardWrapper
      data-testid="yt-videocard"
      onClick={() => cardClick(videoData)}
      width={isRelatedView ? '75%' : '350px'}
      height={isRelatedView ? 'fit-content' : '345px'}
    >
      <Thumbnail img={videoData.thumbnail} alt={videoData.title} />
      <VideoCardInfo>
        <VideoTitle>{videoData.title}</VideoTitle>
        <VideoChannel>
          {videoData.channel}
          <UploadDate>{`|  ${videoData.uploadDate}`} </UploadDate>
        </VideoChannel>
        {!isRelatedView && <VideoDescription>{videoData.description}</VideoDescription>}
      </VideoCardInfo>
    </VideoCardWrapper>
  );
}

export default VideoCard;
