import { useEffect } from 'react';
import { connect } from 'react-redux';

import { orderDetailsFetch } from '../../../redux/actions/index';

import OrdersdDetailsView from './OrderDetailsView/OrderDetailsView';

import Spinner from '../../UI/Spinner/Spinner';
import Message from '../../UI/Message/Message';

import './OrderDetails.scss';

const OrderDetails = ({
  userToken,
  orderDetails,
  isError,
  onOrderDetailsFetch,
  match,
}) => {
  const orderSelectedId = match.params.id;
  console.log('orderSelectedId - ', orderSelectedId);

  const orderDetailsIsNew = orderDetails
    ? orderSelectedId !== orderDetails._id
      ? false
      : orderDetails
    : false;
  console.log('orderDetailsIsNew - ', orderDetailsIsNew);

  useEffect(
    () =>
      userToken &&
      orderSelectedId !== orderDetails?._id &&
      onOrderDetailsFetch(userToken, orderSelectedId),
    [userToken, orderSelectedId, orderDetails, onOrderDetailsFetch]
  );

  const orderDetailsView = () => {
    if (isError) {
      return <Message type={isError && 'danger'} message={isError} />;
    }
    if (!orderDetailsIsNew) {
      return <Spinner />;
    }
    return <OrdersdDetailsView orderDetails={orderDetails} />;
  };

  return (
    <section id="UserOrderDetails">
      <div className="user-order-details">
        <h1>
          <strong>Order no </strong>
          {orderSelectedId}
        </h1>
        <hr></hr>
        {orderDetailsView()}
        <hr></hr>
      </div>
    </section>
  );
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
