import { sumRoundValueUtil } from '../../../utils/sumUtil';

import Spinner from '../../UI/Spinner/Spinner';

import './OrderSummary.scss';

const OrderSummary = ({ children, shippingPrice, totalPrice, isLoading }) => {
  const itemsPrice = (() => sumRoundValueUtil(totalPrice - shippingPrice, 2))();
  const spinner = (() => isLoading && <Spinner type="small" />)();
  return (
    <div className="order-summary">
      <h1>Summary</h1>
      <p>
        <span>Items:</span>
        <span>
          <strong> ${itemsPrice}</strong>
        </span>
      </p>
      <hr></hr>
      <p>
        <span>Shipping:</span>
        <span>
          <strong> ${shippingPrice}</strong>
        </span>
      </p>
      <hr></hr>
      <p>
        <span>TOTAL:</span>
        <span>
          <strong> ${totalPrice}</strong>
        </span>
      </p>
      <hr></hr>
      <div className="order-summary-spinner">{spinner}</div>
      {children}
    </div>
  );
};

export default OrderSummary;
