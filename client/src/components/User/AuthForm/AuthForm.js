import { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import { defaultState as defaultStateSignIn } from './stateSignIn';
import { defaultState as defaultStateSignUp } from './stateSignUp';
import {
  formRenderInputsUtil,
  allInputsValidForValidForm,
  formInputsDataUtil,
} from '../../../utils/formUtil';
import { userAuth } from '../../../redux/actions/index';

import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import Spinner from '../../UI/Spinner/Spinner';
import FormContainer from '../../FormContainer/FormContainer';

import './AuthForm.scss';

const AuthForm = ({ isAuth, isLoading, isError, onUserLogin }) => {
  const [isNewAccount, setIsNewAccount] = useState(false);
  const defaultState = !isNewAccount && defaultStateSignIn;
  const [formData, setFormData] = useState({ ...defaultState });

  const firstInputRef = useRef(null);
  useEffect(() => firstInputRef.current.focus(), [isNewAccount]);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const userData = formInputsDataUtil(formData.formInputsData);
    onUserLogin(userData, isNewAccount);
  };

  const renderFormHandler = () =>
    formRenderInputsUtil(
      Input,
      firstInputRef,
      formData,
      setFormData,
      allInputsValidForValidForm
    );

  const onRegisterClickHandler = () => {
    setIsNewAccount(true);
    setFormData({ ...defaultStateSignUp });
  };
  const onLoginClickHandler = () => {
    setIsNewAccount(false);
    setFormData({ ...defaultStateSignIn });
  };

  return (
    <section id="SignInForm">
      <div className="auth-form">
        <FormContainer
          title={isNewAccount ? 'Sign Up' : 'Sign In'}
          message={[
            isAuth,
            !!isError,
            !!isError ? isError : isAuth ? 'Operation success.' : null,
          ]}
        >
          {renderFormHandler()}
          <div className="auth-form-spinner">
            {isLoading && <Spinner type="small" />}
          </div>
          <Button
            type="btn-gray-dark"
            onClickAction={onSubmitHandler}
            disabled={!formData.isFormValid}
          >
            {formData.isFormValid ? 'Submit' : ' Please enter your credentials.'}
          </Button>
          <hr></hr>
          {isNewAccount ? (
            <p className="auth-form-footer">
              Back to
              <span onClick={onLoginClickHandler}>&nbsp; Sign In </span>
            </p>
          ) : (
            <p className="auth-form-footer">
              If you don't have an account please
              <span onClick={onRegisterClickHandler}>&nbsp; REGISTER</span>
            </p>
          )}
        </FormContainer>
      </div>
    </section>
  );
};

const mapStateToPros = ({ user: { userToken, isLoading, isError } }) => ({
  isAuth: !!userToken,
  isLoading,
  isError,
});

const mapDispatchToPros = (dispatch) => ({
  onUserLogin: (userData, isNewAccount) =>
    dispatch(userAuth(userData, isNewAccount)),
});

export default connect(mapStateToPros, mapDispatchToPros)(AuthForm);
