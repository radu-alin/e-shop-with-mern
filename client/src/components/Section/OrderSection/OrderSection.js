import './OrderSection.scss';

const OrderSection = ({ title, children }) => (
  <div className="order-section">
    <h1>{title}</h1>
    <div className="order-section-content py-1">{children}</div>
    <hr></hr>
  </div>
);

export default OrderSection;
