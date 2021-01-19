import { Route, Switch, useRouteMatch } from 'react-router-dom';

import AdminAccountLayout from '../../components/Admin/AdminAccountLayout/AdminAccountLayout';
import UserProfile from '../../components/User/UserProfile/UserProfile.js';
import AdminUserList from '../../components/Admin/AdminUserList/AdminUserList';

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
        </Switch>
      </AdminAccountLayout>
    </main>
  );
};

export default AdminAccountPage;
