import './AccountLayout.scss';

const AccountContainer = ({ menuPanel, children }) => (
  <div className="account-layout">
    <div className="account-layout-content-left">{menuPanel}</div>
    <div className="account-layout-content-right p-1">{children}</div>
  </div>
);

export default AccountContainer;
