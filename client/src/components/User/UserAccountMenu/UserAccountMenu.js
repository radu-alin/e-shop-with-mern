import AccountMenu from '../../Account/AccountMenu/AccountMenu';
import AccountMenuItem from '../../Account/AccountMenu/AccountMenuItem/AccountMenuItem';

const UserAccountMenu = () => (
  <AccountMenu title="My account">
    <AccountMenuItem link="/account">My profile</AccountMenuItem>
    <AccountMenuItem link="/account/orders">My orders</AccountMenuItem>
    <AccountMenuItem link="/account/addresses">My addresses</AccountMenuItem>
  </AccountMenu>
);

export default UserAccountMenu;
