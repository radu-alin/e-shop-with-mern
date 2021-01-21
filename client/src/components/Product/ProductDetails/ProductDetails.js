import { useEffect } from 'react';
import { connect } from 'react-redux';

import { cartAddItem, productFetch } from '../../../redux/actions';

import { productDetailsAndQuantityAvailableSelector } from '../../../redux/selectors/cartSelector';

import ProductDetailsView from './ProductDetailsView/ProductDetailsView';

import Button from '../../UI/Button/Button';
import Spinner from '../../UI/Spinner/Spinner';
import Message from '../../UI/Message/Message';

const ProductDetails = ({
  productId,
  productDetails,
  isError,
  buttonGoBackClickHandler,
  onCartAddItem,
  onProductFetch,
}) => {
  const productDetailsIsNew = productId !== productDetails?._id;

  useEffect(() => {
    productDetailsIsNew && onProductFetch(productId);
  }, [onProductFetch, productDetailsIsNew, productId]);

  const productDetailsView = () => {
    if (isError) {
      return <Message type='danger' message={isError} />;
    }
    if (productDetailsIsNew) {
      return <Spinner />;
    }
    return (
      <ProductDetailsView
        productDetails={productDetails}
        onCartAddItem={onCartAddItem}
      />
    );
  };

  return (
    <section id='ProductDetails'>
      <div className='product-details my-1'>
        <div className='product-details-header'>
          <Button type='btn-gray-light' onClickAction={buttonGoBackClickHandler}>
            Go Back
          </Button>
        </div>
        {productDetailsView()}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  productDetails: productDetailsAndQuantityAvailableSelector(state),
  isError: state.productDetails,
});

const mapDispatchToProps = (dispatch) => ({
  onProductFetch: (id) => dispatch(productFetch(id)),
  onCartAddItem: (itemToAdd) => dispatch(cartAddItem(itemToAdd)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
