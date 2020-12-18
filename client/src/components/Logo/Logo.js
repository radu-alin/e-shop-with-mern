import { memo } from 'react';

import { NavLink } from 'react-router-dom';

import './Logo.scss';

const Logo = () => (
  <div id="Logo" className="logo">
    <NavLink to="/">e-shop</NavLink>
  </div>
);

export default memo(Logo);
