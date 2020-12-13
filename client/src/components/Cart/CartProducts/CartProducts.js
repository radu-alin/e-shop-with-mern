import { connect } from 'react-redux';

import CartProduct from './CartProduct/CartProduct';

import './CartProducts.scss';

const CartProducts = ({ cartProducts }) => {
  console.log('cartProducts - ', cartProducts);

  const renderCartProductsHandler = () =>
    cartProducts.map(({ cartProductDetails, quantity }) => (
      <CartProduct
        key={cartProductDetails._id}
        quantity={quantity}
        {...cartProductDetails}
      />
    ));

  return <div className="cart-products">{renderCartProductsHandler()}</div>;
};

const mapStateToProps = ({ cart: { cartProducts } }) => ({
  cartProducts,
});

export default connect(mapStateToProps)(CartProducts);
