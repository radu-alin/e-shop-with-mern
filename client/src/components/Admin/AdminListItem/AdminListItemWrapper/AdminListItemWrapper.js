import './AdminListItemWrapper.scss';

const AdminListItemWrapper = ({ children }) => (
  <div className='admin-list-item-wrapper bg-gray-light my-1 p-1'>
    <div className='admin-list-item-wrapper-info'>{children[0]}</div>
    <hr></hr>
    <div className='admin-list-item-wrapper-info-status'>
      {children[1]}
      {children[2]}
    </div>
  </div>
);

export default AdminListItemWrapper;
