import { NavLink } from 'react-router-dom';

import './NavigationItem.scss';

const NavigationItem = ({ children, link, active, showDropdown, hideDropDown }) => {
  const classes = `${active ? 'active' : ''}`;

  return (
    <li className="navigation-item">
      <NavLink
        to={link}
        exact
        className={classes}
        onMouseEnter={showDropdown}
        onMouseLeave={hideDropDown}
      >
        {children}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
