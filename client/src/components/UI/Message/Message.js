import './Message.scss';

const Message = ({ type, message }) => (
  <div className="message">
    <div className={`message-${type}`}>
      <h3>{message}</h3>
    </div>
  </div>
);

export default Message;
