import { useState, useEffect } from 'react';
import axios from 'axios';

import ProductDetails from '../../components/Products/ProductDetails/ProductDetails';
import LatestProducts from '../../components/Products/LatestProducts/LatestProducts';

const ProductPage = ({ match, history }) => {
  const [productSelected, setProductSelected] = useState(null);
  console.log('params - ', match.params.id);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get('/api/products/' + match.params.id);
        setProductSelected(data);
      } catch (err) {}
    };
    fetchProduct();
  }, [match.params.id]);

  const buttonGoBackClickHandler = () => {
    history.push('/');
  };

  const renderProductPageHandler = () => {
    let productPage = <h1>Hi</h1>;
    if (productSelected) {
      productPage = (
        <ProductDetails
          buttonGoBackClickHandler={buttonGoBackClickHandler}
          {...productSelected}
        />
      );
    }
    return productPage;
  };

  return (
    <main id="ProductPage">
      {renderProductPageHandler()}
      <LatestProducts />
    </main>
  );
};

export default ProductPage;
