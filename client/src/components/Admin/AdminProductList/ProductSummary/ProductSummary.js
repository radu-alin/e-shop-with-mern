// import { connect } from 'react-redux';

// import AdminListItemMessage from '../../AdminListItem/AdminListItemMessage/AdminListItemMessage';
import AdminListItemInfo from '../../AdminListItem/AdminListInfo/AdminListInfo';
// import AdminListSpinner from '../../AdminListItem/AdminListSpinner/AdminListSpinner';
import AdminListButtons from '../../AdminListItem/AdminListButtons/AdminListButtons';
import AdminListItemWrapper from '../../AdminListItem/AdminListItemWrapper/AdminListItemWrapper';

import Button from '../../../UI/Button/Button';

const ProductSummary = ({ productDetails }) => {
  const { _id, name, createdAt, price, countInStock } = productDetails;
  const productCreatedAt = new Date(createdAt);
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

  const productSummaryButtonsView = (
    <AdminListButtons>
      <Button type='btn btn-success'>Edit product details</Button>
      <Button type='btn btn-danger'>Delete product</Button>
    </AdminListButtons>
  );

  return (
    <article id='ProductSummary'>
      <AdminListItemWrapper>
        {productSummaryInfoView}
        {productSummaryButtonsView}
      </AdminListItemWrapper>
    </article>
  );
};

export default ProductSummary;
