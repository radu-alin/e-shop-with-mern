import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import CSSTransition from 'react-transition-group/CSSTransition';

import { cartDropdownToggleHidden } from '../../redux/actions/index';

import CartDropdownItems from './CartDropdownItems/CartDropdownItems';
import Button from '../UI/Button/Button';
import Backdrop from '../UI/Backdrop/Backdrop';

import './CartDropdown.scss';

const ANIMATION_TIMING = {
  enter: 2450,
  exit: 2450,
};

const CartDropdown = ({ isDropdownHidden, onCartDropdownToggleHidden }) => {
  let history = useHistory();

  const cartDropdownView = () => (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={!isDropdownHidden}
      timeout={ANIMATION_TIMING}
      classNames='fade-slide'>
      <div className='cart-dropdown'>
        <CartDropdownItems />
        <Button
          type='btn-gray-dark'
          onClickAction={() => {
            history.push('/checkout');
            onCartDropdownToggleHidden();
          }}>
          GO TO CHECKOUT
        </Button>
      </div>
    </CSSTransition>
  );

  return (
    <section id='CartDropdown'>
      <Backdrop
        show={!isDropdownHidden}
        onClickAction={onCartDropdownToggleHidden}
      />
      {cartDropdownView()}
    </section>
  );
};

const mapStateToProps = ({ cartDropdown: { isDropdownHidden } }) => ({
  isDropdownHidden,
});

const mapDispatchToProps = (dispatch) => ({
  onCartDropdownToggleHidden: () => dispatch(cartDropdownToggleHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
