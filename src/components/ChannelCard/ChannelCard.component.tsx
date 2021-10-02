import React from 'react';

import './ChannelCard.styles.css';

interface channelCardProps {
  imageUrl: string;
  title: string;
  subscriptionCount?: number;
  discription?: string;
  showDiscription?: boolean;
  align?: string;
}

const ChannelCard = ({
  imageUrl,
  title,
  subscriptionCount,
  discription,
  showDiscription = false,
  align = 'right',
}: channelCardProps): React.ReactElement => {
  return (
    <div>
      <div className={align === 'left' ? 'alignLeft' : 'channel__image'}>
        <img //@ts-ignore
          src={imageUrl}
          alt='channel-brand'
        />
        <div
          className={align === 'left' ? 'left-align' : 'channel-info__wrapper'}
        >
          <h4>
            {' '}
            {
              //@ts-ignore
              title
            }{' '}
          </h4>
          <h6 className='channel-info__subscribe-counter'>
            {subscriptionCount && subscriptionCount > 0 && subscriptionCount}{' '}
            Subscriber
          </h6>
        </div>
      </div>
      {showDiscription && (
        <div className='channel-description__wrapper'>
          <p className='channel-description'>
            {' '}
            {
              //@ts-ignore
              discription
            }{' '}
          </p>
        </div>
      )}
    </div>
  );
};

export default ChannelCard;
