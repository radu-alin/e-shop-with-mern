import CheckoutProduct from './CheckoutProduct/CheckoutProduct';

const CheckoutProducts = ({ cartProducts }) => {
  const renderCheckoutProductsHandler = () =>
    cartProducts.map(({ _id, quantity, cartProductDetails }) => {
      return (
        <CheckoutProduct
          key={_id}
          quantity={quantity}
          cartProductDetails={cartProductDetails}
        />
      );
    });

  return <>{renderCheckoutProductsHandler()}</>;
};

export default CheckoutProducts;
