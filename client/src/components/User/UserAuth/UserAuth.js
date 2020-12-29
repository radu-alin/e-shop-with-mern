import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { defaultState as defaultStateSignIn } from './stateSignIn';
import { defaultState as defaultStateSignUp } from './stateSignUp';
import {
  formRenderInputsUtil,
  formInputsDataUtil,
  formAllInputsValidForValidFormUtil,
} from '../../../utils/formUtil';
import { userAuth, userResetError } from '../../../redux/actions/index';

import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import Spinner from '../../UI/Spinner/Spinner';
import FormContainer from '../../FormContainer/FormContainer';

import './UserAuth.scss';

const AuthForm = ({ isAuth, isLoading, isError, onUserLogin, onUserResetError }) => {
  const [isNewAccount, setIsNewAccount] = useState(false);
  const defaultState = !isNewAccount && defaultStateSignIn;
  const [formData, setFormData] = useState({ ...defaultState });

  useEffect(() => {
    return () => {
      if (isError) {
        onUserResetError();
      }
    };
  });

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const userData = formInputsDataUtil(formData.formInputsData);
    onUserLogin(userData, isNewAccount);
  };

  const onRegisterClickHandler = () => {
    setIsNewAccount(true);
    setFormData({ ...defaultStateSignUp });
  };
  const onLoginClickHandler = () => {
    setIsNewAccount(false);
    setFormData({ ...defaultStateSignIn });
  };

  const renderFormHandler = () =>
    formRenderInputsUtil(
      Input,
      formData,
      setFormData,
      formAllInputsValidForValidFormUtil
    );

  return (
    <section id="UserAuth">
      <div className="user-auth p-1">
        <FormContainer
          title={isNewAccount ? 'Sign Up' : 'Sign In'}
          message={[
            isAuth,
            !!isError,
            !!isError ? isError : isAuth ? 'Operation success.' : null,
          ]}
        >
          {renderFormHandler()}
          <div className="user-auth-spinner">
            {isLoading && <Spinner type="small" />}
          </div>
          <Button
            type="btn-gray-dark animation"
            onClickAction={onSubmitHandler}
            disabled={!formData.isFormValid}
          >
            {formData.isFormValid ? 'Submit' : ' Please enter your credentials.'}
          </Button>
          <hr></hr>
          {isNewAccount ? (
            <p className="user-auth-footer">
              Back to
              <span onClick={onLoginClickHandler}>&nbsp; Sign In </span>
            </p>
          ) : (
            <p className="user-auth-footer">
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
  onUserResetError: () => dispatch(userResetError()),
});

export default connect(mapStateToPros, mapDispatchToPros)(AuthForm);
