import { useRouteMatch } from 'react-router-dom';
import NavigationItem from '../../Navigation/NavigationItems/NavigationItem/Navigationitem';

import './CheckoutSteps.scss';

const CheckoutSteps = () => {
  let { url } = useRouteMatch();

  return (
    <div className="checkout-steps bg-gray-dark">
      <NavigationItem link={`${url}`}>1. Shipping</NavigationItem>
      <NavigationItem link={`${url}/payment-method`}>2. Payment</NavigationItem>
      <NavigationItem link={`${url}/place-order`}>3. Place Order</NavigationItem>
    </div>
  );
};

export default CheckoutSteps;
