import React from 'react';
import { screen, cleanup, render } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import AppLayout from '../components/App';
import NotFound from '../pages/NotFound';
import { useVideoInfo, useVideList } from '../utils/hooks/useVideoStates';
import VideoMock from '../utils/mock/youtube-videos-mock.json';

afterEach(() => {
  cleanup();
});

const MockVideoInfo = VideoMock.items[1].snippet;

it('Should render NotFound', () => {
  const notFoundPage = render(<NotFound />);
  expect(notFoundPage).toMatchSnapshot();
  // const notfound = screen.getByTestId('not-found');
  // expect(notfound).toBeInTheDocument();
});

it('Should render App', () => {
  act(() => {
    const app = render(<AppLayout />);
    expect(app).toMatchSnapshot();
  });
  const homePage = screen.getByTestId('yt-videocard');
  const headerMenu = screen.getByTestId('yt-header');
  expect(homePage).toBeInTheDocument();
  expect(headerMenu).toBeInTheDocument();
});

test('Test useVideoInfo Hook', () => {
  const { result } = renderHook(() => useVideoInfo());
  expect(result.current.video).toEqual({});
  expect(typeof result.current.updateVideoInfo).toBe('function');

  act(() => {
    result.current.updateVideoInfo(MockVideoInfo);
  });
  expect(result.current.video).toEqual({
    channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
    channelTitle: 'Wizeline',
    description:
      'Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, ...',
    liveBroadcastContent: 'none',
    publishTime: '2019-09-30T23:54:32Z',
    publishedAt: '2019-09-30T23:54:32Z',
    thumbnails: {
      default: {
        height: 90,
        url: 'https://i.ytimg.com/vi/nmXMgqjQzls/default.jpg',
        width: 120,
      },
      high: {
        height: 360,
        url: 'https://i.ytimg.com/vi/nmXMgqjQzls/hqdefault.jpg',
        width: 480,
      },
      medium: {
        height: 180,
        url: 'https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg',
        width: 320,
      },
    },
    title: 'Video Tour | Welcome to Wizeline Guadalajara',
  });
});

test('Test useVideoInfo Hook', () => {
  const { result } = renderHook(() => useVideList());
  expect(result.current.videoList).toEqual([]);
  expect(typeof result.current.updateVideoList).toBe('function');
  expect(result.current.error).toEqual(null);
  expect(typeof result.current.setErrorMsg).toBe('function');
  act(() => {
    result.current.updateVideoList([
      VideoMock.items[0],
      VideoMock.items[1],
      VideoMock.items[3],
    ]);
  });
  const videoList = [VideoMock.items[0], VideoMock.items[1], VideoMock.items[3]];
  expect(result.current.videoList).toEqual(videoList);
});
