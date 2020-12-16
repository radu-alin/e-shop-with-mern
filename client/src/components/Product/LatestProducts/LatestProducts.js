import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Spinner from '../../UI/Spinner/Spinner';

import { productListFetch } from '../../../redux/actions/index';

import ProductOverview from '../ProductOverview/ProductOverview';

import './LatestProducts.scss';

const LatestProducts = ({ productsAll, isError, onProductListFetch }) => {
  useEffect(() => {
    onProductListFetch();
  }, [onProductListFetch]);

  const renderLatestProductsHandler = () =>
    !productsAll ? (
      <Spinner />
    ) : isError ? (
      <h3>{isError}</h3>
    ) : (
      <div className="latest-products-product">
        {productsAll.map((product) => {
          return (
            <Link key={product._id} to={'/products/' + product._id}>
              <ProductOverview product={product} />
            </Link>
          );
        })}
      </div>
    );

  return (
    <section id="LatestProducts">
      <div className="latest-products py-1">
        <h3 className="bg-gray-light">LatestProducts</h3>
        {renderLatestProductsHandler()}
      </div>
    </section>
  );
};

const mapStateToProps = ({ productList: { productsAll, isError } }) => ({
  productsAll,
  isError,
});

const mapDispatchToProps = (dispatch) => ({
  onProductListFetch: () => dispatch(productListFetch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LatestProducts);
