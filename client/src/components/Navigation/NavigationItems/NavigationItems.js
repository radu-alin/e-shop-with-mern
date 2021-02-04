import { connect } from 'react-redux';

import { ReactComponent as ShoppingCartIcon } from '../../../assets/svg/shopping-cart.svg';
import { ReactComponent as UserIcon } from '../../../assets/svg/user-icon.svg';
import NavigationItem from './NavigationItem/Navigationitem';
import NavDropdown from '../NavDropdown/NavDropdown.js';

import './NavigationItems.scss';

const NavigationItems = ({ isAuth }) => {
  const signInOrProfileView = isAuth ? (
    <li>
      <NavDropdown />
    </li>
  ) : (
    <NavigationItem link='/auth'>
      <UserIcon />
      Sign In
    </NavigationItem>
  );

  return (
    <nav>
      <ul id='NavigationItems' className='navigation-items '>
        <NavigationItem link='/cart'>
          <ShoppingCartIcon /> Cart
        </NavigationItem>
        {signInOrProfileView}
      </ul>
    </nav>
  );
};

const mapStateToProps = ({ user: { userToken } }) => ({ isAuth: !!userToken });

export default connect(mapStateToProps)(NavigationItems);
