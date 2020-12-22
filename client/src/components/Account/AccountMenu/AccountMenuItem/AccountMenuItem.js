import { NavLink } from 'react-router-dom';

import './AccountMenuItem.scss';

const AccountMenuItem = ({ link, children }) => (
  <>
    <li className="account-menu-item">
      <NavLink to={link}>{children}</NavLink>
    </li>
    <hr></hr>
  </>
);

export default AccountMenuItem;
