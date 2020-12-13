import { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';

import { fetchProductDetails } from '../../redux/actions/index';

import ProductDetails from '../../components/Product/ProductDetails/ProductDetails';
import LatestProducts from '../../components/Product/LatestProducts/LatestProducts';

const ProductDetailsPage = ({
  productDetails,
  productReviews,
  isLoading,
  isError,
  onFetchProductDetails,

  match,
  history,
}) => {
  console.log('ProductDetailsPage - render()');
  useEffect(() => onFetchProductDetails(match.params.id), [
    onFetchProductDetails,
    match.params.id,
  ]);

  const buttonGoBackClickHandler = useCallback(() => history.push('/'), [history]);

  return (
    <main id="ProductPage">
      <ProductDetails
        buttonGoBackClickHandler={buttonGoBackClickHandler}
        productDetails={productDetails}
        isLoading={isLoading}
        isError={isError}
      />
      <LatestProducts />
    </main>
  );
};

const mapStateToProps = ({
  productDetails: { productDetails, productReviews, isLoading, isError },
}) => ({
  productDetails,
  productReviews,
  isLoading,
  isError,
});

const mapDispatchToProps = (dispatch) => ({
  onFetchProductDetails: (id) => dispatch(fetchProductDetails(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailsPage);
