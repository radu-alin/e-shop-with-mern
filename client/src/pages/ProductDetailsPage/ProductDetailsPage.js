import { useCallback } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import ProductDetails from '../../components/Product/ProductDetails/ProductDetails';
import LatestProducts from '../../components/Product/LatestProducts/LatestProducts';

const ProductDetailsPage = () => {
  let { id } = useParams();
  let history = useHistory();

  const buttonGoBackClickHandler = useCallback(() => history.goBack(), [history]);

  return (
    <main id="ProductPage">
      <ProductDetails
        productSelectedId={id}
        buttonGoBackClickHandler={buttonGoBackClickHandler}
      />
      <LatestProducts />
    </main>
  );
};

export default ProductDetailsPage;
