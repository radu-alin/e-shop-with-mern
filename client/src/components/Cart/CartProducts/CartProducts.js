import { connect } from 'react-redux';

import { cartProductsSelector } from '../../../redux/selectors/cartSelector';

import {
  cartClearProduct,
  cartModifyQuantityProduct,
} from '../../../redux/actions/index.js';

import CartProduct from './CartProduct/CartProduct';

const CartProducts = ({
  cartProducts,
  onCartClearProduct,
  onCartModifyQuatityProduct,
}) => {
  const renderCartProductsHandler = () =>
    cartProducts.map(({ _id, quantity, cartProductDetails }) => {
      return (
        <CartProduct
          key={_id}
          quantity={quantity}
          cartProductDetails={cartProductDetails}
          onCartModifyQuatityProduct={onCartModifyQuatityProduct}
          onCartClearProduct={onCartClearProduct}
        />
      );
    });

  return <>{renderCartProductsHandler()}</>;
};

const mapStateToProps = (state) => ({
  cartProducts: cartProductsSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCartClearProduct: (id) => dispatch(cartClearProduct(id)),
  onCartModifyQuatityProduct: (product, selectedQuantity) =>
    dispatch(cartModifyQuantityProduct(product, selectedQuantity)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartProducts);
