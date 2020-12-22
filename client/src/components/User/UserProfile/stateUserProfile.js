export const defaultState = (name, email) => ({
  formInputsData: {
    name: {
      label: 'Name',
      elementType: 'input',
      value: '',
      elementConfig: {
        type: 'text',
        placeholder: name || 'Your Name',
      },
      validation: {
        isRequired: false,
      },
      isRef: true,
      isValid: false,
      isTouched: false,
    },
    email: {
      label: 'E-mail',
      elementType: 'input',
      value: '',
      elementConfig: {
        type: 'email',
        placeholder: email || 'Your E-Mail',
      },
      validation: {
        isRequired: false,
        isEmail: true,
      },
      isRef: false,
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
        isRequired: false,
        isMinLength: 6,
      },
      isRef: false,
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
        isRequired: false,
        isIdentic: true,
      },
      isRef: false,
      isValid: false,
      isTouched: false,
    },
  },
  isFormValid: false,
});
