import { connect } from 'react-redux';

import { toogleCartHidden } from '../../../redux/actions/index';

import { ReactComponent as ShoppingIcon } from '../../../assets/svg/shopping-bag.svg';

import './CartIcon.scss';

const CartIcon = ({ onToggleCartHidden }) => (
  <div className="cart-icon">
    <div className="cart-icon-content" onClick={onToggleCartHidden}>
      <ShoppingIcon className="cart-icon-content-img" />
      <div className="cart-icon-content-count">
        <div className="cart-icon-content-count-num">{11}</div>
      </div>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  onToggleCartHidden: () => dispatch(toogleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
