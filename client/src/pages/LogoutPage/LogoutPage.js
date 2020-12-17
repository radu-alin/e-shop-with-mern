import { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { userLogout } from '../../redux/actions/index';

const LogoutPage = ({ onUserLogout }) => {
  useEffect(() => onUserLogout());
  return <Redirect to="/" />;
};

const mapDispatchToProps = (dispatch) => ({
  onUserLogout: () => dispatch(userLogout()),
});
export default connect(null, mapDispatchToProps)(LogoutPage);
