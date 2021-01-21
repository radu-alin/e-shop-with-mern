import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { productCreate, productCreateReset } from '../../../redux/actions/index';

import { defaultState } from './stateProductCreate';

import {
  formRenderInputsUtil,
  formInputsDataUtil,
  formAllInputsValidForValidFormUtil,
} from '../../../utils/formUtil.js';

import FormContainer from '../../FormContainer/FormContainer';
import Input from '../../UI/Input/Input';
import Spinner from '../../UI/Spinner/Spinner';
import Button from '../../UI/Button/Button';

import './AdminCreateProduct.scss';

const AdminProductCreate = ({
  userToken,
  isLoading,
  isSuccess,
  isError,
  onProductCreate,
  onProductCreateReset,
}) => {
  console.log('isLoading - ', isLoading);
  const [formData, setFormData] = useState({ ...defaultState });

  useEffect(() => {
    return () => onProductCreateReset();
  }, [onProductCreateReset]);

  useEffect(() => {
    const productCreateReset = () =>
      setTimeout(() => {
        onProductCreateReset();
        setFormData({ ...defaultState });
      }, 3000);
    isSuccess && productCreateReset();
  }, [isSuccess, onProductCreateReset]);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const productDetails = formInputsDataUtil(formData.formInputsData);
    onProductCreate(userToken, productDetails);
  };

  const formRender = () =>
    formRenderInputsUtil(
      Input,
      formData,
      setFormData,
      formAllInputsValidForValidFormUtil
    );

  const formContainerView = (
    <FormContainer
      title='Product create'
      message={[!!isSuccess, !!isError, isSuccess || isError]}>
      {formRender()}
      <div className='user-profile-spinner'>
        {isLoading || (isSuccess && <Spinner type='small' />)}
      </div>
      <div className='user-profile-button btn-red btn-apply'>
        <Button
          type='btn-gray-dark animation'
          onClickAction={onSubmitHandler}
          disabled={!formData.isFormValid}>
          {formData.isFormValid ? 'Submit' : ' Enter product details.'}
        </Button>
      </div>
      <hr></hr>
      <p className='user-profile-footer'>All fields are required.</p>
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
  productCreate: { isLoading, isError, isSuccess },
}) => ({
  userToken,
  isLoading,
  isError,
  isSuccess,
});

const mapDispatchToProps = (dispatch) => ({
  onProductCreate: (token, productDetails) =>
    dispatch(productCreate(token, productDetails)),
  onProductCreateReset: () => dispatch(productCreateReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminProductCreate);
