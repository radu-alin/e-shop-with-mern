import './NavDropdowHeader.scss';

const NavDropdownHeader = ({ children, isActive }) => {
  const classes = `nav-dropdown-header ${isActive ? 'active' : ''}`;

  return (
    <>
      <li className={classes}>
        <i className="fas fa-user"></i>
        {children}
      </li>
    </>
  );
};

export default NavDropdownHeader;
