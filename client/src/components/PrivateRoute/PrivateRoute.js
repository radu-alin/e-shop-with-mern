import { Route, Redirect, useLocation } from 'react-router-dom';

import { connect } from 'react-redux';

const PrivateRoute = ({ children, isAuth, ...otherProps }) => {
  let location = useLocation();

  return (
    <Route
      {...otherProps}
      render={() => {
        return isAuth ? (
          children
        ) : (
          <Redirect to={{ pathname: '/auth', state: { from: location } }} />
        );
      }}
    ></Route>
  );
};

const mapStateToProps = ({ user }) => ({
  isAuth: !!user?.userToken,
});

export default connect(mapStateToProps)(PrivateRoute);
