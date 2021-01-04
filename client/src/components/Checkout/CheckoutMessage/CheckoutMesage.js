import Message from '../../UI/Message/Message';

import './CheckoutMessage.scss';

const CheckoutMessage = ({ type, message }) => (
  <div className="checkout-message">
    <Message type={type} message={message} />
  </div>
);

export default CheckoutMessage;
