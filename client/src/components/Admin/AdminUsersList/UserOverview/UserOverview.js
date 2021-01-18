import { connect } from 'react-redux';

import { userDelete, userUpdateToAdmin } from '../../../../redux/actions/index';

import './UserOverview.scss';

import Button from '../../../UI/Button/Button';
import Spinner from '../../../UI/Spinner/Spinner';

const UserOverview = ({
  adminToken,
  userDetails,
  userDelete,
  onUserDelete,
  userUpdateToAdmin,
  onUserUpdateToAdmin,
}) => {
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

  const onUserDeleteHandler = (id, token = adminToken) => onUserDelete(id, token);
  const onUserUpdateToAdminHandler = (id, token = adminToken) =>
    onUserUpdateToAdmin(id, token);

  const message = () => {
    if (userDeleteId === _id || userUpdatedId === _id) {
      if (!!isLoadingDelete) {
        return (
          <div className='user-overview-status-message-spinner'>
            <Spinner type='small' />
          </div>
        );
      }
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
        <strong>Date created: </strong>
        {userCreatedAt.toLocaleString()}
      </div>
      <div>
        <strong>User is Admin: </strong>
        {isAdmin ? 'Yes' : 'No'}
      </div>
    </>
  );

  return (
    <article id='User Overview'>
      <div className='user-overview bg-gray-light my-1 p-1'>
        <div className='user-overview-info'>
          {isLoadingUpdate && userUpdatedId === _id ? (
            <div className='user-overview-info-spinner'>
              <Spinner type='small' />
            </div>
          ) : (
            userOverviewInfoView
          )}
        </div>
        <hr></hr>
        <div className='user-overview-status'>
          <div className='user-overview-status-message'>{message()}</div>
          <div className='user-overview-status-button'>
            <div className='user-overview-status-button-admin'>
              <Button
                type='btn btn-success'
                onClickAction={() => onUserUpdateToAdminHandler(_id)}
                disabled={isAdmin}>
                Make user Admin
              </Button>
            </div>
            <div className='user-overview-status-button-delete'>
              <Button
                type='btn btn-danger'
                onClickAction={() => onUserDeleteHandler(_id)}>
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
