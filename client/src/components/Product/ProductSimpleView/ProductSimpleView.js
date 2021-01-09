import './ProductSimpleView.scss';

const ProductSimpleView = ({
  productDetails: { image, price, name, countReserved },
}) => (
  <article id="Dropdown Item">
    <div className="product-simple-view">
      <img src={image} alt={name} />
      <div className="product-simple-view-details">
        <span className="product-simple-view-details-name">{name}</span>
        <span className="product-simple-view-item-details-price">
          {countReserved} x ${price} = ${(countReserved * price).toFixed(2)}.
        </span>
      </div>
    </div>
  </article>
);

export default ProductSimpleView;
