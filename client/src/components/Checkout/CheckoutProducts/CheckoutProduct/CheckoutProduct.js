import './CheckoutProduct.scss';

const CheckoutProduct = ({
  quantity,
  cartProductDetails: { name, image, price },
}) => {
  return (
    <div className="checkout-product">
      <div className="checkout-product-image-container">
        <img src={image} alt="product" />
      </div>
      <span className="checkout-product-name">{name}</span>
      <span className="checkout-product-quantity">{quantity}</span>
      <span className="checkout-product-price">{price}</span>
      <div className="checkout-product-remove-button">&#10005;</div>
    </div>
  );
};

export default CheckoutProduct;
