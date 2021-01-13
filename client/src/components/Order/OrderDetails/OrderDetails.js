import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { orderDetailsFetch } from '../../../redux/actions/index';

import OrdersdDetailsView from './OrderDetailsView/OrderDetailsView';

import Spinner from '../../UI/Spinner/Spinner';
import Message from '../../UI/Message/Message';

const OrderDetails = ({ userToken, orderDetails, isError, onOrderDetailsFetch }) => {
  let { id: orderSelectedId } = useParams();

  const orderDetailsIsNew = orderSelectedId !== orderDetails?._id;

  useEffect(
    () =>
      orderDetailsIsNew &&
      userToken &&
      onOrderDetailsFetch(userToken, orderSelectedId),
    [userToken, orderDetailsIsNew, orderSelectedId, onOrderDetailsFetch]
  );

  const orderDetailsView = () => {
    if (isError) {
      return <Message type={isError && 'danger'} message={isError} />;
    }
    if (orderDetailsIsNew) {
      return <Spinner />;
    }
    return (
      <OrdersdDetailsView
        orderDetails={orderDetails}
        orderItems={orderDetails.orderItems}
        isPaid={orderDetails.isPaid}
      />
    );
  };

  return <section id="UserOrderDetails">{orderDetailsView()}</section>;
};

const mapStateToProps = ({
  user: { userToken },
  orderDetails: { orderDetails, isError },
}) => ({ userToken, orderDetails, isError });

const mapDispatchToProps = (dispatch) => ({
  onOrderDetailsFetch: (userToken, orderId) =>
    dispatch(orderDetailsFetch(userToken, orderId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails);
