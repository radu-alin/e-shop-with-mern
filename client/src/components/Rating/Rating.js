import { ReactComponent as StartFullIcon } from '../../assets/svg/star-full-icon.svg';
import { ReactComponent as StartHalfIcon } from '../../assets/svg/start-half-icon.svg';
import { ReactComponent as StartEmptyIcon } from '../../assets/svg/start-empty-icon.svg';

import './Rating.scss';

const Rating = ({ value, numReviews, children }) => {
  const renderStars = () => (
    <>
      <span>
        {value >= 1 ? (
          <StartFullIcon />
        ) : value >= 0.5 ? (
          <StartHalfIcon />
        ) : (
          <StartEmptyIcon />
        )}
      </span>
      <span>
        {value >= 2 ? (
          <StartFullIcon />
        ) : value >= 1.5 ? (
          <StartHalfIcon />
        ) : (
          <StartEmptyIcon />
        )}
      </span>
      <span>
        {value >= 3 ? (
          <StartFullIcon />
        ) : value >= 2.5 ? (
          <StartHalfIcon />
        ) : (
          <StartEmptyIcon />
        )}
      </span>
      <span>
        {value >= 4 ? (
          <StartFullIcon />
        ) : value >= 3.5 ? (
          <StartHalfIcon />
        ) : (
          <StartEmptyIcon />
        )}
      </span>
      <span>
        {value >= 5 ? (
          <StartFullIcon />
        ) : value >= 4.5 ? (
          <StartHalfIcon />
        ) : (
          <StartEmptyIcon />
        )}
      </span>
      <span>
        {' '}
        {numReviews} {children}
      </span>
    </>
  );

  return <div className='rating'>{renderStars()}</div>;
};

export default Rating;
