import { useEffect } from 'react';
import { connect } from 'react-redux';

import { orderListUserFetch } from '../../../redux/actions/index';

import Spinner from '../../UI/Spinner/Spinner';
import Message from '../../UI/Message/Message';

import OrderOverview from '../OrderOverview/OrderOverview';

const OrdersList = ({
  userToken,
  userOrders,
  isError,
  onOrderListUserFetch,
  history,
}) => {
  useEffect(() => userToken && !userOrders && onOrderListUserFetch(userToken), [
    userToken,
    onOrderListUserFetch,
    userOrders,
  ]);

  const orderDetailsClickHandler = (id) => history.push(`/account/orders/${id}`);

  const ordersListRender = () =>
    userOrders.map((userOrder) => (
      <OrderOverview
        key={userOrder._id}
        userOrder={userOrder}
        orderDetailsClickHandler={orderDetailsClickHandler}
      />
    ));

  const ordersListView = () => {
    if (isError) {
      return <Message type={isError && 'danger'} message={isError} />;
    }
    if (userOrders?.length === 0) {
      return (
        <h2 className="py-1">
          <strong>You don't have any orders.</strong>
        </h2>
      );
    }
    if (!userOrders) {
      return <Spinner />;
    }
    return ordersListRender();
  };

  return <div>{ordersListView()}</div>;
};

const mapStateToProps = (state) => ({
  userToken: state.user.userToken,
  userOrders: state.orderListUser?.userOrders,
  isError: state.orderListUser.isError,
});

const mapDispatchToProps = (dispatch) => ({
  onOrderListUserFetch: (userToken) => dispatch(orderListUserFetch(userToken)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrdersList);
