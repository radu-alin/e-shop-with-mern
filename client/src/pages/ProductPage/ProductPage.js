import { useState, useEffect } from 'react';
import axios from 'axios';

import ProductDetails from '../../components/Products/ProductDetails/ProductDetails';
import LatestProducts from '../../components/Products/LatestProducts/LatestProducts';

const ProductPage = ({ match, history }) => {
  const [productSelected, setProductSelected] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get('/products/' + match.params.id);
        setProductSelected(res.data);
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
