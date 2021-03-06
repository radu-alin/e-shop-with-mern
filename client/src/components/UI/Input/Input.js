import { forwardRef, memo } from 'react';

import './Input.scss';

const Input = (
  {
    label,
    elementType,
    value,
    onChangeAction,
    shouldValidate,
    isTouched,
    isValid,
    ...elementConfig
  },
  ref
) => {
  let inputElement = null;
  let classes = 'input-element';
  if (!isValid && shouldValidate && isTouched) {
    classes = 'input-element invalid';
  }

  const optionRender = (data) => {
    return data.map((el) => (
      <option key={el.value} value={el.value} onChange={onChangeAction}>
        {el.displayValue}
      </option>
    ));
  };

  switch (elementType) {
    case 'input':
      inputElement = (
        <input
          ref={ref}
          className={classes}
          value={value}
          onChange={onChangeAction}
          {...elementConfig}
        />
      );
      break;
    case 'select':
      inputElement = (
        <select className={classes} value={value} onChange={onChangeAction}>
          {optionRender(elementConfig.options)}
        </select>
      );
      break;
    case 'textarea':
      inputElement = (
        <textarea
          className={classes}
          value={value}
          onChange={onChangeAction}
          {...elementConfig}
        />
      );
      break;
    default:
      inputElement = (
        <input
          className={classes}
          value={value}
          onChange={onChangeAction}
          {...elementConfig}
        />
      );
  }

  return (
    <div className='input'>
      <label className='input-label' htmlFor={elementConfig.id}>
        {label}
      </label>
      {inputElement}
    </div>
  );
};

const forwardedInput = forwardRef(Input);

export default memo(forwardedInput);
