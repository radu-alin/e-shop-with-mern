import { ReactComponent as ArrowDownIcon } from '../../../../assets/svg/arrow-down-icon.svg';

import './NavDropdowHeader.scss';

const NavDropdownHeader = ({ children, isActive }) => {
  const classes = `nav-dropdown-header ${isActive ? 'active' : ''}`;

  return (
    <>
      <li className={classes}>
        {children}
        <ArrowDownIcon />
      </li>
    </>
  );
};

export default NavDropdownHeader;
