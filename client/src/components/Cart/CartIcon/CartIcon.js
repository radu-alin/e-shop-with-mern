import { connect } from 'react-redux';

import { productsCartCountSelector } from '../../../redux/selectors/cartSelectors';

import { toogleCartHidden } from '../../../redux/actions/index';

import { ReactComponent as ShoppingIcon } from '../../../assets/svg/shopping-bag.svg';

import './CartIcon.scss';

const CartIcon = ({ productsCartCount, onToggleCartHidden }) => {
  console.log('CartIcon - render()');
  return (
    <div className="cart-icon">
      <div className="cart-icon-content" onClick={onToggleCartHidden}>
        <ShoppingIcon className="cart-icon-content-img" />
        <div className="cart-icon-content-count">
          <div className="cart-icon-content-count-num">{productsCartCount}</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  productsCartCount: productsCartCountSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  onToggleCartHidden: () => dispatch(toogleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
