import React, { useEffect } from 'react';
import YoutubeVideo from '../../assets/images/Logo_of_YouTube.svg.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './MainNav.styles.css';

const NavBarComponent = (): React.ReactElement => {
  return (
    <div className='mainNav_wrapper'>
      <div className='navbar_imageContainer'>
        <img src={YoutubeVideo} alt='youtube logo' />
      </div>
      <div>
        <input type='text' placeholder='Search..' name='search' />
        <button type='submit'>
          <div>
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default NavBarComponent;
