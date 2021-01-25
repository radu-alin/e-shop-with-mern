import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { productFetch } from '../../../redux/actions/index';

import AdminProductEditView from './AdminProductEditView/AdminProductEditView';
import Spinner from '../../UI/Spinner/Spinner';
import Message from '../../UI/Message/Message';

const AdminProductEdit = ({ productDetails, isError, onProductFetch }) => {
  let { id: productSelectedId } = useParams();

  const productSelectedIsNew = productSelectedId !== productDetails?._id;

  useEffect(() => {
    productSelectedIsNew && onProductFetch(productSelectedId);
  }, [onProductFetch, productSelectedId, productSelectedIsNew]);

  const productDetailsView = () => {
    if (isError) {
      return <Message type={isError && 'danger'} message={isError} />;
    }
    if (productSelectedIsNew) {
      return <Spinner />;
    }
    return <AdminProductEditView productDetails={productDetails} />;
  };

  return <section id='ProductEdit'>{productDetailsView()}</section>;
};

const mapStateToProps = ({ product: { productDetails, isError } }) => ({
  productDetails,
  isError,
});

const mapDispatchToProps = (dispatch) => ({
  onProductFetch: (id) => dispatch(productFetch(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminProductEdit);
