import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetailsPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';

const App = () => {
  return (
    <Route>
      <Layout>
        <Switch>
          <Route path="/products/:id" component={ProductDetailsPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route path="/" exact component={HomePage} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </Route>
  );
};

export default App;
