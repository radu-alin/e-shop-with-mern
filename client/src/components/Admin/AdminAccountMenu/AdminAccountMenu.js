import AccountMenu from '../../Account/AccountMenu/AccountMenu';
import AccountMenuItem from '../../Account/AccountMenu/AccountMenuItem/AccountMenuItem';
import { useRouteMatch } from 'react-router-dom';

const AdminAccountMenu = () => {
  let { url } = useRouteMatch();
  return (
    <section id='AdminAccountMenu'>
      <AccountMenu title='Admin Account'>
        <AccountMenuItem link={`${url}/profile`}>My profile</AccountMenuItem>
        <AccountMenuItem link={`${url}/user-list`}>User list</AccountMenuItem>
        <AccountMenuItem link={`${url}/product-list`}>Product list</AccountMenuItem>
      </AccountMenu>
    </section>
  );
};
export default AdminAccountMenu;
