import { useEffect } from 'react';
import { connect } from 'react-redux';

import {
  productListFetch,
  productListDeletePosition,
  productDeleteReset,
  productListClear,
} from '../../../redux/actions/index';

import AdminListWrapper from '../AdminListWrapper/AdminListWrapper';
import ListView from '../../UI/ListView/ListView';
import ProductSummary from '../AdminProductList/ProductSummary/ProductSummary';

const AdminProductList = ({
  productList,
  isError,
  productIdDelete,
  isSuccessDelete,
  onProductListFetch,
  onProductListDeletePosition,
  onProductDeleteReset,
  onProductListClear,
}) => {
  useEffect(() => {
    onProductListFetch();
    return () => {
      onProductListClear();
      onProductDeleteReset();
    };
  }, [onProductListFetch, onProductListClear, onProductDeleteReset]);

  useEffect(() => {
    const updateProductList = () =>
      setTimeout(() => {
        onProductListDeletePosition(productIdDelete);
        onProductDeleteReset();
      }, 1000);
    isSuccessDelete && updateProductList();
  }, [
    productIdDelete,
    isSuccessDelete,
    onProductListDeletePosition,
    onProductDeleteReset,
  ]);

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
    <AdminListWrapper title='Product List '>
      <ListView listViewData={listViewData} />
      {productList && productListRender()}
    </AdminListWrapper>
  );
};

const mapStateToProps = ({ productList, productDelete }) => ({
  productList: productList?.productList,
  isError: productList.isError,
  productIdDelete: productDelete.productId,
  isSuccessDelete: productDelete.isSuccess,
});

const mapDispatchToProps = (dispatch) => ({
  onProductListFetch: () => dispatch(productListFetch()),
  onProductListClear: () => dispatch(productListClear()),
  onProductListDeletePosition: (productId) =>
    dispatch(productListDeletePosition(productId)),
  onProductDeleteReset: () => dispatch(productDeleteReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminProductList);
