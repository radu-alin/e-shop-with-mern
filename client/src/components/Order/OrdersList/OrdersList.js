import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { ordersListFetch } from '../../../redux/actions/index';

import ListView from '../../UI/ListView/ListView';
import OrderOverview from '../OrderOverview/OrderOverview';

const OrdersList = ({ userToken, ordersList, isError, onOrdersListFetch }) => {
  let history = useHistory();

  useEffect(() => userToken && !ordersList && onOrdersListFetch(userToken), [
    userToken,
    onOrdersListFetch,
    ordersList,
  ]);

  const orderDetailsClickHandler = (id) => history.push(`/account/orders/${id}`);
  const orderPayOrderHandler = (id) => history.push(`/checkout/pay-order/${id}`);

  const ordersListRender = () =>
    ordersList.map((userOrder) => (
      <OrderOverview
        key={userOrder._id}
        userOrder={userOrder}
        orderDetailsClickHandler={
          userOrder.paymentMethod === 'PayPal' && !userOrder.isPaid
            ? orderPayOrderHandler
            : orderDetailsClickHandler
        }
      />
    ));

  const listViewData = {
    isError: isError,
    listEmptyCondition: ordersList?.length === 0,
    spinnerCondition: !ordersList,
  };

  return (
    <section id='OrdersList'>
      <div>
        <ListView listViewData={listViewData} />
        {ordersList && ordersListRender()}
      </div>
    </section>
  );
};

const mapStateToProps = ({
  ordersList: { ordersList, isError },
  user: { userToken },
}) => ({
  userToken,
  ordersList,
  isError,
});

const mapDispatchToProps = (dispatch) => ({
  onOrdersListFetch: (userToken) => dispatch(ordersListFetch(userToken)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrdersList);
