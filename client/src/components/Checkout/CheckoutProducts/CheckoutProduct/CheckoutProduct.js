import { memo } from 'react';
import { Link } from 'react-router-dom';

import './CheckoutProduct.scss';

const CheckoutProduct = ({
  quantity,
  cartProductDetails,
  onCartModifyQuatityProduct,
  onCartClearProduct,
}) => {
  const { _id, name, image, price, countInStock } = cartProductDetails;
  const renderInputSelectHandler = () => {
    const maxLenght = countInStock;
    const renderInputSelect = [];
    for (let i = 0; i <= maxLenght; i++) {
      renderInputSelect.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return renderInputSelect;
  };

  const submitFormHandler = (e) =>
    onCartModifyQuatityProduct(cartProductDetails, +e.target.value);

  const renderFormHandler = () => (
    <>
      {countInStock ? (
        <>
          <div className="checkout-product-content-left-quantity-option">
            <form onChange={(e) => submitFormHandler(e)}>
              <label>Quantity: </label>
              <select defaultValue={quantity}>{renderInputSelectHandler()}</select>
            </form>
          </div>
        </>
      ) : null}
    </>
  );

  return (
    <article id="CheckoutProduct">
      <div className="checkout-product">
        <div className="checkout-product-image">
          <img src={image} alt="product" />
        </div>
        <div className="checkout-product-content">
          <div className="checkout-product-content-left">
            <div className="checkout-product-content-left-title">
              <span>
                <strong>
                  <Link to={'/products/' + _id}>{name}</Link>
                </strong>
              </span>
            </div>
            <div className="checkout-product-content-left-quantity">
              {renderFormHandler()}
            </div>
          </div>
          <div className="checkout-product-content-right">
            <div className="checkout-product-content-right-price">
              <span>
                <strong>&#36; {price}</strong>
              </span>
              <span> per/item</span>
            </div>
            <div className="checkout-product-content-right-action-icons">
              <div
                className="checkout-product-content-right-action-icons-remove-button"
                onClick={() => onCartClearProduct(_id)}
              >
                <i className="far fa-trash-alt"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default memo(CheckoutProduct);
