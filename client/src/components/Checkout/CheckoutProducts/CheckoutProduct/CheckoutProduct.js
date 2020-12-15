import { memo } from 'react';
import { Link } from 'react-router-dom';

import './CheckoutProduct.scss';

const CheckoutProduct = ({
  quantity,
  cartProductDetails,
  onCartClearProduct,
  onCartAddProduct,
  onCartDecreaseProduct,
}) => {
  const { name, image, price, _id } = cartProductDetails;
  return (
    <div className="checkout-product">
      <div className="checkout-product-image-container">
        <img src={image} alt="product" />
      </div>
      <span className="checkout-product-name">
        <Link to={'/products/' + _id}>{name}</Link>
      </span>
      <span className="checkout-product-quantity">
        <div
          className="checkout-product-quantity-arrow-left"
          onClick={() => onCartDecreaseProduct(cartProductDetails)}
        >
          &#60;
        </div>
        <span className="checkout-product-quantity-value">{quantity}</span>
        <div
          className="checkout-product-quantity-arrow-right"
          onClick={() => onCartAddProduct(cartProductDetails)}
        >
          &#62;
        </div>
      </span>
      <span className="checkout-product-price">{price}</span>
      <div
        className="checkout-product-remove-button"
        onClick={() => onCartClearProduct(_id)}
      >
        &#10005;
      </div>
    </div>
  );
};

export default memo(CheckoutProduct);
