import { Route, Switch, useRouteMatch } from 'react-router-dom';

import AdminDashboardLayout from '../../components/AdminDasboard/AdminDashboardLayout/AdminDashboardLayout';
import UserProfile from '../../components/User/UserProfile/UserProfile.js';
import UsersList from '../../components/AdminDasboard/UsersList/UsersList';

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
            <UsersList />
          </Route>
        </Switch>
      </AdminDashboardLayout>
    </main>
  );
};

export default AdminDashboardPage;
