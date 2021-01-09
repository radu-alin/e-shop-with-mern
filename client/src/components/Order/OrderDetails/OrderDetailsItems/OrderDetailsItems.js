import CartDropdownItem from '../../../CartDropdown/CartDropdownItems/CartDropdownItem/CartDropdownItem';

import './OrderDetailsItems.scss';

const OrderDetailsItems = ({ orderItems }) => {
  const orderDetailsItemsRender = () =>
    orderItems.map((orderItem) => (
      <CartDropdownItem key={orderItem._id} cartItemsDetail={orderItem} />
    ));

  return (
    <section id="OrderDetailsItems">
      <div className="order-details-items-items">{orderDetailsItemsRender()}</div>
    </section>
  );
};

export default OrderDetailsItems;
