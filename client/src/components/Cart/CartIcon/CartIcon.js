import { connect } from 'react-redux';

import { toogleCartHidden } from '../../../redux/actions/index';

import { ReactComponent as ShoppingIcon } from '../../../assets/svg/shopping-bag.svg';

import './CartIcon.scss';

const CartIcon = ({ onToggleCartHidden }) => (
  <div className="cart-icon" onClick={onToggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{3}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  onToggleCartHidden: () => dispatch(toogleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
