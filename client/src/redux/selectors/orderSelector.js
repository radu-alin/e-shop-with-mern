import { createSelector } from 'reselect';

const ordersUser = (state) => state.orderListUser.userOrders;

export const ordersListNotFetchedSelector = createSelector(
  [ordersUser],
  (ordersUser) => !ordersUser?.length > 0
);
