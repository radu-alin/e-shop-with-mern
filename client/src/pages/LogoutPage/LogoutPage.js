import { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  userProfileFetchedClear,
  orderDetailsFetchReset,
  ordersListFetchReset,
  userLogout,
} from '../../redux/actions/index';

const LogoutPage = ({
  onUserProfileFetchedClear,
  onOrderDetailsFetchReset,
  onOrdersListFetchReset,
  onUserLogout,
}) => {
  useEffect(() => {
    onUserProfileFetchedClear();
    onOrderDetailsFetchReset();
    onOrdersListFetchReset();
    onUserLogout();
  });
  return <Redirect to="/" />;
};

const mapDispatchToProps = (dispatch) => ({
  onUserLogout: () => dispatch(userLogout()),
  onUserProfileFetchedClear: () => dispatch(userProfileFetchedClear()),
  onOrdersListFetchReset: () => dispatch(ordersListFetchReset()),
  onOrderDetailsFetchReset: () => dispatch(orderDetailsFetchReset()),
});
export default connect(null, mapDispatchToProps)(LogoutPage);
