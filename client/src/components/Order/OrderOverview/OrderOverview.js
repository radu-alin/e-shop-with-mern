import Message from '../../UI/Message/Message';

import Button from '../../UI/Button/Button';

import './OrderOverview.scss';

const OrderOverview = ({ userOrder, orderDetailsClickHandler }) => {
  const {
    _id,
    createdAt,
    isPaid,
    isDelivered,
    totalPrice,
    paymentMethod,
  } = userOrder;
  const orderDate = new Date(createdAt);
  const requireUserCardPayment = paymentMethod === 'PayPal' && isPaid === false && (
    <div className="order-overview-info-danger">
      <Message
        type="danger"
        message="In order to send your order, you must perform credit card payment. "
      />
    </div>
  );

  return (
    <article id="OrderOverview">
      <div className="order-overview bg-gray-light my-1 p-1">
        <div className="order-overview-info">
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
        {requireUserCardPayment}
        <hr></hr>
        <div className="order-overview-status">
          <div className={`order-overview-status${isPaid ? '-success' : '-danger'}`}>
            <strong>Paid status: </strong>
            {isPaid ? 'PAID' : 'NOT PAID'}
          </div>
          <div
            className={`order-overview-status${
              isDelivered ? '-success' : '-danger'
            }`}
          >
            <strong>Delivery status: </strong>
            {isDelivered ? 'DELIVERED' : 'NOT DELIVERED'}
          </div>
          <div>
            <Button
              type="btn btn-gray-light"
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

export default OrderOverview;
