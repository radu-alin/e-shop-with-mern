import { memo } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as TrashIcon } from '../../../../assets/svg/trash-icon.svg';

import './CartItem.scss';

const CartItem = ({
  cartItemDetails,
  onCartModifyQuantityForItem,
  onCartClearItem,
}) => {
  const {
    productId,
    name,
    image,
    price,
    countInStock,
    countReserved,
  } = cartItemDetails;
  const renderInputSelectHandler = () => {
    const maxLenght = countInStock;
    const renderInputSelect = [];
    for (let i = 0; i <= maxLenght; i++) {
      renderInputSelect.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return renderInputSelect;
  };

  const submitFormHandler = (e) =>
    onCartModifyQuantityForItem(cartItemDetails.productId, +e.target.value);

  const formView = countInStock ? (
    <>
      <div className='cart-item-content-left-quantity-option'>
        <form onChange={(e) => submitFormHandler(e)}>
          <label htmlFor='quantity'>Quantity: </label>
          <select id='quantity' defaultValue={countReserved}>
            {renderInputSelectHandler()}
          </select>
        </form>
      </div>
    </>
  ) : null;

  return (
    <article id='CartItem'>
      <div className='cart-item'>
        <div className='cart-item-image'>
          <img src={image} alt={name} />
        </div>
        <div className='cart-item-content'>
          <div className='cart-item-content-left'>
            <div className='cart-item-content-left-title'>
              <span>
                <strong>
                  <Link to={'/products/' + productId}>{name}</Link>
                </strong>
              </span>
            </div>
            <div className='cart-item-content-left-quantity'>{formView}</div>
          </div>
          <div className='cart-item-content-right'>
            <div className='cart-item-content-right-price'>
              <span>
                <strong>
                  {countReserved} x &#36;{price}
                </strong>
              </span>
              <span> per/item</span>
            </div>
            <div className='cart-item-content-right-action-icons'>
              <div
                className='cart-item-content-right-action-icons-remove-button'
                onClick={() => onCartClearItem(productId)}>
                <TrashIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default memo(CartItem);
