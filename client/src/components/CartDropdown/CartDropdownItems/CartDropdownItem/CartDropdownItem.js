import './CartDropdownItem.scss';

const CartDropdownItem = ({
  cartItemsDetail: { image, price, name, cartQuantity },
}) => (
  <>
    <div className="cart-dropdown-item">
      <img src={image} alt={name} />
      <div className="cart-dropdown-item-details">
        <span className="cart-dropdown-item-details-name">{name}</span>
        <span className="cart-dropdown-item-details-price">
          {cartQuantity} x ${price} = ${(cartQuantity * price).toFixed(2)}.
        </span>
      </div>
    </div>
    <hr></hr>
  </>
);

export default CartDropdownItem;
