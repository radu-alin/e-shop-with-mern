import Rating from '../../Rating/Rating';

import './ProductOverview.scss';

const ProductOverview = ({
  product: { name, price, image, rating, numReviews },
}) => (
  <article id="ProductOverview">
    <div className="product-overview p-1 bg-gray-light">
      <div className="product-image" style={{ backgroundImage: `url(${image})` }} />
      <div className="product-footer">
        <span className="name">{name}</span>
        <div className="product-rating">
          <Rating value={rating} numReviews={numReviews} />
        </div>
        <h4 className="price">${price}</h4>
      </div>
    </div>
  </article>
);

export default ProductOverview;
