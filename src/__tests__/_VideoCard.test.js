import React from 'react';
import { screen, cleanup, render, fireEvent } from '@testing-library/react';
import VideoCard from '../components/VideoCard';
import VideoMock from '../utils/mock/youtube-videos-mock.json';
import { getReadableDate, random } from '../utils/fns';

afterEach(() => {
  cleanup();
});

const MockVideoInfo = VideoMock.items[1].snippet;
MockVideoInfo.uploadDate = getReadableDate(VideoMock.items[1].snippet.publishedAt);
MockVideoInfo.thumbnail = VideoMock.items[1].snippet.thumbnails.medium.url;
MockVideoInfo.channel = VideoMock.items[1].snippet.channelTitle;

it('Test Utils: getReadableDate', () => {
  expect(MockVideoInfo.uploadDate).toBe('September 30, 2019');
});

it('Test Utils: random', () => {
  expect(typeof random(10)).toBe('number');
});

it('Should render VideoCard Info', () => {
  render(<VideoCard videoData={MockVideoInfo} />);
  const videoCardComponent = screen.getByTestId('yt-videocard');
  expect(videoCardComponent).toBeInTheDocument();
  expect(videoCardComponent).toHaveTextContent(
    'Video Tour | Welcome to Wizeline GuadalajaraWizeline| September 30, 2019 Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, ...'
  );
});

it('Handle videoCard click event', () => {
  const cardClick = jest.fn();
  render(<VideoCard videoData={MockVideoInfo} cardClick={cardClick} />);
  const videoCardComponent = screen.getByTestId('yt-videocard');
  expect(videoCardComponent).toBeInTheDocument();
  fireEvent.click(videoCardComponent);
  expect(cardClick).toHaveBeenCalledWith(MockVideoInfo);
});
