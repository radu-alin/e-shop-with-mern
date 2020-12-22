import './NavDropdowHeader.scss';

const NavDropdownHeader = ({ children, isActive }) => {
  const classes = `nav-dropdown-header ${isActive ? 'active' : ''}`;

  return (
    <>
      <li className={classes}>
        {children}
        <i className="fas fa-chevron-down"></i>
      </li>
    </>
  );
};

export default NavDropdownHeader;
