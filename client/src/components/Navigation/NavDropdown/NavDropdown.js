import { useCallback, useState } from 'react';

import NavDropdownHeader from './NavDropdownHeader/NavDropdownHeader.js';
import NavigationItem from '../NavigationItems/NavigationItem/Navigationitem';

import './NavDropdown.scss';

const NavDropdown = ({ name }) => {
  console.log('NavDropdown - render()');
  const [isShowDropdown, setIsShowDropdown] = useState(false);

  const showDropdownHandler = useCallback(() => {
    setIsShowDropdown(true);
  }, [setIsShowDropdown]);

  const hideDropDownHandler = useCallback(() => {
    setIsShowDropdown(false);
  }, [setIsShowDropdown]);

  const dropdownItems = isShowDropdown && (
    <>
      <NavigationItem
        link="/profile"
        showDropdown={showDropdownHandler}
        hideDropDown={hideDropDownHandler}
      >
        Profile
      </NavigationItem>
      <NavigationItem
        link="/logout"
        showDropdown={showDropdownHandler}
        hideDropDown={hideDropDownHandler}
      >
        Logout
      </NavigationItem>
    </>
  );

  return (
    <nav>
      <ul id="NavDropdown" className="nav-dropdown show-effect">
        <NavDropdownHeader
          showDropdown={showDropdownHandler}
          hideDropDown={hideDropDownHandler}
        >
          {name}
        </NavDropdownHeader>
        {dropdownItems}
      </ul>
    </nav>
  );
};
export default NavDropdown;
