export const defaultState = (productDetails) => {
  const {
    brand,
    name,
    category,
    description,
    price,
    countInStock,
    image,
  } = productDetails;

  return {
    formInputsData: {
      // brand
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
          placeholder: brand || 'Brand',
        },
        validation: {
          isRequired: false,
        },
        isValid: false,
        isTouched: false,
      },
      // name
      name: {
        label: 'Name',
        elementType: 'input',
        value: '',
        elementConfig: {
          type: 'text',
          name: 'name',
          id: 'name',
          spellCheck: false,
          placeholder: name || 'Name',
        },
        validation: {
          isRequired: false,
        },
        isValid: false,
        isTouched: false,
      },
      // category
      category: {
        label: 'Category',
        elementType: 'input',
        value: '',
        elementConfig: {
          type: 'text',
          name: 'category',
          id: 'category',
          spellCheck: false,
          placeholder: category || 'Category',
        },
        validation: {
          isRequired: false,
        },
        isValid: false,
        isTouched: false,
      },
      // description
      description: {
        label: 'Description',
        elementType: 'textarea',
        value: '',
        elementConfig: {
          name: 'description',
          id: 'description',
          spellCheck: false,
          placeholder: description || 'enter product description',
        },
        validation: {
          isRequired: false,
        },
        isValid: false,
        isTouched: false,
      },
      // price
      price: {
        label: 'Price',
        elementType: 'input',
        value: '',
        elementConfig: {
          type: 'number',
          name: 'price',
          id: 'price',
          placeholder: price || 'Price',
        },
        validation: {
          isRequired: false,
        },
        isValid: false,
        isTouched: false,
      },
      // countInStock
      countInStock: {
        label: 'Stock',
        elementType: 'input',
        value: '',
        elementConfig: {
          type: 'number',
          name: 'stock',
          id: 'stock',
          placeholder: countInStock || 'Stock',
        },
        validation: {
          isRequired: false,
        },
        isValid: false,
        isTouched: false,
      },
      // image
      image: {
        label: 'Image URL',
        elementType: 'input',
        value: '',
        elementConfig: {
          type: 'url',
          name: 'image',
          id: 'image',
          spellCheck: false,
          placeholder: image,
        },
        validation: {
          isRequired: false,
          isURL: true,
        },
        isValid: false,
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
};
