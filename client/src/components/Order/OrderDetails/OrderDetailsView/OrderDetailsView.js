import CartDropdownItems from '../../../CartDropdown/CartDropdownItems/CartDropdownItems';
import ProductsSimpleViewRender from '../../../Product/ProductsSimpleViewRender/ProductsSimpleViewRender';
import OrderSection from '../../../Section/OrderSection/OrderSection';
import OrderSummary from '../../../Summary/OrderSummary/OrderSummary';
import Message from '../../../UI/Message/Message';

import './OrderDetailsView.scss';

const OrderDetailsView = ({ orderDetails, orderItems, isLoading, children }) => {
  const { address, city, postalCode, country } = orderDetails.shippingAddress;
  const {
    paymentMethod,
    totalPrice,
    shippingPrice,
    isDelivered,
    isPaid,
  } = orderDetails;

  const orderItemsView = orderItems ? (
    <ProductsSimpleViewRender products={orderItems} />
  ) : (
    <CartDropdownItems />
  );

  const deliveryMessageMain = !address && !city && !postalCode && !country && (
    <Message type="danger" message="Please enter shipping details." />
  );

  const deliveryMessageSecond = isDelivered ? (
    <Message type="success" message="Shipping status: delivered." />
  ) : (
    <Message type="danger" message="Shipping status: not delivered." />
  );

  const paymentMessageMain = paymentMethod.length === 0 && (
    <Message type="danger" message="Please choose a payment method." />
  );

  const paymentMessageSecond = isPaid ? (
    <Message type="success" message="Payment status: paid." />
  ) : (
    <Message type="danger" message="Payment status: not paid." />
  );

  return (
    <section id="OrderDetailsView">
      <div className="order-details-view ">
        <div className="order-details-view-content">
          <OrderSection
            title="Shipping"
            messageMain={deliveryMessageMain}
            messageSecond={deliveryMessageSecond}
          >
            {`Address: ${address}, City: ${city}, ZipCode: ${postalCode}, Country:
            ${country}.`}
          </OrderSection>
          <hr></hr>
          <OrderSection
            title="Payment Method"
            messageMain={paymentMessageMain}
            messageSecond={paymentMessageSecond}
          >
            {`Method: ${paymentMethod}.`}
          </OrderSection>
          <hr></hr>
          <OrderSection title="Order Items">{orderItemsView}</OrderSection>
        </div>
        <div className="order-details-view-summary">
          <OrderSummary
            shippingPrice={shippingPrice}
            totalPrice={totalPrice}
            isLoading={isLoading}
          >
            {children}
          </OrderSummary>
        </div>
      </div>
    </section>
  );
};

export default OrderDetailsView;
