import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import UserAuth from '../../components/User/UserAuth/UserAuth';

const AuthPage = ({ isAuth }) => (
  <main id="AuthPage">{isAuth ? <Redirect to="/" /> : <UserAuth />}</main>
);

const mapStateToProps = ({ user: { userId } }) => ({
  isAuth: !!userId,
});

export default connect(mapStateToProps)(AuthPage);
