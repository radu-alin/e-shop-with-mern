import ProductReview from '../ProductReview/ProductReview';

const ProductReviewList = ({ productReviews }) => {
  const productReviewsRender = () =>
    productReviews.map((review) => (
      <ProductReview key={review._id} review={review} />
    ));

  return <section id='ProductReviewsList'>{productReviewsRender()}</section>;
};

export default ProductReviewList;
