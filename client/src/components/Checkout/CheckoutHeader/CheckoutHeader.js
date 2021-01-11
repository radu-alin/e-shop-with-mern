import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Message from '../../UI/Message/Message';
import CheckoutSteps from '../CheckoutSteps/CheckoutSteps';

const CheckoutHeader = ({
  orderDetails,
  isPaid,
  isPaidSuccess,
  paymentMethod,
  isErrorOrderCreate,
  isErrorOrderPay,
  history,
}) => {
  const isPayOrderPage = history.location.pathname.split('/')[2] === 'pay-order';

  if (isErrorOrderCreate || isErrorOrderPay) {
    return <Message type="danger" message={isErrorOrderCreate || isErrorOrderPay} />;
  }
  if (paymentMethod === 'CashOnDelivery' && orderDetails) {
    return (
      <Message
        type="success"
        message="Order placed. You can see delivery status on your profile/orders."
      />
    );
  }
  if (isPayOrderPage && paymentMethod === 'PayPal' && (isPaid || isPaidSuccess)) {
    return (
      <Message
        type="success"
        message="Order placed. You can see delivery status on your profile/orders."
      />
    );
  }
  if (isPayOrderPage && paymentMethod === 'PayPal' && !isPaid && !isPaidSuccess) {
    return (
      <Message
        type="success"
        message="Order created. Please enter card details to finalize order."
      />
    );
  }

  return <CheckoutSteps />;
};

const mapStateToProps = ({ orderCreate, orderPay, orderDetails }) => ({
  orderDetails: orderDetails?.orderDetails,
  isPaid: orderDetails?.orderDetails?.isPaid,
  isPaidSuccess: orderPay.isSuccess,
  paymentMethod: orderDetails?.orderDetails?.paymentMethod,
  isErrorOrderCreate: orderCreate.isError,
  isErrorOrderPay: orderPay.isError,
});

export default connect(mapStateToProps)(withRouter(CheckoutHeader));
