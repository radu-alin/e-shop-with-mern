import AccountMenu from '../../Account/AccountMenu/AccountMenu';
import AccountMenuItem from '../../Account/AccountMenu/AccountMenuItem/AccountMenuItem';
import { useRouteMatch } from 'react-router-dom';

const UserAccountMenu = () => {
  let { url } = useRouteMatch();
  return (
    <section id="UserAccountMenu">
      <AccountMenu title="My account">
        <AccountMenuItem link={`${url}/profile`}>My profile</AccountMenuItem>
        <AccountMenuItem link={`${url}/orders`}>My orders</AccountMenuItem>
        <AccountMenuItem link={`${url}/addresses`}>My addresses</AccountMenuItem>
      </AccountMenu>
    </section>
  );
};

export default UserAccountMenu;
