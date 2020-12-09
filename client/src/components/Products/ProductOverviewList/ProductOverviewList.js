import ProductOverview from '../ProductOverview/ProductOverview';

import productsList from '../../../products';

import './ProductOverviewList.scss';

const ProductOverviewList = () => {
  const renderProducts = () => {
    const products = [];
    for (const key in productsList) {
      products.push(<ProductOverview key={key} {...productsList[key]} />);
    }
    return products;
  };
  return (
    <section id="ProductOverviewList">
      <div className="product-overview-list">
        <h2 className="title bg-gray-light">Product List</h2>
        <div className="items">{renderProducts()}</div>
      </div>
    </section>
  );
};

export default ProductOverviewList;
