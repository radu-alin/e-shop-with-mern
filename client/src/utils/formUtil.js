export const allInputsValidForValidForm = (newData) => {
  let isValidForm = true;
  for (let key in newData) {
    isValidForm = newData[key].isValid && isValidForm;
  }
  return isValidForm;
};
export const oneInputValidForValidForm = (newData) => {
  let isValidForm = false;
  for (let key in newData) {
    if (newData[key].isTouched && newData[key].value === '') {
      newData[key].validation.isRequired = false;
      newData[key].isTouched = false;
    }
    if (newData[key].isTouched && newData[key].value.length > 0) {
      newData[key].validation.isRequired = true;
    }
    if (newData[key].validation.isRequired) {
      isValidForm = newData[key].isValid;
    }
  }
  return isValidForm;
};

export const formRenderInputsUtil = (Element, data, setData, formValidator) => {
  const checkValidity = (value, rules) => {
    let isValid = true;
    if (!rules) {
      return true;
    }

    if (rules.isRequired) {
      isValid = value.trim() !== '' && isValid;
    }

    if (rules.isMinLength) {
      isValid = value.length >= rules.isMinLength && isValid;
    }

    if (rules.isMaxLength) {
      isValid = value.length <= rules.isMaxLength && isValid;
    }
    if (rules.isIdentic) {
      isValid = value === data.formInputsData.password.value && isValid;
    }

    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
    }

    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid;
    }

    return isValid;
  };

  const updatedformInputsData = { ...data.formInputsData };

  const inputChangedHandler = (event, inputId) => {
    const updatedInput = {
      ...updatedformInputsData[inputId],
      value: event.target.value,
      isValid: checkValidity(
        event.target.value,
        data.formInputsData[inputId].validation
      ),
      isTouched: true,
    };

    updatedformInputsData[inputId] = updatedInput;
    const isFormValid = formValidator(updatedformInputsData);

    setData({
      ...data,
      formInputsData: {
        ...data.formInputsData,
        [inputId]: updatedInput,
      },
      isFormValid,
    });
  };

  const formElementsArray = [];
  for (let key in updatedformInputsData) {
    formElementsArray.push({
      id: key,
      config: updatedformInputsData[key],
    });
  }

  const inputs = formElementsArray.map((formEl) => {
    return (
      <Element
        key={formEl.id}
        label={formEl.config.label}
        elementType={formEl.config.elementType}
        value={formEl.config.value}
        isTouched={formEl.config.isTouched}
        isValid={formEl.config.isValid}
        shouldValidate={formEl.config.validation}
        onChangeAction={(event) => inputChangedHandler(event, formEl.id)}
        {...formEl.config.elementConfig}
      />
    );
  });

  return inputs;
};

export const formInputsDataUtil = (data) => {
  const orderData = {};
  for (let key in data) {
    orderData[key] = data[key].value;
  }

  return orderData;
};
