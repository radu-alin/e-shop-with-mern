import './CartProduct.scss';

const CartProduct = ({ cartProductDetails: { image, price, name }, quantity }) => (
  <>
    <div className="cart-product">
      <img src={image} alt="product" />
      <div className="cart-product-details">
        <span className="cart-product-details-name">{name}</span>
        <span className="cart-product-details-price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
    <hr></hr>
  </>
);

export default CartProduct;
