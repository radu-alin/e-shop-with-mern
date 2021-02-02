import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams, useLocation, useHistory } from 'react-router-dom';

import {
  formRenderInputsUtil,
  formInputsDataUtil,
  formAllInputsValidForValidFormUtil,
} from '../../../utils/formUtil.js';

import {
  productReviewCreate,
  productReviewCreateReset,
  productFetchUpdateReviews,
} from '../../../redux/actions/index';

import { defaultState } from './stateProductReview';

import ProductReviewList from '../ProductReviews/ProductReviewList/ProductReviewList';
import Message from '../../UI/Message/Message.js';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import Spinner from '../../UI/Spinner/Spinner';

import './ProductReviews.scss';

const ProductReviews = ({
  productReviews,
  userId,
  userToken,
  isLoading,
  isError,
  isSuccess,
  onProductReviewCreate,
  onProductReviewCreateReset,
  onProductFetchUpdateReviews,
}) => {
  const [addReview, setAddReview] = useState(false);
  const [infoMessage, setInfoMessage] = useState(false);
  const [formData, setFormData] = useState(defaultState);
  const {
    formInputsData: {
      rating: { value: selectedRating },
    },
  } = formData;
  const { lastReview } = isSuccess;
  let { id: productId } = useParams();
  let location = useLocation();
  let history = useHistory();

  if (isError) {
    setInfoMessage({
      messageType: 'danger',
      messageContent: isError,
    });
  }

  const addReviewButtonHandler = () => {
    console.log('!userToken - ', !userToken);
    if (!userToken) {
      history.push({
        pathname: '/auth',
        state: { from: location },
      });
    }
    const userReviewedTrue = productReviews.some((review) => {
      return review.user === userId;
    });
    if (userReviewedTrue) {
      return setInfoMessage({
        messageType: 'danger',
        messageContent: 'Sorry but you reviewed this product.',
      });
    }
    setAddReview(true);
  };

  useEffect(() => {
    const productReviewReset = () => {
      setInfoMessage({
        messageType: 'success',
        messageContent: 'Review created.  Thank you.',
      });
      setTimeout(() => {
        onProductFetchUpdateReviews(lastReview);
        onProductReviewCreateReset();
        setAddReview(false);
        setInfoMessage(false);
        setFormData(defaultState);
      }, 1500);
    };
    isSuccess && productReviewReset();
  }, [
    productId,
    isSuccess,
    onProductReviewCreateReset,
    onProductFetchUpdateReviews,
    lastReview,
  ]);

  const formRender = () =>
    formRenderInputsUtil(
      Input,
      formData,
      setFormData,
      formAllInputsValidForValidFormUtil
    );

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const review = formInputsDataUtil(formData.formInputsData);
    onProductReviewCreate(userToken, productId, review);
  };

  const reviewForm = () => (
    <div className='product-reviews-form'>
      {formRender()}
      <h4>Rating: {selectedRating || '2.5'}</h4>
      <div className='product-reviews-form-spinner'>
        {isLoading && <Spinner type='small' />}
      </div>
      <div className='product-reviews-form-button'>
        <Button
          type='btn btn-gray-dark animation'
          onClickAction={onSubmitHandler}
          disabled={!formData.isFormValid}>
          {formData.isFormValid
            ? 'Submit review.'
            : ' Enter comment and select rating.'}
        </Button>
      </div>
    </div>
  );

  const productReviewsListView =
    productReviews.length === 0 ? (
      <h1>This product don't have any review.</h1>
    ) : (
      <ProductReviewList productReviews={productReviews} />
    );

  return (
    <section id='ReviewList'>
      <div className='product-reviews'>
        <hr></hr>
        <div className='product-reviews-header'>
          <h1>Product reviews</h1>
          <Button type='btn-gray-light' onClickAction={addReviewButtonHandler}>
            + review{' '}
          </Button>
        </div>
        <div className='product-reviews-message my-1'>
          {infoMessage && (
            <Message
              type={infoMessage.messageType}
              message={infoMessage.messageContent}
            />
          )}
        </div>
        {productReviewsListView}
      </div>
      {addReview && reviewForm()}
    </section>
  );
};

const mapStateToProps = ({
  user: { userId, userToken },
  product: { productReviews },
  productReview: { isLoading, isError, isSuccess },
}) => ({
  userId,
  userToken,
  productReviews,
  isLoading,
  isError,
  isSuccess,
});

const mapDispatchToProps = (dispatch) => ({
  onProductReviewCreate: (token, productId, review) =>
    dispatch(productReviewCreate(token, productId, review)),
  onProductReviewCreateReset: () => dispatch(productReviewCreateReset()),
  onProductFetchUpdateReviews: (review) =>
    dispatch(productFetchUpdateReviews(review)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductReviews);
