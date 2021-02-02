import Rating from '../../../Rating/Rating';

import './ProductReview.scss';

const ProductReview = ({ review }) => {
  const { comment, rating, createdAt } = review;
  const reviewDate = new Date(createdAt);

  return (
    <article id='ProductReview'>
      <div className='product-review'>
        <h4>
          <Rating value={rating}> from: {reviewDate.toLocaleString()}</Rating>
        </h4>
        <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {comment}</h3>
      </div>
    </article>
  );
};

export default ProductReview;
