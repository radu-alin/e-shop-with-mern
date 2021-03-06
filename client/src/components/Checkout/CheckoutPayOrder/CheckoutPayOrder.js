import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { axiosInstance } from '../../../axios';

import { sumRoundValueUtil } from '../../../utils/sumUtil';

import {
  orderDetailsFetch,
  orderCreateReset,
  orderPayReset,
  ordersListClear,
  orderDetailsClear,
  cartReset,
} from '../../../redux/actions/index.js';

import OrderDetailsView from '../../Order/OrderDetails/OrderDetailsView/OrderDetailsView';
import PayPalButton from '../../UI/PayPalButton/PayPalButton';
import Message from '../../UI/Message/Message';
import Spinner from '../../UI/Spinner/Spinner';

const CheckoutPayOrder = ({
  userToken,
  orderDetails,
  orderId,
  orderValue,
  paymentMethod,
  isPaid,
  isErrorOrderFetch,
  isLoadingOrderPay,
  isSuccessOrderPay,
  onOrderDetailsFetch,
  onOrderCreateReset,
  onOrderDetailsClear,
  onOrderPayReset,
  onOrdersListClear,
  onCartReset,
}) => {
  const [sdkReady, setSdkReady] = useState(false);

  let { id: orderSelectedId } = useParams();
  const totalPriceRounded = sumRoundValueUtil(orderValue);

  useEffect(
    () =>
      orderSelectedId &&
      userToken &&
      onOrderDetailsFetch(userToken, orderSelectedId),
    [userToken, orderSelectedId, onOrderDetailsFetch]
  );

  useEffect(() => {
    const addPayPalScript = async () => {
      const { data: CLIENT_ID } = await axiosInstance.get('/api/config/paypal');
      const PAYPAL_SCRIPT = `https://www.paypal.com/sdk/js?client-id=${CLIENT_ID}`;
      const script = document.createElement('script');
      script.setAttribute('type', 'text/javascript');
      script.setAttribute('src', PAYPAL_SCRIPT);
      script.setAttribute('async', 'async');
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };
    if (paymentMethod === 'PayPal' && !isPaid && !window.paypal) {
      return addPayPalScript();
    }
    if (window.paypal) {
      setSdkReady(true);
    }
  }, [paymentMethod, isPaid, sdkReady]);

  useEffect(() => {
    return () => {
      onOrdersListClear();
      onOrderDetailsClear();
      onOrderPayReset();
      onOrderCreateReset();
      onCartReset();
    };
  }, [
    onOrderCreateReset,
    onOrderPayReset,
    onCartReset,
    onOrdersListClear,
    onOrderDetailsClear,
  ]);

  const isLoadingSummary =
    isLoadingOrderPay ||
    (orderDetails && !window.paypal && paymentMethod === 'PayPal' && !isPaid);

  const buttonPayOrderView = () => {
    if (paymentMethod === 'CashOnDelivery') {
      return null;
    }
    if (isSuccessOrderPay) {
      return null;
    }
    if (paymentMethod === 'PayPal') {
      if (!sdkReady || isLoadingOrderPay || isPaid) {
        return null;
      }
      return (
        <PayPalButton
          userToken={userToken}
          totalPrice={totalPriceRounded}
          orderId={orderId}
        />
      );
    }
  };

  const orderItems = orderDetails?.orderItems;

  const checkoutPayOrderView = () => {
    if (isErrorOrderFetch) {
      return <Message type='danger' message={isErrorOrderFetch} />;
    }
    if (!orderDetails) {
      return <Spinner />;
    }
    return (
      <OrderDetailsView
        orderDetails={orderDetails}
        isPaid={isPaid || isSuccessOrderPay}
        orderItems={orderItems}
        isLoading={isLoadingSummary}>
        {buttonPayOrderView()}
      </OrderDetailsView>
    );
  };

  return (
    <section id='CheckoutPayOrder'>
      {checkoutPayOrderView()}
      <hr></hr>
      PayPal test credentials:{' '}
      <strong>username: sb-yvxrp4651694@personal.example.com</strong> , password:
      <strong> 4"Itn/aa</strong>
    </section>
  );
};

const mapStateToProps = ({ user: { userToken }, orderDetails, orderPay }) => ({
  userToken,
  orderDetails: orderDetails?.orderDetails,
  orderId: orderDetails?.orderDetails?._id,
  orderValue: orderDetails?.orderDetails?.totalPrice,
  paymentMethod: orderDetails?.orderDetails?.paymentMethod,
  isPaid: orderDetails?.orderDetails?.isPaid,
  isErrorOrderFetch: orderDetails.isError,
  isLoadingOrderPay: orderPay.isLoading,
  isSuccessOrderPay: orderPay.isSuccess,
});
const mapDispatchToProps = (dispatch) => ({
  onOrderDetailsFetch: (userToken, orderId) =>
    dispatch(orderDetailsFetch(userToken, orderId)),
  onOrderCreateReset: () => dispatch(orderCreateReset()),
  onOrderPayReset: () => dispatch(orderPayReset()),
  onCartReset: () => dispatch(cartReset()),
  onOrdersListClear: () => dispatch(ordersListClear()),
  onOrderDetailsClear: () => dispatch(orderDetailsClear()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPayOrder);
