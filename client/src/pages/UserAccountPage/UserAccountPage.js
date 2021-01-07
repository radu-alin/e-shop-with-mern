import { Route } from 'react-router-dom';

import UserAccountLayout from '../../components/User/UserAccountLayout/UserAccountLayout';
import UserProfile from '../../components/User/UserProfile/UserProfile';
import UserOrderList from '../../components/User/UserOrderList/UserOrderList';
import UserOrderDetails from '../../components/Order/OrderDetails/OrderDetails';

export const UserAccountPage = () => {
  return (
    <main id="UserAccountPage">
      <UserAccountLayout>
        <Route path="/account" exact component={UserProfile} />
        <Route path="/account/orders" exact component={UserOrderList} />
        <Route path="/account/orders/:id" component={UserOrderDetails} />
      </UserAccountLayout>
    </main>
  );
};

export default UserAccountPage;
