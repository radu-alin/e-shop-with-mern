import { connect } from 'react-redux';

import NavigationItem from './NavigationItem/Navigationitem';
import NavDropdown from '../NavDropdown/NavDropdown.js';
import CartIcon from '../../Cart/CartIcon/CartIcon';

import './NavigationItems.scss';

const NavigationItems = ({ userName }) => {
  const renderSignInOrProfileHandler = userName ? (
    <NavDropdown name={userName} />
  ) : (
    <NavigationItem link="/auth">
      <i className="fas fa-user"></i>
      SIGN IN
    </NavigationItem>
  );

  return (
    <nav>
      <ul id="NavigationItems" className="navigation-items ">
        <NavigationItem link="/checkout">
          <i className="fas fa-shopping-cart"></i>CHECKOUT
        </NavigationItem>
        {renderSignInOrProfileHandler}
        <div className="navigation-items-cart-icon">
          <CartIcon />
        </div>
      </ul>
    </nav>
  );
};

const mapStateToProps = ({ user: { userName } }) => ({ userName });

export default connect(mapStateToProps)(NavigationItems);
