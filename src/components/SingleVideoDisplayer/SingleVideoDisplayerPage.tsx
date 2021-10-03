import React, { useEffect } from 'react';
import YouTube, { Options } from 'react-youtube';
import { withRouter, useLocation } from 'react-router-dom';
import moment from 'moment';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

import { VideoDataType } from '../Shared/VideoDataType/VideoDataType';
import {
  fetchChannel,
  channel,
  channelState,
} from '../../features/channel/channelretrieverSlise';

import ChannelCard from '../ChannelCard/ChannelCard.component';
import LoadingSpinner from '../LoaderSpinner/LoaderSpinner.component';

import './SingleVideoDisplayer.styles.css';

type RouteState = {
  video: VideoDataType;
  opts: Options;
};

const SingleVideoDisplayerPage = (): React.ReactElement => {
  const { state } = useLocation<RouteState>();

  const dispatch = useAppDispatch();
  const channelFetched = useAppSelector(channel);
  const isChaneelFetched = useAppSelector(channelState);

  useEffect(() => {
    dispatch(fetchChannel(state.video.snippet.channelId));
  }, [dispatch, state.video.snippet.channelId]);

  if (!state) return <h6>Not Found </h6>;
  return (
    <div className='videoDisplayer__container'>
      <div className='videoDisplayer__card'>
        <YouTube
          videoId={state.video.id.videoId}
          id={state.video.id.videoId}
          opts={state.opts}
        />

        <div className='videoDisplayer__info'>
          <h4>{state.video.snippet.title}</h4>
          <div>
            <p>{state.video.snippet.channelTitle}</p>
            <p> {moment(state.video.snippet.publishedAt).fromNow()} </p>
          </div>
        </div>
      </div>
      <div>
        {isChaneelFetched === 'loading' ? (
          <LoadingSpinner />
        ) : (
          isChaneelFetched === 'successed' && (
            <ChannelCard
              imageUrl={
                //@ts-ignore
                channelFetched.items[0].snippet.thumbnails.default.url
              }
              title={
                //@ts-ignore
                channelFetched.items[0].snippet.title
              }
              subscriptionCount={
                //@ts-ignore
                channelFetched.items[0].statistics.subscriberCount
              }
              discription={
                //@ts-ignore
                channelFetched.items[0].snippet.description
              }
              showDiscription={true}
            />
          )
        )}
      </div>
    </div>
  );
};

export default withRouter(SingleVideoDisplayerPage);
