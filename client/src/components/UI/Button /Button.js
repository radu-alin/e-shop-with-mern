import './Button.scss';

const Button = ({ children, type, size, onClickAction, disabled }) => {
  //type options: brown-light, brown-dark +  big
  //isWidth opstions: full
  //spacing options: my-1

  const classes = `btn ${type}`;

  return (
    <button className={classes} onClick={onClickAction} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
