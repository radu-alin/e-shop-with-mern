import { useEffect } from 'react';
import { connect } from 'react-redux';

import { cartAddItem, productSelectedFetch } from '../../../redux/actions';

import { productSelectedDetailsAndQuantityAvailableSelector } from '../../../redux/selectors/cartSelector';

import ProductDetailsView from './ProductDetailsView/ProductDetailsView';

import Button from '../../UI/Button/Button';
import Spinner from '../../UI/Spinner/Spinner';
import Message from '../../UI/Message/Message';

const ProductDetails = ({
  productSelectedId,
  productDetails,
  isError,
  buttonGoBackClickHandler,
  onCartAddItem,
  onProductSelectedFetch,
}) => {
  const productDetailsIsNew = productSelectedId !== productDetails?._id;

  useEffect(() => {
    productDetailsIsNew && onProductSelectedFetch(productSelectedId);
  }, [onProductSelectedFetch, productDetailsIsNew, productSelectedId]);

  const productDetailsView = () => {
    if (isError) {
      return <Message type="danger" message={isError} />;
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
    <section id="ProductDetails">
      <div className="product-details my-1">
        <div className="product-details-header">
          <Button type="btn-gray-light" onClickAction={buttonGoBackClickHandler}>
            Go Back
          </Button>
        </div>
        {productDetailsView()}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  productDetails: productSelectedDetailsAndQuantityAvailableSelector(state),
  isError: state.productSelectedDetails,
});

const mapDispatchToProps = (dispatch) => ({
  onProductSelectedFetch: (id) => dispatch(productSelectedFetch(id)),
  onCartAddItem: (itemToAdd) => dispatch(cartAddItem(itemToAdd)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
