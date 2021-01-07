import { useEffect } from 'react';
import { connect } from 'react-redux';

import { orderListUserFetch } from '../../../redux/actions/index';

import Spinner from '../../UI/Spinner/Spinner';
import Message from '../../UI/Message/Message';

import UserOrder from './UserOrder/UserOrder';

const UserOrders = ({ userToken, userOrders, isError, onOrderListUserFetch }) => {
  useEffect(() => userToken && !userOrders && onOrderListUserFetch(userToken), [
    userToken,
    onOrderListUserFetch,
    userOrders,
  ]);

  const userOrdersRender = () =>
    userOrders.map((userOrder) => (
      <UserOrder key={userOrder._id} userOrder={userOrder} />
    ));

  const userOrdersView = () => {
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
    return userOrdersRender();
  };

  return <div className="user-orders">{userOrdersView()}</div>;
};

const mapStateToProps = (state) => ({
  userToken: state.user.userToken,
  userOrders: state.orderListUser?.userOrders,
  isError: state.orderListUser.isError,
});

const mapDispatchToProps = (dispatch) => ({
  onOrderListUserFetch: (userToken) => dispatch(orderListUserFetch(userToken)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserOrders);
