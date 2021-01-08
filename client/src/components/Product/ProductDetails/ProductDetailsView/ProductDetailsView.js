import Rating from '../../../Rating/Rating';
import Button from '../../../UI/Button/Button';

import './ProductDetailsView.scss';

const ProductDetailsView = ({
  productDetails,
  productDetails: {
    name,
    image,
    description,
    rating,
    numReviews,
    price,
    countInStock,
  },
  onCartAddItem,
}) => (
  <section id="ProductDetails">
    <div className="product-details-content">
      <div className="product-details-content-image">
        <img src={image} alt="product" />
      </div>
      <div className="product-details-content-text-left">
        <h3>{name}</h3>
        <Rating value={rating} numReviews={numReviews} />
        <hr className="my-1"></hr>
        <h3>${price}</h3>
        <hr></hr>
        <p>{description}</p>
      </div>
      <div className="product-details-content-text-right">
        <div className="product-details-content-text-right-price">
          <span>Price:</span>
          <span>
            <strong> ${price}</strong>
          </span>
        </div>
        <hr></hr>
        <div className="product-details-content-text-right-stock">
          <span>Status: </span>
          <span>
            <strong>{countInStock ? 'In Stock' : 'Out of Stock'}</strong>
          </span>
        </div>
        <hr></hr>
        <Button
          onClickAction={() => onCartAddItem(productDetails)}
          type="btn-gray-dark "
          disabled={countInStock <= 0}
        >
          {countInStock <= 0 ? 'OUT OF STOCK' : 'ADD TO CHART'}
        </Button>
      </div>
    </div>
  </section>
);

export default ProductDetailsView;
