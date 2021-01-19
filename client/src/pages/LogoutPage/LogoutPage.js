import { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  userProfileFetchedClear,
  orderDetailsClear,
  ordersListClear,
  userListClear,
  userLogout,
} from '../../redux/actions/index';

const LogoutPage = ({
  onUserProfileFetchedClear,
  onOrderDetailsClear,
  onOrdersListClear,
  onUserListClear,
  onUserLogout,
}) => {
  useEffect(() => {
    return () => {
      onUserLogout();
      onUserProfileFetchedClear();
      onOrderDetailsClear();
      onOrdersListClear();
      onUserListClear();
    };
  });
  return <Redirect to='/' />;
};

const mapDispatchToProps = (dispatch) => ({
  onUserLogout: () => dispatch(userLogout()),
  onUserProfileFetchedClear: () => dispatch(userProfileFetchedClear()),
  onOrdersListClear: () => dispatch(ordersListClear()),
  onOrderDetailsClear: () => dispatch(orderDetailsClear()),
  onUserListClear: () => dispatch(userListClear()),
});
export default connect(null, mapDispatchToProps)(LogoutPage);
