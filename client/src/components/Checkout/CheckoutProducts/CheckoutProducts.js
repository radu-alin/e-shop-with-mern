import { connect } from 'react-redux';

import { cartProductsSelector } from '../../../redux/selectors/cartSelector';

import {
  cartClearProduct,
  cartAddProduct,
  cartDecreaseProduct,
} from '../../../redux/actions/index.js';

import CheckoutProduct from './CheckoutProduct/CheckoutProduct';

const CheckoutProducts = ({
  cartProducts,
  onCartClearProduct,
  onCartAddProduct,
  onCartDecreaseProduct,
}) => {
  const renderCheckoutProductsHandler = () =>
    cartProducts.map(({ _id, quantity, cartProductDetails }) => {
      return (
        <CheckoutProduct
          key={_id}
          quantity={quantity}
          cartProductDetails={cartProductDetails}
          onCartClearProduct={onCartClearProduct}
          onCartAddProduct={onCartAddProduct}
          onCartDecreaseProduct={onCartDecreaseProduct}
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
  onCartAddProduct: (product) => dispatch(cartAddProduct(product)),
  onCartDecreaseProduct: (product) => dispatch(cartDecreaseProduct(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutProducts);
