import { memo } from 'react';

import { NavLink } from 'react-router-dom';

import { ReactComponent as HomeIcon } from '../../assets/svg/home-icon.svg';

import './Logo.scss';

const Logo = () => {
  return (
    <div id='Logo' className='logo'>
      <NavLink to='/'>
        <div className='logo-text'>e-shop</div>
        <div className='logo-icon'>
          <HomeIcon />
        </div>
      </NavLink>
    </div>
  );
};

export default memo(Logo);
