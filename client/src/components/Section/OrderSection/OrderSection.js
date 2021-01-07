import './OrderSection.scss';

const OrderSection = ({ title, children, message }) => (
  <div className="order-section">
    <h1>{title}</h1>
    <div className="order-section-content py-1">
      {children}
      {message && <div className="order-section-content-message">{message}</div>}
    </div>
  </div>
);

export default OrderSection;
