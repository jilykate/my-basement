import categories from "./initialState/categories";

export const addProduct = (id, qty) => ({
    type: 'ADD_PRODUCT',
    id,
    qty: ++qty,
  });
  
  export const editProduct = (id, productData) => ({
    type: 'EDIT_PRODUCT',
    productData,
  });

  export const removeProduct = (id, qty) => ({
      type: 'REMOVE_PRODUCT',
      id,
      qty: --qty,
  });

  export const deleteProduct = (id) => ({
    type: 'DELETE_PRODUCT',
    id,
  });

  export const removeCategory = (id) => ({
      type: 'REMOVE_CATEGORY',
  });

  export const addCategory = (name) => ({
        type: 'ADD_CATEGORY',
  });

  export const addNewProduct = (productData) => ({
      type: 'ADD_NEW_PRODUCT',
      productData,
  });

  export const toggleMoreFields = () => ({
    type: 'TOGGLE_MORE_FIELDS',
  });
  
  export const loadCategories = (categories) => ({
    type: 'LOAD_CATEGORIES',
    categories,
  });

  export const loadProducts = (products) => ({
    type: 'LOAD_PRODUCTS',
    products,
  });
  