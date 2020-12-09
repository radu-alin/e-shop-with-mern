import { Link } from 'react-router-dom';

import productsList from '../../../products';

import ProductOverview from '../ProductOverview/ProductOverview';

import './LatestProducts.scss';

const LatestProducts = (props) => {
  const renderProducts = () => {
    const products = [];
    for (const key in productsList) {
      if (products.length <= 3) {
        products.push(
          <Link key={key} to={'/products/' + [key]}>
            <ProductOverview {...productsList[key]} />
          </Link>
        );
      }
    }
    return products;
  };
  return (
    <section id="LatestProducts">
      <div className="latest-products py-1">
        <h3 className="bg-gray-light">LatestProducts</h3>
        <div className="latest-products-products">{renderProducts()}</div>
      </div>
    </section>
  );
};

export default LatestProducts;
