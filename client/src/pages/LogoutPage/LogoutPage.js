import { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  userProfileFetchedClear,
  orderDetailsClear,
  ordersListClear,
  userLogout,
} from '../../redux/actions/index';

const LogoutPage = ({
  onUserProfileFetchedClear,
  onOrderDetailsClear,
  onOrdersListClear,
  onUserLogout,
}) => {
  useEffect(() => {
    return () => {
      onUserLogout();
      onUserProfileFetchedClear();
      onOrderDetailsClear();
      onOrdersListClear();
    };
  });
  return <Redirect to="/" />;
};

const mapDispatchToProps = (dispatch) => ({
  onUserLogout: () => dispatch(userLogout()),
  onUserProfileFetchedClear: () => dispatch(userProfileFetchedClear()),
  onOrdersListClear: () => dispatch(ordersListClear()),
  onOrderDetailsClear: () => dispatch(orderDetailsClear()),
});
export default connect(null, mapDispatchToProps)(LogoutPage);
