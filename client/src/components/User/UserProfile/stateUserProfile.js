export const defaultState = (name, email) => ({
  formInputsData: {
    name: {
      label: 'Name',
      elementType: 'input',
      value: '',
      elementConfig: {
        type: 'text',
        name: 'name',
        id: 'name',
        placeholder: name || 'Your Name',
      },
      validation: {
        isRequired: false,
      },
      isRef: true,
      isTouched: false,
      isValid: false,
    },
    email: {
      label: 'E-mail',
      elementType: 'input',
      value: '',
      elementConfig: {
        type: 'email',
        name: 'email',
        id: 'email',
        placeholder: email || 'Your E-Mail',
      },
      validation: {
        isRequired: false,
        isEmail: true,
      },
      isRef: false,
      isTouched: false,
      isValid: false,
    },
    password: {
      label: 'Password',
      elementType: 'input',
      value: '',
      elementConfig: {
        type: 'password',
        name: 'password',
        id: 'password',
        placeholder: 'Password',
      },
      validation: {
        isRequired: false,
        isMinLength: 6,
      },
      isRef: false,
      isTouched: false,
      isValid: false,
    },
    confirmPassword: {
      label: 'Confirm Password',
      elementType: 'input',
      value: '',
      elementConfig: {
        type: 'password',
        name: 'confirmPassword',
        id: 'confirmPassword',
        placeholder: 'Password',
      },
      validation: {
        isRequired: false,
        isIdentic: true,
      },
      isRef: false,
      isTouched: false,
      isValid: false,
    },
  },
  isFormValid: false,
});
