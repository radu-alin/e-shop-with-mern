import { useCallback } from 'react';

import ProductDetails from '../../components/Product/ProductDetails/ProductDetails';
import LatestProducts from '../../components/Product/LatestProducts/LatestProducts';

const ProductDetailsPage = ({ match, history }) => {
  const buttonGoBackClickHandler = useCallback(() => history.goBack(), [history]);

  return (
    <main id="ProductPage">
      <ProductDetails
        productSelectedId={match.params.id}
        buttonGoBackClickHandler={buttonGoBackClickHandler}
      />
      <LatestProducts />
    </main>
  );
};

export default ProductDetailsPage;
