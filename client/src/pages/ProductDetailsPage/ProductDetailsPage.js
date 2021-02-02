import { useCallback } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import ProductDetails from '../../components/Product/ProductDetails/ProductDetails';

const ProductDetailsPage = () => {
  let { id } = useParams();
  let history = useHistory();

  const buttonGoBackClickHandler = useCallback(() => history.goBack(), [history]);

  return (
    <main id='ProductPage'>
      <ProductDetails
        productId={id}
        buttonGoBackClickHandler={buttonGoBackClickHandler}
      />
    </main>
  );
};

export default ProductDetailsPage;
