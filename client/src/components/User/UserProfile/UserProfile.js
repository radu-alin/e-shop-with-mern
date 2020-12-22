import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { defaultState } from './stateUserProfile';
import {
  formRenderInputsUtil,
  oneInputValidForValidForm,
} from '../../../utils/formUtil.js';
import { userProfileFetch } from '../../../redux/actions/index';

import FormContainer from '../../FormContainer/FormContainer';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import Spinner from '../../UI/Spinner/Spinner';

import './UserProfile.scss';

const UserProfile = ({
  isAuth,
  userId,
  userToken,
  name,
  email,
  isLoading,
  isError,
  onUserProfileFetch,
}) => {
  const [formData, setFormData] = useState({
    ...defaultState(),
  });
  const [editProfile, setEditProfile] = useState(false);

  useEffect(() => !name && userId && onUserProfileFetch(userId, userToken), [
    onUserProfileFetch,
    userId,
    userToken,
    name,
  ]);

  useEffect(() => name && setFormData({ ...defaultState(name, email) }), [
    name,
    email,
  ]);

  const renderFormHandler = () =>
    formRenderInputsUtil(Input, formData, setFormData, oneInputValidForValidForm);

  const editIconClickHandler = () => setEditProfile(true);

  const formContainerView = () => (
    <FormContainer
      title="My Profile"
      message={[
        isAuth,
        !!isError,
        !!isError ? isError : isAuth ? 'Operation done successfully.' : null,
      ]}
      editIconClickAction={editIconClickHandler}
    >
      {renderFormHandler()}
      <div className="user-profile-spinner">
        {isLoading && <Spinner type="small" />}
      </div>
      <div className="user-profile-button">
        {editProfile ? (
          <Button
            type="btn-gray-dark"
            // onClickAction={onSubmitHandler}
            disabled={!formData.isFormValid}
          >
            {formData.isFormValid ? 'Submit' : ' Please enter your new credentials.'}
          </Button>
        ) : null}
      </div>
      <hr></hr>
    </FormContainer>
  );

  const renderFormContainerHandler = () =>
    !name ? <Spinner /> : isError ? <h3>{isError}</h3> : formContainerView();

  return (
    <section id="UserProfile">
      <div className="user-profile">{renderFormContainerHandler()}</div>
    </section>
  );
};

const mapStateToProps = ({
  user: { userId, userToken, isError },
  userProfile: { name, email },
}) => ({
  isAuth: !!userToken,
  userId,
  userToken,
  name,
  email,
  isError,
});
const mapDispatchToProps = (dispatch) => ({
  onUserProfileFetch: (userId, userToken) =>
    dispatch(userProfileFetch(userId, userToken)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);

// {
//   editProfile ? (
//     <p className="auth-from-footer">
//       Back to
//       <span onClick={onLoginClickHandler}>&nbsp; Sign In </span>
//     </p>
//   ) : (
//     <p className="auth-from-footer">
//       If you don't have an account please
//       <span onClick={onRegisterClickHandler}>&nbsp; REGISTER</span>
//     </p>
//   );
// }
