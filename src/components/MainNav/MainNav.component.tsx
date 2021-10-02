import React from 'react';
import YoutubeVideo from '../../assets/images/Logo_of_YouTube.svg.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useHistory, withRouter } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  searchValue,
  handleSearchChange,
} from '../../features/search/searchSlice';
import { fetchVideos } from '../../features/searchVideos/searchVideosSlice';
import './MainNav.styles.css';

const NavBarComponent = (): React.ReactElement => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const inputValue = useAppSelector(searchValue);
  const handleRedirectUser = (): void => {
    history.push('/');
  };

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch(handleSearchChange((e.target as HTMLInputElement).value));
    if ((e.target as HTMLInputElement).value.length === 0) {
      dispatch(fetchVideos());
    }
    history.push('/');
  };

  const handleButtonClick = (): void => {
    if (inputValue.length > 0) {
      dispatch(fetchVideos(inputValue));
    }
  };
  return (
    <div className='fix_margins mainNav_wrapper '>
      <div className='navbar_imageContainer' onClick={handleRedirectUser}>
        <img src={YoutubeVideo} alt='youtube logo' />
      </div>
      <div className='search-bar__wrapper'>
        <input
          type='text'
          placeholder='Search..'
          name='search'
          onChange={handleInputChange}
          value={inputValue}
        />
        <button type='submit' onClick={handleButtonClick}>
          <div>
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default withRouter(NavBarComponent);
