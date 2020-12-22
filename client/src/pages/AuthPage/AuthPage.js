import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import AuthForm from '../../components/User/AuthForm/AuthForm';

const AuthPage = ({ isAuth }) => (
  <main id="AuthPage">{isAuth ? <Redirect to="/" /> : <AuthForm />}</main>
);

const mapStateToProps = ({ user: { userId } }) => ({
  isAuth: !!userId,
});

export default connect(mapStateToProps)(AuthPage);
