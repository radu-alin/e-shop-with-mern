import UserAccountMenu from '../UserAccountMenu/UserAccountMenu';
import AccountLayout from '../../Account/AccountLayout/AccountLayout';

const UserAccountLayout = ({ children }) => (
  <AccountLayout menuPanel={<UserAccountMenu />}>{children}</AccountLayout>
);

export default UserAccountLayout;
