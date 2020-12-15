import CheckoutProduct from './CheckoutProduct/CheckoutProduct';

const CheckoutProducts = ({
  cartProducts,
  onCartClearProduct,
  onCartAddProduct,
  onCartDecreaseProduct,
}) => {
  const renderCheckoutProductsHandler = () =>
    cartProducts.map(({ _id, quantity, cartProductDetails }) => {
      return (
        <CheckoutProduct
          key={_id}
          quantity={quantity}
          cartProductDetails={cartProductDetails}
          onCartClearProduct={onCartClearProduct}
          onCartAddProduct={onCartAddProduct}
          onCartDecreaseProduct={onCartDecreaseProduct}
        />
      );
    });

  return <>{renderCheckoutProductsHandler()}</>;
};

export default CheckoutProducts;
