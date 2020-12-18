import './NavDropdowHeader.scss';

const NavDropdownHeader = ({ children, showDropdown, hideDropDown }) => (
  <>
    <li
      className="nav-dropdown-header "
      onMouseEnter={showDropdown}
      onMouseLeave={hideDropDown}
    >
      <i className="fas fa-user"></i>
      {console.log(' NavDropdownHeader - render()')}
      {children}
    </li>
  </>
);

export default NavDropdownHeader;
