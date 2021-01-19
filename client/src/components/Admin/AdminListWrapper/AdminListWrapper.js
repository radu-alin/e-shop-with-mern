import './AdminListWrapper.scss';

const AdminListWrapper = ({ title, children }) => (
  <div className='admin-list-wrapper'>
    <h1>{title}</h1>
    <hr></hr>
    {children}
    <hr></hr>
  </div>
);

export default AdminListWrapper;
