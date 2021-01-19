import './AdminListItemMessage.scss';

const AdminListItemMessage = ({ isSuccess, isError }) => (
  <div className='admin-list-item-message'>
    {isSuccess || isError ? (
      <div
        className={`admin-list-item-message${
          (isSuccess && '-success') || (isError && '-danger')
        }`}>
        <strong>{(isSuccess && `${isSuccess}`) || (isError && `${isError}`)}</strong>
      </div>
    ) : null}
  </div>
);

export default AdminListItemMessage;
