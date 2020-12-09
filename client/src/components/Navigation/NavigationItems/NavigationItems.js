import NavigationItem from './NavigationItem/Navigationitem';

import './NavigationItems.scss';

const NavigationItems = () => {
  return (
    <nav>
      <ul id="NavigationItems" className="navigation-items ">
        <NavigationItem link="/">
          <i className="fas fa-shopping-cart"></i>Cart
        </NavigationItem>
        <NavigationItem link="/">
          <i className="fas fa-user"></i>Sign In
        </NavigationItem>
      </ul>
    </nav>
  );
};

export default NavigationItems;
