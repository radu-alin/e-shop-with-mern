import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {
  productEdit,
  productFetchClear,
  productEditReset,
} from '../../../../redux/actions/index';

import { defaultState } from './stateProductEdit';

import {
  formRenderInputsUtil,
  formInputsDataUtil,
  formOneInputValidForValidFormUtil,
} from '../../../../utils/formUtil.js';

import FormContainer from '../../../FormContainer/FormContainer';
import Input from '../../../UI/Input/Input';
import Spinner from '../../../UI/Spinner/Spinner';
import Button from '../../../UI/Button/Button';

const AdminProductEditView = ({
  userToken,
  productDetails,
  isLoading,
  isError,
  isSuccess,
  onProductEdit,
  onProductFetchClear,
  onProductEditReset,
}) => {
  let history = useHistory();
  const { _id: productId } = productDetails;
  const [formData, setFormData] = useState({
    ...defaultState(productDetails),
  });

  useEffect(() => {
    const productEditReset = () =>
      setTimeout(() => {
        onProductFetchClear();
        history.push(`/dashboard/product-list/${productId}`);
      }, 1500);
    isSuccess && productEditReset();
  }, [isSuccess, history, productId, onProductFetchClear]);

  useEffect(() => {
    return () => onProductEditReset();
  }, [onProductEditReset]);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const productDetails = formInputsDataUtil(formData.formInputsData);
    onProductEdit(userToken, productId, productDetails);
  };

  const formRender = () =>
    formRenderInputsUtil(
      Input,
      formData,
      setFormData,
      formOneInputValidForValidFormUtil
    );

  const imageProduct = (() => {
    const {
      value,
      elementConfig: { placeholder },
      isTouched,
    } = formData.formInputsData.image;
    if (isTouched) {
      return value;
    }
    return placeholder;
  })();
  const formContainerView = (
    <FormContainer
      title='Product edit'
      message={[!!isSuccess, !!isError, isSuccess || isError]}>
      {formRender()}
      <div className='admin-product-create-spinner'>
        {isLoading && <Spinner type='small' />}
      </div>
      <div className='admin-product-create-image'>
        <img
          src={`${imageProduct}`}
          alt={`${formData.formInputsData.name.elementConfig.placeholder}`}
        />
      </div>
      <div className='admin-product-create-button '>
        <Button
          type='btn-gray-dark animation'
          onClickAction={onSubmitHandler}
          disabled={!formData.isFormValid}>
          {formData.isFormValid ? 'Submit' : ' Enter product details.'}
        </Button>
      </div>
      <hr></hr>
      <p className='admin-product-create-footer'>All fields are required.</p>
    </FormContainer>
  );

  return (
    <section id='ProductAdd'>
      <div className='admin-product-create'>{formContainerView}</div>
    </section>
  );
};

const mapStateToProps = ({
  user: { userToken },
  productEdit: { isLoading, isError, isSuccess },
}) => ({
  userToken,
  isLoading,
  isError,
  isSuccess,
});

const mapDispatchToProps = (dispatch) => ({
  onProductEdit: (token, productId, productData) =>
    dispatch(productEdit(token, productId, productData)),
  onProductEditReset: () => dispatch(productEditReset()),
  onProductFetchClear: () => dispatch(productFetchClear()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminProductEditView);
