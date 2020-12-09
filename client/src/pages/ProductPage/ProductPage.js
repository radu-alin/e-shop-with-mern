import { useState, useEffect, useCallback } from 'react';

import ProductDetails from '../../components/Products/ProductDetails/ProductDetails';
import LatestProducts from '../../components/Products/LatestProducts/LatestProducts';

import productsList from '../../products';

const ProductPage = ({ match, history }) => {
  const [product, setProduct] = useState(null);
  const productId = match.params.id;

  const fetchProduct = useCallback((id) => {
    for (const key in productsList)
      if (key === id) {
        setProduct({ ...productsList[key] });
      }
  }, []);

  useEffect(() => fetchProduct(productId), [fetchProduct, productId]);

  const buttonGoBackClickHandler = () => {
    history.push('/');
  };

  const renderProductPage = () => {
    console.log('renderProductPage - render()');
    let productPage = <h1>Hi</h1>;
    if (product) {
      productPage = (
        <ProductDetails
          buttonGoBackClickHandler={buttonGoBackClickHandler}
          {...product}
        />
      );
    }
    return productPage;
  };

  return (
    <main id="ProductPage">
      {renderProductPage()}
      <LatestProducts />
    </main>
  );
};

export default ProductPage;
