import './Backdrop.scss';

const Backdrop = ({ show, onClickAction }) =>
  show && <div className='backdrop' onClick={onClickAction}></div>;
export default Backdrop;
