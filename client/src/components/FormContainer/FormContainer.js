import './FormContainer.scss';

const FormAuthContainer = ({ title, editIconClickAction, message, children }) => {
  const [isAuth, isError, messageContent] = message;

  const messageDisplayHandler = () => {
    let messageDisplay = { classType: '', messageToDisplay: '' };
    if (isError) {
      messageDisplay = { classType: 'danger', messageToDisplay: messageContent };
    }
    if (isAuth) {
      messageDisplay = { classType: 'success', messageToDisplay: messageContent };
    }
    return messageDisplay;
  };

  const { classType, messageToDisplay } = messageDisplayHandler();

  return (
    <section id="FormAuthContainer">
      <div className="form-container">
        <div className="form-container-header">
          <div className="form-container-header-title">
            <h1>{title}</h1>
          </div>
          {editIconClickAction ? (
            <div className="form-container-header-edit">
              <h3>Edit</h3>
              <i className="far fa-edit" onClick={editIconClickAction}></i>
            </div>
          ) : null}
        </div>
        <hr></hr>
        <div className="form-container-message">
          {messageContent ? (
            <div className={`form-container-message-${classType}`}>
              <h3>{messageToDisplay}</h3>
            </div>
          ) : null}
        </div>
        <div className="form-container-content py-1">{children}</div>
      </div>
    </section>
  );
};

export default FormAuthContainer;
