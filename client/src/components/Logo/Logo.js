import { NavLink } from 'react-router-dom';

import './Logo.scss';

const Logo = () => {
  return (
    <div id="Logo" className="logo">
      <NavLink to="/">e-store</NavLink>
    </div>
  );
};

export default Logo;
