import React from 'react';
import './MainHOC.styles.css';

type ExtraInfoType = {
  extraInfo: string;
};

const MainHOCWrapper =
  <P extends object>(
    WrappedComponent: React.ComponentType<P & ExtraInfoType>
  ) =>
  () => {
    const MainHOCComponent = (props: P) => {
      return (
        <div className='main_wrapper'>
          <WrappedComponent {...props} extraInfo={'dksgjkds'} />
        </div>
      );
    };
    return MainHOCComponent;
  };

export default MainHOCWrapper;
