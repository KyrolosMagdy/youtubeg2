import React, { useEffect } from 'react';

import {
  fetchVideos,
  fetchMoreVideos,
  videos,
  videosState,
  nextPageToken,
  pageNumber,
  resultsPerPage,
} from '../../features/searchVideos/searchVideosSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Options } from 'react-youtube';
import VideoCard from '../VideoCard/VideoCard';
import { VideoDataType } from '../Shared/VideoDataType/VideoDataType';
import ChannelCard from '../ChannelCard/ChannelCard.component';
import LoadingSpinner from '../LoaderSpinner/LoaderSpinner.component';

import { Waypoint } from 'react-waypoint';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Videos = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const videosFetched = useAppSelector(videos);
  const currentPageNumber = useAppSelector(pageNumber);
  const pageToken = useAppSelector(nextPageToken);
  const isVideosFetched = useAppSelector(videosState);
  const noOfVideosPerPage = useAppSelector(resultsPerPage);

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

  const handleLoadMore = (): void => {
    const numberOfVideos = noOfVideosPerPage * currentPageNumber;
    //@ts-ignore
    if (videosFetched.pageInfo.totalResults % numberOfVideos === 0) {
      dispatch(fetchMoreVideos(pageToken));
    }
    console.log('should load more dude: ', videosFetched);
  };
  return (
    <div>
      {isVideosFetched === 'loading' && <LoadingSpinner />}
      <div>
        {isVideosFetched === 'successed' &&
          //@ts-ignore
          videosFetched.items.map((v: VideoDataType, index: number) => {
            return (
              <div key={v.id.videoId}>
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
      {isVideosFetched === 'successed' && (
        <Waypoint onEnter={handleLoadMore} topOffset='-20%'>
          <div>
            <FontAwesomeIcon
              icon={faSpinner}
              spin={true}
              color='#606060'
              size='3x'
            />
          </div>
        </Waypoint>
      )}
    </div>
  );
};

export default Videos;
