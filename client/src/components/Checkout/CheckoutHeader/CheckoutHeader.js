import { connect } from 'react-redux';

import CheckoutMessage from '../CheckoutMessage/CheckoutMesage';
import CheckoutSteps from '../CheckoutSteps/CheckoutSteps';

const CheckoutHeader = ({ isError, isSuccess }) => {
  if (!isError && !isSuccess) return <CheckoutSteps />;
  if (isError || isSuccess)
    return (
      <CheckoutMessage
        type={(isError && 'danger') || (isSuccess && 'success')}
        message={
          isError ||
          'Order placed. You can see order  shipping status in: My account/Profile/Orders.'
        }
      />
    );
};

const mapStateToProps = ({ orderCreate: { isError, isSuccess } }) => ({
  isError,
  isSuccess,
});

export default connect(mapStateToProps)(CheckoutHeader);
