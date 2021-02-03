import { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { axiosInstance } from '../../../../axios';

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

  const [fileUploading, setFileUploading] = useState(false);
  const imageUploadRef = useRef(null);

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

  const uploadFileHandler = async () => {
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
      const { data } = await axiosInstance.post('/api/upload', formData, config);
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
      return onProductEdit(userToken, productId, productDetails);
    }
    const dataUpload = async () => {
      productDetails.image = await uploadFileHandler();
      onProductEdit(userToken, productId, productDetails);
    };
    dataUpload();
  };

  const formRender = () =>
    formRenderInputsUtil(
      Input,
      formData,
      setFormData,
      formOneInputValidForValidFormUtil,
      imageUploadRef
    );

  const {
    imageFile: { value: valueImageFile },
    image: {
      value: valueImageURL,
      elementConfig: { placeholder: placeholderImageURL },
    },
  } = formData.formInputsData;

  const imageProduct = (() => {
    const imageUpload = imageUploadRef?.current?.files[0];
    if (valueImageURL) {
      return valueImageURL;
    }
    if (imageUpload) {
      const image = URL.createObjectURL(imageUploadRef?.current?.files[0]);

      return image;
    }
    if (placeholderImageURL) return placeholderImageURL;
    if (!valueImageURL && !valueImageFile) return '';
    return '';
  })();

  const inputImageView =
    ((valueImageURL || !placeholderImageURL) && '-imgURL') ||
    (valueImageFile && '-imgUpload') ||
    '';

  const formContainerView = (
    <FormContainer
      title='Product edit'
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
