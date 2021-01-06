import './Message.scss';

const Message = ({ type, message }) => (
  //type: danger, success
  <div className="message">
    <div className={`message-${type}`}>
      <strong>
        <h3>{message}</h3>
      </strong>
    </div>
  </div>
);

export default Message;
