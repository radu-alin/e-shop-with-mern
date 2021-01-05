import Spinner from '../../UI/Spinner/Spinner';

import './OrderSummary.scss';

const OrderSummary = ({
  children,
  cartProductsTotalValue,
  cartShippingCost,
  cartCheckoutTotalValue,
  isLoading,
}) => (
  <div className="order-summary">
    <h1>Summary</h1>
    <p>
      <span>Items:</span>
      <span>
        <strong> ${cartProductsTotalValue}</strong>
      </span>
    </p>
    <hr></hr>
    <p>
      <span>Shipping:</span>
      <span>
        <strong> ${cartShippingCost}</strong>
      </span>
    </p>
    <hr></hr>
    <p>
      <span>TOTAL:</span>
      <span>
        <strong> ${cartCheckoutTotalValue}</strong>
      </span>
    </p>
    <hr></hr>
    <div className="order-summary-spinner">
      {isLoading && <Spinner type="small" />}
    </div>
    {children}
  </div>
);

export default OrderSummary;
