import React from 'react';
import { VideoDataType } from '../Shared/VideoDataType/VideoDataType';
import { Options } from 'react-youtube';
import moment from 'moment';

import { useHistory, withRouter, RouteComponentProps } from 'react-router-dom';

import './VideoCard.styles.css';

interface ChildComponentProps extends RouteComponentProps<any> {
  /* other props for ChildComponent */

  video: VideoDataType;
  opts: Options;
  mobileOpts: Options;
}
const VideoCard = ({
  video,
  opts,
  mobileOpts,
}: ChildComponentProps): React.ReactElement => {
  const history = useHistory();
  const handleVideoSelect = (): void => {
    history.push(`/video/${video.id.videoId}`, {
      video,
      opts,
      mobileOpts,
    });
  };
  return (
    <div
      className='videoCArd__wrapper fix_margins'
      onClick={() => handleVideoSelect()}
    >
      <img src={video.snippet.thumbnails.medium.url} alt='avatar' />
      <div className='mobile__image-wrapper'>
        <img src={video.snippet.thumbnails.default.url} alt='avatar' />
      </div>
      <div className='videoCard__info'>
        <div className='videoCard__text'>
          <h4 className='videoCard__title'> {video.snippet.title}</h4>
          <div className='videoCard__headline'>
            <p> {video.snippet.channelTitle} &#9679; </p>
            <p> {moment(video.snippet.publishedAt).fromNow()} </p>
          </div>
          <div className='videoCard__description'>
            {video.snippet.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(VideoCard);
