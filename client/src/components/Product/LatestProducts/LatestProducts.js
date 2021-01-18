import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { productListFetch } from '../../../redux/actions/index';

import Spinner from '../../UI/Spinner/Spinner';
import Message from '../../UI/Message/Message';
import ProductOverview from '../ProductOverview/ProductOverview';

import './LatestProducts.scss';

const LatestProducts = ({ productsAll, isError, onProductListFetch }) => {
  useEffect(() => {
    onProductListFetch();
  }, [onProductListFetch]);

  const latestProductsRender = () =>
    productsAll.map((product) => (
      <Link key={product._id} to={'/products/' + product._id}>
        <ProductOverview product={product} />
      </Link>
    ));

  const latestProductsView = () => {
    if (isError) {
      return <Message type='danger' message={isError} />;
    }
    if (productsAll.length === 0) {
      return <Spinner />;
    }

    return <div className='latest-products-product'>{latestProductsRender()}</div>;
  };

  return (
    <section id='LatestProducts'>
      <div className='latest-products py-1'>
        <h3 className='bg-gray-medium'>Latest Products</h3>
        {latestProductsView()}
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
