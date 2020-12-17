import { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { defaultState } from './stateSignIn';
import { renderInputs } from '../../../utils/formUtil';
import { userLogin } from '../../../redux/actions/index';

import Input from '../../UI/Input/Input';
import Button from '../../UI/Button /Button';
import Spinner from '../../UI/Spinner/Spinner';
import FormAuthContainer from '../AuthFormContainer/FormAuthContainer';

import './SignIn.scss';

const SignIn = ({ isLoading, isError, onUserLogin }) => {
  const [formData, setFormData] = useState({ ...defaultState });

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const email = formData.formInputsData.email.value;
    const password = formData.formInputsData.password.value;
    onUserLogin(email, password);
  };

  const renderFormHandler = () => renderInputs(Input, formData, setFormData);

  return (
    <section id="SignInForm">
      <FormAuthContainer title="Sign In" message={isError}>
        <div className="sign-in-form">
          {renderFormHandler()}
          <div className="sign-in-form-spinner">
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
          <p className="sign-in-form-footer">
            If you don't have an account please <Link to="/register"> REGISTER</Link>
          </p>
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
  onUserLogin: (email, password) => dispatch(userLogin(email, password)),
});

export default connect(mapStateToPros, mapDispatchToPros)(SignIn);
