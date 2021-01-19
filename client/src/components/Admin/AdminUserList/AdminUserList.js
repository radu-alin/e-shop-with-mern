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

import AdminListWrapper from '../AdminListWrapper/AdminListWrapper';
import ListView from '../../UI/ListView/ListView';
import UserOverview from './UserOverview/UserOverview';

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
      <AdminListWrapper title={`User List, ${userList?.length} users.`}>
        <ListView listViewData={listViewData} />
        {userList && userListRender()}
      </AdminListWrapper>
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
