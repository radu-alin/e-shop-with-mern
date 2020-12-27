import './CartDropdownProduct.scss';

const CartDropdownProduct = ({
  cartProductDetails: { image, price, name },
  quantity,
}) => (
  <>
    <div className="cart-dropdown-product">
      <img src={image} alt="product" />
      <div className="cart-dropdown-product-details">
        <span className="cart-dropdown-product-details-name">{name}</span>
        <span className="cart-dropdown-product-details-price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
    <hr></hr>
  </>
);

export default CartDropdownProduct;
