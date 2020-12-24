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
              <div
                className="checkout-product-content-left-quantity-arrow-left"
                onClick={() => onCartDecreaseProduct(cartProductDetails)}
              >
                &#60;
              </div>
              <span className="checkout-product-content-left-quantity-value">
                <span>
                  <strong>{quantity}</strong>
                </span>
              </span>
              <div
                className="checkout-product-content-left-quantity-arrow-right"
                onClick={() => onCartAddProduct(cartProductDetails)}
              >
                &#62;
              </div>
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

// const [quantitySelected, setQuantitySelected] = useState(0);

// const renderInputSelectHandler = () => {
//   const maxLenght = productDetails.countInStock;
//   const renderInputSelect = [];
//   for (let i = 0; i <= maxLenght; i++) {
//     renderInputSelect.push(
//       <option key={i} value={i}>
//         {i}
//       </option>
//     );
//   }
//   return renderInputSelect;
// };

// const renderFormHandler = () => (
//   <>
//     {productDetails.countInStock ? (
//       <>
//         <div className="product-details-content-text-right-quantity">
//           <form onChange={(e) => submitFormHandler(e)}>
//             <label>Quantity:</label>
//             <select>{renderInputSelectHandler()}</select>
//           </form>
//         </div>
//         <hr></hr>
//       </>
//     ) : null}
//   </>
// );

// const submitFormHandler = (e) => setQuantitySelected(e.target.value);
