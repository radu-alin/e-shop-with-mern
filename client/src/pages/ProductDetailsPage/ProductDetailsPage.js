import { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';

import { productSelectedFetch, cartAddProduct } from '../../redux/actions/index';

import ProductDetails from '../../components/Product/ProductDetails/ProductDetails';
import LatestProducts from '../../components/Product/LatestProducts/LatestProducts';

const ProductDetailsPage = ({
  productSelectedDetails,
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
  productSelected: { productSelectedDetails, isError },
}) => ({
  productSelectedDetails,
  isError,
});

const mapDispatchToProps = (dispatch) => ({
  onProductSelectedFetch: (id) => dispatch(productSelectedFetch(id)),
  onCartAddProduct: (product) => dispatch(cartAddProduct(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailsPage);
