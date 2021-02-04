import { ReactComponent as EditIcon } from '../../assets/svg/edit-icon.svg';

import './FormContainer.scss';

const FormAuthContainer = ({ title, editIconClickAction, message, children }) => {
  const [isSuccess, isError, messageContent] = message;

  const messageDisplayHandler = () => {
    let messageDisplay = { classType: '', messageToDisplay: '' };
    if (isError) {
      messageDisplay = { classType: 'danger', messageToDisplay: messageContent };
    }
    if (isSuccess && !isError) {
      messageDisplay = { classType: 'success', messageToDisplay: messageContent };
    }
    return messageDisplay;
  };

  const { classType, messageToDisplay } = messageDisplayHandler();

  return (
    <section id='FormAuthContainer'>
      <form id={title}>
        <div className='form-container'>
          <div className='form-container-header'>
            <div className='form-container-header-title'>
              <legend>
                <h1>{title}</h1>
              </legend>
            </div>
            {editIconClickAction ? (
              <div className='form-container-header-edit'>
                <h3>Edit</h3>
                <EditIcon onClick={editIconClickAction} />
              </div>
            ) : null}
          </div>
          <hr></hr>
          <div className='form-container-message'>
            {messageContent ? (
              <div className={`form-container-message-${classType}`}>
                <h3>{messageToDisplay}</h3>
              </div>
            ) : null}
          </div>
          <div className='form-container-content py-1'>{children}</div>
        </div>
      </form>
    </section>
  );
};

export default FormAuthContainer;
