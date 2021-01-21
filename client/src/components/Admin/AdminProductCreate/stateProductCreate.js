export const defaultState = {
  formInputsData: {
    brand: {
      label: 'Brand',
      elementType: 'input',
      value: '',
      elementConfig: {
        autoFocus: true,
        type: 'text',
        name: 'brand',
        id: 'brand',
        spellCheck: false,
        placeholder: 'Brand',
      },
      validation: {
        isRequired: true,
      },
      isValid: false,
      isTouched: false,
    },
    name: {
      label: 'Name',
      elementType: 'input',
      value: '',
      elementConfig: {
        type: 'text',
        name: 'name',
        id: 'name',
        spellCheck: false,
        placeholder: 'Name',
      },
      validation: {
        isRequired: true,
      },
      isValid: false,
      isTouched: false,
    },
    category: {
      label: 'Category',
      elementType: 'input',
      value: '',
      elementConfig: {
        type: 'text',
        name: 'category',
        id: 'category',
        placeholder: 'Category',
      },
      validation: {
        isRequired: true,
      },
      isValid: false,
      isTouched: false,
    },
    description: {
      label: 'Description',
      elementType: 'textarea',
      value: '',
      elementConfig: {
        name: 'description',
        id: 'description',
        placeholder: 'enter product description',
      },
      validation: {
        isRequired: true,
      },
      isValid: false,
      isTouched: false,
    },
    price: {
      label: 'Price',
      elementType: 'input',
      value: '',
      elementConfig: {
        type: 'number',
        name: 'price',
        id: 'price',
        placeholder: 'Price',
      },
      validation: {
        isRequired: true,
      },
      isValid: false,
      isTouched: false,
    },
    countInStock: {
      label: 'Stock',
      elementType: 'input',
      value: '',
      elementConfig: {
        type: 'number',
        name: 'stock',
        id: 'stock',
        placeholder: 'Stock',
      },
      validation: {
        isRequired: true,
      },
      isValid: false,
      isTouched: false,
    },
    image: {
      label: 'Image URL',
      elementType: 'input',
      value: '',
      elementConfig: {
        type: 'url',
        name: 'image',
        id: 'image',
        placeholder: 'Image URL',
      },
      validation: {
        isRequired: true,
      },
      isValid: false,
      isTouched: false,
    },
  },
  isFormValid: false,
};
