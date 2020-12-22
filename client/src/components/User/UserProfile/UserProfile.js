import { useState, useEffect, useRef } from 'react';
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

  const firstInputRef = useRef(null);
  useEffect(() => editProfile && firstInputRef.current.focus(), [editProfile]);

  useEffect(() => !name && userId && onUserProfileFetch(userId, userToken), [
    onUserProfileFetch,
    userId,
    userToken,
    name,
  ]);

  useEffect(() => name && setFormData({ ...defaultState(name, email) }), [
    name,
    email,
    editProfile,
  ]);

  const renderFormHandler = () =>
    formRenderInputsUtil(
      Input,
      firstInputRef,
      formData,
      setFormData,
      oneInputValidForValidForm
    );

  const editTrueIconClickHandler = () => setEditProfile(true);
  const editFalseIconClickHandler = () => setEditProfile(false);

  const formContainerView = () => (
    <FormContainer
      title="My Profile"
      message={[
        isAuth,
        !!isError,
        !!isError ? isError : isAuth ? 'Operation done successfully.' : null,
      ]}
      editIconClickAction={editTrueIconClickHandler}
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
      {editProfile && (
        <p className="user-profile-footer">
          Keep old data <span onClick={editFalseIconClickHandler}>&nbsp; BACK </span>
        </p>
      )}
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
