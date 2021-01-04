import NavigationItem from '../../Navigation/NavigationItems/NavigationItem/Navigationitem';

import './CheckoutSteps.scss';

const CheckoutSteps = () => {
  return (
    <div className="checkout-steps bg-gray-dark">
      <NavigationItem link="/checkout/">1. Shipping</NavigationItem>
      <NavigationItem link="/checkout/payment-method">2. Payment</NavigationItem>
      <NavigationItem link="/checkout/place-order">3. Place Order</NavigationItem>
    </div>
  );
};

export default CheckoutSteps;
