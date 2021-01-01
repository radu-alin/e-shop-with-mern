import { connect } from 'react-redux';

import { cartItemsDetailSelector } from '../../../redux/selectors/cartSelector';

import CartDropdownProduct from './CartDropdownProduct/CartDropdownProduct';

import './CartDropdownProducts.scss';

const CartDropdownProducts = ({ cartItemsDetail }) => {
  const renderCartDropdownProductsHandler = () =>
    cartItemsDetail.map((cartItemDetail) => (
      <CartDropdownProduct
        key={cartItemDetail._id}
        quantity={cartItemDetail.cartQuantity}
        cartProductDetails={cartItemDetail}
      />
    ));

  return <div className="cart-products">{renderCartDropdownProductsHandler()}</div>;
};

const mapStateToProps = (state) => ({
  cartItemsDetail: cartItemsDetailSelector(state),
});

export default connect(mapStateToProps)(CartDropdownProducts);
