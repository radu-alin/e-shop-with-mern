import { useEffect } from 'react';
import { connect } from 'react-redux';

import { productListFetch, productListClear } from '../../../redux/actions/index';

import AdminListWrapper from '../AdminListWrapper/AdminListWrapper';
import ListView from '../../UI/ListView/ListView';
import ProductSummary from '../AdminProductList/ProductSummary/ProductSummary';

const AdminProductList = ({
  productList,
  isError,
  onProductListFetch,
  onProductListClear,
}) => {
  useEffect(() => {
    onProductListFetch();
    return () => onProductListClear();
  }, [onProductListFetch, onProductListClear]);

  const productListRender = () =>
    productList.map((product) => (
      <ProductSummary key={product._id} productDetails={product} />
    ));

  const listViewData = {
    isError,
    listEmptyCondition: productList?.length === 0,
    spinnerCondition: !productList,
  };

  return (
    <AdminListWrapper title='Product List'>
      <ListView listViewData={listViewData} />
      {productList && productListRender()}
    </AdminListWrapper>
  );
};

const mapStateToProps = ({ productList }) => ({
  productList: productList?.productList,
  isError: productList.isError,
});

const mapDispatchToProps = (dispatch) => ({
  onProductListFetch: () => dispatch(productListFetch()),
  onProductListClear: () => dispatch(productListClear()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminProductList);
