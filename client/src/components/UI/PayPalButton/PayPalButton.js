import { useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import { orderPay } from '../../../redux/actions/index';

const PayPalButton = ({ userToken, totalPrice, orderId, onOrderPay }) => {
  const paypalRef = useRef();
  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            intent: 'CAPTURE',
            purchase_units: [
              {
                description: `Order no.${orderId}`,
                amount: {
                  value: `${totalPrice}`,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          onOrderPay(userToken, orderId, order);
        },
        onError: (err) => {
          console.error(err);
        },
      })
      .render(paypalRef.current);
  }, [userToken, totalPrice, orderId, onOrderPay]);
  return (
    <div>
      <div ref={paypalRef}></div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onOrderPay: (userToken, orderId, paymentResult) =>
    dispatch(orderPay(userToken, orderId, paymentResult)),
});

export default connect(null, mapDispatchToProps)(PayPalButton);
