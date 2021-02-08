import { lazy, Suspense } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import AdminAccountLayout from '../../components/Admin/AdminAccountLayout/AdminAccountLayout';
// import UserProfile from '../../components/User/UserProfile/UserProfile.js';
// import AdminUserList from '../../components/Admin/AdminUserList/AdminUserList';
// import AdminProducts from '../../components/Admin/AdminProducts/AdminProducts';
// import AdminProductCreate from '../../components/Admin/AdminProductCreate/AdminProductCreate';

const UserProfile = lazy(() =>
  import(
    /* webpackPrefetch: true,  webpackChunkName: "userProfile" */ '../../components/User/UserProfile/UserProfile.js'
  )
);
const AdminUserList = lazy(() =>
  import(
    /* webpackPrefetch: true,  webpackChunkName: "adminUserList" */ '../../components/Admin/AdminUserList/AdminUserList'
  )
);
const AdminProducts = lazy(() =>
  import(
    /* webpackPrefetch: true,  webpackChunkName: "adminProducts" */ '../../components/Admin/AdminProducts/AdminProducts'
  )
);
const AdminProductCreate = lazy(() =>
  import(
    /* webpackPrefetch: true,  webpackChunkName: "adminProductCreate" */ '../../components/Admin/AdminProductCreate/AdminProductCreate'
  )
);

const AdminAccountPage = () => {
  let { path } = useRouteMatch();
  return (
    <main id='AdminAccountPage'>
      <AdminAccountLayout>
        <Switch>
          <Suspense fallback>
            <Route path={`${path}/profile`}>
              <UserProfile />
            </Route>
            <Route path={`${path}/user-list`}>
              <AdminUserList />
            </Route>
            <Route path={`${path}/product-list`}>
              <AdminProducts />
            </Route>
            <Route path={`${path}/product-create`}>
              <AdminProductCreate />
            </Route>
          </Suspense>
        </Switch>
      </AdminAccountLayout>
    </main>
  );
};

export default AdminAccountPage;
