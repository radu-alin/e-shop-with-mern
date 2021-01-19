import { connect } from 'react-redux';

import { userDelete, userUpdateToAdmin } from '../../../../redux/actions/index';

import AdminListItemMessage from '../../AdminListItem/AdminListItemMessage/AdminListItemMessage';
import AdminListItemInfo from '../../AdminListItem/AdminListInfo/AdminListInfo';
import AdminListSpinner from '../../AdminListItem/AdminListSpinner/AdminListSpinner';
import AdminListButtons from '../../AdminListItem/AdminListButtons/AdminListButtons';
import AdminListItemWrapper from '../../AdminListItem/AdminListItemWrapper/AdminListItemWrapper';

import Button from '../../../UI/Button/Button';

const UserOverview = ({
  userLoggedDetails,
  userDetails,
  userDelete,
  onUserDelete,
  userUpdateToAdmin,
  onUserUpdateToAdmin,
}) => {
  const { userToken: userLoggedToken, userId: userLoggedId } = userLoggedDetails;
  const { name, email, _id, createdAt, isAdmin } = userDetails;
  const {
    userId: userDeleteId,
    isLoading: isLoadingDelete,
    isSuccess: isSuccessDelete,
    isError: isErrorDelete,
  } = userDelete;
  const {
    userId: userUpdatedId,
    isLoading: isLoadingUpdate,
    isSuccess: isSuccessUpdate,
    isError: isErrorUpdate,
  } = userUpdateToAdmin;
  const userCreatedAt = new Date(createdAt);

  const onUserDeleteHandler = () => onUserDelete(_id, userLoggedToken);
  const onUserUpdateToAdminHandler = () => onUserUpdateToAdmin(_id, userLoggedToken);
  const userLoggedIsTrue = userLoggedId === _id;

  const userOverviewMessageView = (() => {
    if (userDeleteId === _id) {
      return (
        <AdminListItemMessage isSuccess={isSuccessDelete} isError={isErrorDelete} />
      );
    }
    if (userUpdatedId === _id) {
      return (
        <AdminListItemMessage isSuccess={isSuccessUpdate} isError={isErrorUpdate} />
      );
    }
    return <AdminListItemMessage />;
  })();

  const userOverviewInfoView = (
    <>
      <AdminListItemInfo title='User ID: ' content={_id} />
      <AdminListItemInfo title='Name: ' content={name} />
      <AdminListItemInfo title='Email: ' content={email} />
      <AdminListItemInfo
        title='Created at: '
        content={userCreatedAt.toLocaleString()}
      />
      <AdminListItemInfo title='User is Admin: ' content={isAdmin ? 'Yes' : 'No'} />
    </>
  );

  const userOverviewInfoViewHandler = (() => {
    if (
      (isLoadingDelete || isSuccessDelete || isLoadingUpdate) &&
      (userUpdatedId || userDeleteId) === _id
    ) {
      return <AdminListSpinner />;
    }
    return userOverviewInfoView;
  })();

  const userOverviewButtonsView = (
    <AdminListButtons>
      <Button
        type='btn btn-success'
        onClickAction={onUserUpdateToAdminHandler}
        disabled={isAdmin}>
        Make user Admin
      </Button>
      <Button
        type='btn btn-danger'
        onClickAction={onUserDeleteHandler}
        disabled={userLoggedIsTrue}>
        Delete user
      </Button>
    </AdminListButtons>
  );

  return (
    <article id='UserOverview'>
      <AdminListItemWrapper>
        {userOverviewInfoViewHandler}
        {userOverviewMessageView}
        {userOverviewButtonsView}
      </AdminListItemWrapper>
    </article>
  );
};

const mapStateToProps = (state) => ({
  userDelete: state.userDelete,
  userUpdateToAdmin: state.userUpdateToAdmin,
});

const mapDispatchToProps = (dispatch) => ({
  onUserDelete: (id, token) => dispatch(userDelete(id, token)),
  onUserUpdateToAdmin: (id, token) => dispatch(userUpdateToAdmin(id, token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserOverview);
