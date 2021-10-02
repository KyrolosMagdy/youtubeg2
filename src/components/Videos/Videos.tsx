import React, { useEffect, useState } from 'react';

import {
  fetchVideos,
  videos,
  videosState,
} from '../../features/searchVideos/searchVideosSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Options } from 'react-youtube';
import VideoCard from '../VideoCard/VideoCard';
import { VideoDataType } from '../Shared/VideoDataType/VideoDataType';
import ChannelCard from '../ChannelCard/ChannelCard.component';

const Videos = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const videosFetched = useAppSelector(videos);
  const isVideosFetched = useAppSelector(videosState) === 'successed';

  const [filteredVideos, setFilteredVideos] = useState();

  const opts: Options = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
    width: '60%',

    host: 'https://www.youtube.com',
  };

  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);
  return (
    <div>
      {isVideosFetched &&
        //@ts-ignore

        videosFetched.items.map((v: VideoDataType) => {
          return (
            <div>
              {v.id.kind === 'youtube#channel' ? (
                <ChannelCard
                  imageUrl={v.snippet.thumbnails.default.url}
                  title={v.snippet.title}
                  align='left'
                />
              ) : (
                <VideoCard video={v} opts={opts} key={v.id.videoId} />
              )}
            </div>
          );
        })}
    </div>
  );
};

export default Videos;
