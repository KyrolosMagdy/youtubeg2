import React, { useEffect } from 'react';

import {
  fetchVideos,
  videos,
  videosState,
} from '../../features/searchVideos/searchVideosSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import YouTube, { Options } from 'react-youtube';

const Videos = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const videosFetched = useAppSelector(videos);
  const isVideosFetched = useAppSelector(videosState) === 'successed';

  const opts: Options = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  console.log('v: ', videosFetched);
  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);
  return (
    <div>
      {isVideosFetched &&
        //@ts-ignore

        videosFetched.items.map((v) => {
          return <YouTube videoId={v.id.videoId} id={v.id.kind} opts={opts} />;
        })}
    </div>
  );
};

export default Videos;
