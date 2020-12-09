import { Route, Redirect, Switch } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import ProductPage from './pages/ProductPage/ProductPage';

const App = () => {
  return (
    <Route>
      <Layout>
        <Switch>
          <Route path="/products/:id" component={ProductPage} />
          <Route path="/" exact component={HomePage} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </Route>
  );
};

export default App;
