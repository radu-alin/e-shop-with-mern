import CartDropdownItems from '../../CartDropdown/CartDropdownItems/CartDropdownItems';
import OrderSection from '../../Section/OrderSection/OrderSection';
import OrderSummary from '../../Summary/OrderSummary/OrderSummary';
import Message from '../../UI/Message/Message';

import './CheckoutOrderView.scss';

const CheckoutOrderView = ({ orderDetails, isLoading, children }) => {
  const { shippingAddress, paymentMethod, shippingPrice, totalPrice } = orderDetails;
  const { address, city, postalCode, country } = shippingAddress;

  return (
    <section id="CheckoutOrderView">
      <div className="checkout-order-view">
        <div className="checkout-order-view-content">
          <OrderSection title="Shipping">
            {address && city && postalCode && country ? (
              `Address: ${address}, City: ${city}, ZipCode: ${postalCode}, Country:
      ${country}.`
            ) : (
              <Message type="danger" message="Please enter shipping details." />
            )}
          </OrderSection>
          <hr></hr>
          <OrderSection title="Payment Method">
            {paymentMethod.length === 0 ? (
              <Message type="danger" message="Please choose a payment method." />
            ) : (
              `Method: ${paymentMethod}.`
            )}
          </OrderSection>
          <hr></hr>
          <OrderSection title="Order Items">
            <CartDropdownItems />
          </OrderSection>
        </div>
        <OrderSummary
          shippingPrice={shippingPrice}
          totalPrice={totalPrice}
          isLoading={isLoading}
        >
          {children}
        </OrderSummary>
      </div>
    </section>
  );
};

export default CheckoutOrderView;
