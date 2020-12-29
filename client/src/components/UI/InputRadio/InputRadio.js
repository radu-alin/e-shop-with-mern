import './InputRadio.scss';

const InputRadio = ({ label, name, value, onChangeAction, paymentState }) => {
  return (
    <div className="input-radio">
      <label className="input-radio-label" htmlFor={label}>
        <input
          type="radio"
          id={label}
          name={name}
          value={value}
          className="input-radio-input"
          onChange={onChangeAction}
          checked={value === paymentState}
        />
        <strong>{label}</strong>
      </label>
    </div>
  );
};

export default InputRadio;
