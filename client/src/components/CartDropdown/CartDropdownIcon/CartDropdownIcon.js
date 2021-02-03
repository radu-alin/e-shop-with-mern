import { connect } from 'react-redux';

import { localStorageSetItemUtil } from '../../../utils/localStorageUtil';
import { cartItemsCountSelector } from '../../../redux/selectors/cartSelector';

import { cartDropdownToggleHidden } from '../../../redux/actions/index';

import { ReactComponent as ShoppingIcon } from '../../../assets/svg/shopping-bag.svg';
import CartDropdown from '../CartDropdown';

import './CartDropdownIcon.scss';

const CartDropdownIcon = ({
  cartItemsCount,
  cartItemsIdAndQuantity,
  isDropdownHidden,
  onCartDropdownToggleHidden,
}) => {
  localStorageSetItemUtil('cartItems', cartItemsIdAndQuantity);
  return (
    <div className='cart-dropdown-icon'>
      <div
        className='cart-dropdown-icon-content'
        onClick={onCartDropdownToggleHidden}>
        <ShoppingIcon className='cart-dropdown-icon-content-img' />
        <div className='cart-dropdown-icon-content-count'>
          <div className='cart-dropdown-icon-content-count-num'>
            {cartItemsCount}
          </div>
        </div>
        <div className='cart-dropdown-icon-content-cart'>
          {isDropdownHidden && <CartDropdown />}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isDropdownHidden: state.cartDropdown.isDropdownHidden,
  cartItemsIdAndQuantity: state.cartItemsIdAndQuantity.cartItemsIdAndQuantity,
  cartItemsCount: cartItemsCountSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCartDropdownToggleHidden: () => dispatch(cartDropdownToggleHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdownIcon);
