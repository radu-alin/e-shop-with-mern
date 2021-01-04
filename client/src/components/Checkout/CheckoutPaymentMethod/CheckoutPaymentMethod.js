import { connect } from 'react-redux';

import { localStorageSetItemUtil } from '../../../utils/localStorageUtil';
import { cartSavePaymentMethod } from '../../../redux/actions/index';

import InputRadio from '../../UI/InputRadio/InputRadio';
import Button from '../../UI/Button/Button';
import Spinner from '../../UI/Spinner/Spinner.js';
import FormContainer from '../../FormContainer/FormContainer';

import './CheckoutPaymentMethod.scss';

const CheckoutPaymentMethod = ({
  paymentMethod,
  onCartSavePaymentMethod,
  history,
}) => {
  const inputSelectChangeHandler = (event) => {
    let methodChoosed = event.target.value;
    onCartSavePaymentMethod(methodChoosed);
    localStorageSetItemUtil('paymentMethod', methodChoosed);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    history.push('/checkout/place-order');
  };

  return (
    <section id="CheckoutPaymentMethod">
      <div className="checkout-payment-method">
        <FormContainer title="Payment details" message={[]}>
          <InputRadio
            label="Cash on Delivery"
            name="paymentMethod"
            value="CashOnDelivery"
            onChangeAction={(event) => inputSelectChangeHandler(event)}
            paymentState={paymentMethod}
          />
          <InputRadio
            label="PayPal"
            name="paymentMethod"
            value="PayPal"
            onChangeAction={(e) => inputSelectChangeHandler(e)}
            paymentState={paymentMethod}
          />
          <InputRadio
            label="Stripe"
            name="paymentMethod"
            value="Stripe"
            onChangeAction={(e) => inputSelectChangeHandler(e)}
            paymentState={paymentMethod}
          />
          <div className="checkout-payment-method-spinner">
            {false && <Spinner type="small" />}
          </div>
          <Button
            type="btn-gray-dark"
            onClickAction={onSubmitHandler}
            disabled={paymentMethod.length === 0}
          >
            {paymentMethod.length === 0 ? 'Select a Payment Method' : 'Next Step'}
          </Button>
          <hr></hr>
        </FormContainer>
      </div>
    </section>
  );
};

const mapStateToProps = ({ cartCheckoutDetails: { paymentMethod } }) => ({
  paymentMethod,
});

const mapDispatchToProps = (dispatch) => ({
  onCartSavePaymentMethod: (paymentMethod) =>
    dispatch(cartSavePaymentMethod(paymentMethod)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPaymentMethod);
