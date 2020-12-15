import { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';

import { productSelectedFetch, cartAddProduct } from '../../redux/actions/index';

import ProductDetails from '../../components/Product/ProductDetails/ProductDetails';
import LatestProducts from '../../components/Product/LatestProducts/LatestProducts';

const ProductDetailsPage = ({
  productSelectedDetails,
  productReviews,
  isLoading,
  isError,
  onProductSelectedFetch,
  onCartAddProduct,
  match,
  history,
}) => {
  useEffect(() => onProductSelectedFetch(match.params.id), [
    onProductSelectedFetch,
    match.params.id,
  ]);

  const buttonGoBackClickHandler = useCallback(() => history.goBack(), [history]);

  return (
    <main id="ProductPage">
      <ProductDetails
        isLoading={isLoading}
        isError={isError}
        productDetails={productSelectedDetails}
        buttonGoBackClickHandler={buttonGoBackClickHandler}
        onCartAddProduct={onCartAddProduct}
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
  onCartAddProduct: (product) => dispatch(cartAddProduct(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailsPage);
