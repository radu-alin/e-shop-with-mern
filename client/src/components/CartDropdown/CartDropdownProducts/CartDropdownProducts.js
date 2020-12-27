import { connect } from 'react-redux';

import { cartProductsSelector } from '../../../redux/selectors/cartSelector';

import CartDropdownProduct from './CartDropdownProduct/CartDropdownProduct';

import './CartDropdownProducts.scss';

const CartDropdownProducts = ({ cartProducts }) => {
  const renderCartDropdownProductsHandler = () =>
    cartProducts.map(({ cartProductDetails, quantity }) => (
      <CartDropdownProduct
        key={cartProductDetails._id}
        quantity={quantity}
        cartProductDetails={cartProductDetails}
      />
    ));

  return <div className="cart-products">{renderCartDropdownProductsHandler()}</div>;
};

const mapStateToProps = (state) => ({
  cartProducts: cartProductsSelector(state),
});

export default connect(mapStateToProps)(CartDropdownProducts);
