import { useState } from 'react';

import InputRadio from '../../UI/InputRadio/InputRadio';
import Button from '../../UI/Button/Button';
import Spinner from '../../UI/Spinner/Spinner.js';
import FormContainer from '../../FormContainer/FormContainer';

import './CheckoutPayment.scss';

const CheckoutPayment = () => {
  const [paymentMethod, setPaymentMethod] = useState('PayPal');

  const inputSelectChangeHandler = (event) => setPaymentMethod(event.target.value);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log('paymentMethod - ', paymentMethod);
  };

  return (
    <section id="CheckoutPayment">
      <div className="checkout-payment">
        <FormContainer title="Payment details" message={[]}>
          <InputRadio
            label="Cash on Delivery"
            name="paymentMethod"
            value="CashOnDelivery"
            onChangeAction={(e) => inputSelectChangeHandler(e)}
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
          <div className="checkout-payment-spinner">
            {false && <Spinner type="small" />}
          </div>
          <Button type="btn-gray-dark" onClickAction={onSubmitHandler}>
            Place Order
          </Button>
          <hr></hr>
        </FormContainer>
      </div>
    </section>
  );
};

export default CheckoutPayment;
