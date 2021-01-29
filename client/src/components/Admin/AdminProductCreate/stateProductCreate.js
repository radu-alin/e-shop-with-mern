export const defaultState = {
  formInputsData: {
    //brand
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
      isRef: false,
      isValid: false,
      isTouched: false,
    },
    //name
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
      isRef: false,
      isValid: false,
      isTouched: false,
    },
    //category
    category: {
      label: 'Category',
      elementType: 'input',
      value: '',
      elementConfig: {
        type: 'text',
        name: 'category',
        id: 'category',
        spellCheck: false,
        placeholder: 'Category',
      },
      validation: {
        isRequired: true,
      },
      isRef: false,
      isValid: false,
      isTouched: false,
    },
    //description
    description: {
      label: 'Description',
      elementType: 'textarea',
      value: '',
      elementConfig: {
        name: 'description',
        id: 'description',
        spellCheck: false,
        placeholder: 'enter product description',
      },
      validation: {
        isRequired: true,
      },
      isRef: false,
      isValid: false,
      isTouched: false,
    },
    //price
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
      isRef: false,
      isValid: false,
      isTouched: false,
    },
    //countInStock
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
    //image
    image: {
      label: 'Image URL',
      elementType: 'input',
      value: '',
      elementConfig: {
        type: 'url',
        name: 'image',
        id: 'image',
        spellCheck: false,
        placeholder: 'Image URL',
      },
      validation: {
        isRequired: false,
        isURL: true,
      },
      isRef: false,
      isValid: true,
      isTouched: false,
    },
    //file
    imageFile: {
      label: 'Image upload',
      elementType: 'input',
      value: '',
      elementConfig: {
        type: 'file',
        name: 'fileUpload',
        id: 'fileUpload',
        spellCheck: false,
        placeholder: 'Image upload',
      },
      validation: {
        isRequired: false,
      },
      isRef: true,
      isValid: true,
      isTouched: true,
    },
  },
  isFormValid: false,
};
