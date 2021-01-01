import { connect } from 'react-redux';

import { localStorageSetItemUtil } from '../../../utils/localStorageUtil';
import {
  cartItemsIdAndQuantitySelector,
  cartItemsCountSelector,
} from '../../../redux/selectors/cartSelector';

import { cartToggleHidden } from '../../../redux/actions/index';

import { ReactComponent as ShoppingIcon } from '../../../assets/svg/shopping-bag.svg';

import './CartDropdownIcon.scss';

const CartDropdownIcon = ({
  cartItemsIdAndQuantity,
  cartItemsCount,
  onCartToggleHidden,
}) => {
  localStorageSetItemUtil('cartItems', cartItemsIdAndQuantity);
  return (
    <div className="cart-dropdown-icon">
      <div className="cart-dropdown-icon-content" onClick={onCartToggleHidden}>
        <ShoppingIcon className="cart-dropdown-icon-content-img" />
        <div className="cart-dropdown-icon-content-count">
          <div className="cart-dropdown-icon-content-count-num">
            {cartItemsCount}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItemsIdAndQuantity: cartItemsIdAndQuantitySelector(state),
  cartItemsCount: cartItemsCountSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCartToggleHidden: () => dispatch(cartToggleHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdownIcon);
