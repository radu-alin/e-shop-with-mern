import './AccountMenu.scss';

const AccountMenu = ({ title, children }) => (
  <ul className="account-menu p-1">
    <h1>{title}</h1>
    <hr></hr>
    {children}
  </ul>
);

export default AccountMenu;
