import Message from '../Message/Message';
import Spinner from '../Spinner/Spinner';

const ListView = ({ listViewData }) => {
  const { isError, listEmptyCondition, spinnerCondition } = listViewData;

  const listViewHandler = (() => {
    if (isError) {
      return <Message type={isError && 'danger'} message={isError} />;
    }
    if (listEmptyCondition) {
      return (
        <h2 className='py-1'>
          <strong>List is empty.</strong>
        </h2>
      );
    }
    if (spinnerCondition) {
      return <Spinner />;
    }
    return;
  })();

  return <>{listViewHandler}</>;
};

export default ListView;
