import { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  userProfileFetchedClear,
  orderDetailsClear,
  ordersListClear,
  usersListClear,
  userLogout,
} from '../../redux/actions/index';

const LogoutPage = ({
  onUserProfileFetchedClear,
  onOrderDetailsClear,
  onOrdersListClear,
  onUsersListClear,
  onUserLogout,
}) => {
  useEffect(() => {
    return () => {
      onUserLogout();
      onUserProfileFetchedClear();
      onOrderDetailsClear();
      onOrdersListClear();
      onUsersListClear();
    };
  });
  return <Redirect to="/" />;
};

const mapDispatchToProps = (dispatch) => ({
  onUserLogout: () => dispatch(userLogout()),
  onUserProfileFetchedClear: () => dispatch(userProfileFetchedClear()),
  onOrdersListClear: () => dispatch(ordersListClear()),
  onOrderDetailsClear: () => dispatch(orderDetailsClear()),
  onUsersListClear: () => dispatch(usersListClear()),
});
export default connect(null, mapDispatchToProps)(LogoutPage);
