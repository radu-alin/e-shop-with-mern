import ProductSimpleView from '../ProductSimpleView/ProductSimpleView';

import './ProductsSimpleViewRender.scss';

const ProductsSimpleViewRender = ({ products }) => (
  <section id="ProductsSimpleViewRender">
    <div className="products-simple-view-render">
      {products.map((product) => (
        <ProductSimpleView
          key={product.productId || product._id}
          productDetails={product}
        />
      ))}
    </div>
  </section>
);

export default ProductsSimpleViewRender;
