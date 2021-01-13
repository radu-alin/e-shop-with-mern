import { Route, Switch, useRouteMatch } from 'react-router-dom';

import UserAccountLayout from '../../components/User/UserAccountLayout/UserAccountLayout';
import UserProfile from '../../components/User/UserProfile/UserProfile';
import UserOrders from '../../components/User/UserOrders/UserOrders';

export const UserAccountPage = () => {
  let { path } = useRouteMatch();

  return (
    <main id="UserAccountPage">
      <UserAccountLayout>
        <Switch>
          <Route exact path={`${path}`}>
            <UserProfile />
          </Route>
          <Route path={`${path}/orders`}>
            <UserOrders />
          </Route>
        </Switch>
      </UserAccountLayout>
    </main>
  );
};

export default UserAccountPage;
