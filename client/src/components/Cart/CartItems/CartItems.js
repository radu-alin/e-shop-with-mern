import CartItem from './CartItem/CartItem';

import './CartItems.scss';

const CartItems = ({
  cartItemsDetail,
  onCartClearItem,
  onCartModifyQuantityForItem,
}) => {
  const renderCartItems = () =>
    cartItemsDetail.map((cartItemDetail) => (
      <CartItem
        key={cartItemDetail.productId}
        cartItemDetails={cartItemDetail}
        onCartClearItem={onCartClearItem}
        onCartModifyQuantityForItem={onCartModifyQuantityForItem}
      />
    ));

  return <div className="cart-items">{renderCartItems()}</div>;
};

export default CartItems;
