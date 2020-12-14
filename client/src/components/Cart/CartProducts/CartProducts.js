import { connect } from 'react-redux';

import { cartProductsSelector } from '../../../redux/selectors/cartSelector';

import CartProduct from './CartProduct/CartProduct';

import './CartProducts.scss';

const CartProducts = ({ cartProducts }) => {
  console.log('cartProducts - ', cartProducts);
  const renderCartProductsHandler = () =>
    cartProducts.length ? (
      cartProducts.map(({ cartProductDetails, quantity }) => (
        <CartProduct
          key={cartProductDetails._id}
          quantity={quantity}
          cartProductDetails={cartProductDetails}
        />
      ))
    ) : (
      <>
        <span className="cart-products-empty-message">
          <strong>YOURE CART IS EMPTY .</strong>
        </span>
      </>
    );

  return <div className="cart-products">{renderCartProductsHandler()}</div>;
};

const mapStateToProps = (state) => ({
  cartProducts: cartProductsSelector(state),
});

export default connect(mapStateToProps)(CartProducts);
