import { Route, useLocation, useRouteMatch } from 'react-router-dom';

import OrdersList from '../../Order/OrdersList/OrdersList';
import OrderDetails from '../../Order/OrderDetails/OrderDetails';

import './UserOrders.scss';

const UserOrders = () => {
  let location = useLocation();
  let { path, isExact } = useRouteMatch();

  const orderId = location.pathname.split('/')[3];
  return (
    <section id="UserOrders">
      <div className="user-orders">
        <h1>
          <strong>{isExact ? 'Orders' : `Order no. ${orderId}`}</strong>
        </h1>
        <hr></hr>
        {isExact ? (
          <Route path={`${path}`}>
            <OrdersList />
          </Route>
        ) : (
          <Route path={`${path}/:id`}>
            <OrderDetails />
          </Route>
        )}

        <hr></hr>
      </div>
    </section>
  );
};
export default UserOrders;
