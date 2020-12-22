import AccountMenu from '../../Account/AccountMenu/AccountMenu';
import AccountMenuItem from '../../Account/AccountMenu/AccountMenuItem/AccountMenuItem';

const UserAccountMenu = () => (
  <AccountMenu title="My account">
    <AccountMenuItem link="/account">My profile</AccountMenuItem>
    <AccountMenuItem link="/account/orders">My orders</AccountMenuItem>
  </AccountMenu>
);

export default UserAccountMenu;