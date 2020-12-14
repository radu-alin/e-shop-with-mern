import { connect } from 'react-redux';

import { cartProductsCountSelector } from '../../../redux/selectors/cartSelector';

import { cartToggleHidden } from '../../../redux/actions/index';

import { ReactComponent as ShoppingIcon } from '../../../assets/svg/shopping-bag.svg';

import './CartIcon.scss';

const CartIcon = ({ productsCartCount, onCartToggleHidden }) => {
  return (
    <div className="cart-icon">
      <div className="cart-icon-content" onClick={onCartToggleHidden}>
        <ShoppingIcon className="cart-icon-content-img" />
        <div className="cart-icon-content-count">
          <div className="cart-icon-content-count-num">{productsCartCount}</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  productsCartCount: cartProductsCountSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCartToggleHidden: () => dispatch(cartToggleHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
