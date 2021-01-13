import { useHistory } from 'react-router-dom';

import CartItems from '../../components/Cart/CartItems/CartItems';
import CartSummary from '../../components/Cart/CartSummary/CartSummary';

import './CartPage.scss';

const CartPage = () => {
  let history = useHistory();

  const checkoutButtonClickHandler = () => {
    history.push('/checkout');
  };

  return (
    <main id="CartPage">
      <div className="cart-page">
        <div className="cart-page-header py-1">
          <h1>
            <strong>My cart</strong>
          </h1>
        </div>
        <div className="cart-page-content">
          <div className="cart-page-content-products">
            <CartItems />
          </div>
          <div className="cart-page-content-summary">
            <CartSummary
              checkoutButtonClickHandler={checkoutButtonClickHandler}
            ></CartSummary>
          </div>
        </div>
        <hr></hr>
      </div>
    </main>
  );
};

export default CartPage;
