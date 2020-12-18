import { useState } from 'react';
import { connect } from 'react-redux';

import { defaultState as defaultStateSignIn } from './stateSignIn';
import { defaultState as defaultStateSignUp } from './stateSignUp';
import { formRenderInputsUtil, formInputsDataUtil } from '../../../utils/formUtil';
import { userAuth } from '../../../redux/actions/index';

import Input from '../../UI/Input/Input';
import Button from '../../UI/Button /Button';
import Spinner from '../../UI/Spinner/Spinner';
import FormAuthContainer from '../AuthFormContainer/FormAuthContainer';

import './AuthForm.scss';

const AuthForm = ({ isLoading, isError, onUserLogin }) => {
  const [isNewAccount, setIsNewAccount] = useState(false);
  const defaultState = !isNewAccount && defaultStateSignIn;
  const [formData, setFormData] = useState({ ...defaultState });
  console.log('defaultState - ', defaultState);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const userData = formInputsDataUtil(formData.formInputsData);
    console.log('data - ', userData);
    onUserLogin(userData, isNewAccount);
  };

  const renderFormHandler = () => formRenderInputsUtil(Input, formData, setFormData);

  const onRegisterClickHandler = () => {
    setIsNewAccount(true);
    setFormData({ ...defaultStateSignUp });
  };

  return (
    <section id="SignInForm">
      <FormAuthContainer
        title={isNewAccount ? 'Sign Up' : 'Sign In'}
        message={isError}
      >
        <div className="auth-from">
          {renderFormHandler()}
          <div className="auth-from-spinner">
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
          {!isNewAccount && (
            <p className="auth-from-footer">
              If you don't have an account please
              <span onClick={onRegisterClickHandler}>&nbsp; REGISTER</span>
            </p>
          )}
        </div>
      </FormAuthContainer>
    </section>
  );
};

const mapStateToPros = ({ user: { isLoading, isError } }) => ({
  isLoading,
  isError,
});

const mapDispatchToPros = (dispatch) => ({
  onUserLogin: (userData, isNewAccount) =>
    dispatch(userAuth(userData, isNewAccount)),
});

export default connect(mapStateToPros, mapDispatchToPros)(AuthForm);
