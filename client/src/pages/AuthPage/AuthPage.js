import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import SignIn from '../../components/Auth/SignIn/SignIn';

const AuthPage = ({ isAuth }) => (
  <main id="AuthPage">{isAuth ? <Redirect to="/" /> : <SignIn />}</main>
);

const mapStateToProps = ({ user: { userId } }) => ({
  isAuth: !!userId,
});

export default connect(mapStateToProps)(AuthPage);
