import React from 'react';
import { screen, cleanup, render, fireEvent } from '@testing-library/react';
import HomePage from '../pages/Home';
import VideoMock from '../utils/mock/youtube-videos-mock.json';

afterEach(() => {
  cleanup();
});

const selectCard = jest.fn();
const cleanVideoData = {
  channel: 'Wizeline',
  channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
  description:
    'Engineering a better tomorrow. Wizeline is a global software development company that helps its clients solve their biggest challenges with design and ...',
  link: 'https://www.youtube.com/embed/7PtYNO6g7eI?autoplay=1&color=white',
  thumbnail: 'https://i.ytimg.com/vi/7PtYNO6g7eI/mqdefault.jpg',
  title: 'We Are Wizeline',
  uploadDate: 'April 12, 2019',
  videoId: '7PtYNO6g7eI',
};

it('Map through videoData', () => {
  render(<HomePage videoList={VideoMock.items} selectCard={selectCard} />);
  const videoCards = screen.getAllByTestId('yt-videocard');
  expect(videoCards.length).toBe(26);
});

it('Select video card', () => {
  render(<HomePage videoList={VideoMock.items} selectCard={selectCard} />);
  const videoCards = screen.getAllByTestId('yt-videocard');
  expect(videoCards.length).toBe(26);

  fireEvent.click(videoCards[5]);
  expect(selectCard).toHaveBeenCalledWith(cleanVideoData);
});
