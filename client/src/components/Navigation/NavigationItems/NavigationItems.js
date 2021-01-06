import { connect } from 'react-redux';

import NavigationItem from './NavigationItem/Navigationitem';
import NavDropdown from '../NavDropdown/NavDropdown.js';

import './NavigationItems.scss';

const NavigationItems = ({ isAuth }) => {
  const signInOrProfileView = isAuth ? (
    <li>
      <NavDropdown />
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
        <NavigationItem link="/cart">
          <i className="fas fa-shopping-cart"></i>Cart
        </NavigationItem>
        {signInOrProfileView}
      </ul>
    </nav>
  );
};

const mapStateToProps = ({ user: { userToken } }) => ({ isAuth: !!userToken });

export default connect(mapStateToProps)(NavigationItems);
