import { useCallback, useState } from 'react';
import { connect } from 'react-redux';

import NavDropdownHeader from './NavDropdownHeader/NavDropdownHeader.js';
import NavigationItem from '../NavigationItems/NavigationItem/Navigationitem';

import './NavDropdown.scss';

const NavDropdown = ({ userIsAdmin }) => {
  const [isShowDropdown, setIsShowDropdown] = useState(false);

  const dropdownIsShowHandler = useCallback(() => {
    setIsShowDropdown(true);
  }, [setIsShowDropdown]);

  const dropdownIsHideHandler = useCallback(() => {
    setIsShowDropdown(false);
  }, [setIsShowDropdown]);

  const userAuthMenu = (
    <>
      <NavigationItem link='/account/profile'>Profile</NavigationItem>
      <NavigationItem link='/account/orders'>Orders</NavigationItem>
      <NavigationItem link='/account/addresses'>Addresses</NavigationItem>
    </>
  );

  const userIsAdminAuthMenu = (
    <>
      <NavigationItem link='/dashboard/profile'>Profile</NavigationItem>
      <NavigationItem link='/dashboard/users-list'>Users List</NavigationItem>
      <NavigationItem link='/dashboard/products-list'>Products List</NavigationItem>
    </>
  );

  const dropdownItems = isShowDropdown && (
    <>
      {userIsAdmin ? userIsAdminAuthMenu : userAuthMenu}
      <NavigationItem link='/logout'>Logout</NavigationItem>
    </>
  );

  return (
    <nav>
      <ul
        id='NavDropdown'
        className='nav-dropdown show-effect'
        onMouseEnter={dropdownIsShowHandler}
        onMouseLeave={dropdownIsHideHandler}>
        <NavDropdownHeader isActive={isShowDropdown}>
          {userIsAdmin ? 'AdminAccount' : 'My account'}
        </NavDropdownHeader>
        {dropdownItems}
      </ul>
    </nav>
  );
};

const mapStateToProps = ({ user }) => ({
  userIsAdmin: user?.userIsAdmin,
});

export default connect(mapStateToProps)(NavDropdown);
