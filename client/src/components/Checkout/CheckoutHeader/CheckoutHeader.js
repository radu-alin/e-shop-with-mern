import { connect } from 'react-redux';

import CheckoutMessage from '../CheckoutMessage/CheckoutMesage';
import CheckoutSteps from '../CheckoutSteps/CheckoutSteps';

const CheckoutHeader = ({
  paymentMethod,
  isSuccessOrderCreate,
  isErrorOrderCreate,
  isSuccessOrderPay,
  isErrorOrderPay,
}) => {
  if (
    !isSuccessOrderCreate &&
    !isErrorOrderCreate &&
    !isSuccessOrderPay &&
    !isErrorOrderPay
  )
    return <CheckoutSteps />;
  if (isErrorOrderCreate || isErrorOrderPay)
    return (
      <CheckoutMessage
        type="danger"
        message={isErrorOrderCreate || isErrorOrderPay}
      />
    );
  if (isSuccessOrderPay)
    return (
      <CheckoutMessage
        type="success"
        message="Order placed. You can see delivery status on your profile/orders."
      />
    );
  if (isSuccessOrderCreate)
    return (
      <CheckoutMessage
        type="success"
        message={
          paymentMethod === 'CashOnDelivery'
            ? 'Order placed. You can see delivery status on your profile/orders.'
            : 'Order created. Please enter card details to finalize order.'
        }
      />
    );
};

const mapStateToProps = ({ orderCreate, orderPay }) => ({
  paymentMethod: orderCreate.orderCreated && orderCreate.orderCreated.paymentMethod,
  isSuccessOrderCreate: !!orderCreate.orderCreated,
  isErrorOrderCreate: orderCreate.isError,
  isSuccessOrderPay: orderPay.isSuccess,
  isErrorOrderPay: orderPay.isError,
});

export default connect(mapStateToProps)(CheckoutHeader);
