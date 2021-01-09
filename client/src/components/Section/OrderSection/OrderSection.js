import './OrderSection.scss';

const OrderSection = ({ title, messageMain, messageSecond, children }) => (
  <div className="order-section">
    <h1>{title}</h1>
    <div className="order-section-content py-1">
      {children}
      {messageMain && (
        <div className="order-section-content-message">{messageMain}</div>
      )}
      {messageSecond && (
        <div className="order-section-content-message">{messageSecond}</div>
      )}
    </div>
  </div>
);

export default OrderSection;
