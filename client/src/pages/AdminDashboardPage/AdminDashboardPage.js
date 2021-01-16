import { Route, Switch, useRouteMatch } from 'react-router-dom';

import AdminDashboardLayout from '../../components/Admin/AdminDashboardLayout/AdminDashboardLayout';
import UserProfile from '../../components/User/UserProfile/UserProfile.js';
import AdminUsersList from '../../components/Admin/AdminUsersList/AdminUsersList';

const AdminDashboardPage = () => {
  let { path } = useRouteMatch();
  return (
    <main id="AdminDashboardPage">
      <AdminDashboardLayout>
        <Switch>
          <Route path={`${path}/profile`}>
            <UserProfile />
          </Route>
          <Route path={`${path}/users-list`}>
            <AdminUsersList />
          </Route>
        </Switch>
      </AdminDashboardLayout>
    </main>
  );
};

export default AdminDashboardPage;
