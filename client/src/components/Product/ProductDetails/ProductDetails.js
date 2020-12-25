import { useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import { cartAddProduct, productSelectedFetch } from '../../../redux/actions';

import Button from '../../UI/Button/Button';
import Rating from '../../Rating/Rating';
import Spinner from '../../UI/Spinner/Spinner';
import Message from '../../UI/Message/Message';
import './ProductDetails.scss';

const ProductDetails = ({
  productSelectedId,
  productDetails,
  isError,
  buttonGoBackClickHandler,
  onCartAddProduct,
  onProductSelectedFetch,
}) => {
  const productDetailsRef = useRef(productDetails);
  productDetailsRef.current = productDetails;

  const productDetailsClear = () => {
    if (productSelectedId !== productDetails._id) {
      productDetailsRef.current = null;
    }
    return productDetailsRef.current;
  };

  productDetails && productDetailsClear();

  useEffect(() => {
    onProductSelectedFetch(productSelectedId);
  }, [onProductSelectedFetch, productSelectedId]);

  const productDetailsView = () => (
    <section id="ProductDetails">
      <div className="product-details-content">
        <div className="product-details-content-image">
          <img src={productDetails.image} alt="product" />
        </div>
        <div className="product-details-content-text-left">
          <h3>{productDetails.name}</h3>
          <Rating
            value={productDetails.rating}
            numReviews={productDetails.numReviews}
          />
          <hr className="my-1"></hr>
          <h3>${productDetails.price}</h3>
          <hr></hr>
          <p>{productDetails.description}</p>
        </div>
        <div className="product-details-content-text-right">
          <div className="product-details-content-text-right-price">
            <span>Price:</span>
            <span>
              <strong> ${productDetails.price}</strong>
            </span>
          </div>
          <hr></hr>
          <div className="product-details-content-text-right-stock">
            <span>Status: </span>
            <span>
              <strong>
                {productDetails.countInStock ? 'In Stock' : 'Out of Stock'}
              </strong>
            </span>
          </div>
          <hr></hr>
          <Button
            onClickAction={() => onCartAddProduct(productDetails)}
            type="btn-gray-dark "
            disabled={productDetails.countInStock <= 0}
          >
            {productDetails.countInStock <= 0 ? 'OUT OF STOCK' : 'ADD TO CHART'}
          </Button>
        </div>
      </div>
    </section>
  );

  const renderProductDetails = isError ? (
    <Message type={isError && 'error'} message={isError} />
  ) : !productDetailsRef.current ? (
    <Spinner />
  ) : (
    productDetailsView()
  );

  return (
    <section id="ProductDetails">
      <div className="product-details my-1">
        <div className="product-details-header">
          <Button type="btn-gray-light" onClickAction={buttonGoBackClickHandler}>
            Go Back
          </Button>
        </div>
        {renderProductDetails}
      </div>
    </section>
  );
};

const mapStateToProps = ({
  productSelected: { productSelectedDetails: productDetails, isError },
}) => ({
  productDetails,
  isError,
});

const mapDispatchToProps = (dispatch) => ({
  onProductSelectedFetch: (id) => dispatch(productSelectedFetch(id)),
  onCartAddProduct: (product) => dispatch(cartAddProduct(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
