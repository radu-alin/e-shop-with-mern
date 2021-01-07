import UserOrders from '../../Order/UserOrders/UserOrders';

import './UserOrderList.scss';

const UserOrderList = () => (
  <section id="User Orders">
    <div className="user-order-list">
      <h1>
        <strong>Orders</strong>
      </h1>
      <hr></hr>
      <UserOrders />
      <hr></hr>
    </div>
  </section>
);
export default UserOrderList;
