import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Spinner from '../../UI/Spinner/Spinner';

import {
  fetchProductList,
  fetchProductListResetSpinner,
} from '../../../redux/actions/index';

import ProductOverview from '../ProductOverview/ProductOverview';

import './LatestProducts.scss';

const LatestProducts = ({
  productsAll,
  isLoading,
  isError,
  onFetchProductList,
  onFetchProductListResetSpinner,
}) => {
  useEffect(() => {
    onFetchProductList();
    return () => onFetchProductListResetSpinner();
  }, [onFetchProductList, onFetchProductListResetSpinner]);

  const renderLatestProductsHandler = () => {
    let renderlatestProducts = isLoading ? (
      <Spinner />
    ) : isError ? (
      <h3>{isError}</h3>
    ) : productsAll ? (
      <div className="latest-products-products">
        {productsAll.map((latestProduct) => {
          return (
            <Link key={latestProduct._id} to={'/product/' + latestProduct._id}>
              <ProductOverview {...latestProduct} />
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
  onFetchProductList: () => dispatch(fetchProductList()),
  onFetchProductListResetSpinner: () => dispatch(fetchProductListResetSpinner()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LatestProducts);
