import { connect } from 'react-redux';

import { productDelete } from '../../../../redux/actions/index';

import AdminListItemMessage from '../../AdminListItem/AdminListItemMessage/AdminListItemMessage';
import AdminListItemInfo from '../../AdminListItem/AdminListInfo/AdminListInfo';
import AdminListSpinner from '../../AdminListItem/AdminListSpinner/AdminListSpinner';
import AdminListButtons from '../../AdminListItem/AdminListButtons/AdminListButtons';
import AdminListItemWrapper from '../../AdminListItem/AdminListItemWrapper/AdminListItemWrapper';

import Button from '../../../UI/Button/Button';

const ProductSummary = ({
  userToken,
  productDetails,
  productId,
  isLoading,
  isError,
  isSuccess,
  onProductDelete,
}) => {
  const { _id, name, createdAt, price, countInStock } = productDetails;
  const productCreatedAt = new Date(createdAt);

  const onProductDeleteHandler = () => onProductDelete(userToken, _id);

  const productSummaryInfoView = (
    <>
      <AdminListItemInfo title='Product ID: ' content={_id} />
      <AdminListItemInfo title='Name: ' content={name} />
      <AdminListItemInfo title='Price: ' content={`$${price}`} />
      <AdminListItemInfo title='Count in Stock: ' content={countInStock} />
      <AdminListItemInfo
        title='Created at: '
        content={productCreatedAt.toLocaleString()}
      />
    </>
  );

  const productSummaryMessageView = (() => {
    if (productId === _id) {
      return <AdminListItemMessage isSuccess={isSuccess} isError={isError} />;
    }
    return <AdminListItemMessage />;
  })();

  const productSummaryInfoViewRender = (() => {
    if ((isLoading || isSuccess) && productId === _id) {
      return <AdminListSpinner />;
    }
    return productSummaryInfoView;
  })();

  const productSummaryButtonsView = (
    <AdminListButtons>
      <Button type='btn btn-success'>Edit product details</Button>
      <Button type='btn btn-danger' onClickAction={onProductDeleteHandler}>
        Delete product
      </Button>
    </AdminListButtons>
  );

  return (
    <article id='ProductSummary'>
      <AdminListItemWrapper>
        {productSummaryInfoViewRender}
        {productSummaryMessageView}
        {productSummaryButtonsView}
      </AdminListItemWrapper>
    </article>
  );
};

const mapStateToProps = ({
  user: { userToken },
  productDelete: { productId, isLoading, isError, isSuccess },
}) => ({
  userToken,
  productId,
  isLoading,
  isError,
  isSuccess,
});

const mapDispatchToProps = (dispatch) => ({
  onProductDelete: (token, productId) => dispatch(productDelete(token, productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductSummary);
