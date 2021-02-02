import { connect } from 'react-redux';
import { Redirect, useLocation } from 'react-router-dom';

import UserAuth from '../../components/User/UserAuth/UserAuth';

const AuthPage = ({ isAuth }) => {
  let { state } = useLocation();
  console.log('state - ', state);

  return (
    <main id='AuthPage'>
      {isAuth ? <Redirect to={state?.from || '/'} /> : <UserAuth />}
    </main>
  );
};

const mapStateToProps = ({ user }) => ({
  isAuth: !!user.userToken,
});

export default connect(mapStateToProps)(AuthPage);
