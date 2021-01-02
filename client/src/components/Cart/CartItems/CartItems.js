import CartItem from './CartItem/CartItem';

const CartItems = ({
  cartItemsDetail,
  onCartClearItem,
  onCartModifyQuantityForItem,
}) => {
  const renderCartItems = () =>
    cartItemsDetail.map((cartItemDetail) => (
      <CartItem
        key={cartItemDetail._id}
        cartItemDetails={cartItemDetail}
        onCartClearItem={onCartClearItem}
        onCartModifyQuantityForItem={onCartModifyQuantityForItem}
      />
    ));

  return <>{renderCartItems()}</>;
};

export default CartItems;
