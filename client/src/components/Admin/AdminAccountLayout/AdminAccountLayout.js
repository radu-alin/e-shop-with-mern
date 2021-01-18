import AdminAccountMenu from '../AdminAccountMenu/AdminAccountMenu';
import AccountLayout from '../../Account/AccountLayout/AccountLayout';

const AdminAccountLayout = ({ children }) => (
  <AccountLayout menuPanel={<AdminAccountMenu />}>{children}</AccountLayout>
);

export default AdminAccountLayout;
