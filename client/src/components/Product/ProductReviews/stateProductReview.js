export const defaultState = {
  formInputsData: {
    //description
    comment: {
      label: 'Add review:',
      elementType: 'textarea',
      value: '',
      elementConfig: {
        name: 'comment',
        id: 'comment',
        spellCheck: false,
        placeholder: 'your opinion ...',
      },
      validation: {
        isRequired: true,
      },
      isRef: false,
      isValid: false,
      isTouched: false,
    },
    rating: {
      label: 'Add rating:',
      elementType: 'input',
      value: '',
      elementConfig: {
        type: 'range',
        name: 'rating',
        id: 'rating',
        step: 0.5,
        max: 5,
        placeholder: 'your opinion ...',
      },
      validation: {
        isRequired: true,
      },
      isRef: false,
      isValid: false,
      isTouched: false,
    },
  },
  isFormValid: false,
};
