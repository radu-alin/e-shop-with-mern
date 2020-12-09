import { useEffect, useState, memo } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

import ProductOverview from '../ProductOverview/ProductOverview';

import './LatestProducts.scss';

const LatestProducts = (props) => {
  const [latestProducts, setLatestProducts] = useState(null);

  const convertObjectIntoArray = (obj) => {
    const array = [];
    for (const key in obj) {
      if (array.length <= 3) {
        array.push({ productId: key, ...obj[key] });
      }
    }
    return array;
  };

  useEffect(() => {
    const fetchLatestProducts = async () => {
      try {
        const res = await axios.get('/products');
        const productsArray = convertObjectIntoArray(res.data);
        setLatestProducts(productsArray);
      } catch (err) {
        console.log('err - ', err);
      }
    };
    fetchLatestProducts();
  }, []);

  const renderLatestProductsHandler = () => {
    let renderlatestProducts = <h1>Hello</h1>;
    if (latestProducts) {
      renderlatestProducts = latestProducts.map((latestProduct) => {
        return (
          <Link
            key={latestProduct.productId}
            to={'/products/' + [latestProduct.productId]}
          >
            <ProductOverview {...latestProduct} />
          </Link>
        );
      });
    }
    return renderlatestProducts;
  };

  return (
    <section id="LatestProducts">
      <div className="latest-products py-1">
        <h3 className="bg-gray-light">LatestProducts</h3>
        <div className="latest-products-products">
          {renderLatestProductsHandler()}
        </div>
      </div>
    </section>
  );
};

export default memo(LatestProducts);
