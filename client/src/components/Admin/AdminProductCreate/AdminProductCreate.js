import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
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
  const [formData, setFormData] = useState({ ...defaultState });
  const [fileUploading, setFileUploading] = useState(false);
  const imageUploadRef = useRef(null);

  useEffect(() => {
    return () => onProductCreateReset();
  }, [onProductCreateReset]);

  useEffect(() => {
    const productCreateReset = () =>
      setTimeout(() => {
        onProductCreateReset();
        setFormData({ ...defaultState });
      }, 1500);
    isSuccess && productCreateReset();
  }, [isSuccess, onProductCreateReset]);

  const uploadFileHandler = async () => {
    console.log('uploadFileHandle - executed()');
    setFileUploading(true);
    const file = imageUploadRef?.current?.files[0];
    const formData = new FormData();
    formData.append('image', file);
    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };
      const { data } = await axios.post('/api/upload', formData, config);
      console.log('uploadData - finished - data - ', data);
      setFileUploading(false);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    let productDetails = formInputsDataUtil(formData.formInputsData);
    if (productDetails.image) {
      return onProductCreate(userToken, productDetails);
    }
    const dataUpload = async () => {
      productDetails.image = await uploadFileHandler();
      onProductCreate(userToken, productDetails);
    };
    dataUpload();
  };

  const formRender = () =>
    formRenderInputsUtil(
      Input,
      formData,
      setFormData,
      formAllInputsValidForValidFormUtil,
      imageUploadRef
    );

  const imageProduct = (() => {
    const imageUpload = imageUploadRef?.current?.files[0];
    const {
      imageFile: { value: valueImageFile },
      image: { value: valueImageURL },
    } = formData.formInputsData;
    if (!valueImageURL && !valueImageFile) return '';
    if (valueImageURL) {
      return valueImageURL;
    }
    if (imageUpload) {
      const image = URL.createObjectURL(imageUploadRef?.current?.files[0]);

      return image;
    }
    return '';
  })();

  const inputImageView =
    (formData.formInputsData.image?.value && '-imgURL') ||
    (formData.formInputsData.imageFile?.value && '-imgUpload') ||
    '';

  const formContainerView = (
    <FormContainer
      title='Product create'
      message={[!!isSuccess, !!isError, isSuccess || isError]}>
      {formRender()}
      <div className='admin-product-create-loader'>
        <div className='admin-product-create-loader-image'>
          <img
            src={`${imageProduct}`}
            alt={`${formData.formInputsData.name.value}`}
          />
        </div>
        <div className='admin-product-create-loader-spinner'>
          {(isLoading || isSuccess || fileUploading) && <Spinner type='small' />}
        </div>
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
      <div className={`admin-product-create${inputImageView}`}>
        {formContainerView}
      </div>
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
