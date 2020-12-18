import { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { userVerifyAuth as onUserVerifyAuth } from './redux/actions/index';

import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetailsPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import AuthPage from './pages/AuthPage/AuthPage';
import LogoutPage from './pages/LogoutPage/LogoutPage';

const App = ({ dispatch }) => {
  useEffect(() => {
    const userFromLocalStorage =
      localStorage.getItem('user') && JSON.parse(localStorage.getItem('user'));
    return userFromLocalStorage && dispatch(onUserVerifyAuth(userFromLocalStorage));
  }, [dispatch]);

  return (
    <Route>
      <Layout>
        <Switch>
          <Route path="/products/:id" component={ProductDetailsPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route path="/logout" component={LogoutPage} />
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
