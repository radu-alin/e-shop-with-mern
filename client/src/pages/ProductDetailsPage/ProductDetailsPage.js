import { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';

import { productSelectedFetch } from '../../redux/actions/index';

import ProductDetails from '../../components/Product/ProductDetails/ProductDetails';
import LatestProducts from '../../components/Product/LatestProducts/LatestProducts';

const ProductDetailsPage = ({
  productSelectedDetails,
  productReviews,
  isLoading,
  isError,
  onProductSelectedFetch,
  match,
  history,
}) => {
  useEffect(() => onProductSelectedFetch(match.params.id), [
    onProductSelectedFetch,
    match.params.id,
  ]);

  const buttonGoBackClickHandler = useCallback(() => history.push('/'), [history]);

  return (
    <main id="ProductPage">
      <ProductDetails
        buttonGoBackClickHandler={buttonGoBackClickHandler}
        isLoading={isLoading}
        isError={isError}
        productDetails={productSelectedDetails}
      />
      <LatestProducts />
    </main>
  );
};

const mapStateToProps = ({
  productSelected: { productSelectedDetails, productReviews, isLoading, isError },
}) => ({
  productSelectedDetails,
  productReviews,
  isLoading,
  isError,
});

const mapDispatchToProps = (dispatch) => ({
  onProductSelectedFetch: (id) => dispatch(productSelectedFetch(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailsPage);
