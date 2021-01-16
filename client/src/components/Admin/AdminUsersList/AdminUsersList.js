import { useEffect } from 'react';
import { connect } from 'react-redux';

import {
  usersListFetch,
  usersListClear,
  usersListDeletePosition,
  userDeleteReset,
  usersListUpdatePosition,
  userUpdateToAdminReset,
} from '../../../redux/actions/index';

import UserOverview from './UserOverview/UserOverview';
import Message from '../../UI/Message/Message';
import Spinner from '../../UI/Spinner/Spinner';

import './AdminUsersList.scss';

const UsersList = ({
  userToken,
  usersList,
  isErrorUsersList,
  userDelete,
  userUpdateToAdmin,
  onUserListFetch,
  onUsersListClear,
  onUsersListDeletePosition,
  onUserDeleteReset,
  onUsersListUpdatePosition,
  onUserUpdateToAdminReset,
}) => {
  console.log('userUpdateToAdmin - ', userUpdateToAdmin);
  useEffect(() => userToken && !usersList && onUserListFetch(userToken), [
    userToken,
    usersList,
    onUserListFetch,
  ]);

  useEffect(() => {
    return () => onUsersListClear();
  }, [onUsersListClear]);

  useEffect(() => {
    const updateUsersList = () =>
      setTimeout(() => {
        onUsersListDeletePosition(userDelete.userId);
        onUserDeleteReset();
      }, 1000);
    userDelete.isSuccess && updateUsersList();
  }, [userDelete, onUsersListDeletePosition, onUserDeleteReset]);

  useEffect(() => {
    const updateUsersList = () =>
      setTimeout(() => {
        console.log('userUpdateToAdmin - dispatch -', userUpdateToAdmin.userId);
        onUsersListUpdatePosition(userUpdateToAdmin.userId);
        onUserUpdateToAdminReset();
      }, 1000);
    userUpdateToAdmin.isSuccess && updateUsersList();
  }, [userUpdateToAdmin, onUsersListUpdatePosition, onUserUpdateToAdminReset]);

  const usersListRender = () =>
    usersList.map((user) => (
      <UserOverview key={user._id} userDetails={user} adminToken={userToken} />
    ));

  const usersListView = (() => {
    if (isErrorUsersList) {
      return (
        <Message type={isErrorUsersList && 'danger'} message={isErrorUsersList} />
      );
    }
    if (usersList?.length === 0) {
      return (
        <h2 className="py-1">
          <strong>You don't have any users.</strong>
        </h2>
      );
    }
    if (!usersList) {
      return <Spinner />;
    }
    return usersListRender();
  })();

  return (
    <section id="AdminUsersList">
      <div className="admin-users-list">
        <h1>Users List, {usersList?.length} users.</h1>
        <hr></hr>
        {usersListView}
        <hr></hr>
      </div>
    </section>
  );
};

const mapStateToProps = ({
  user: { userToken },
  usersList,
  userDelete,
  userUpdateToAdmin,
}) => ({
  userToken,
  usersList: usersList?.usersList,
  isErrorUsersList: usersList.isError,
  userDelete,
  userUpdateToAdmin,
});

const mapDispatchToProps = (dispatch) => ({
  onUserListFetch: (token) => dispatch(usersListFetch(token)),
  onUsersListClear: () => dispatch(usersListClear()),
  onUserDeleteReset: () => dispatch(userDeleteReset()),
  onUsersListDeletePosition: (id) => dispatch(usersListDeletePosition(id)),
  onUserUpdateToAdminReset: () => dispatch(userUpdateToAdminReset()),
  onUsersListUpdatePosition: (userId) => dispatch(usersListUpdatePosition(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
