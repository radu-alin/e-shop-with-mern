import Message from '../../../UI/Message/Message';

import Button from '../../../UI/Button/Button';

import './UserOrder.scss';

const UserOrder = ({ userOrder, orderDetailsClickHandler }) => {
  const {
    _id,
    createdAt,
    isPaid,
    isDelivered,
    totalPrice,
    paymentMethod,
  } = userOrder;
  const orderDate = new Date(createdAt);
  const userRequireCardPayment = paymentMethod === 'PayPal' && isPaid === false && (
    <div className="user-order-info-danger">
      <Message
        type="danger"
        message="In order to send your order, you must perform credit card payment. "
      />
    </div>
  );

  return (
    <article id="User Order">
      <div className="user-order bg-gray-light my-1 p-1">
        <div className="user-order-info">
          <div>
            <strong>Date </strong>
            {orderDate.toLocaleString()}
          </div>
          <div>
            <strong>Order no. </strong>
            {_id}
          </div>
          <div>
            <strong>Value </strong>${totalPrice.toFixed(2)}
          </div>
        </div>
        {userRequireCardPayment}
        <hr></hr>
        <div className="user-order-status">
          <div className={`user-order-status${isPaid ? '-success' : '-danger'}`}>
            <strong>Paid status: </strong>
            {isPaid ? 'PAID' : 'NOT PAID'}
          </div>
          <div
            className={`user-order-status${isDelivered ? '-success' : '-danger'}`}
          >
            <strong>Delivery status: </strong>
            {isDelivered ? 'DELIVERED' : 'NOT DELIVERED'}
          </div>
          <div>
            <Button
              type="btn-gray-light"
              onClickAction={() => orderDetailsClickHandler(_id)}
            >
              Order details
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default UserOrder;
