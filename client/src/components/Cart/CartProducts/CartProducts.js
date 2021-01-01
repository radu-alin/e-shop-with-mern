import CartProduct from './CartProduct/CartProduct';

const CartProducts = ({
  cartItemsDetail,
  onCartClearItem,
  onCartModifyQuantityForItem,
}) => {
  const renderCartItemsDetailHandler = () =>
    cartItemsDetail.map((cartItemDetail) => {
      return (
        <CartProduct
          key={cartItemDetail._id}
          cartItemDetails={cartItemDetail}
          onCartClearItem={onCartClearItem}
          onCartModifyQuantityForItem={onCartModifyQuantityForItem}
        />
      );
    });

  return <>{renderCartItemsDetailHandler()}</>;
};

export default CartProducts;
