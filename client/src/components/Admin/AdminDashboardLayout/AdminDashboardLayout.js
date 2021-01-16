import AdminDashboardMenu from '../AdminDashboardMenu/AdminDashboardMenu';
import AccountLayout from '../../Account/AccountLayout/AccountLayout';

const AdminDashboardLayout = ({ children }) => (
  <AccountLayout menuPanel={<AdminDashboardMenu />}>{children}</AccountLayout>
);

export default AdminDashboardLayout;
