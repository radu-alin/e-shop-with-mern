import './AdminListButtons.scss';

const AdminListButtons = ({ children }) => (
  <div className='admin-list-buttons'>
    <div className='admin-list-buttons-first'> {children[0]}</div>
    <div className='admin-list-buttons-second'>{children[1]}</div>
  </div>
);

export default AdminListButtons;
