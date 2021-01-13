import { Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

const RedirectToAuth = ({ children, isUserAuth, ...otherProps }) => {
  return (
    <Route
      {...otherProps}
      render={({ location }) => {
        return isUserAuth ? (
          children
        ) : (
          <Redirect to={{ pathname: '/auth', state: { from: location } }} />
        );
      }}
    ></Route>
  );
};

const mapStateToProps = ({ user }) => ({
  isUserAuth: !!user?.userToken,
});

export default connect(mapStateToProps)(RedirectToAuth);
