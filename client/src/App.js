import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  userAuthSuccess as onUserAuthSuccess,
  userIsAdminAuthSuccess as onUserIsAdminAuthSuccess,
} from './redux/actions/index';

import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetailsPage';
import AuthPage from './pages/AuthPage/AuthPage';
import UserAccountPage from './pages/UserAccountPage/UserAccountPage';
import CartPage from './pages/CartPage/CartPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import AdminDashboardPage from './pages/AdminDashboardPage/AdminDashboardPage';
import LogoutPage from './pages/LogoutPage/LogoutPage';

const App = ({ userAuthIsClient, userAuthIsAdmin, dispatch }) => {
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
      return dispatch(
        onUserIsAdminAuthSuccess(
          userIdFromLocalStorage,
          userTokenFromLocalStorage,
          userIsAdminFromLocalStorage
        )
      );
    }
    if (userIdFromLocalStorage) {
      return dispatch(
        onUserAuthSuccess(userIdFromLocalStorage, userTokenFromLocalStorage)
      );
    }
    return;
  }, [dispatch]);

  const publicRoutes = (() => (
    <>
      <Route path="/products/:id">
        <ProductDetailsPage />
      </Route>
      <Route path="/logout">
        <LogoutPage />
      </Route>
      <Route path="/auth">
        <AuthPage />
      </Route>
      <Route path="/cart">
        <CartPage />
      </Route>
      <Route exact path="/">
        <HomePage />
      </Route>
    </>
  ))();

  const userAuthIsClientRoutes = (() =>
    userAuthIsClient && (
      <>
        <Route path="/checkout">
          <CheckoutPage />
        </Route>
        <Route path="/account">
          <UserAccountPage />
        </Route>
      </>
    ))();

  const userAuthIsAdminRoutes = (() =>
    userAuthIsAdmin && (
      <Route path="/dashboard">
        <AdminDashboardPage />
      </Route>
    ))();

  return (
    <Layout>
      <Switch>
        {publicRoutes}
        {userAuthIsClientRoutes}
        {userAuthIsAdminRoutes}
      </Switch>
    </Layout>
  );
};

const mapStateToProps = ({ user }) => ({
  userAuthIsClient: !!user?.userToken,
  userAuthIsAdmin: user?.userIsAdmin,
});

export default connect(mapStateToProps)(App);

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
