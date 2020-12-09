import { NavLink } from 'react-router-dom';

import './Logo.scss';

const Logo = () => {
  return (
    <div id="Logo" className="logo">
      <NavLink to="/">e-shop</NavLink>
    </div>
  );
};

export default Logo;
