import Button from '../../UI/Button /Button';
import Rating from '../../Rating/Rating';

import './ProductDetails.scss';

const ProductDetails = ({ buttonGoBackClickHandler, ...product }) => {
  return (
    <section id="ProductDetails">
      <div className="product-details my-1">
        <div className="product-details-header">
          <Button
            type="btn-gray-light"
            onClickAction={buttonGoBackClickHandler}
          >
            Go Back
          </Button>
        </div>
        <div className="product-details-content">
          <div
            className="product-details-content-image"
            style={{ backgroundImage: `url(${product.image})` }}
          />
          <div className="product-details-content-text-left">
            <h3>{product.name}</h3>
            <Rating value={product.rating} numReviews={product.numReviews} />
            <hr className="my-1"></hr>
            <h3>${product.price}</h3>
            <hr></hr>
            <p>{product.description}</p>
          </div>
          <div className="product-details-content-text-right">
            <div className="product-details-content-text-right-price">
              <span>Price:</span>
              <span>
                <strong> ${product.price}</strong>
              </span>
            </div>
            <hr></hr>
            <div className="product-details-content-text-right-stock">
              <span>Status: </span>
              <span>
                <strong>
                  {product.countInStock ? 'In Stock' : 'Out of Stock'}
                </strong>
              </span>
            </div>
            <hr></hr>
            <Button type="btn-gray-dark ">ADD TO CHART</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
