import React from 'react';
import { screen, cleanup, render, fireEvent } from '@testing-library/react';
import VideoPlayer from '../pages/VideoPlayer';
import VideoMock from '../utils/mock/youtube-videos-mock.json';
import { getUsefullData } from '../utils/fns';

afterEach(() => {
  cleanup();
});

const selectCard = jest.fn();

const videoData = {
  channel: 'El Economista TV',
  channelId: 'UCXmAOGwFYxIq5qrScJeeV4g',
  description:
    'En el 2014, Bismarck fundó Wizeline, compañía tecnológica que trabaja con los corporativos ofreciendo una plataforma para que desarrollen software de forma ...',
  link: 'https://www.youtube.com/embed/Po3VwR_NNGk?autoplay=1&color=white',
  thumbnail: 'https://i.ytimg.com/vi/Po3VwR_NNGk/mqdefault.jpg',
  title: 'Wizeline hace sentir a empleados como en casa',
  uploadDate: 'March 4, 2019',
  videoId: 'Po3VwR_NNGk',
};

it('Test Utils: getReadableDate', () => {
  expect(getUsefullData(VideoMock.items[3])).toEqual(videoData);
});

it('Should render VideoPlayer Info', () => {
  render(
    <VideoPlayer
      video={videoData}
      selectCard={selectCard}
      relatedVideos={VideoMock.items}
    />
  );
  const videoCardComponent = screen.getByTestId('video-player');
  expect(videoCardComponent).toBeInTheDocument();
  expect(videoCardComponent).toHaveTextContent(videoData.description);
});

it('Return to Home', () => {
  render(
    <VideoPlayer
      video={videoData}
      selectCard={selectCard}
      relatedVideos={VideoMock.items}
    />
  );
  const homeButton = screen.getByText('Home');
  expect(homeButton).toBeInTheDocument();
  fireEvent.click(homeButton);
  expect(selectCard).toHaveBeenCalledWith({});
});

it('Return to Show related search video card view', () => {
  render(
    <VideoPlayer
      video={videoData}
      selectCard={selectCard}
      relatedVideos={VideoMock.items}
    />
  );
  const videoCards = screen.getAllByTestId('yt-videocard');
  expect(videoCards.length).toBe(24);
  expect(videoCards[3]).toHaveTextContent('We Are WizelineWizeline| April 12, 2019');
});
