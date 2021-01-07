import { NavLink } from 'react-router-dom';

import './AccountMenuItem.scss';

const AccountMenuItem = ({ link, children }) => (
  <>
    <li className="account-menu-item">
      <NavLink to={link}>
        <h2>{children}</h2>
      </NavLink>
    </li>
    <hr></hr>
  </>
);

export default AccountMenuItem;
