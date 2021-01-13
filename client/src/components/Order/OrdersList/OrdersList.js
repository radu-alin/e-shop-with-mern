import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { ordersListFetch } from '../../../redux/actions/index';

import Spinner from '../../UI/Spinner/Spinner';
import Message from '../../UI/Message/Message';

import OrderOverview from '../OrderOverview/OrderOverview';

const OrdersList = ({ userToken, ordersList, isError, onOrdersListFetch }) => {
  let history = useHistory();

  useEffect(() => userToken && !ordersList && onOrdersListFetch(userToken), [
    userToken,
    onOrdersListFetch,
    ordersList,
  ]);

  const orderDetailsClickHandler = (id) => history.push(`/account/orders/${id}`);
  const orderPayOrderHandler = (id) => history.push(`/checkout/pay-order/${id}`);

  const ordersListRender = () =>
    ordersList.map((userOrder) => (
      <OrderOverview
        key={userOrder._id}
        userOrder={userOrder}
        orderDetailsClickHandler={
          userOrder.paymentMethod === 'PayPal' && !userOrder.isPaid
            ? orderPayOrderHandler
            : orderDetailsClickHandler
        }
      />
    ));

  const ordersListView = () => {
    if (isError) {
      return <Message type={isError && 'danger'} message={isError} />;
    }
    if (ordersList?.length === 0) {
      return (
        <h2 className="py-1">
          <strong>You don't have any orders.</strong>
        </h2>
      );
    }
    if (!ordersList) {
      return <Spinner />;
    }
    return ordersListRender();
  };

  return <div>{ordersListView()}</div>;
};

const mapStateToProps = ({
  ordersList: { ordersList, isError },
  user: { userToken },
}) => ({
  userToken,
  ordersList,
  isError,
});

const mapDispatchToProps = (dispatch) => ({
  onOrdersListFetch: (userToken) => dispatch(ordersListFetch(userToken)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrdersList);
