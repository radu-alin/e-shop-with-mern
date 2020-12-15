import { connect } from 'react-redux';

import { cartUpdateLocalStorageUtil } from '../../../utils/cartUtil';
import {
  cartProductsSelector,
  cartProductsCountSelector,
} from '../../../redux/selectors/cartSelector';

import { cartToggleHidden } from '../../../redux/actions/index';

import { ReactComponent as ShoppingIcon } from '../../../assets/svg/shopping-bag.svg';

import './CartIcon.scss';

const CartIcon = ({ cartProducts, cartProductsCount, onCartToggleHidden }) => {
  cartUpdateLocalStorageUtil(cartProducts);
  return (
    <div className="cart-icon">
      <div className="cart-icon-content" onClick={onCartToggleHidden}>
        <ShoppingIcon className="cart-icon-content-img" />
        <div className="cart-icon-content-count">
          <div className="cart-icon-content-count-num">{cartProductsCount}</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartProducts: cartProductsSelector(state),
  cartProductsCount: cartProductsCountSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCartToggleHidden: () => dispatch(cartToggleHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
