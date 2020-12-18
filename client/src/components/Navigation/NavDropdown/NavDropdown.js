import { useCallback, useState } from 'react';

import NavDropdownHeader from './NavDropdownHeader/NavDropdownHeader.js';
import NavigationItem from '../NavigationItems/NavigationItem/Navigationitem';

import './NavDropdown.scss';

const NavDropdown = ({ name }) => {
  const [isShowDropdown, setIsShowDropdown] = useState(false);

  const dropdownIsShowHandler = useCallback(() => {
    setIsShowDropdown(true);
  }, [setIsShowDropdown]);

  const dropdownIsHideHandler = useCallback(() => {
    setIsShowDropdown(false);
  }, [setIsShowDropdown]);

  const dropdownItems = isShowDropdown && (
    <>
      <NavigationItem link="/profile">Profile</NavigationItem>
      <NavigationItem link="/logout">Logout</NavigationItem>
    </>
  );

  return (
    <nav>
      <ul
        id="NavDropdown"
        className="nav-dropdown show-effect"
        onMouseEnter={dropdownIsShowHandler}
        onMouseLeave={dropdownIsHideHandler}
      >
        <NavDropdownHeader isActive={isShowDropdown}>{name}</NavDropdownHeader>
        {dropdownItems}
      </ul>
    </nav>
  );
};
export default NavDropdown;
