import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useVideList, useVideoInfo } from '../../utils/hooks/useVideoStates';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import Layout from '../Layout';
import VideoPlayer from '../../pages/VideoPlayer';
import HeaderMenu from '../Header';

function App() {
  const { videoList, isLoading } = useVideList([]);
  const { video, updateVideoInfo } = useVideoInfo({});

  const doSearch = (keyword) => {
    console.log('DOSEARCH: ', keyword);
    return keyword;
  };

  const selectCard = (videoInfo) => {
    updateVideoInfo(videoInfo);
    const path = videoInfo.title ? `?video=${videoInfo.videoId}` : '/';
    window.history.replaceState({}, videoInfo.title, path);
  };

  return (
    <BrowserRouter data-testid="app-layout">
      <HeaderMenu doSearch={doSearch} />
      <AuthProvider>
        <Layout>
          <Switch>
            <Route path="/">
              {video.title ? (
                <VideoPlayer
                  video={video}
                  selectCard={selectCard}
                  relatedVideos={videoList}
                />
              ) : (
                <HomePage
                  videoList={videoList}
                  selectCard={selectCard}
                  isLoading={isLoading}
                />
              )}
            </Route>
            <Route exact path="/login">
              Login
            </Route>
            <Route path="/videoplayer">
              <VideoPlayer video={video} />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
