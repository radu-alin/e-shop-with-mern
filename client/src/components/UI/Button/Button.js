import './Button.scss';

const Button = ({ children, type, animation, onClickAction, disabled }) => {
  //type: btn-gray-dark, btn-gray-light, btn-success, btn-danger, btn-primary
  //animation: animation

  const classes = `btn ${type} ${animation ? 'animation' : ''}`;

  return (
    <button className={classes} onClick={onClickAction} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
