import { Route } from 'react-router-dom';

import UserAccountLayout from '../../components/User/UserAccountLayout/UserAccountLayout';
import UserProfile from '../../components/User/UserProfile/UserProfile';
import UserOrders from '../../components/User/UserOrders/UserOrders';

export const UserAccountPage = () => {
  return (
    <main id="UserAccountPage">
      <UserAccountLayout>
        <Route path="/account" exact component={UserProfile} />
        <Route path="/account/orders" component={UserOrders} />
      </UserAccountLayout>
    </main>
  );
};

export default UserAccountPage;
