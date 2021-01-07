import CartDropdownItems from '../../../CartDropdown/CartDropdownItems/CartDropdownItems';
import OrderSection from '../../../Section/OrderSection/OrderSection';
import OrderSummary from '../../../Summary/OrderSummary/OrderSummary';
import Message from '../../../UI/Message/Message';

const OrderDetailsView = ({ orderDetails }) => {
  const { address, city, postalCode, country } = orderDetails.shippingAddress;
  const {
    paymentMethod,
    totalPrice,
    shippingPrice,
    isDelivered,
    isPaid,
  } = orderDetails;

  const deliveryMessage = isDelivered ? (
    <Message type="success" message="Shipping status: delivered." />
  ) : (
    <Message type="danger" message="Shipping status: not delivered." />
  );

  const paymentMessage = isPaid ? (
    <Message type="success" message="Payment status: paid." />
  ) : (
    <Message type="danger" message="Payment status: not paid." />
  );

  return (
    <section id="CheckoutPlaceOrder">
      <div className="checkout-place-order ">
        <div className="checkout-place-order-content">
          <OrderSection title="Shipping" message={deliveryMessage}>
            {`Address: ${address}, City: ${city}, ZipCode: ${postalCode}, Country:
            ${country}.`}
          </OrderSection>
          <hr></hr>
          <OrderSection title="Payment Method" message={paymentMessage}>
            {`Method: ${paymentMethod}.`}
          </OrderSection>
          <hr></hr>
          <OrderSection title="Order Items">
            <CartDropdownItems />
          </OrderSection>
        </div>
        <OrderSummary
          cartProductsTotalValue={(totalPrice - shippingPrice).toFixed(2)}
          cartShippingCost={shippingPrice}
          cartCheckoutTotalValue={totalPrice}
        >
          {null}
        </OrderSummary>
      </div>
    </section>
  );
};

export default OrderDetailsView;
