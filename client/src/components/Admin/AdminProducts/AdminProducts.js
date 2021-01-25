import { Route, useRouteMatch } from 'react-router-dom';

import AdminProductList from '../AdminProductList/AdminProductList';
import AdminProductEdit from '../AdminProductEdit/AdminProductEdit';

const AdminProducts = () => {
  let { path, isExact } = useRouteMatch();

  return (
    <section id='AdminProducts'>
      {isExact ? (
        <Route path={`${path}`}>
          <AdminProductList />
        </Route>
      ) : (
        <Route path={`${path}/:id`}>
          <AdminProductEdit />
        </Route>
      )}
    </section>
  );
};
export default AdminProducts;
