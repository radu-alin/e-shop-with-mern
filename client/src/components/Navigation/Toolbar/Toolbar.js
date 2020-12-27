import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import CartDropdownIcon from '../../CartDropdown/CartDropdownIcon/CartDropdownIcon';

import './Toolbar.scss';

const Toolbar = () => (
  <>
    <header id="Toolbar">
      <div className="toolbar bg-gray-dark">
        <div className="toolbar-content container show-effect">
          <div className="toolbar-content-left">
            <Logo />
          </div>
          <div className="toolbar-content-right">
            <NavigationItems />
            <CartDropdownIcon />
          </div>
        </div>
      </div>
    </header>
  </>
);

export default Toolbar;
