import { connect } from 'react-redux';

import NavigationItem from './NavigationItem/Navigationitem';
import NavDropdown from '../NavDropdown/NavDropdown.js';

import './NavigationItems.scss';

const NavigationItems = ({ userName }) => {
  const renderSignInOrProfileHandler = userName ? (
    <li>
      <NavDropdown name={userName} />
    </li>
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
      </ul>
    </nav>
  );
};

const mapStateToProps = ({ user: { userName } }) => ({ userName });

export default connect(mapStateToProps)(NavigationItems);
