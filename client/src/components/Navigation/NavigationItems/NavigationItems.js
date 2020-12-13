import NavigationItem from './NavigationItem/Navigationitem';
import CartIcon from '../../Cart/CartIcon/CartIcon';

import './NavigationItems.scss';

const NavigationItems = () => (
  <nav>
    <ul id="NavigationItems" className="navigation-items ">
      <NavigationItem link="/checkout">
        <i className="fas fa-shopping-cart"></i>CHECKOUT
      </NavigationItem>
      <NavigationItem link="/">
        <i className="fas fa-user"></i>SIGN IN
      </NavigationItem>
      <NavigationItem link="/" noWidthFull="noWidthFull">
        <CartIcon />
      </NavigationItem>
    </ul>
  </nav>
);

export default NavigationItems;
