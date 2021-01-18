import { Route, Switch, useRouteMatch } from 'react-router-dom';

import AdminAccountLayout from '../../components/Admin/AdminAccountLayout/AdminAccountLayout';
import UserProfile from '../../components/User/UserProfile/UserProfile.js';
import AdminUsersList from '../../components/Admin/AdminUsersList/AdminUsersList';

const AdminAccountPage = () => {
  let { path } = useRouteMatch();
  return (
    <main id='AdminAccountPage'>
      <AdminAccountLayout>
        <Switch>
          <Route path={`${path}/profile`}>
            <UserProfile />
          </Route>
          <Route path={`${path}/users-list`}>
            <AdminUsersList />
          </Route>
        </Switch>
      </AdminAccountLayout>
    </main>
  );
};

export default AdminAccountPage;
