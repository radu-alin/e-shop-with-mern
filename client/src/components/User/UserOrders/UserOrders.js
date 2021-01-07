import { Route } from 'react-router-dom';

import OrdersList from '../../Order/OrdersList/OrdersList';
import OrderDetails from '../../Order/OrderDetails/OrderDetails';

import './UserOrders.scss';

const UserOrders = ({ location, match }) => {
  const orderId = location.pathname.split('/')[3];
  return (
    <section id="UserOrders">
      <div className="user-orders">
        <h1>
          <strong>{match.isExact ? 'Orders' : `Order no. ${orderId}`}</strong>
        </h1>
        <hr></hr>
        {match.isExact ? (
          <Route path="/account/orders/" component={OrdersList} />
        ) : (
          <Route path="/account/orders/:id" component={OrderDetails} />
        )}

        <hr></hr>
      </div>
    </section>
  );
};
export default UserOrders;
