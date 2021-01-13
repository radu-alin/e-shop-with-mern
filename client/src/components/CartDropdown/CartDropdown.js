import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import { cartDropdownToggleHidden } from '../../redux/actions/index';

import CartDropdownItems from './CartDropdownItems/CartDropdownItems';
import Button from '../UI/Button/Button';

import './CartDropdown.scss';

const CartDropdown = ({ onCartDropdownToggleHidden }) => {
  let history = useHistory();

  return (
    <section id="CartDropdown">
      <div className="cart-dropdown">
        <CartDropdownItems />
        <Button
          type="btn-gray-dark"
          onClickAction={() => {
            history.push('/checkout');
            onCartDropdownToggleHidden();
          }}
        >
          GO TO CHECKOUT
        </Button>
      </div>
    </section>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onCartDropdownToggleHidden: () => dispatch(cartDropdownToggleHidden()),
});

export default connect(null, mapDispatchToProps)(CartDropdown);
