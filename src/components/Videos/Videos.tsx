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
import { faSpinner, faFilter } from '@fortawesome/free-solid-svg-icons';

import './Videos.styles.css';

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
      autoplay: 1,
    },
    width: '60%',

    host: 'https://www.youtube.com',
  };

  const mobileOpts: Options = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
    width: '90%',

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
  };

  return (
    <div>
      {isVideosFetched === 'loading' && <LoadingSpinner />}
      <div>
        <div className='headbarWrapper'>
          <div className='total-results__wrapper'>
            <h5>
              {' '}
              About{' '}
              {
                //@ts-ignore
                videosFetched.pageInfo.totalResults
              }{' '}
              filtered result{' '}
            </h5>
          </div>
          <div className='filter__wrapper'>
            <h5> FILTER </h5>
            <FontAwesomeIcon icon={faFilter} color='#606060' size='1x' />
          </div>
        </div>
        <div>
          <hr style={{ color: '#606060', margin: '0 2rem' }} />
        </div>
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
                  <VideoCard
                    video={v}
                    opts={opts}
                    mobileOpts={mobileOpts}
                    key={v.id.videoId}
                  />
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
