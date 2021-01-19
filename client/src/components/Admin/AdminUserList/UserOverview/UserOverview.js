import { connect } from 'react-redux';

import { userDelete, userUpdateToAdmin } from '../../../../redux/actions/index';

import './UserOverview.scss';

import Button from '../../../UI/Button/Button';
import Spinner from '../../../UI/Spinner/Spinner';

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
  console.log('isErrorDelete - ', isErrorDelete);

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

  const message = () => {
    if (userDeleteId === _id || userUpdatedId === _id) {
      if (
        (!!userDeleteId && !!isSuccessDelete) ||
        !!isErrorDelete ||
        (!!userUpdatedId && !!isSuccessUpdate) ||
        !!isErrorUpdate
      ) {
        return (
          <div
            className={`user-overview-status-message${
              (isSuccessDelete && '-success') ||
              (isSuccessUpdate && '-success') ||
              (isErrorDelete && '-danger') ||
              (isErrorUpdate && '-danger')
            }`}>
            <strong>
              {(isSuccessDelete && `${isSuccessDelete}`) ||
                (isErrorDelete && `${isErrorDelete}`) ||
                (isSuccessUpdate && `${isSuccessUpdate}`) ||
                (isErrorUpdate && `${isErrorUpdate}`)}
            </strong>
          </div>
        );
      }
    }
    return null;
  };

  const userOverviewInfoView = (
    <>
      <div>
        <strong>User ID: </strong>
        {_id}
      </div>
      <div>
        <strong>Name: </strong>
        {name}
      </div>
      <div>
        <strong>Email: </strong>
        {email}
      </div>
      <div>
        <strong>Created at: </strong>
        {userCreatedAt.toLocaleString()}
      </div>
      <div>
        <strong>User is Admin: </strong>
        {isAdmin ? 'Yes' : 'No'}
      </div>
    </>
  );

  const userOverviewInfoViewHandler = (() => {
    if (
      (isLoadingDelete || isSuccessDelete || isLoadingUpdate) &&
      (userUpdatedId || userDeleteId) === _id
    ) {
      return (
        <div className='user-overview-info-spinner'>
          <Spinner type='small' />
        </div>
      );
    }
    return userOverviewInfoView;
  })();

  return (
    <article id='UserOverview'>
      <div className='user-overview bg-gray-light my-1 p-1'>
        <div className='user-overview-info'>{userOverviewInfoViewHandler}</div>
        <hr></hr>
        <div className='user-overview-status'>
          <div className='user-overview-status-message'>{message()}</div>
          <div className='user-overview-status-button'>
            <div className='user-overview-status-button-admin'>
              <Button
                type='btn btn-success'
                onClickAction={onUserUpdateToAdminHandler}
                disabled={isAdmin}>
                Make user Admin
              </Button>
            </div>
            <div className='user-overview-status-button-delete'>
              <Button
                type='btn btn-danger'
                onClickAction={onUserDeleteHandler}
                disabled={userLoggedIsTrue}>
                Delete user
              </Button>
            </div>
          </div>
        </div>
      </div>
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
