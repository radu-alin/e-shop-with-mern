import { connect } from 'react-redux';
import { Redirect, useLocation } from 'react-router-dom';

import UserAuth from '../../components/User/UserAuth/UserAuth';

const AuthPage = ({ isAuth }) => {
  let { state } = useLocation();
  return (
    <main id="AuthPage">
      {isAuth ? <Redirect to={state?.from || '/'} /> : <UserAuth />}
    </main>
  );
};

const mapStateToProps = ({ user: { userId } }) => ({
  isAuth: !!userId,
});

export default connect(mapStateToProps)(AuthPage);
