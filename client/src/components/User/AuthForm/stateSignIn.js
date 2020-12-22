export const defaultState = {
  formInputsData: {
    email: {
      label: 'E-mail',
      elementType: 'input',
      value: '',
      elementConfig: {
        type: 'email',
        placeholder: 'Your E-Mail',
      },
      validation: {
        isRequired: true,
        isEmail: true,
      },
      isRef: true,
      isValid: false,
      isTouched: false,
    },
    password: {
      label: 'Password',
      elementType: 'input',
      value: '',
      elementConfig: {
        type: 'password',
        placeholder: 'Password',
      },
      validation: {
        isRequired: true,
        isMinLength: 6,
      },
      isRef: false,
      isValid: false,
      isTouched: false,
    },
  },
  isFormValid: false,
};
