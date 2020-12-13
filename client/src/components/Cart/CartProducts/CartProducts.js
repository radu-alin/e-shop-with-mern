import { connect } from 'react-redux';

import { cartProductsSelector } from '../../../redux/selectors/cartSelectors';

import CartProduct from './CartProduct/CartProduct';

import './CartProducts.scss';

const CartProducts = ({ cartProducts }) => {
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

const mapStateToProps = (state) => ({
  cartProducts: cartProductsSelector(state),
});

export default connect(mapStateToProps)(CartProducts);
