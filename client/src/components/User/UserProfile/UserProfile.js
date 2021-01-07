import { useState, useEffect, useRef, useCallback } from 'react';
import { connect } from 'react-redux';

import { defaultState } from './stateUserProfile';
import {
  formRenderInputsUtil,
  formInputsDataUtil,
  formOneInputValidForValidFormUtil,
} from '../../../utils/formUtil.js';
import {
  userProfileFetch,
  userProfileFetchedClear,
  userProfileUpdate,
  userProfileUpdateClear,
} from '../../../redux/actions/index';

import FormContainer from '../../FormContainer/FormContainer';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import Spinner from '../../UI/Spinner/Spinner';
import Message from '../../UI/Message/Message';

import './UserProfile.scss';

const UserProfile = ({
  userToken,
  name,
  email,
  isLoadingUpdate,
  isErrorFetch,
  isUpdated,
  isErrorUpdate,
  onUserProfileFetch,
  onUserProfileFetchedClear,
  onUserProfileUpdate,
  onUserProfileUpdateClear,
}) => {
  const [formData, setFormData] = useState({
    ...defaultState(name, email),
  });
  const [editProfile, setEditProfile] = useState(false);
  const firstInputRef = useRef(null);
  const isUpdatedRef = useRef(isUpdated);
  isUpdatedRef.current = isUpdated;

  useEffect(() => {
    userToken && !name && onUserProfileFetch(userToken);
  }, [userToken, name, onUserProfileFetch]);

  const editTrueIconClickHandler = useCallback(() => {
    setEditProfile(true);
    firstInputRef.current.focus();
  }, [setEditProfile, firstInputRef]);

  const editFalseIconClickHandler = useCallback(() => setEditProfile(false), [
    setEditProfile,
  ]);

  const onSubmitHandler = (event) => {
    const updateUserState = () =>
      setTimeout(() => {
        if (isUpdatedRef.current) {
          const clearUser = () =>
            setTimeout(() => {
              onUserProfileFetchedClear();
            }, 1000);
          setEditProfile(false);
          onUserProfileUpdateClear();
          clearUser();
        }
      }, 1000);
    event.preventDefault();
    const userData = formInputsDataUtil(formData.formInputsData);
    onUserProfileUpdate(userToken, userData);
    updateUserState();
  };

  const formRender = () =>
    formRenderInputsUtil(
      Input,
      formData,
      setFormData,
      formOneInputValidForValidFormUtil,
      firstInputRef
    );

  const formContainerView = (
    <FormContainer
      title="My Profile"
      message={[
        !!isUpdated,
        !!isErrorUpdate,
        !!isErrorUpdate
          ? isErrorUpdate
          : isUpdated
          ? 'Operation done successfully.'
          : null,
      ]}
      editIconClickAction={editTrueIconClickHandler}
    >
      {formRender()}
      <div className="user-profile-spinner">
        {isLoadingUpdate && <Spinner type="small" />}
      </div>
      <div className="user-profile-button btn-red btn-apply">
        {editProfile ? (
          <Button
            type="btn-gray-dark animation"
            onClickAction={onSubmitHandler}
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

  const userProfileView = () => {
    if (isErrorFetch) {
      return <Message type="danger" message={isErrorFetch} />;
    }
    if (!name) {
      return <Spinner />;
    }
    return formContainerView;
  };

  return (
    <section id="UserProfile">
      <div className={`user-profile${editProfile ? '-edit' : ''}`}>
        {userProfileView()}
      </div>
    </section>
  );
};

const mapStateToProps = ({
  user: { userToken },
  userProfile: { name, email, isError: isErrorFetch },
  userProfileUpdate: {
    isLoading: isLoadingUpdate,
    isError: isErrorUpdate,
    isUpdated,
  },
}) => ({
  userToken,
  name,
  email,
  isErrorFetch,
  isLoadingUpdate,
  isUpdated,
  isErrorUpdate,
});

const mapDispatchToProps = (dispatch) => ({
  onUserProfileFetch: (userToken) => dispatch(userProfileFetch(userToken)),
  onUserProfileUpdate: (userToken, userData) =>
    dispatch(userProfileUpdate(userToken, userData)),
  onUserProfileFetchedClear: () => dispatch(userProfileFetchedClear()),
  onUserProfileUpdateClear: () => dispatch(userProfileUpdateClear()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
