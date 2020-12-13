import { useState } from 'react';

import Button from '../../UI/Button /Button';
import Rating from '../../Rating/Rating';
import Spinner from '../../UI/Spinner/Spinner';
import './ProductDetails.scss';

const ProductDetails = ({
  buttonGoBackClickHandler,
  productDetails,
  isError,
  isLoading,
}) => {
  const [quantitySelected, setQuantitySelected] = useState(0);
  console.log('quantitySelected - ', quantitySelected);

  const renderInputSelectHandler = () => {
    const maxLenght = productDetails.countInStock;
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

  const renderFormHandler = () => (
    <>
      {productDetails.countInStock ? (
        <>
          <div className="product-details-content-text-right-quantity">
            <form onChange={(e) => submitFormHandler(e)}>
              <label>Quantity:</label>
              <select>{renderInputSelectHandler()}</select>
            </form>
          </div>
          <hr></hr>
        </>
      ) : null}
    </>
  );

  const submitFormHandler = (e) => setQuantitySelected(e.target.value);

  const addToCartHandler = () => {};

  const productDetailsView = () => (
    <div className="product-details-content">
      <div
        className="product-details-content-image"
        style={{ backgroundImage: `url(${productDetails.image})` }}
      />
      <div className="product-details-content-text-left">
        <h3>{productDetails.name}</h3>
        <Rating
          value={productDetails.rating}
          numReviews={productDetails.numReviews}
        />
        <hr className="my-1"></hr>
        <h3>${productDetails.price}</h3>
        <hr></hr>
        <p>{productDetails.description}</p>
      </div>
      <div className="product-details-content-text-right">
        <div className="product-details-content-text-right-price">
          <span>Price:</span>
          <span>
            <strong> ${productDetails.price}</strong>
          </span>
        </div>
        <hr></hr>
        <div className="product-details-content-text-right-stock">
          <span>Status: </span>
          <span>
            <strong>
              {productDetails.countInStock ? 'In Stock' : 'Out of Stock'}
            </strong>
          </span>
        </div>
        <hr></hr>
        {renderFormHandler()}
        <Button onClickAction={addToCartHandler} type="btn-gray-dark ">
          ADD TO CHART
        </Button>
      </div>
    </div>
  );

  const renderProductDetailsHandler = () =>
    isLoading ? <Spinner /> : isError ? <h3>{isError}</h3> : productDetailsView();

  return (
    <section id="ProductDetails">
      <div className="product-details my-1">
        <div className="product-details-header">
          <Button type="btn-gray-light" onClickAction={buttonGoBackClickHandler}>
            Go Back
          </Button>
        </div>
        {renderProductDetailsHandler()}
      </div>
    </section>
  );
};

export default ProductDetails;
