export const defaultState = {
  formInputsData: {
    name: {
      label: 'Name',
      elementType: 'input',
      value: '',
      elementConfig: {
        type: 'text',
        placeholder: 'Your Name',
      },
      validation: {
        isRequired: true,
      },
      isValid: false,
      isTouched: false,
    },
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
      isValid: false,
      isTouched: false,
    },
    confirmPassword: {
      label: 'Confirm Password',
      elementType: 'input',
      value: '',
      elementConfig: {
        type: 'password',
        placeholder: 'Password',
      },
      validation: {
        isRequired: true,
        isIdentic: true,
      },
      isValid: false,
      isTouched: false,
    },
  },
  isFormValid: false,
};
