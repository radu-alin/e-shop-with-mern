import { connect } from 'react-redux';

import CartProducts from '../../components/Cart/CartProducts/CartProducts';

import Button from '../../components/UI/Button/Button';

import { cartTotalValueSelector } from '../../redux/selectors/cartSelector';

import './CartPage.scss';

const CartPage = ({ cartTotalValue }) => {
  const cartProductsView = cartTotalValue ? (
    <CartProducts />
  ) : (
    <h1 className="py-1">Please Add Products for Checkout</h1>
  );
  return (
    <main id="CartPage">
      <div className="cart-page">
        <div className="cart-page-header py-1">
          <h1>
            <strong>My cart</strong>
          </h1>
        </div>
        <div className="cart-page-content">
          <div className="cart-page-content-products">{cartProductsView}</div>
          <div className="cart-page-content-total">
            <div className="cart-page-content-total-sum">
              <span>
                <strong>TOTAL:</strong>
              </span>
              <span>
                <strong>${cartTotalValue.toFixed(2)}</strong>
              </span>
            </div>
            <hr></hr>
            <Button type="btn-gray-dark">Checkout</Button>
          </div>
        </div>
      </div>
    </main>
  );
};

const mapStateToProps = (state) => ({
  cartTotalValue: cartTotalValueSelector(state),
});

export default connect(mapStateToProps)(CartPage);
