export const defaultState = {
  formInputsData: {
    name: {
      label: 'Name',
      elementType: 'input',
      value: '',
      elementConfig: {
        type: 'text',
        autoFocus: true,
        name: 'name',
        id: 'name',

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
        name: 'email',
        id: 'email',
        placeholder: 'Your E-Mail',
      },
      validation: {
        isRequired: true,
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
        name: 'password',
        id: 'password',
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
        name: 'password',
        id: 'password',
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
