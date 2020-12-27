import { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { userAuthSuccess as onUserAuthSuccess } from './redux/actions/index';

import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetailsPage';
import CartPage from './pages/CartPage/CartPage';
import AuthPage from './pages/AuthPage/AuthPage';
import UserAccountPage from './pages/UserAccountPage/UserAccountPage';
import LogoutPage from './pages/LogoutPage/LogoutPage';

const App = ({ dispatch }) => {
  useEffect(() => {
    const userIdFromLocalStorage =
      localStorage.getItem('userId') && JSON.parse(localStorage.getItem('userId'));
    const userTokenFromLocalStorage =
      localStorage.getItem('userToken') &&
      JSON.parse(localStorage.getItem('userToken'));
    userIdFromLocalStorage &&
      dispatch(onUserAuthSuccess(userIdFromLocalStorage, userTokenFromLocalStorage));
  }, [dispatch]);

  return (
    <Route>
      <Layout>
        <Switch>
          <Route path="/products/:id" component={ProductDetailsPage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/logout" component={LogoutPage} />
          <Route path="/account/" component={UserAccountPage} />
          <Route path="/auth" component={AuthPage} />
          <Route path="/" exact component={HomePage} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </Route>
  );
};

export default connect(null)(App);

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
