import { useState, useEffect, useRef, useCallback } from 'react';
import { connect } from 'react-redux';

import { defaultState } from './stateCheckoutShipping';

import {
  formRenderInputsUtil,
  formInputsDataUtil,
  formAllInputsValidForValidFormUtil,
} from '../../../utils/formUtil';

import { cartSaveShippingAddress } from '../../../redux/actions/index';

import { localStorageSetItemUtil } from '../../../utils/localStorageUtil';

import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import FormContainer from '../../FormContainer/FormContainer';

import './CheckoutShipping.scss';

const CheckoutShipping = ({
  address,
  city,
  postalCode,
  country,
  onCartSaveShippingAddress,
  history,
}) => {
  const [formData, setFormData] = useState({ ...defaultState() });
  const [editShipping, setEditShipping] = useState(false);
  const firstInputRef = useRef(null);

  const editTrueIconClickHandler = useCallback(() => {
    setEditShipping(true);
    firstInputRef.current.focus();
  }, [setEditShipping, firstInputRef]);

  const editFalseIconClickHandler = useCallback(() => setEditShipping(false), [
    setEditShipping,
  ]);

  useEffect(() => {
    if (address) {
      setFormData({ ...defaultState(address, city, postalCode, country) });
    } else {
      editTrueIconClickHandler();
    }
  }, [address, city, postalCode, country, editTrueIconClickHandler]);

  const renderFormHandler = () =>
    formRenderInputsUtil(
      Input,
      formData,
      setFormData,
      formAllInputsValidForValidFormUtil,
      firstInputRef
    );

  const restorePreviousShippingAddress = () => {
    editFalseIconClickHandler();
    setFormData({ ...defaultState(address, city, postalCode, country) });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const shippingAddress = formInputsDataUtil(formData.formInputsData);
    localStorageSetItemUtil('shippingAddress', shippingAddress);
    onCartSaveShippingAddress(shippingAddress);
    history.push('/checkout/payment');
  };

  const shippingPageFooterView = !editShipping ? (
    <p className="shipping-page-footer">
      Modify shipping addrees:
      <span onClick={editTrueIconClickHandler}>
        &nbsp; edit &nbsp;
        <i className="far fa-edit"></i>
      </span>
    </p>
  ) : address ? (
    <p className="user-auth-footer">
      Back to previous address:
      <span onClick={restorePreviousShippingAddress}>
        &nbsp; undo <i className="fas fa-undo"></i>
      </span>
    </p>
  ) : (
    <p className="user-auth-footer">
      <span>All fields are required</span>
    </p>
  );

  return (
    <section id="ShippingPage">
      <div className={`shipping-page${editShipping ? '-edit' : ''}`}>
        <FormContainer title="Shipping details" message={[]}>
          {renderFormHandler()}
          <div className="shipping-page-spinner"></div>
          <Button
            type="btn-gray-dark"
            onClickAction={onSubmitHandler}
            disabled={!formData.isFormValid}
          >
            {formData.isFormValid ? 'Next Step' : ' Enter shipping details.'}
          </Button>
          <hr></hr>
          {shippingPageFooterView}
        </FormContainer>
      </div>
    </section>
  );
};

const mapStateToProps = ({
  cart: {
    shippingAddress: { address, city, postalCode, country },
  },
}) => ({ address, city, postalCode, country });

const mapDispatchToProps = (dispatch) => ({
  onCartSaveShippingAddress: (shippingAddress) =>
    dispatch(cartSaveShippingAddress(shippingAddress)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutShipping);
