import './Button.scss';

const Button = ({ children, type, onClickAction, disabled }) => {
  //type: btn-gray-dark, btn-gray-light

  const classes = `btn ${type}`;

  return (
    <button className={classes} onClick={onClickAction} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
