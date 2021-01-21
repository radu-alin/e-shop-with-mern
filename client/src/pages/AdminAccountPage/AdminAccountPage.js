import { Route, Switch, useRouteMatch } from 'react-router-dom';

import AdminAccountLayout from '../../components/Admin/AdminAccountLayout/AdminAccountLayout';
import UserProfile from '../../components/User/UserProfile/UserProfile.js';
import AdminUserList from '../../components/Admin/AdminUserList/AdminUserList';
import AdminProductList from '../../components/Admin/AdminProductList/AdminProductList';
import AdminProductCreate from '../../components/Admin/AdminProductCreate/AdminProductCreate';

const AdminAccountPage = () => {
  let { path } = useRouteMatch();
  return (
    <main id='AdminAccountPage'>
      <AdminAccountLayout>
        <Switch>
          <Route path={`${path}/profile`}>
            <UserProfile />
          </Route>
          <Route path={`${path}/user-list`}>
            <AdminUserList />
          </Route>
          <Route path={`${path}/product-list`}>
            <AdminProductList />
          </Route>
          <Route path={`${path}/product-create`}>
            <AdminProductCreate />
          </Route>
        </Switch>
      </AdminAccountLayout>
    </main>
  );
};

export default AdminAccountPage;
