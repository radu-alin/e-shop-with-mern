import { connect } from 'react-redux';

import { cartProductsSelector } from '../../../redux/selectors/cartSelector';

import {
  cartClearProduct,
  cartModifyQuantityProduct,
} from '../../../redux/actions/index.js';

import CheckoutProduct from './CheckoutProduct/CheckoutProduct';

const CheckoutProducts = ({
  cartProducts,
  onCartClearProduct,
  onCartModifyQuatityProduct,
}) => {
  const renderCheckoutProductsHandler = () =>
    cartProducts.map(({ _id, quantity, cartProductDetails }) => {
      return (
        <CheckoutProduct
          key={_id}
          quantity={quantity}
          cartProductDetails={cartProductDetails}
          onCartModifyQuatityProduct={onCartModifyQuatityProduct}
          onCartClearProduct={onCartClearProduct}
        />
      );
    });

  return <>{renderCheckoutProductsHandler()}</>;
};

const mapStateToProps = (state) => ({
  cartProducts: cartProductsSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCartClearProduct: (id) => dispatch(cartClearProduct(id)),
  onCartModifyQuatityProduct: (product, selectedQuantity) =>
    dispatch(cartModifyQuantityProduct(product, selectedQuantity)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutProducts);
