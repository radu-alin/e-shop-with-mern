import { connect } from 'react-redux';

import Message from '../../UI/Message/Message';
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
    return <Message type="danger" message={isErrorOrderCreate || isErrorOrderPay} />;
  if (isSuccessOrderPay)
    return (
      <Message
        type="success"
        message="Order placed. You can see delivery status on your profile/orders."
      />
    );
  if (isSuccessOrderCreate)
    return (
      <Message
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
  isSuccessOrderCreate: !!orderCreate.orderCreated,
  paymentMethod: orderCreate.orderCreated?.paymentMethod,
  isErrorOrderCreate: orderCreate.isError,
  isSuccessOrderPay: orderPay.isSuccess,
  isErrorOrderPay: orderPay.isError,
});

export default connect(mapStateToProps)(CheckoutHeader);
