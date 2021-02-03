import { connect } from 'react-redux';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import CartDropdownIcon from '../../CartDropdown/CartDropdownIcon/CartDropdownIcon';
import CartDropdown from '../../CartDropdown/CartDropdown';

import './Toolbar.scss';

const Toolbar = ({ isDropdownHidden }) => (
  <>
    <header id='Toolbar'>
      <div className='toolbar bg-gray-dark'>
        <div className='toolbar-content container show-effect'>
          <div className='toolbar-content-left'>
            <Logo />
          </div>
          <div className='toolbar-content-right'>
            <NavigationItems />
            <CartDropdownIcon />
            <CartDropdown />
          </div>
        </div>
      </div>
    </header>
  </>
);

const mapStateToProps = ({ cartDropdown: { isDropdownHidden } }) => ({
  isDropdownHidden,
});

export default connect(mapStateToProps)(Toolbar);
