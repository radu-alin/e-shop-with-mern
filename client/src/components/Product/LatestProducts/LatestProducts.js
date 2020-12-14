import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Spinner from '../../UI/Spinner/Spinner';

import { productListFetch } from '../../../redux/actions/index';

import ProductOverview from '../ProductOverview/ProductOverview';

import './LatestProducts.scss';

const LatestProducts = ({ productsAll, isLoading, isError, onProductListFetch }) => {
  useEffect(() => {
    onProductListFetch();
  }, [onProductListFetch]);

  const renderLatestProductsHandler = () => {
    let renderlatestProducts = isLoading ? (
      <Spinner />
    ) : isError ? (
      <h3>{isError}</h3>
    ) : productsAll ? (
      <div className="latest-products-products">
        {productsAll.map((product) => {
          return (
            <Link key={product._id} to={'/product/' + product._id}>
              <ProductOverview product={product} />
            </Link>
          );
        })}
      </div>
    ) : null;
    return renderlatestProducts;
  };

  return (
    <section id="LatestProducts">
      <div className="latest-products py-1">
        <h3 className="bg-gray-light">LatestProducts</h3>
        {renderLatestProductsHandler()}
      </div>
    </section>
  );
};

const mapStateToProps = ({ productList: { productsAll, isLoading, isError } }) => ({
  productsAll,
  isLoading,
  isError,
});

const mapDispatchToProps = (dispatch) => ({
  onProductListFetch: () => dispatch(productListFetch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LatestProducts);
