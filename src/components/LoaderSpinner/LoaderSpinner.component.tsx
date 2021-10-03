import React from 'react';

import './LoadingSpinner.styles.css';

const LoadingSpinner = (): React.ReactElement => {
  return (
    <div className='ytp-spinner_wrapper' data-layer='4'>
      <div className='lds-roller'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h5> Loading... </h5>
    </div>
  );
};

export default LoadingSpinner;
