import { useState, useEffect, useRef, useCallback } from 'react';
import { connect } from 'react-redux';

import { defaultState } from './stateUserProfile';
import {
  formInputsDataUtil,
  formRenderInputsUtil,
  oneInputValidForValidFormUtil,
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
  isErrorFetch,
  isLoadingUpdate,
  isUpdated,
  isErrorUpdate,
  onUserProfileFetch,
  onUserProfileFetchedClear,
  onUserProfileUpdate,
  onUserProfileUpdateClear,
}) => {
  const [formData, setFormData] = useState({
    ...defaultState(),
  });
  const [editProfile, setEditProfile] = useState(false);
  const firstInputRef = useRef(null);
  const isUpdatedRef = useRef(isUpdated);
  isUpdatedRef.current = isUpdated;
  console.log('isUpdated - ', isUpdated);
  console.log('isUpdatedRef.current ----------- ', isUpdatedRef.current);
  console.log('editProfile - ', editProfile);

  useEffect(() => {
    userToken && onUserProfileFetch(userToken);
  }, [userToken, onUserProfileFetch]);

  useEffect(() => {
    return () => {
      name && onUserProfileFetchedClear();
      onUserProfileUpdateClear();
    };
  }, [name, onUserProfileFetchedClear, onUserProfileUpdateClear]);

  useEffect(() => name && setFormData({ ...defaultState(name, email) }), [
    name,
    email,
  ]);

  const editTrueIconClickHandler = useCallback(() => {
    setEditProfile(true);
    firstInputRef.current.focus();
  }, [setEditProfile, firstInputRef]);

  const editFalseIconClickHandler = useCallback(() => setEditProfile(false), [
    setEditProfile,
  ]);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const userData = formInputsDataUtil(formData.formInputsData);
    onUserProfileUpdate(userToken, userData);
    setTimeout(() => {
      if (isUpdatedRef.current) {
        setEditProfile(false);
      }
    }, 500);
  };

  const renderFormHandler = () =>
    formRenderInputsUtil(
      Input,
      firstInputRef,
      formData,
      setFormData,
      oneInputValidForValidFormUtil
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
      {renderFormHandler()}
      <div className="user-profile-spinner">
        {isLoadingUpdate && <Spinner type="small" />}
      </div>
      <div className="user-profile-button">
        {editProfile ? (
          <Button
            type="btn-gray-dark"
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

  const renderFormContainerHandler = !!isErrorFetch ? (
    <Message type="error" message={isErrorFetch} />
  ) : !name ? (
    <Spinner />
  ) : (
    formContainerView
  );

  return (
    <section id="UserProfile">
      <div className={`user-profile${editProfile ? '-edit' : ''}`}>
        {renderFormContainerHandler}
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
