import { useEffect } from 'react';
import { connect } from 'react-redux';

import {
  userListFetch,
  userListClear,
  userListDeletePosition,
  userDeleteReset,
  userListUpdatePosition,
  userUpdateToAdminReset,
} from '../../../redux/actions/index';

import ListView from '../../UI/ListView/ListView';
import UserOverview from './UserOverview/UserOverview';

import './AdminUserList.scss';

const AdminUserList = ({
  userLoggedDetails,
  userList,
  isErrorUserList,
  userDelete,
  userUpdateToAdmin,
  onUserListFetch,
  onUserListClear,
  onUserListDeletePosition,
  onUserDeleteReset,
  onUserListUpdatePosition,
  onUserUpdateToAdminReset,
}) => {
  const { userToken } = userLoggedDetails;

  useEffect(() => userToken && !userList && onUserListFetch(userToken), [
    userToken,
    userList,
    onUserListFetch,
  ]);

  useEffect(() => {
    return () => onUserListClear();
  }, [onUserListClear]);

  useEffect(() => {
    const updateUserList = () =>
      setTimeout(() => {
        onUserListDeletePosition(userDelete.userId);
        onUserDeleteReset();
      }, 1000);
    userDelete.isSuccess && updateUserList();
  }, [userDelete, onUserListDeletePosition, onUserDeleteReset]);

  useEffect(() => {
    const updateUserList = () =>
      setTimeout(() => {
        console.log('userUpdateToAdmin - dispatch -', userUpdateToAdmin.userId);
        onUserListUpdatePosition(userUpdateToAdmin.userId);
        onUserUpdateToAdminReset();
      }, 1000);
    userUpdateToAdmin.isSuccess && updateUserList();
  }, [userUpdateToAdmin, onUserListUpdatePosition, onUserUpdateToAdminReset]);

  const userListRender = () =>
    userList.map((user) => (
      <UserOverview
        key={user._id}
        userDetails={user}
        userLoggedDetails={userLoggedDetails}
      />
    ));

  const listViewData = {
    isError: isErrorUserList,
    listEmptyCondition: userList?.length === 0,
    spinnerCondition: !userList,
  };

  return (
    <section id='AdminUserList'>
      <div className='admin-user-list'>
        <h1>User List, {userList?.length} users.</h1>
        <hr></hr>
        <ListView listViewData={listViewData} />
        {userList && userListRender()}
        <hr></hr>
      </div>
    </section>
  );
};

const mapStateToProps = ({ user, userList, userDelete, userUpdateToAdmin }) => ({
  userLoggedDetails: user,
  userList: userList?.userList,
  isErrorUserList: userList.isError,
  userDelete,
  userUpdateToAdmin,
});

const mapDispatchToProps = (dispatch) => ({
  onUserListFetch: (token) => dispatch(userListFetch(token)),
  onUserListClear: () => dispatch(userListClear()),
  onUserDeleteReset: () => dispatch(userDeleteReset()),
  onUserListDeletePosition: (id) => dispatch(userListDeletePosition(id)),
  onUserUpdateToAdminReset: () => dispatch(userUpdateToAdminReset()),
  onUserListUpdatePosition: (userId) => dispatch(userListUpdatePosition(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminUserList);
