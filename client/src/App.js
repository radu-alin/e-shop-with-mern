import { useEffect, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { userAuthSuccess, userIsAdminAuthSuccess } from './redux/actions/index';

import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetailsPage';
import UserAccountPage from './pages/UserAccountPage/UserAccountPage';
import CartPage from './pages/CartPage/CartPage';
import LogoutPage from './pages/LogoutPage/LogoutPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
// import AuthPage from './pages/AuthPage/AuthPage';
// import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
// import AdminAccountPage from './pages/AdminAccountPage/AdminAccountPage';

const AuthPage = lazy(() =>
  import(
    /* webpackPrefetch: true,  webpackChunkName: "auth" */ './pages/AuthPage/AuthPage'
  )
);

const CheckoutPage = lazy(() =>
  import(
    /* webpackPrefetch: true,  webpackChunkName: "checkout" */ './pages/CheckoutPage/CheckoutPage'
  )
);

const AdminAccountPage = lazy(() =>
  import(
    /* webpackPrefetch: true,  webpackChunkName: "checkout" */ './pages/AdminAccountPage/AdminAccountPage'
  )
);

const App = ({ userAuthIsAdmin, onUserAuthSuccess, onUserIsAdminAuthSuccess }) => {
  useEffect(() => {
    const userIdFromLocalStorage =
      localStorage.getItem('userId') && JSON.parse(localStorage.getItem('userId'));
    const userTokenFromLocalStorage =
      localStorage.getItem('userToken') &&
      JSON.parse(localStorage.getItem('userToken'));
    const userIsAdminFromLocalStorage =
      localStorage.getItem('userIsAdmin') &&
      JSON.parse(localStorage.getItem('userIsAdmin'));
    if (userIdFromLocalStorage && userIsAdminFromLocalStorage) {
      return onUserIsAdminAuthSuccess(
        userIdFromLocalStorage,
        userTokenFromLocalStorage,
        userIsAdminFromLocalStorage
      );
    }
    if (userIdFromLocalStorage) {
      return onUserAuthSuccess(userIdFromLocalStorage, userTokenFromLocalStorage);
    }
    return;
  }, [onUserAuthSuccess, onUserIsAdminAuthSuccess]);

  return (
    <Layout>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/products/:id'>
          <ProductDetailsPage />
        </Route>
        <Route path='/logout'>
          <LogoutPage />
        </Route>
        <Route path='/auth'>
          <Suspense fallback>
            <AuthPage />
          </Suspense>
        </Route>
        <Route path='/cart'>
          <CartPage />
        </Route>
        <PrivateRoute path='/checkout'>
          <Suspense>
            <CheckoutPage />
          </Suspense>
        </PrivateRoute>
        <PrivateRoute path='/account'>
          <UserAccountPage />
        </PrivateRoute>
        <PrivateRoute path='/dashboard'>
          {userAuthIsAdmin ? (
            <Suspense fallback>
              <AdminAccountPage />
            </Suspense>
          ) : (
            <Redirect to='/' />
          )}
        </PrivateRoute>
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </Layout>
  );
};

const mapStateToProps = ({ user }) => ({
  userAuthIsAdmin: !!user?.userIsAdmin,
});

const mapDispatchToPros = (dispatch) => ({
  onUserAuthSuccess: (id, token) => dispatch(userAuthSuccess(id, token)),
  onUserIsAdminAuthSuccess: (id, token, isAdmin) =>
    dispatch(userIsAdminAuthSuccess(id, token, isAdmin)),
});

export default connect(mapStateToProps, mapDispatchToPros)(App);

/* <Profiler
            id="ProductDetailsPage"
            onRender={(
              id,
              phase,
              actualDuration,
              baseDuration,
              startTime,
              commitTime,
              interactions
            ) => {
              const ProductDetailsPage = {
                id,
                phase,
                actualDuration,
                baseDuration,
                startTime,
                commitTime,
                interactions,
              };
              console.table(ProductDetailsPage);
            }}
          ></Profiler> */
